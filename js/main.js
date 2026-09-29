const root=document.documentElement;root.classList.remove('no-js');root.classList.add('js');
const toggle=document.querySelector('.site-nav__toggle');const links=[...document.querySelectorAll('.site-nav__link')];
const close=()=>toggle?.setAttribute('aria-expanded','false');
toggle?.addEventListener('click',()=>toggle.setAttribute('aria-expanded',String(toggle.getAttribute('aria-expanded')!=='true')));
links.forEach(link=>link.addEventListener('click',close));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();toggle?.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-nav')&&!e.target.closest('.site-header__cta'))close()});
const sections=links.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!visible)return;links.forEach(link=>{if(link.getAttribute('href')===`#${visible.target.id}`)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current')})},{rootMargin:'-28% 0px -58% 0px',threshold:[0,.15,.35]});sections.forEach(section=>observer.observe(section))}
// Keep the footer copyright year current automatically.
const copyrightYear=document.getElementById('copyright-year');
if(copyrightYear) copyrightYear.textContent=new Date().getFullYear();
