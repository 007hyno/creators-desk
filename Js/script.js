document.addEventListener('DOMContentLoaded', function() {
  const learnMore = document.querySelector(".learnMore");
  const section2 = document.querySelector(".sec2");
  const contact = document.querySelector(".contact");
  const footer = document.querySelector("footer");
  // const navHomeBtn = document.querySelector(".home");
  // const section = document.querySelector(".sec1");
  
  const service1 = document.querySelector(".si1");
  const service2 = document.querySelector(".si2");
  const service3 = document.querySelector(".si3");
  
  const cb = document.querySelector(".copyBtn");
  
  const homeLink = document.querySelector("#homeLink");
  const aboutLink = document.querySelector("#aboutLink");
  const servicesLink = document.querySelector("#servicesLink");

  const home = document.querySelector("#home");
  const services = document.querySelector("#services");
  const about = document.querySelector("#about");
  
window.addEventListener('scroll', () => {
  var scroll= window.scrollY;
  const logo = document.querySelector(".navLogo");
  const banner2 = document.querySelector(".banner2");
  const banner3 = document.querySelector(".banner3");
  
  document.body.style.setProperty('--scroll', scroll+ 'px');

  console.log(scroll);
if(scroll>100){
   logo.classList.add('rotate');
   logo.classList.remove('pRotate')
  }
  
  if (isElementInViewport(banner2)) {
    banner2.classList.add('bottomUp');
  }
  
  if (isElementInViewport(banner3)) {
    banner3.classList.add('bottomUp');
  }
  
  //Nav Active

  if (isElementInViewport(home)) {
    homeLink.classList.add('active');
    servicesLink.classList.remove('active');
    aboutLink.classList.remove('active');
  }
  if (isElementInViewport(about)) {
    homeLink.classList.remove('active');
    aboutLink.classList.add('active');
    servicesLink.classList.remove('active');
  }
  if (isElementInViewport(services)) {
    homeLink.classList.remove('active');
    aboutLink.classList.remove('active');
    servicesLink.classList.add('active');
  }
  //Nav Active
  
  // navBlur{
    // if(scroll>30){

    // }
  
  // navBlur{
}, false);


learnMore.addEventListener('click', e=> {
  e.preventDefault();
  section2.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  });
// navHomeBtn.addEventListener('click', e=> {
//   // e.preventDefault();
//   window.scrollTo(0, 0);
//   });
contact.addEventListener('click', e=> {
  e.preventDefault();
  footer.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  });

  learnMore.addEventListener('click', e=> {
    e.preventDefault();
    });

  // Copy Email Address
  cb.addEventListener('click', ()=> {
    navigator.clipboard.writeText("CreatorDesk247@gmail.com");
    cb.textContent = 'Copied';
    cb.classList.add("copyBtn2")
    cb.classList.remove("copyBtn")
    setTimeout(() => {
      cb.textContent = 'Copy';
      cb.classList.remove("copyBtn2")
      cb.classList.add("copyBtn")
    }, 1500)
  });



  // Serice Highliter
  service1.addEventListener('click', ()=> {
    service1.classList.add("serviceH")    
    service2.classList.remove("serviceH")    
    service3.classList.remove("serviceH")    


  });
  service2.addEventListener('click', ()=> {
    service1.classList.remove("serviceH")    
    service2.classList.add("serviceH")    
    service3.classList.remove("serviceH")    
  });
  service3.addEventListener('click', ()=> {
    service1.classList.remove("serviceH")    
    service2.classList.remove("serviceH")    
    service3.classList.add("serviceH")    
  });
  // Serice Highliter



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