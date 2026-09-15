document.getElementById('year').textContent=new Date().getFullYear();
const els=document.querySelectorAll('.work-card,.service-list article,.article-list a,.truth-card,.about-visual,.product-art');
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}})},{threshold:.12});
els.forEach(e=>{e.classList.add('reveal');io.observe(e)});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id&&id!=='#'){const t=document.querySelector(id);if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}}}));
