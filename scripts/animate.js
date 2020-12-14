let smoothScroll = new scrollToSmooth("a", {
  targetAttribute: "href",
  duration: 1200,
  durationRelative: false,
  durationMin: false,
  durationMax: false,
  easing: "easeOutCubic",
  onScrollEnd: (data) => {},
  fixedHeader: null,
});
smoothScroll.init();

const toggle = document.querySelector(".toggle");
const sidebar = document.querySelector(".nav-lists");

toggle.addEventListener("click", function () {
  sidebar.style.left = "0";
sidebar.classList.toggle('sidebar')
  sidebar.classList.contains("sidebar")
  toggle.classList.add("close")


  sidebar.classList.contains("sidebar")
    ? (toggle.firstElementChild.src = "./images/icons/x.svg")
    : (toggle.firstElementChild.src = "./images/icons/menu.svg");

    if(!sidebar.classList.contains('sidebar')){
      sidebar.style.left="-100%";
    }
});




// gsap animation

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline()

tl.to('body', { visibility:'visible'})
tl.from(['.intro-text .head','.intro-text .para','.intro-text .cta'], {opacity: 0, y: '100px', stagger:'.2',ease: Power2.easeInOut})
tl.from('.intro-image', { duration:.4, opacity: 0, y: '100px',ease: Power2.easeInOut},'-=.3')
tl.from('.intro-image .small-card.blue', { duration:.4,opacity: 0, x:'-300px',ease: Power2.easeInOut},"-=.2")
tl.from('.intro-image  .small-card.yellow', { duration:.4, opacity: 0, x:'300px',ease: Power2.easeInOut}, "-=.2")



gsap.from(".partners .text p",{
  scrollTrigger:{
    trigger: '.partners .text p'
  },
  opacity:0,
 x:'-300px',
 ease: Power2.easeInOut
})

gsap.from(".partners .text .line",{
  scrollTrigger:{
    trigger: '.partners .text p',
  },
  opacity:0,
 x:'-300px',
 ease: Power2.easeInOut
})

gsap.from(".partners .partners-logos img",{
  scrollTrigger:{
    trigger: '.partners .partners-logos',
  },
  delay:.2,
  opacity:0,
 x:'300px',
 stagger:'.2'
})

// services animation
gsap.from(".services-content .card",{
  scrollTrigger:{
    trigger: '.services-content .card',
  },
opacity: 0,
y:'50px', stagger:'.2'
})

gsap.from([".services-content .text-content .title",'.services-content .text-content .para','.services-content .text-content .cta'],{
  scrollTrigger:{
    trigger: '.services-content .card',
    start:'top center'
  },
opacity: 0,
y:'50px', 
stagger:'.2',
delay:'.4'
})

gsap.from([".benefits .text-content .title",'.benefits .text-content .para','.benefits .text-content .cta'],{
  scrollTrigger:{
    trigger: '.benefits',
    start:'top center'
  },
opacity: 0,
y:'50px', 
stagger:'.2',
})


// benefits animation

gsap.from('.benefits .image-content',{
  scrollTrigger:{
    trigger: '.benefits',
    start:'top center'
  },
opacity: 0,
y:'50px', 
stagger:'.2',
delay:'.5'
})
gsap.from('.benefits .image-content .card',{
  scrollTrigger:{
    trigger: '.benefits .image-content',
    start:'top center'
  },
opacity: 0,
x:'-200px', 
delay:'.5'

})





// benefit two animation
gsap.from('.benefit-two .image-content',{
  scrollTrigger:{
    trigger: '.benefit-two',
    start:'top center'
  },
opacity: 0,
y:'50px', 
stagger:'.2',
})
gsap.from('.benefit-two .image-content .card',{
  scrollTrigger:{
    trigger: '.benefit-two .image-content',
    start:'top center'
  },
opacity: 0,
x:'-300px', 
})

gsap.from(['.benefit-two .text-content .title','.benefit-two .text-content .para', '.benefit-two .text-content .cards .card'],{
  scrollTrigger:{
    trigger: '.benefit-two',
    start:'top center'
  },
opacity: 0,
y:'300px', 
delay:'.3',
stagger:'.3'
})





// testimonials animations

gsap.from([".testimonials .text .title",".testimonials .slider .slide",'.testimonials .show'],{
  scrollTrigger:{
    trigger:'.testimonials .slider', 
  },
  opacity:0,
  y:'100px',
  stagger:'.2'
})


// footer animations
gsap.from([".footer .head",".footer .para",".footer .form .name",".footer .form .email",".footer .form .submit-btn",".footer .footer-lists .amino",".footer .footer-lists .about",".footer .footer-lists .learn",".footer .footer-lists .story",".footer .footer-lists .hire",".footer .sign-out"],{
  scrollTrigger:{
    trigger:'.footer .form .email', 
  },
  opacity:0,
  y:'100px',
  stagger:'.2'
})
