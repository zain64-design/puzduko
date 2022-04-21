
  AOS.init({once: true});
/******************************* navlink active ******************************/

window.addEventListener("scroll",function(){
  var header = document.querySelector("header");
  var navbar = document.querySelector("nav");
  header.classList.toggle("sticky",window.scrollY > 50);
  // navbar.classList.toggle("fixed-top",window.scrollY > 50);
});

// const nextIcon = '<img src="./images/icon-arrow-right.png" class="next">';
// const prevIcon = '<img src="./images/icon-arrow-left.png" class="prev">';
$('#testimonials-slider').owlCarousel({
  loop: true,
  margin: 23,
  stagePadding: 0,
  nav: false,
  dots: false,
  center: false,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 2000,
  autoplayHoverPause:true,
  navText: [
    // prevIcon,
    //   nextIcon
      '<i class="fa-regular fa-arrow-left-long" aria-hidden="true"></i>',
      '<i class="fa-regular fa-arrow-right-long" aria-hidden="true"></i>'
  ],
responsiveClass:true,
  responsive:{
      0:{
          items:1
      },
      575:{
          items:2
      },
      767:{
        items:2
    },
      991:{
          items:2
      },
      1199:{
        items:2
    },
    1399:{
      items:2
  }
  }
});

$('#app-slider').owlCarousel({
  loop: true,
  margin: 40,
  stagePadding: 0,
  nav: false,
  dots: false,
  center: false,
  autoplay: true,
  autoplayTimeout: 2500,
  smartSpeed: 2000,
  autoplayHoverPause:true,
  navText: [
    // prevIcon,
    //   nextIcon
      '<i class="fa-regular fa-arrow-left-long" aria-hidden="true"></i>',
      '<i class="fa-regular fa-arrow-right-long" aria-hidden="true"></i>'
  ],
responsiveClass:true,
  responsive:{
      0:{
          items:1
      },
      575:{
          items:2
      },
      767:{
        items:3
    },
      991:{
          items:5
      },
      1199:{
        items:5
    },
    1399:{
      items:5
  }
  }
});