document.addEventListener('DOMContentLoaded', () => {
  const state = {
    currentQuestion: null,
    currentRating: 0,
    archive: JSON.parse(localStorage.getItem('pmArchive') || '[]'),
    streak: parseInt(localStorage.getItem('pmStreak') || '0'),
    lastPracticeDate: localStorage.getItem('pmLastPracticeDate') || '',
    simulationStep: 0,
    answeredToday: JSON.parse(localStorage.getItem('pmAnsweredToday') || '[]'),
    selectedCategory: null,
    selectedSubcategory: null,
    completedQuestions: JSON.parse(localStorage.getItem('pmCompletedQuestions') || '{}'),
    viewMode: 'daily', // 'daily', 'table', 'question'
    currentQuestions: {} // Stores questions for current subcategory
  };

  const dailyPageContent = document.getElementById('page-daily');
  const todayKey = new Date().toISOString().split('T')[0];

  // ---- Navigation ----
  const navLinks = document.querySelectorAll('.nav-link[data-page]');
  const pages = document.querySelectorAll('.page');
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.dataset.page;
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      pages.forEach(p => p.classList.remove('active'));
      document.getElementById('page-' + page).classList.add('active');
      sidebar.classList.remove('open');
      if (page === 'learnings') renderLearnings();
      if (page === 'frameworks') renderFrameworks();
      if (page === 'archive') renderArchive();
    });
  });

  menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));

  // ---- Date & Streak ----
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('todayDate').textContent = today;

  if (state.lastPracticeDate && state.lastPracticeDate !== todayKey) {
    const last = new Date(state.lastPracticeDate);
    const now = new Date(todayKey);
    const diff = (now - last) / (1000 * 60 * 60 * 24);
    if (diff > 1) { state.streak = 0; localStorage.setItem('pmStreak', '0'); }
    state.answeredToday = [];
    localStorage.setItem('pmAnsweredToday', '[]');
  }
  document.getElementById('streakCount').textContent = state.streak;
  updateDailyProgress();

  // ---- Get Random Question ----
  function getRandomQuestion(filter) {
    let pool = [];
    PM_QUESTIONS.categories.forEach(cat => {
      cat.subcategories.forEach(sub => {
        sub.questions.forEach(q => {
          pool.push({ ...q, category: cat.name, categoryId: cat.id, subcategory: sub.name, subcategoryId: sub.id });
        });
      });
    });

    if (filter && filter !== 'random') {
      if (filter.includes('|')) {
        const [catId, subId] = filter.split('|');
        pool = pool.filter(q => q.categoryId === catId && q.subcategoryId === subId);
      } else {
        pool = pool.filter(q => q.categoryId === filter);
      }
    }

    return pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : null;
  }

  // ---- Generate Questions for Subcategory ----
  function getSubcategoryQuestions(category, subcategory) {
    const key = `${category.id}|${subcategory.id}`;
    if (!state.completedQuestions[key]) {
      state.completedQuestions[key] = [];
    }

    const questions = subcategory.questions.map((q, idx) => ({
      ...q,
      category: category.name,
      categoryId: category.id,
      subcategory: subcategory.name,
      subcategoryId: subcategory.id,
      qIndex: idx
    }));

    return questions;
  }

  // ---- Clear Daily Page Content ----
  function clearDailyContent() {
    const allDivs = Array.from(dailyPageContent.querySelectorAll('div'));
    allDivs.forEach(div => {
      if (div.id !== 'dailyProgress' && !div.className.includes('page-header') && !div.className.includes('category-selector') && div.id !== 'sidebarCategories') {
        div.remove();
      }
    });
  }

  // ---- Sidebar Categories Navigation ----
  function renderSidebarCategories() {
    const container = document.getElementById('sidebarCategories');
    if (!container) return;
    container.innerHTML = '';

    PM_QUESTIONS.categories.forEach(cat => {
      const catDiv = document.createElement('div');
      catDiv.className = 'nav-category';

      const headerBtn = document.createElement('div');
      headerBtn.className = 'nav-category-header';
      headerBtn.innerHTML = `<span>${cat.name}</span><span class="nav-category-arrow">▶</span>`;

      headerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        catDiv.classList.toggle('open');
      });

      const subsDiv = document.createElement('div');
      subsDiv.className = 'nav-subcategories';

      cat.subcategories.forEach(sub => {
        const subBtn = document.createElement('div');
        subBtn.className = 'nav-sub-link';
        subBtn.textContent = sub.name;
        subBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          state.selectedCategory = cat;
          state.selectedSubcategory = sub;
          state.currentQuestions = getSubcategoryQuestions(cat, sub);
          renderQuestionTable(cat, sub);
          document.querySelectorAll('.nav-sub-link').forEach(b => b.classList.remove('active'));
          subBtn.classList.add('active');
          sidebar.classList.remove('open');
        });
        subsDiv.appendChild(subBtn);
      });

      catDiv.appendChild(headerBtn);
      catDiv.appendChild(subsDiv);
      container.appendChild(catDiv);
    });
  }

  // ---- Render Question Table ----
  function renderQuestionTable(category, subcategory) {
    clearDailyContent();
    state.viewMode = 'table';

    const container = document.createElement('div');
    container.style.cssText = 'padding:20px 0;';

    const header = document.createElement('div');
    header.style.cssText = 'margin-bottom:24px;display:flex;justify-content:space-between;align-items:center;';
    header.innerHTML = `
      <div>
        <h3>${category.name}</h3>
        <p style="color:var(--text-secondary);font-size:0.95rem;">${subcategory.name}</p>
      </div>
      <button class="btn btn-secondary" id="backFromTableBtn">← Back</button>
    `;
    container.appendChild(header);

    const tableContainer = document.createElement('div');
    tableContainer.style.cssText = 'background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;';

    state.currentQuestions.forEach((q, idx) => {
      const diffLabel = ['Easy', 'Medium', 'Hard'][q.difficulty - 1];
      const diffColor = q.difficulty === 1 ? '#16a34a' : q.difficulty === 2 ? '#d97706' : '#dc2626';

      const key = `${category.id}|${subcategory.id}|${idx}`;
      const isCompleted = state.completedQuestions[`${category.id}|${subcategory.id}`]?.includes(key);

      const row = document.createElement('div');
      row.style.cssText = `
        padding:16px 20px;
        border-bottom:1px solid var(--border);
        display:flex;
        justify-content:space-between;
        align-items:center;
        ${isCompleted ? 'background:rgba(22,163,74,0.05);' : ''}
      `;

      if (idx === state.currentQuestions.length - 1) row.style.borderBottom = 'none';

      row.innerHTML = `
        <div style="flex:1;">
          <div style="display:flex;gap:8px;margin-bottom:8px;">
            <span style="background:rgba(${diffColor === '#16a34a' ? '22,163,74' : diffColor === '#d97706' ? '217,119,6' : '220,38,38'},0.1);color:${diffColor};padding:2px 8px;border-radius:12px;font-size:0.7rem;font-weight:600;text-transform:uppercase;">
              ${diffLabel}
            </span>
            ${isCompleted ? '<span style="color:var(--success);font-weight:600;font-size:0.8rem;">✓ Completed</span>' : ''}
          </div>
          <p style="color:var(--text-primary);font-size:0.95rem;">${q.question}</p>
        </div>
        <div style="display:flex;gap:8px;margin-left:16px;">
          <button class="btn btn-primary open-question-btn" data-index="${idx}">Open</button>
          <button class="btn btn-success mark-complete-btn" data-index="${idx}" style="${isCompleted ? 'opacity:0.5;' : ''}">${isCompleted ? '✓' : 'Done'}</button>
        </div>
      `;

      const openBtn = row.querySelector('.open-question-btn');
      openBtn.addEventListener('click', () => displayQuestion(q));

      const completeBtn = row.querySelector('.mark-complete-btn');
      completeBtn.addEventListener('click', () => {
        const subKey = `${category.id}|${subcategory.id}`;
        if (!state.completedQuestions[subKey]) {
          state.completedQuestions[subKey] = [];
        }

        const qKey = `${category.id}|${subcategory.id}|${idx}`;
        if (!state.completedQuestions[subKey].includes(qKey)) {
          state.completedQuestions[subKey].push(qKey);
          localStorage.setItem('pmCompletedQuestions', JSON.stringify(state.completedQuestions));
          showToast('Question marked complete!');
          renderQuestionTable(category, subcategory);
        }
      });

      tableContainer.appendChild(row);
    });

    container.appendChild(tableContainer);
    dailyPageContent.appendChild(container);

    document.getElementById('backFromTableBtn').addEventListener('click', () => {
      clearDailyContent();
      state.viewMode = 'daily';
      document.querySelectorAll('.nav-sub-link').forEach(b => b.classList.remove('active'));
    });
  }

  // ---- Display Question ----
  function displayQuestion(q) {
    state.currentQuestion = q;
    state.currentRating = 0;
    state.simulationStep = 0;
    state.viewMode = 'question';

    clearDailyContent();

    const diffLabel = ['Easy', 'Medium', 'Hard'][q.difficulty - 1];
    const diffColor = q.difficulty === 1 ? '#16a34a' : q.difficulty === 2 ? '#d97706' : '#dc2626';

    const container = document.createElement('div');
    container.style.cssText = 'padding:20px 0;';

    const combined = document.createElement('div');
    combined.className = 'question-practice-card';
    combined.style.cssText = `
      background:var(--bg-card);
      border:1px solid var(--border);
      border-radius:var(--radius);
      padding:32px;
      margin-bottom:24px;
      position:relative;
    `;

    combined.innerHTML = `
      <div style="position:absolute;top:16px;right:16px;display:flex;gap:8px;">
        <button class="archive-icon-btn" id="saveToArchiveBtn" title="Save to Archive">💾 Save</button>
        <button class="btn btn-secondary" id="backToTableBtn" style="padding:8px 16px;">← Back</button>
      </div>

      <div style="display:flex;gap:8px;align-items:center;margin-bottom:16px;flex-wrap:wrap;">
        <span style="background:var(--accent-glow);color:var(--accent-light);padding:4px 12px;border-radius:20px;font-size:0.8rem;font-weight:600;">${q.category}</span>
        <span style="background:rgba(59,130,246,0.1);color:var(--info);padding:4px 12px;border-radius:20px;font-size:0.75rem;font-weight:500;">${q.subcategory}</span>
        <span style="background:rgba(${diffColor === '#16a34a' ? '22,163,74' : diffColor === '#d97706' ? '217,119,6' : '220,38,38'},0.1);color:${diffColor};padding:3px 10px;border-radius:12px;font-size:0.7rem;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-left:auto;">
          <strong>Difficulty:</strong> ${diffLabel}
        </span>
      </div>

      <h2 style="margin-bottom:24px;line-height:1.6;">${q.question}</h2>

      <div style="background:var(--bg-primary);border:1px solid var(--border);border-radius:var(--radius);padding:24px;margin-bottom:24px;display:none;" id="answerGuideBox">
        <div class="tips-card" style="background:transparent;border:none;padding:0;margin-bottom:20px;border-left:none;">
          <h4 style="margin-bottom:12px;">How to Impress the Interviewer</h4>
          <ul id="impressTips"></ul>
        </div>

        <div class="answer-card" style="background:transparent;border:none;padding:0;margin-bottom:20px;border-left:none;">
          <h4 style="margin-bottom:12px;">Step-by-Step Answer</h4>
          <div id="stepByStep"></div>
        </div>

        <div class="framework-card" style="background:transparent;border:none;padding:0;margin-bottom:20px;border-left:none;">
          <h4 style="margin-bottom:12px;">Recommended Framework</h4>
          <div id="frameworkSuggestion"></div>
        </div>

        <div class="resources-card" style="background:transparent;border:none;padding:0;border-left:none;">
          <h4 style="margin-bottom:12px;">Resources to Study</h4>
          <ul id="resourcesList"></ul>
        </div>
      </div>

      <h4 style="margin-bottom:12px;">Your Answer</h4>
      <textarea id="userAnswer" placeholder="Type your answer here..." style="width:100%;min-height:200px;background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border);border-radius:var(--radius-sm);padding:16px;font-family:inherit;font-size:0.95rem;line-height:1.6;resize:vertical;margin-bottom:16px;"></textarea>

      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:16px;">
        <button class="btn btn-primary" id="evaluateAnswerBtn">Evaluate My Answer</button>
        <button class="btn btn-secondary" id="showHideAnswerBtn">Show/Hide Answer Guide</button>
        <button class="btn btn-success" id="markCompleteBtn">✓ Mark Completed</button>
      </div>

      <div style="display:flex;align-items:center;gap:12px;">
        <span style="color:var(--text-secondary);font-size:0.9rem;">Rate your answer:</span>
        <div style="display:flex;gap:6px;">
          <button class="rating-btn" data-rating="1">1</button>
          <button class="rating-btn" data-rating="2">2</button>
          <button class="rating-btn" data-rating="3">3</button>
          <button class="rating-btn" data-rating="4">4</button>
          <button class="rating-btn" data-rating="5">5</button>
        </div>
      </div>
    `;

    container.appendChild(combined);
    dailyPageContent.appendChild(container);

    renderAnswerGuide(q);

    document.getElementById('evaluateAnswerBtn').addEventListener('click', () => {
      const userAnswer = document.getElementById('userAnswer').value.trim();
      if (!userAnswer) { showToast('Write your answer first!'); return; }
      evaluateAnswer(userAnswer, q);
    });

    const answerBox = document.getElementById('answerGuideBox');
    document.getElementById('showHideAnswerBtn').addEventListener('click', () => {
      answerBox.style.display = answerBox.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('backToTableBtn').addEventListener('click', () => {
      if (state.selectedCategory && state.selectedSubcategory) {
        renderQuestionTable(state.selectedCategory, state.selectedSubcategory);
      }
    });

    document.getElementById('markCompleteBtn').addEventListener('click', () => {
      const subKey = `${q.categoryId}|${q.subcategoryId}`;
      if (!state.completedQuestions[subKey]) {
        state.completedQuestions[subKey] = [];
      }
      const qKey = `${q.categoryId}|${q.subcategoryId}|${q.qIndex}`;
      if (!state.completedQuestions[subKey].includes(qKey)) {
        state.completedQuestions[subKey].push(qKey);
        localStorage.setItem('pmCompletedQuestions', JSON.stringify(state.completedQuestions));
        showToast('Question marked complete!');
        if (state.selectedCategory && state.selectedSubcategory) {
          renderQuestionTable(state.selectedCategory, state.selectedSubcategory);
        }
      }
    });

    document.querySelectorAll('.rating-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.currentRating = parseInt(btn.dataset.rating);
        document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    document.getElementById('saveToArchiveBtn').addEventListener('click', () => {
      saveToArchive();
    });
  }

  function renderAnswerGuide(q) {
    const tipsList = document.getElementById('impressTips');
    tipsList.innerHTML = '';
    q.tips.forEach(tip => {
      const li = document.createElement('li');
      li.textContent = tip;
      tipsList.appendChild(li);
    });

    const stepsDiv = document.getElementById('stepByStep');
    stepsDiv.innerHTML = '';
    q.steps.forEach((step, i) => {
      const stepEl = document.createElement('div');
      stepEl.style.cssText = 'margin-bottom:24px;padding-bottom:24px;border-bottom:1px solid var(--border);';
      if (i === q.steps.length - 1) stepEl.style.borderBottom = 'none';

      stepEl.innerHTML = `
        <div style="display:flex;gap:12px;margin-bottom:12px;">
          <div style="width:32px;height:32px;background:var(--accent);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">${i + 1}</div>
          <div style="flex:1;">
            <h5 style="margin-bottom:8px;">${step.title}</h5>
            <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:12px;">${step.detail}</p>
            <div style="background:rgba(99,102,241,0.05);border:1px solid rgba(99,102,241,0.2);border-radius:8px;padding:12px;margin-top:12px;">
              <p style="font-size:0.8rem;font-weight:600;color:var(--accent-light);margin-bottom:8px;">Rubric - What to Aim For:</p>
              <ul style="list-style:none;padding:0;font-size:0.85rem;">
                <li style="padding:4px 0;color:var(--success);"><strong>✓ Excellent:</strong> Covers all key points with specific examples</li>
                <li style="padding:4px 0;color:var(--warning);"><strong>≈ Good:</strong> Covers main points clearly and concisely</li>
                <li style="padding:4px 0;color:var(--danger);"><strong>✗ Needs Work:</strong> Missing key points or lacks clarity</li>
              </ul>
            </div>
          </div>
        </div>
      `;
      stepsDiv.appendChild(stepEl);
    });

    document.getElementById('frameworkSuggestion').innerHTML = `<p>${q.framework}</p>`;

    const resourcesList = document.getElementById('resourcesList');
    resourcesList.innerHTML = '';
    q.resources.forEach(r => {
      const li = document.createElement('li');
      li.textContent = r;
      resourcesList.appendChild(li);
    });
  }

  // ---- Evaluate Answer ----
  function evaluateAnswer(userAnswer, question) {
    const existing = document.getElementById('evaluationSection');
    if (existing) existing.remove();

    const keywords = extractKeywords(question);
    const userLower = userAnswer.toLowerCase();
    const wordCount = userAnswer.split(/\s+/).length;

    const matched = [];
    const missing = [];
    keywords.forEach(kw => {
      if (userLower.includes(kw.keyword.toLowerCase())) {
        matched.push(kw);
      } else {
        missing.push(kw);
      }
    });

    const structureScore = evaluateStructure(userAnswer, question);
    const coverageScore = keywords.length > 0 ? Math.round((matched.length / keywords.length) * 100) : 50;
    const depthScore = Math.min(100, Math.round((wordCount / 200) * 100));
    const overallScore = Math.round(structureScore * 0.3 + coverageScore * 0.4 + depthScore * 0.3);

    const evalDiv = document.createElement('div');
    evalDiv.id = 'evaluationSection';
    evalDiv.className = 'evaluation-section';
    evalDiv.innerHTML = `
      <div class="eval-card">
        <h4>Answer Evaluation</h4>
        <div class="score-display">
          <div class="score-circle ${overallScore >= 70 ? 'good' : overallScore >= 40 ? 'okay' : 'needs-work'}">
            <span class="score-number">${overallScore}</span>
            <span class="score-label">/ 100</span>
          </div>
          <div class="score-breakdown">
            <div class="score-bar-row">
              <span class="score-bar-label">Structure</span>
              <div class="score-bar"><div class="score-bar-fill" style="width:${structureScore}%"></div></div>
              <span class="score-bar-value">${structureScore}%</span>
            </div>
            <div class="score-bar-row">
              <span class="score-bar-label">Coverage</span>
              <div class="score-bar"><div class="score-bar-fill coverage" style="width:${coverageScore}%"></div></div>
              <span class="score-bar-value">${coverageScore}%</span>
            </div>
            <div class="score-bar-row">
              <span class="score-bar-label">Depth</span>
              <div class="score-bar"><div class="score-bar-fill depth" style="width:${depthScore}%"></div></div>
              <span class="score-bar-value">${depthScore}%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="eval-card eval-well">
        <h4>What You Did Well</h4>
        <ul id="evalWellList"></ul>
      </div>

      <div class="eval-card eval-missing">
        <h4>What You're Missing</h4>
        <ul id="evalMissingList"></ul>
      </div>

      <div class="eval-card eval-improve">
        <h4>How to Improve</h4>
        <ul id="evalImproveList"></ul>
      </div>

      <div class="eval-card eval-simulation-prompt">
        <h4>Want to Practice the Ideal Answer?</h4>
        <p>Walk through the answer step-by-step in an interactive simulation.</p>
        <button class="btn btn-primary" id="startSimulationBtn">Start Walk-Through Simulation</button>
      </div>
    `;

    dailyPageContent.appendChild(evalDiv);

    const wellList = document.getElementById('evalWellList');
    const missingList = document.getElementById('evalMissingList');
    const improveList = document.getElementById('evalImproveList');

    if (matched.length > 0) matched.forEach(m => addLi(wellList, `You covered "${m.keyword}"`));
    if (wordCount >= 100) addLi(wellList, 'Good depth — your answer has substantive detail.');
    if (structureScore >= 60) addLi(wellList, 'Your answer shows structured thinking.');
    if (userLower.includes('metric') || userLower.includes('measure')) addLi(wellList, 'Great mentioning metrics.');
    if (userLower.includes('trade-off') || userLower.includes('however')) addLi(wellList, 'You acknowledged trade-offs.');
    if (userLower.includes('user') || userLower.includes('customer')) addLi(wellList, 'You kept the user central.');
    if (wellList.children.length === 0) addLi(wellList, 'You made an attempt!');

    if (missing.length > 0) missing.forEach(m => addLi(missingList, `Consider covering "${m.keyword}"`));
    if (wordCount < 50) addLi(missingList, 'Aim for 100-200 words.');
    if (!userLower.includes('metric')) addLi(missingList, 'Mention success metrics.');
    if (!userLower.includes('trade-off') && !userLower.includes('risk')) addLi(missingList, 'Discuss trade-offs or risks.');
    if (structureScore < 40) addLi(missingList, 'Use a framework to organize.');
    if (missingList.children.length === 0) addLi(missingList, 'Solid coverage!');

    addLi(improveList, `Use the ${question.framework} framework.`);
    addLi(improveList, `Cover: ${question.steps.map(s => s.title).join(' → ')}`);
    if (wordCount < 100) addLi(improveList, 'Add specific examples.');
    addLi(improveList, 'Practice this again tomorrow.');

    document.getElementById('startSimulationBtn').addEventListener('click', () => startSimulation(question));

    evalDiv.scrollIntoView({ behavior: 'smooth' });

    if (!state.answeredToday.includes(question.question)) {
      state.answeredToday.push(question.question);
      localStorage.setItem('pmAnsweredToday', JSON.stringify(state.answeredToday));
      updateDailyProgress();
    }
  }

  function addLi(ul, text) {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  }

  function extractKeywords(question) {
    const keywords = [];
    question.steps.forEach(step => {
      keywords.push({ keyword: step.title });
    });
    if (question.framework) {
      keywords.push({ keyword: question.framework.split('(')[0].trim() });
    }
    return keywords;
  }

  function evaluateStructure(answer, question) {
    let score = 0;
    const lines = answer.split('\n').filter(l => l.trim());
    if (lines.length >= 3) score += 20;
    if (lines.length >= 5) score += 10;
    if (answer.match(/\d+[\.\)]/g)) score += 20;
    if (answer.match(/^[-•*]\s/gm)) score += 15;
    if (answer.toLowerCase().includes('first')) score += 10;
    if (answer.toLowerCase().includes('then') || answer.toLowerCase().includes('next')) score += 15;
    const stepsCovered = question.steps.filter(s => answer.toLowerCase().includes(s.title.toLowerCase().split(' ')[0]));
    score += Math.round((stepsCovered.length / question.steps.length) * 20);
    return Math.min(100, score);
  }

  // ---- Simulation ----
  function startSimulation(question) {
    const existing = document.getElementById('simulationSection');
    if (existing) existing.remove();
    state.simulationStep = 0;

    const simDiv = document.createElement('div');
    simDiv.id = 'simulationSection';
    simDiv.innerHTML = `
      <div class="sim-card">
        <div class="sim-header">
          <h4>Step-by-Step Simulation</h4>
          <div class="sim-progress">
            <div class="sim-progress-bar" id="simProgressBar" style="width:0%"></div>
          </div>
          <p class="sim-progress-text" id="simProgressText">Step 1 of ${question.steps.length}</p>
        </div>
        <div id="simStepContainer"></div>
        <div class="sim-controls">
          <button class="btn btn-secondary" id="simPrevBtn" disabled>Previous</button>
          <button class="btn btn-primary" id="simCheckBtn">Check My Answer</button>
          <button class="btn btn-accent" id="simNextBtn" style="display:none">Next Step</button>
          <button class="btn btn-primary" id="simFinishBtn" style="display:none">See Full Summary</button>
        </div>
      </div>
    `;

    dailyPageContent.appendChild(simDiv);

    const simStepContainer = document.getElementById('simStepContainer');
    const simProgressBar = document.getElementById('simProgressBar');
    const simProgressText = document.getElementById('simProgressText');
    const simPrevBtn = document.getElementById('simPrevBtn');
    const simCheckBtn = document.getElementById('simCheckBtn');
    const simNextBtn = document.getElementById('simNextBtn');
    const simFinishBtn = document.getElementById('simFinishBtn');

    const simAnswers = [];

    function renderSimStep() {
      const step = question.steps[state.simulationStep];
      const progress = ((state.simulationStep) / question.steps.length) * 100;
      simProgressBar.style.width = progress + '%';
      simProgressText.textContent = `Step ${state.simulationStep + 1} of ${question.steps.length}: ${step.title}`;

      simStepContainer.innerHTML = `
        <div class="sim-step-card">
          <div class="sim-step-number">${state.simulationStep + 1}</div>
          <div class="sim-step-body">
            <h5>${step.title}</h5>
            <textarea class="sim-textarea" id="simStepAnswer" placeholder="Your answer...">${simAnswers[state.simulationStep] || ''}</textarea>
            <div class="sim-model-answer" id="simModelAnswer" style="display:none">
              <h5>Model Answer</h5>
              <p>${step.detail}</p>
            </div>
            <div class="sim-step-feedback" id="simStepFeedback" style="display:none"></div>
          </div>
        </div>
      `;

      simPrevBtn.disabled = state.simulationStep === 0;
      simCheckBtn.style.display = 'inline-block';
      simNextBtn.style.display = 'none';
      simFinishBtn.style.display = 'none';
    }

    renderSimStep();

    simCheckBtn.addEventListener('click', () => {
      const userText = document.getElementById('simStepAnswer').value.trim();
      simAnswers[state.simulationStep] = userText;

      document.getElementById('simModelAnswer').style.display = 'block';

      if (!userText) {
        document.getElementById('simStepFeedback').innerHTML = '<p class="sim-feedback-note">Review the model answer.</p>';
      } else {
        document.getElementById('simStepFeedback').innerHTML = '<p class="sim-feedback-good">Good!</p>';
      }

      document.getElementById('simStepFeedback').style.display = 'block';
      simCheckBtn.style.display = 'none';

      if (state.simulationStep < question.steps.length - 1) {
        simNextBtn.style.display = 'inline-block';
      } else {
        simFinishBtn.style.display = 'inline-block';
      }
    });

    simNextBtn.addEventListener('click', () => {
      state.simulationStep++;
      renderSimStep();
    });

    simPrevBtn.addEventListener('click', () => {
      if (state.simulationStep > 0) {
        state.simulationStep--;
        renderSimStep();
      }
    });

    simFinishBtn.addEventListener('click', () => {
      simProgressBar.style.width = '100%';

      let html = '<div class="sim-summary"><h4>Summary</h4>';
      question.steps.forEach((step, i) => {
        html += `
          <div class="sim-summary-step">
            <div class="sim-summary-step-header">
              <span class="step-number">${i + 1}</span>
              <h5>${step.title}</h5>
            </div>
            <div class="sim-summary-columns">
              <div class="sim-summary-col"><h6>Your Answer</h6><p>${simAnswers[i] || '<em>skipped</em>'}</p></div>
              <div class="sim-summary-col model"><h6>Model</h6><p>${step.detail}</p></div>
            </div>
          </div>`;
      });
      html += '</div>';

      simStepContainer.innerHTML = html;
      simCheckBtn.style.display = 'none';
      simNextBtn.style.display = 'none';
      simFinishBtn.style.display = 'none';
      simPrevBtn.style.display = 'none';
    });
  }

  // ---- Save to Archive ----
  function saveToArchive() {
    if (!state.currentQuestion) return;
    const userAnswer = document.getElementById('userAnswer').value.trim();
    if (!userAnswer) { showToast('Write an answer first!'); return; }

    const entry = {
      id: Date.now(),
      date: new Date().toISOString(),
      question: state.currentQuestion.question,
      category: state.currentQuestion.category,
      categoryId: state.currentQuestion.categoryId,
      subcategory: state.currentQuestion.subcategory,
      subcategoryId: state.currentQuestion.subcategoryId,
      difficulty: state.currentQuestion.difficulty,
      tags: state.currentQuestion.tags || [],
      userAnswer: userAnswer,
      rating: state.currentRating,
      tips: state.currentQuestion.tips,
      steps: state.currentQuestion.steps,
      framework: state.currentQuestion.framework,
      resources: state.currentQuestion.resources
    };

    state.archive.unshift(entry);
    localStorage.setItem('pmArchive', JSON.stringify(state.archive));

    if (state.lastPracticeDate !== todayKey) {
      state.streak++;
      state.lastPracticeDate = todayKey;
      localStorage.setItem('pmStreak', state.streak.toString());
      localStorage.setItem('pmLastPracticeDate', todayKey);
      document.getElementById('streakCount').textContent = state.streak;
    }

    showToast('Saved to archive!');
  }

  // ---- Archive Page ----
  const archiveFilter = document.getElementById('archiveFilter');
  const archiveTagFilter = document.getElementById('archiveTagFilter');
  PM_QUESTIONS.categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = cat.name;
    archiveFilter.appendChild(opt);
  });

  function renderArchive() {
    let items = [...state.archive];

    if (archiveFilter.value !== 'all') items = items.filter(i => i.categoryId === archiveFilter.value);
    if (archiveTagFilter.value !== 'all') items = items.filter(i => (i.tags || []).includes(archiveTagFilter.value));

    const searchVal = (document.getElementById('archiveSearch') || {}).value || '';
    if (searchVal) {
      const s = searchVal.toLowerCase();
      items = items.filter(i => i.question.toLowerCase().includes(s) || i.userAnswer.toLowerCase().includes(s));
    }

    const sortVal = document.getElementById('archiveSort').value;
    if (sortVal === 'oldest') items.reverse();
    if (sortVal === 'rating-high') items.sort((a, b) => b.rating - a.rating);
    if (sortVal === 'rating-low') items.sort((a, b) => a.rating - b.rating);

    const statsDiv = document.getElementById('archiveStats');
    const totalPracticed = state.archive.length;
    const avgRating = totalPracticed > 0 ? (state.archive.reduce((sum, i) => sum + i.rating, 0) / totalPracticed).toFixed(1) : '0';
    const categoriesPracticed = new Set(state.archive.map(i => i.categoryId)).size;
    const thisWeek = state.archive.filter(i => {
      const d = new Date(i.date);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return d >= weekAgo;
    }).length;

    statsDiv.innerHTML = `
      <div class="stat-card"><div class="stat-value">${totalPracticed}</div><div class="stat-label">Total Practiced</div></div>
      <div class="stat-card"><div class="stat-value">${avgRating}</div><div class="stat-label">Avg Rating</div></div>
      <div class="stat-card"><div class="stat-value">${categoriesPracticed}/7</div><div class="stat-label">Categories</div></div>
      <div class="stat-card"><div class="stat-value">${thisWeek}</div><div class="stat-label">This Week</div></div>
    `;

    const listDiv = document.getElementById('archiveList');

    if (!document.getElementById('archiveSearch')) {
      const searchInput = document.createElement('input');
      searchInput.type = 'text';
      searchInput.id = 'archiveSearch';
      searchInput.placeholder = 'Search...';
      searchInput.style.cssText = 'width:100%;background:var(--bg-card);color:var(--text-primary);border:1px solid var(--border);padding:12px 20px;border-radius:var(--radius);font-size:0.95rem;margin-bottom:16px;';
      listDiv.parentNode.insertBefore(searchInput, listDiv);
      searchInput.addEventListener('input', () => renderArchive());
    }

    if (items.length === 0) {
      listDiv.innerHTML = `<div class="archive-empty"><h3>No entries yet</h3></div>`;
      return;
    }

    listDiv.innerHTML = '';
    items.forEach(item => {
      const date = new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const stars = item.rating > 0 ? '★'.repeat(item.rating) : 'Not rated';

      const div = document.createElement('div');
      div.className = 'archive-item';
      div.innerHTML = `
        <div class="archive-item-header">
          <div class="archive-item-badges">
            <span class="question-badge">${item.category}</span>
            <span class="question-sub-badge">${item.subcategory}</span>
          </div>
          <span class="archive-item-date">${date}</span>
        </div>
        <div class="archive-item-question">${item.question}</div>
        <div class="archive-item-rating">${stars}</div>
        <div class="archive-item-answer">
          <h5>Your Answer:</h5>
          <p>${item.userAnswer}</p>
          <button class="btn btn-danger" style="margin-top:12px;" onclick="deleteArchiveItem(${item.id})">Delete</button>
        </div>`;

      div.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') return;
        div.classList.toggle('expanded');
      });

      listDiv.appendChild(div);
    });
  }

  window.deleteArchiveItem = function(id) {
    state.archive = state.archive.filter(i => i.id !== id);
    localStorage.setItem('pmArchive', JSON.stringify(state.archive));
    renderArchive();
    showToast('Deleted');
  };

  archiveFilter.addEventListener('change', renderArchive);
  archiveTagFilter.addEventListener('change', renderArchive);
  document.getElementById('archiveSort').addEventListener('change', renderArchive);

  document.getElementById('exportArchiveBtn').addEventListener('click', () => {
    const data = JSON.stringify(state.archive, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pm-practice-archive.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Exported!');
  });

  document.getElementById('clearArchiveBtn').addEventListener('click', () => {
    if (confirm('Clear archive?')) {
      state.archive = [];
      localStorage.setItem('pmArchive', '[]');
      renderArchive();
      showToast('Cleared');
    }
  });

  // ---- Learnings Page ----
  function renderLearnings() {
    const container = document.getElementById('learningsContent');
    const searchInput = document.getElementById('learningsSearch');
    const searchVal = searchInput.value.toLowerCase();

    container.innerHTML = '';
    PM_LEARNINGS.categories.forEach(cat => {
      let hasMatch = !searchVal;
      let filteredSubs = cat.subcategories.map(sub => {
        const filteredItems = sub.items.filter(item => !searchVal || item.toLowerCase().includes(searchVal));
        if (filteredItems.length > 0) hasMatch = true;
        return { ...sub, items: filteredItems };
      }).filter(sub => sub.items.length > 0);

      if (!hasMatch) return;

      const catDiv = document.createElement('div');
      catDiv.className = 'learning-category' + (searchVal ? ' open' : '');
      catDiv.innerHTML = `
        <div class="learning-category-header">
          <h3>${cat.icon} ${cat.name}</h3>
          <span class="arrow">▼</span>
        </div>
        <div class="learning-category-body"></div>`;

      const body = catDiv.querySelector('.learning-category-body');

      filteredSubs.forEach(sub => {
        const subDiv = document.createElement('div');
        subDiv.className = 'learning-subcategory';
        subDiv.innerHTML = `<h4>${sub.name}</h4><ul>${sub.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
        body.appendChild(subDiv);
      });

      catDiv.querySelector('.learning-category-header').addEventListener('click', () => {
        catDiv.classList.toggle('open');
      });

      container.appendChild(catDiv);
    });
  }

  document.getElementById('learningsSearch').addEventListener('input', renderLearnings);

  // ---- Frameworks Page ----
  function renderFrameworks() {
    const container = document.getElementById('frameworksContent');
    container.innerHTML = '';

    PM_FRAMEWORKS.sections.forEach(section => {
      const sectionHeader = document.createElement('div');
      sectionHeader.style.cssText = 'margin-bottom:8px;margin-top:32px;';
      sectionHeader.innerHTML = `<h3 style="font-size:1.3rem;">${section.name}</h3><p style="color:var(--accent-light);font-size:0.85rem;margin-bottom:16px;">${section.tagline}</p>`;
      container.appendChild(sectionHeader);

      section.frameworks.forEach(fw => {
        const fwDiv = document.createElement('div');
        fwDiv.className = 'framework-section';
        fwDiv.innerHTML = `
          <h3>${fw.name}</h3>
          <p class="framework-tagline">Use for: ${fw.usage}</p>
          <p>${fw.description}</p>
          <div class="framework-grid">
            ${fw.components.map(c => `
              <div class="framework-grid-item">
                <div class="letter">${c.letter}</div>
                <div class="label">${c.label}</div>
              </div>`).join('')}
          </div>
          <div class="framework-details">
            ${fw.components.map(c => `<p><strong>${c.letter}:</strong> ${c.detail}</p>`).join('')}
          </div>`;
        container.appendChild(fwDiv);
      });
    });
  }

  // ---- Refresh Button Handler ----
  document.getElementById('refreshQuestionsBtn')?.addEventListener('click', () => {
    let refreshedCount = 0;

    PM_QUESTIONS.categories.forEach(cat => {
      cat.subcategories.forEach(sub => {
        const subKey = `${cat.id}|${sub.id}`;
        const completedCount = (state.completedQuestions[subKey] || []).length;

        if (completedCount > 0) {
          const newQuestions = [];
          for (let i = 0; i < completedCount; i++) {
            const q = getRandomQuestion(cat.id + '|' + sub.id);
            if (q) newQuestions.push(q);
          }

          // Clear completed for this subcategory and reset
          state.completedQuestions[subKey] = [];
          refreshedCount += newQuestions.length;
        }
      });
    });

    localStorage.setItem('pmCompletedQuestions', JSON.stringify(state.completedQuestions));
    showToast(`Refreshed ${refreshedCount} questions!`);
  });

  // ---- Utility ----
  function showToast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  function updateDailyProgress() {
    const progressDiv = document.getElementById('dailyProgress');
    if (progressDiv) {
      document.getElementById('dailyCount').textContent = state.answeredToday.length;
    }
  }

  // ---- Initial Load ----
  renderSidebarCategories();
  const dailyQuestion = getRandomQuestion('random');
  if (dailyQuestion) displayQuestion(dailyQuestion);
});
