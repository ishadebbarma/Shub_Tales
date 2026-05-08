// Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
  document.querySelectorAll('a, button, .work-card, .contact-option, .skill-tag').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      ring.style.transform = 'translate(-50%, -50%) scale(1.5)';
      ring.style.opacity = '0.6';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.opacity = '1';
    });
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // Form submit
  function handleSubmit(e) {
    e.preventDefault();
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
    e.target.reset();
  }

  // Marquee duplicate for seamless loop
  const track = document.getElementById('marquee');
  track.innerHTML += track.innerHTML;

  // Nav opacity on scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 80) {
      nav.style.background = 'rgba(8,10,14,0.95)';
    } else {
      nav.style.background = 'rgba(8,10,14,0.7)';
    }
  });
