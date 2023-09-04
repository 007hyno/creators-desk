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

  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");
  
  const cb = document.querySelector(".copyBtn");
  const cb2 = document.querySelector(".uncopy");
  
  const servId = document.querySelector("#servId");
  const homeLink = document.querySelector("#homeC");
  const aboutLink = document.querySelector("#aboutC");
  const servicesLink = document.querySelector("#servicesC");

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
  if (window.innerWidth> 960) {
  if (isElementInViewport(home)) {
    remCls(servicesLink,'active')
    remCls(aboutLink,'active')
    homeLink.classList.add('active');
    
  }
  if (isElementInViewport(about)) {
    remCls(homeLink,'active')
    aboutLink.classList.add('active');
    remCls(servicesLink,'active')
  }
  if (isElementInViewport(services)) {
    remCls(homeLink,'active')
    remCls(aboutLink,'active')
    servicesLink.classList.add('active');
  }
}

  //Nav Active
  
  // navBlur{
    // if(scroll>30){

    // }
  
  // navBlur{
}, false);


function remCls(a,b){
if(a.classList.contains(b)){
  a.classList.remove(b)
}
}


navbar.classList.toggle('hide');
hamburger.classList.toggle('hamActive');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('hide');
  hamburger.classList.toggle('hamActive');
});

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


  servId.src= "../Images/prem1.png"   

function removeAni(s){
  remCls(servId,'bottomUp')
    servId.src= s
    servId.classList.add('bottomUp')
    servId.style.animation = 'none';
  servId.offsetHeight;
  servId.style.animation = null;
  }


  // Serice Highliter
  service1.addEventListener('click', ()=> {
    removeAni("../Images/prem1.png" )
    
    service1.classList.add("serviceH")
    service2.classList.remove("serviceH")    
    service3.classList.remove("serviceH")    
    
    
  });
  service2.addEventListener('click', ()=> {
    removeAni("../Images/motion.jpeg")

    service1.classList.remove("serviceH")    
    service2.classList.add("serviceH")    
    service3.classList.remove("serviceH")    
  });
  service3.addEventListener('click', ()=> {
    removeAni("../Images/creative.jpg")
    
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

  function cpy(){
    navigator.clipboard.writeText("CreatorDesk247@gmail.com");
    cb.textContent = 'Copied';
    cb.classList.add("copyBtn2")
    remCls(cb,'copyBtn')
    setTimeout(() => {
      cb.textContent = 'Copy';
      remCls(cb,'copyBtn2')
      cb.classList.add("copyBtn")
    }, 1500)
}

  // Copy Email Address
  cb2.addEventListener('click', ()=> {
    cpy()
  });  
  // Copy Email Address




      });