const root=document.documentElement;root.classList.remove('no-js');root.classList.add('js');
const toggle=document.querySelector('.site-nav__toggle');const links=[...document.querySelectorAll('.site-nav__link')];
const close=()=>toggle?.setAttribute('aria-expanded','false');
toggle?.addEventListener('click',()=>toggle.setAttribute('aria-expanded',String(toggle.getAttribute('aria-expanded')!=='true')));
links.forEach(link=>link.addEventListener('click',close));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();toggle?.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-nav')&&!e.target.closest('.site-header__cta'))close()});
const sections=links.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
const setActiveNav=(hash)=>{links.forEach(link=>{if(link.getAttribute('href')===hash)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current')})};
// Make the clicked/hash navigation item active immediately. This is especially
// important for Contact because it sits close to the bottom of the document.
links.forEach(link=>link.addEventListener('click',()=>setActiveNav(link.getAttribute('href'))));
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{const hashTarget=location.hash&&document.querySelector(location.hash);if(hashTarget){const r=hashTarget.getBoundingClientRect();const isOnScreen=r.top<window.innerHeight&&r.bottom>0;if(isOnScreen){setActiveNav(location.hash);return}}const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!visible)return;setActiveNav(`#${visible.target.id}`)},{rootMargin:'-28% 0px -58% 0px',threshold:[0,.15,.35]});sections.forEach(section=>observer.observe(section))} 
window.addEventListener('hashchange',()=>{if(location.hash)setActiveNav(location.hash)});
// Keep the footer copyright year current automatically.
const copyrightYear=document.getElementById('copyright-year');
if(copyrightYear) copyrightYear.textContent=new Date().getFullYear();

// Keep the correct navigation item active at the bottom of the page.
// The Contact section may not cross the IntersectionObserver's active band
// because the document ends shortly after it.
const syncNavAtPageEnd=()=>{
  const atPageEnd=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-8;
  if(atPageEnd&&document.querySelector('#contact')){
    links.forEach(link=>{
      if(link.getAttribute('href')==='#contact') link.setAttribute('aria-current','true');
      else link.removeAttribute('aria-current');
    });
  }
};
window.addEventListener('scroll',syncNavAtPageEnd,{passive:true});
window.addEventListener('resize',syncNavAtPageEnd);
window.addEventListener('hashchange',syncNavAtPageEnd);
syncNavAtPageEnd();
