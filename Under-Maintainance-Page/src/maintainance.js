// Star creation for animated twinkling background
function createStars() {
    const starCount = 100;
    const body = document.querySelector('body');
  
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = Math.random() * 100 + 'vh';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.animationDuration = Math.random() * 5 + 3 + 's';
      body.appendChild(star);
    }
  }
  
  document.addEventListener("DOMContentLoaded", createStars);
  