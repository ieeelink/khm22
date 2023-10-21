
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(()=> {preloader.remove();
      },2000);
    });
  }


  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });


  let countdown = document.querySelector('.countdown');
  const output = countdown.innerHTML;
  
  const targetDate = new Date('2023-11-19T00:00:00').getTime(); // November 19, 2023
  
  const countDownDate = function() {
    let timeleft = targetDate - new Date().getTime();
  
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  
    countdown.innerHTML = output.replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
  }
  countDownDate();
  setInterval(countDownDate, 1000);
  
     particlesJS('particles-js',
     {
         "particles": {
           "number": {
             "value": 241,
             "density": {
               "enable": true,
               "value_area": 800
             }
           },
           "color": {
             "value": "#ffbd0a"
           },
           "shape": {
             "type": "circle",
             "stroke": {
               "width": 0,
               "color": "#000000"
             },
             "polygon": {
               "nb_sides": 5
             },
             "image": {
               "src": "img/github.svg",
               "width": 100,
               "height": 100
             }
           },
           "opacity": {
             "value": 1,
             "random": true,
             "anim": {
               "enable": true,
               "speed": 1,
               "opacity_min": 0,
               "sync": false
             }
           },
           "size": {
             "value": 4,
             "random": true,
             "anim": {
               "enable": false,
               "speed": 4,
               "size_min": 0.3,
               "sync": false
             }
           },
           "line_linked": {
             "enable": false,
             "distance": 150,
             "color": "#ffffff",
             "opacity": 0.4,
             "width": 1
           },
           "move": {
             "enable": true,
             "speed": 2.5,
             "direction": "top",
             "random": true,
             "straight": false,
             "out_mode": "out",
             "bounce": false,
             "attract": {
               "enable": false,
               "rotateX": 600,
               "rotateY": 600
             }
           }
         },
         "interactivity": {
           "detect_on": "canvas",
           "events": {
             "onhover": {
               "enable": true,
               "mode": "bubble"
             },
             "onclick": {
               "enable": true,
               "mode": "repulse"
             },
             "resize": true
           },
           "modes": {
             "grab": {
               "distance": 400,
               "line_linked": {
                 "opacity": 1
               }
             },
             "bubble": {
               "distance": 250,
               "size": 0,
               "duration": 2,
               "opacity": 0,
               "speed": 3
             },
             "repulse": {
               "distance": 400,
               "duration": 0.4
             },
             "push": {
               "particles_nb": 4
             },
             "remove": {
               "particles_nb": 2
             }
           }
         },
         "retina_detect": true
       }
     );
     
     

});