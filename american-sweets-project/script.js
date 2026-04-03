// Nav scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
}

// 3D hero tilt effect
const hero3d = document.getElementById('hero3d');
if (hero3d) {
  hero3d.addEventListener('mousemove', (e) => {
    const r = hero3d.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    hero3d.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale3d(1.02, 1.02, 1.02)`;
  });
  hero3d.addEventListener('mouseleave', () => {
    hero3d.style.transform = 'rotateY(0) rotateX(0) scale3d(1, 1, 1)';
  });
}
