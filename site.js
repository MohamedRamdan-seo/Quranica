(() => {
  'use strict';
  const header=document.querySelector('.site-header');
  const shell=document.querySelector('.mega-shell');
  const triggers=[...document.querySelectorAll('.menu-trigger')];
  const panels=[...document.querySelectorAll('.mega-panel')];
  const nav=document.querySelector('.main-nav');
  const mobileToggle=document.querySelector('.mobile-menu-toggle');
  let active=null;
  const isMobile=()=>window.matchMedia('(max-width: 980px)').matches;
  function closeMega(){
    active=null;
    if(shell) shell.hidden=true;
    triggers.forEach(b=>b.setAttribute('aria-expanded','false'));
    panels.forEach(p=>p.hidden=true);
  }
  function showMega(id){
    if(active===id){closeMega();return;}
    active=id;
    shell.hidden=false;
    triggers.forEach(b=>b.setAttribute('aria-expanded',String(b.dataset.openMenu===id)));
    panels.forEach(p=>p.hidden=p.dataset.panel!==id);
    if(isMobile()){
      nav.classList.remove('mobile-open');
      mobileToggle.setAttribute('aria-expanded','false');
      header.classList.remove('mobile-nav-open');
    }
  }
  triggers.forEach(t=>t.addEventListener('click',()=>showMega(t.dataset.openMenu)));
  mobileToggle?.addEventListener('click',()=>{
    closeMega();
    const open=nav.classList.toggle('mobile-open');
    mobileToggle.setAttribute('aria-expanded',String(open));
    header.classList.toggle('mobile-nav-open',open);
  });
  document.addEventListener('click',e=>{
    if(!e.target.closest('.site-header')){
      closeMega();nav?.classList.remove('mobile-open');
      header?.classList.remove('mobile-nav-open');
      mobileToggle?.setAttribute('aria-expanded','false');
    }
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      closeMega();nav?.classList.remove('mobile-open');
      header?.classList.remove('mobile-nav-open');
      mobileToggle?.setAttribute('aria-expanded','false');
    }
  });
  window.addEventListener('resize',()=>{
    closeMega(); nav?.classList.remove('mobile-open');header?.classList.remove('mobile-nav-open');
    mobileToggle?.setAttribute('aria-expanded','false');
  });
  const slider=document.querySelector('#teacher-slider');
  if(slider){
    let pause=false;
    const getStep=()=>{const card=slider.querySelector('.tutor-card');return card?card.getBoundingClientRect().width+18:250};
    const cycleWidth=()=>{const card=slider.querySelector('.tutor-card');return card?getStep()*6:0};
    function next(direction=1){
      const cycle=cycleWidth();
      if(!cycle)return;
      if(direction>0 && slider.scrollLeft >= cycle-getStep()*.5){slider.scrollTo({left:0,behavior:'instant'});}
      if(direction<0 && slider.scrollLeft<getStep()*.5){slider.scrollTo({left:cycle,behavior:'instant'});}
      slider.scrollBy({left:getStep()*direction,behavior:'smooth'});
    }
    document.querySelectorAll('[data-slide]').forEach(btn=>btn.addEventListener('click',()=>next(Number(btn.dataset.slide))));
    slider.addEventListener('mouseenter',()=>pause=true);
    slider.addEventListener('mouseleave',()=>pause=false);
    slider.addEventListener('focusin',()=>pause=true);
    slider.addEventListener('focusout',()=>pause=false);
    slider.addEventListener('touchstart',()=>pause=true,{passive:true});
    slider.addEventListener('touchend',()=>{setTimeout(()=>pause=false,2500)},{passive:true});
    if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      const timer=setInterval(()=>{if(!pause&&!document.hidden)next(1)},3600);
      window.addEventListener('pagehide',()=>clearInterval(timer),{once:true});
    }
  }
  // Only one curriculum level is expanded at a time, but remains keyboard accessible.
  document.querySelectorAll('.level-item').forEach(detail=>detail.addEventListener('toggle',()=>{
    if(!detail.open)return;
    document.querySelectorAll('.level-item').forEach(other=>{if(other!==detail)other.open=false});
  }));
})();
