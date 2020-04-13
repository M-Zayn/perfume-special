
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".pre-loader").fadeOut(500, function () {
      $(this).remove();
      $('html, body').css("overflow-y", "visible");


  });
});

  AOS.init();
  
  
$(function() {



  $(".nav-bar .zx-container .sm-screan button .lnr-magnifier").on("click", function() {
    $(this).toggleClass("lnr-magnifier");
    $(this).toggleClass("lnr-cross");
    $(".nav-bar .zx-container .search").toggleClass("show");
    // $(".search-overlay").fadeIn();
  });
  // $(".search-overlay").on("click", function() {
  //   $(".nav-bar .search-popup").removeClass("show");
  //   $(this).fadeOut();
  // });
  
  // $('a[data-scroll]').on("click",function (e){
  //   e.preventDefault();    
    
  //   $("html, body").animate({
  //     scrollTop: $($(this).attr("data-scroll")).offset().top
  //   }, 1000);
  // });

    $('.header .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:0,
      dots:true,
      nav:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    });

    
    

    

    if($(window).width() < 992) {

      
      $(".footer .footer-slide").removeAttr("data-aos");
      
      $(".footer .footer-slide h3").on("click", function() {
        $(this).toggleClass("active");
        $(this).siblings("ul").slideToggle();
      });
    } else {

    }
  

  // menu - search



    $(".nav-bar .zx-container .sm-screan button .lnr-menu").on("click", function() {
      $(".fixed-menu").fadeIn();
      $(".fixed-menu .menu").addClass("show");
      $(".fixed-menu .menu .menu-list ul").addClass("active");
      $('html, body').css("overflow-y", "hidden");
    });
    $(".fixed-menu, .close").on("click", function() {
      $(".fixed-menu").fadeOut();
      $(".fixed-menu .menu").removeClass("show");
      $(".fixed-menu .menu .menu-list ul").removeClass("active");
      $('html, body').css("overflow-y", "visible");
    });
    $(".fixed-menu .menu").on("click", function(e) {
      e.stopPropagation();
    });

    $(".fixed-menu .menu .menu-list ul .slide").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
      });
    
  

  
});