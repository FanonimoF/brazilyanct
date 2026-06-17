const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const topBtn = document.getElementById('topBtn');

menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  topBtn.classList.toggle('show', window.scrollY > 500);
});

topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.9);z-index:100;display:flex;align-items:center;justify-content:center;padding:20px;cursor:pointer';
    const photo = document.createElement('img');
    photo.src = img.src;
    photo.alt = img.alt;
    photo.style.cssText = 'max-width:95%;max-height:95%;border-radius:20px;object-fit:contain';
    overlay.appendChild(photo);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});
