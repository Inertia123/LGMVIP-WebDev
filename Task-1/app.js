window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})


const swiper = new Swiper('.swiper-container', {
  
  pagination: {
    el: '.swiper-pagination',
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  
  tl.to(".text", { y: "0%", duration: 1, stagger: 0.45 });
  tl.to(".intro", { y: "-100%", duration: 1.2 });
  tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
  tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");