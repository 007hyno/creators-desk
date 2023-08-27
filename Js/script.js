document.addEventListener('DOMContentLoaded', function() {
  const learnMore = document.querySelector(".learnMore");
  const section2 = document.querySelector(".sec2");
  const contact = document.querySelector(".contact");
  const footer = document.querySelector("footer");
  const home = document.querySelector(".home");
  const section = document.querySelector(".sec1");
  

window.addEventListener('scroll', () => {
  var scroll= window.scrollY;
  const logo = document.querySelector(".navLogo");
  const banner2 = document.querySelector(".banner2");
  const banner3 = document.querySelector(".banner3");
  
  // document.body.style.setProperty('--scroll', scroll);
  document.body.style.setProperty('--scroll', scroll+ 'px');

  console.log(scroll);
if(scroll>100){
   logo.classList.add('rotate');
   logo.classList.remove('pRotate')
  }if(scroll>390){
    // banner2.classList.add('bottomUp');
    
  }
  else{
    
    logo.classList.remove('rotate');
    logo.classList.add('pRotate');
  }
  if(scroll>1200){
    // banner2.classList.remove('bottomUp');
  }
  
  if (isElementInViewport(banner2)) {
    console.log('Element is visible.');
    banner2.classList.add('bottomUp');

  }
  
  if (isElementInViewport(banner3)) {
    console.log('Element is visible.');
    banner3.classList.add('bottomUp');

  } else {
    console.log('Element is not visible.');
    // banner2.classList.remove('bottomUp');
  }

}, false);


learnMore.addEventListener('click', e=> {
  e.preventDefault();
  section2.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  });
home.addEventListener('click', e=> {
  e.preventDefault();
  window.scrollTo(0, 0);
  });
contact.addEventListener('click', e=> {
  e.preventDefault();
  footer.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  });



// User Testimonial click handler
const t1 = document.querySelector('.t1');
const t2 = document.querySelector('.t2');
const t3 = document.querySelector('.t3');
const t4 = document.querySelector('.t4');
const t5 = document.querySelector('.t5');


t1.addEventListener('click', ()=> {
    window.open('https://www.youtube.com/@aarushbhola17','_blank')     
  });
  t2.addEventListener('click', function() {
    window.open('https://www.youtube.com/@SnaxGaming','_blank') 
  });
  t3.addEventListener('click', function() {
    window.open('https://www.allstag.com/','_blank' )
  });
  t4.addEventListener('click', function() {
    window.open('https://www.youtube.com/@Maanavmaggiesukhija','_blank') 
  });
  t5.addEventListener('click', function() {
    window.open('https://www.youtube.com/@MohitBisht','_blank') 
  });  
  
  // User Testimonial click handler
  

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }






      });