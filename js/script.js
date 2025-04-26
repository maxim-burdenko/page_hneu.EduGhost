document.addEventListener('DOMContentLoaded', function () {
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

  // Typewriter effect for multiple elements
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
          el.style.borderRight = 'none';
        }
      }, 100);
    }, index * 3500);
  });  
});

document.querySelectorAll('.accordion-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
