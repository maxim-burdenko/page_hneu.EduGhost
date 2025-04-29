document.addEventListener('DOMContentLoaded', function () {
  // Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem('theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Apply the saved theme
  if (savedTheme === 'dark') {
    html.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    html.classList.remove('dark');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  });

  // Loading animation
  let progress = 0;
  const progressBar = document.getElementById('progress-bar');
  const loadingScreen = document.getElementById('loading');
  const content = document.getElementById('content');

  const interval = setInterval(() => {
    progress += Math.random() * 10;
    if (progress > 100) progress = 100;
    progressBar.style.width = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
          content.style.opacity = '1';
        }, 500);
      }, 300);
    }
  }, 100);

  // Typewriter effect
  const typewriterElements = document.querySelectorAll('.typewriter');
  typewriterElements.forEach((el, index) => {
    setTimeout(() => {
      const text = el.textContent;
      el.textContent = '';
      let i = 0;
      const typing = setInterval(() => {
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typing);
        }
      }, 100);
    }, index * 3500);
  });

  // Accordion functionality
  document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.fa-chevron-down').classList.remove('rotate-180');
      });
      
      if (!isActive) {
        item.classList.add('active');
        item.querySelector('.fa-chevron-down').classList.add('rotate-180');
      }
    });
  });

  // Roadmap setup
  const roadmap = document.getElementById('roadmap');
  const roadmapMobileSplit = document.querySelector('.roadmap-mobile-split');
  const roadmapWidth = roadmap.offsetWidth;
  const isMobile = window.innerWidth <= 768;
  
  const stages = [
    {
      id: 'init',
      title: 'ІНІЦІАЛІЗАЦІЯ',
      icon: '<i class="fas fa-ghost"></i>',
      desc: 'Перша GUI-Версія застосунку',
      status: 'completed',
      progress: 100,
      modalContent: `
        <div class="modal-subtitle">СТАТУС: <span class="text-accent-500">ВИКОНАНО</span></div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 100%"></div>
        </div>
        <div class="modal-content">
          <p>Нижче список виконаних корегувань</p>
                    
          <p class="mt-4"><strong>Перша GUI-Версія EduGhost:</strong></p>
          <ul>
            <li>Відвідування пар в ZOOM</li>
            <li>Проставлення відмітки в PNS</li>
            <li>Додавання GUI</li>
          </ul>
                                
        </div>
      `
    },
    {
      id: 'notatky',
      title: 'НОТАТКИ',
      icon: '<i class="fas fa-book"></i>',
      desc: 'Записи до кожної зустрічі',
      status: 'completed',
      progress: 100,
      modalContent: `
        <div class="modal-subtitle">СТАТУС: <span class="text-accent-500">В РОБОТІ</span> (5%)</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 5%"></div>
        </div>
        <div class="modal-content">
                    
          <p class="mt-4"><strong>Збір наступної інформації:</strong></p>
          <ul>
            <li>Список завдань: збірка завдань, які викладач назначив</li>
            <li>Відеозаписи: збірка записів, які були.</li>
            <li>Короткий конспект: збірка інформації на уроці у короткий текст </li>
            <li>Повний конспект: збірка з відвіданої конференції всіх завдань (та відповідей на них), а також текстів на всі теми зустрічі</li>
          </ul>
        </div>
      `
    }, {
      id: 'Tihonya',
      title: '"Тихоня"',
      icon: '<i class="fas fa-user-secret"></i>',
      desc: 'Програма працює в нотатковому режимі',
      status: 'in-progress',
      progress: 45,
      modalContent: `
        <div class="modal-subtitle">СТАТУС: <span class="text-accent-500">В РОБОТІ</span> (45%)</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 45%"></div>
        </div>
        <div class="modal-content">
                    
          <p class="mt-4"><strong>Програма працює в наступному режимі:</strong></p>
          <ul>
            <li>Ставить відмітки в PNS</li>
            <li>Записує інформацію в "НОТАТКИ"</li>
            <li>Не імітує активність (рух миші, автовідповіді в чаті, мікрофон-камера)</li>
          </ul>
        </div>
      `
    },
    {
      id: 'Chergoviy',
      title: '"Черговий"',
      icon: '<i class="fas fa-exclamation"></i>',
      desc: 'Режим розумного нагадування у фоновому режимі',
      status: 'in-progress',
      progress: 20,
      modalContent: `
        <div class="modal-subtitle">СТАТУС: <span class="text-accent-500">В РОБОТІ</span> (20%)</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 20%"></div>
        </div>
        <div class="modal-content">
                    
          <p class="mt-4"><strong>Програма працює в наступному режимі:</strong></p>
          <ul>
            <li>Ставить відмітки в PNS</li>
            <li>Записує інформацію в "НОТАТКИ"</li>
            <li>Повідомляє користувачу, якщо його викликають</li>
          </ul>
        </div>
      `
    },{
      id: 'Autovisit',
      title: 'АВТОВІЗИТ',
      icon: '<i class="fas fa-server"></i>',
      desc: 'Покращений режим автоматичного відвідування',
      status: 'in-progress',
      progress: 10,
      modalContent: `
        <div class="modal-subtitle">СТАТУС: <span class="text-accent-500">В РОБОТІ</span> (10%)</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 10%"></div>
        </div>
        <div class="modal-content">
                    
          <p class="mt-4"><strong>Програма працює в наступному режимі:</strong></p>
          <ul>
            <li>Ставить відмітки в PNS</li>
            <li>Записує інформацію в "НОТАТКИ"</li>
            <li>Імітує відвідуваність конференція (рух миші, автовідповіді в чаті, мікрофон-камера).</li>
                            
          </ul>
        </div>
      `
    },
    {
      id: 'newficha',
      title: 'НОВА ФІЧА',
      icon: '<i class="fas fa-rocket"></i>',
      desc: 'Голосуй за наступне оновлення',
      status: 'unstarted',
      progress: 0,
      modalContent: `
        <div class="modal-content">
          <p>Голосуй та пропонуй свій варіант вдосконалення застосунку на офіційному телеграм каналі <b>EduGhost</b> (посилання в кінці сайту).</p>
                                
        </div>
      `
    }       
  ];

  // Create stages
  stages.forEach((stage, index) => {
    const stageElement = document.createElement('div');
    stageElement.className = `stage stage-${stage.status} not-animated`;
    stageElement.id = `stage-${stage.id}`;

    if (isMobile) {
      stageElement.innerHTML = `
        <div class="stage-icon ${stage.status === 'completed' ? 'stage-completed' : ''}
                             ${stage.status === 'in-progress' ? 'stage-in-progress' : ''}
                             ${stage.status === 'unstarted' ? 'stage-unstarted' : ''}
                             ${stage.status === 'critical' ? 'stage-critical' : ''}">
          ${stage.icon}
        </div>
        <div>
          <div class="stage-title dark:text-gray-200">${stage.title}</div>
          <div class="stage-desc">${stage.desc}</div>
        </div>
      `;
      
      roadmapMobileSplit.appendChild(stageElement);
    } else {
      // Calculate position in wave pattern
      const segmentWidth = 80 / (stages.length - 1);
      let left, top;

      // Create sine wave pattern
      const waveHeight = 25;
      const wavePosition = index * segmentWidth;
      const waveOffset = Math.sin(index * 0.7) * waveHeight;

      left = wavePosition + 5;
      top = 5 + waveOffset;

      stageElement.style.left = `${left}%`;
      stageElement.style.top = `${top}%`;

      stageElement.innerHTML = `
        <div class="stage-icon ${stage.status === 'completed' ? 'stage-completed' : ''}
                             ${stage.status === 'in-progress' ? 'stage-in-progress' : ''}
                             ${stage.status === 'unstarted' ? 'stage-unstarted' : ''}
                             ${stage.status === 'critical' ? 'stage-critical' : ''}">
          ${stage.icon}
        </div>
        <div class="stage-title dark:text-gray-200">${stage.title}</div>
        <div class="stage-desc">${stage.desc}</div>
      `;

      roadmap.appendChild(stageElement);
    }

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal dark:bg-dark-800';
    modal.id = `modal-${stage.id}`;
    modal.innerHTML = `
      <div class="modal-header">
        <div class="modal-title">${stage.title}</div>
        <button class="modal-close">&times;</button>
      </div>
      ${stage.modalContent}
    `;
    document.body.appendChild(modal);

    // Add click event to stage
    stageElement.addEventListener('click', function (e) {
      // Close any open modals
      document.querySelectorAll('.modal').forEach(m => {
        m.style.display = 'none';
      });

      // Open this modal
      modal.style.display = 'block';

      // Position modal relative to stage
      positionModal(modal, stageElement);

      e.stopPropagation();
    });

    // Add close button event
    const closeButton = modal.querySelector('.modal-close');
    closeButton.addEventListener('click', function (e) {
      modal.style.display = 'none';
      e.stopPropagation();
    });
  });

  if (!isMobile) {
    createConnectingLines();
  }

  // Close modal when clicking outside
  document.addEventListener('click', function () {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.style.display = 'none';
    });
  });

  // Position modal correctly relative to stage
  function positionModal(modal, stageElement) {
    const stageRect = stageElement.getBoundingClientRect();
    const modalWidth = modal.offsetWidth;
    const modalHeight = modal.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Default position - to the right if space allows
    let left = stageRect.right + 10;
    let top = stageRect.top;

    // If not enough space to the right, position to the left
    if (left + modalWidth > windowWidth) {
      left = stageRect.left - modalWidth - 10;
    }

    // If still off screen (very small window), center it
    if (left < 10) {
      left = 10;
    }

    // Adjust top if going off bottom of screen
    if (top + modalHeight > windowHeight) {
      top = windowHeight - modalHeight - 10;
    }

    // Adjust top if going off top of screen
    if (top < 10) {
      top = 10;
    }

    modal.style.top = `${top}px`;
    modal.style.left = `${left}px`;
  }

  // Create connecting lines between stages
  function createConnectingLines() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.zIndex = "1";
    roadmap.appendChild(svg);

    for (let i = 0; i < stages.length - 1; i++) {
      const currentStage = document.getElementById(`stage-${stages[i].id}`);
      const nextStage = document.getElementById(`stage-${stages[i + 1].id}`);

      if (currentStage && nextStage) {
        const currentIcon = currentStage.querySelector('.stage-icon');
        const nextIcon = nextStage.querySelector('.stage-icon');

        const currentRect = currentIcon.getBoundingClientRect();
        const nextRect = nextIcon.getBoundingClientRect();
        const roadmapRect = roadmap.getBoundingClientRect();

        const x1 = currentRect.left + currentRect.width / 2 - roadmapRect.left;
        const y1 = currentRect.top + currentRect.height / 2 - roadmapRect.top;
        const x2 = nextRect.left + nextRect.width / 2 - roadmapRect.left;
        const y2 = nextRect.top + nextRect.height / 2 - roadmapRect.top;

        const line = document.createElementNS("http://www.w3.org/2000/svg", "path");

        // Create curved path
        const controlX1 = x1 + (x2 - x1) * 0.5;
        const controlY1 = y1;
        const controlX2 = x2 - (x2 - x1) * 0.5;
        const controlY2 = y2;

        const path = `M${x1},${y1} C${controlX1},${controlY1} ${controlX2},${controlY2} ${x2},${y2}`;
        line.setAttribute("d", path);

        // Line color based on status
        let strokeColor;
        if (stages[i + 1].status === 'completed') {
          strokeColor = "url(#completed-gradient)";
        } else if (stages[i + 1].status === 'in-progress') {
          strokeColor = "url(#inprogress-gradient)";
        } else if (stages[i + 1].status === 'critical') {
          strokeColor = "url(#critical-gradient)";
        } else {
          strokeColor = "#adb5bd";
        }

        line.setAttribute("stroke", strokeColor);
        line.setAttribute("stroke-width", "2");
        line.setAttribute("fill", "none");
        line.setAttribute("stroke-dasharray", stages[i + 1].status === 'completed' ? "none" : "5,3");
        svg.appendChild(line);
      }
    }

    // Add gradients for the lines
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

    // Completed gradient (orange)
    const completedGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    completedGradient.setAttribute("id", "completed-gradient");
    completedGradient.setAttribute("x1", "0%");
    completedGradient.setAttribute("y1", "0%");
    completedGradient.setAttribute("x2", "100%");
    completedGradient.setAttribute("y2", "0%");

    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "#f59e0b");
    completedGradient.appendChild(stop1);

    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", "#f97316");
    completedGradient.appendChild(stop2);

    defs.appendChild(completedGradient);

    // In Progress gradient (orange)
    const inprogressGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    inprogressGradient.setAttribute("id", "inprogress-gradient");
    inprogressGradient.setAttribute("x1", "0%");
    inprogressGradient.setAttribute("y1", "0%");
    inprogressGradient.setAttribute("x2", "100%");
    inprogressGradient.setAttribute("y2", "0%");

    const stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop3.setAttribute("offset", "0%");
    stop3.setAttribute("stop-color", "#f59e0b");
    inprogressGradient.appendChild(stop3);

    const stop4 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop4.setAttribute("offset", "100%");
    stop4.setAttribute("stop-color", "#f97316");
    inprogressGradient.appendChild(stop4);

    defs.appendChild(inprogressGradient);

    // Critical gradient (red)
    const criticalGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    criticalGradient.setAttribute("id", "critical-gradient");
    criticalGradient.setAttribute("x1", "0%");
    criticalGradient.setAttribute("y1", "0%");
    criticalGradient.setAttribute("x2", "100%");
    criticalGradient.setAttribute("y2", "0%");

    const stop5 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop5.setAttribute("offset", "0%");
    stop5.setAttribute("stop-color", "#f97316");
    criticalGradient.appendChild(stop5);

    const stop6 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop6.setAttribute("offset", "100%");
    stop6.setAttribute("stop-color", "#ef4444");
    criticalGradient.appendChild(stop6);

    defs.appendChild(criticalGradient);

    svg.insertBefore(defs, svg.firstChild);
  }

  // Handle window resize
  window.addEventListener('resize', function () {
    const isNowMobile = window.innerWidth <= 768;
    
    if (isMobile !== isNowMobile) {
      // Reload the page if the mobile state changes
      location.reload();
    } else if (!isNowMobile) {
      // Remove existing lines and recreate them
      const svg = roadmap.querySelector('svg');
      if (svg) {
        svg.remove();
      }
      createConnectingLines();
    }

    // Reposition any open modals
    document.querySelectorAll('.modal').forEach(modal => {
      if (modal.style.display === 'block') {
        const stageId = modal.id.replace('modal-', '');
        const stageElement = document.getElementById(`stage-${stageId}`);
        positionModal(modal, stageElement);
      }
    });
  });
});


// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       e.preventDefault();
//       target.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });
