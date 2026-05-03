// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Nav scroll state =====
const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 12) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Reveal on scroll =====
const revealTargets = document.querySelectorAll(
  '.feature, .step, .tech-card, .stat, .cta-card, .terminal, .setup-text, .hero-showcase'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => io.observe(el));

// ===== Subtle parallax on hero showcase =====
const showcase = document.querySelector('.hero-showcase .window');
if (showcase && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 4;
    showcase.style.transform = `rotateX(${2 - y}deg) rotateY(${x}deg)`;
  });
}

// ===== Randomize waveform bar heights for variety =====
document.querySelectorAll('.waveform span').forEach(s => {
  const dur = (1.0 + Math.random() * 0.9).toFixed(2);
  s.style.animationDuration = `${dur}s`;
});
