jQuery(document).ready(function ($) {
  $(".collps").click(function () {
    //alert("The paragraph was clicked.");
    $(".newTicker").toggleClass("transform");

    $(this).first().toggleClass("transformsvg");
  });
  
  // Home Page Latest Event Slick Slider
  jQuery(".latestEvent_slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // logo gallery slider
  jQuery(".gallery-wrap").slick({
    dots: false,
    arrows: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // start Banner slider

  jQuery(".slider-banner-coer .slick_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: ".next",
    prevArrow: " .previous",
  });
  // End Banner slider

  // testinomical slider
  jQuery(
    ".content-wrap-testimonial .user-monial-coer .testimonial-content"
  ).slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: ".testi-next",
    prevArrow: ".testi-previous",
  });

  // video popup init
  if (jQuery(".has-video-popup").length > 0) {
    jQuery(".has-video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }

  //++++ ++++++ for Latest News Event clander Notice board

  // jQuery(".coer-latestNewsEventNotice .news-block").slick({
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: true,
  //   nextArrow: ".news-next",
  //   prevArrow: ".news-previous",
  //   responsive: [
  //     {
  //       breakpoint: 9999,
  //       settings: "unslick",
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         // infinite: true,
  //         arrows: true,
  //       },
  //     },
  //   ],
  // });

  // jQuery(".coer-latestNewsEventNotice .event-block ").slick({
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: true,
  //   nextArrow: ".events-next",
  //   prevArrow: ".events-previous",
  //   responsive: [
  //     {
  //       breakpoint: 9999,
  //       settings: "unslick",
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         arrows: true,
  //       },
  //     },
  //   ],
  // });
  // jQuery(".coer-latestNewsEventNotice .notice-block ").slick({
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: true,
  //   nextArrow: ".notice-next",
  //   prevArrow: ".notice-previous",
  //   responsive: [
  //     {
  //       breakpoint: 9999,
  //       settings: "unslick",
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         arrows: true,
  //       },
  //     },
  //   ],
  // });

  // for Latest News Event clander Notice board END

  // toggle open colse menus for sublinks
  // jQuery(" .quick-links-menu a").click(function () {
  //   jQuery(".quick-links-sub-menu").slideToggle("slow");
  //   jQuery(" .quick-links-menu").toggleClass("show");
  // });
  // toggle navbar menu
  jQuery(".navbar-toggler").click(function () {
    jQuery("body").toggleClass("scrollColse");
    if (jQuery(window).width() < 1200) {
      jQuery(".navbar-nav").slideToggle("slow");
      jQuery(" .navbar-toggler").toggleClass("open");
    }
  });

  jQuery(window).resize(function () {
    if (jQuery(window).width() > 1199) {
      // jQuery("body").toggleClass("scrollColse");
      jQuery(
        ".top-link-header .coer-header .custom_navbar .menu_bar .navbar-nav"
      ).css("display", "flex !important");
    }
  });

  jQuery(
    ".navbar-nav li.menu-item-has-children  .dropdown-toggle ,.navbar-nav li.quick-links-menu  a.nav-link "
  ).on("click", function () {
    if (jQuery(window).width() < 1200) {
      if (jQuery(this).hasClass("active")) {
        jQuery(
          ".navbar-nav li.menu-item-has-children  .dropdown-toggle, .navbar-nav li.quick-links-menu  a.nav-link "
        ).removeClass("active");

        jQuery(this)
          .siblings(
            ".dropdown-menu ,  li.quick-links-menu ul.quick-links-sub-menu"
          )
          .slideUp("slow");
      } else {
        jQuery(
          ".navbar-nav li.menu-item-has-children  .dropdown-toggle , .navbar-nav li.quick-links-menu  a.nav-link "
        ).removeClass("active");
        jQuery(this).addClass("active");
        jQuery(
          ".dropdown-menu,  li.quick-links-menu ul.quick-links-sub-menu"
        ).slideUp("slow");
        jQuery(this)
          .siblings(
            ".dropdown-menu,  li.quick-links-menu ul.quick-links-sub-menu"
          )
          .slideDown("slow");
      }
    }
  });

  // jQuery(".navbar-nav li.menu-item-has-children .dropdown-toggle").on("click", function () {
  //   if (jQuery(window).width() < 1200) {
  //     var jQuerybox = jQuery(this).closest(".menu-item-has-children");
  //     jQuerybox.siblings().find(".dropdown-menu").stop().slideUp("slow");
  //     jQuerybox.find(".dropdown-menu").stop().slideToggle("slow");
  //   }
  //   // console.log(this);
  // });

  // header sticky

  jQuery(window).scroll(function () {
    var sticky = jQuery(".coer-header"),
      scroll = jQuery(window).scrollTop();

    if (scroll > 20) {
      sticky.addClass("coer-header-sticky");
    } else sticky.removeClass("coer-header-sticky");
  });

  // footer open colse menu below 767
  jQuery(" .footer-1 .widget .footer-title ").click(function () {
    jQuery(".footer-1 .widget .touch-ul").slideToggle("slow");
    jQuery(".footer-1 .widget .footer-title ").toggleClass("show");
  });
  jQuery(".footer-2 .widget .footer-title").click(function () {
    jQuery(" .footer-2 .widget .menu-courses ").slideToggle("slow");
    jQuery(" .footer-2 .widget .footer-title ").toggleClass("show");
  });
  jQuery(".footer-3 .widget .footer-title").click(function () {
    jQuery(".footer-3 .widget .recent-post-widget").slideToggle("slow");
    jQuery(".footer-3 .widget .footer-title").toggleClass("show");
  });

  // scrollTop init
  // var totop = jQuery('#scrollUp');
  jQuery(window).on("scroll", function () {
    if (jQuery(window).scrollTop() > 150) {
      jQuery("#scrollUp").fadeIn();
    } else {
      jQuery("#scrollUp").fadeOut();
    }
  });
  jQuery("#scrollUp").on("click", function () {
    jQuery("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  // start Banner slider
  jQuery(".libraryGalleryImg-slider .slick_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: ".galleryNext",
    prevArrow: ".galleryPrevious",
  });

  // display faculty emailid k21102021
  jQuery("body").on("click", ".profile_email", function (e) {
    var value = jQuery(this).data("emailid");
    jQuery("a.profile_email").replaceWith(value);
  });

  // for load masonary  after image load
  Promise.all(
    Array.from(document.images)
      .filter((img) => !img.complete)
      .map(
        (img) =>
          new Promise((resolve) => {
            img.onload = img.onerror = resolve;
          })
      )
  ).then(() => {
    var msnry = new Masonry(".commonMasonryLayout");
    msnry.layout();
  });

  /* sortByFilter */
  jQuery("#selectDepartments").on("change", function (event) {
    event.preventDefault();
    value = $(this).val();
    window.location.href = value;
  });

  jQuery("#selectYear").on("change", function (event) {
    event.preventDefault();
    value = $(this).val();
    window.location.href = value;
  });

  jQuery("#selectMonth").on("change", function (event) {
    event.preventDefault();
    value = $(this).val();
    window.location.href = value;
  });
jQuery(window).scroll(function() {    
	
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 200) {
       
        jQuery(".department_sections").addClass("sticky");
    } else {
	jQuery(".department_sections").removeClass("sticky");
	}
});

if(jQuery(window.location.hash).length > 0){
        jQuery('html, body').animate({ scrollTop: jQuery(window.location.hash).offset().top}, 450);
}
window.onhashchange = function() {
jQuery('.active').removeClass('active');
var hash = window.location.hash;
jQuery( ".btn-group a[href='"+hash+"']" ).addClass('active');
}
});

// Course Info load more js
jQuery(function () {
  jQuery(".single-departments .coer-coursesCategories .courseInfoCol").slice(0, 6).show();
// 	let btn= jQuery(".coer-coursesCategories .container .load-more-btn .load-more") ;
  jQuery("body").on("click ", ".coer-coursesCategories .container .load-more-btn .load-more ", function (e) {
   		e.preventDefault();
    jQuery(".single-departments .coer-coursesCategories .courseInfoCol:hidden").slice(0, 3).slideDown();
    if(jQuery(".single-departments .coer-coursesCategories .courseInfoCol:hidden").length == 0) {
      jQuery(".single-departments .coer-coursesCategories .load-more-btn").css("visibility", "hidden");
    }

  });
});

// Faculty Profile load more js
jQuery(function () {
  jQuery(".single-departments .faculty-list .faculty-profile-row .faculty-profile-col").slice(0, 6).show();
  jQuery(".f-load-more-btn .f-load-more").click( function (e) {
// 	console.log("hihi");
//     e.preventDefault();
	jQuery(".single-departments .faculty-list .faculty-profile-row .faculty-profile-col:hidden").slice(0, 3).slideDown();
    if(jQuery(".single-departments .faculty-list .faculty-profile-row .faculty-profile-col:hidden").length == 0) {
      jQuery(".f-load-more-btn").css("visibility", "hidden");
    }

  });
});


// Labs & Facilitie load more js
jQuery(function () {
  jQuery(".coer-3dbackfrontBox .coer-3dBox-col").slice(0, 3).show();
  jQuery("body").on("click", ".coer-3dbackfrontBox .load-more-btn .load-more", function (e) {
    e.preventDefault();
	jQuery(".coer-3dbackfrontBox .coer-3dBox-col:hidden").slice(0, 3).slideDown();
    if(jQuery(".coer-3dbackfrontBox .coer-3dBox-col:hidden").length == 0) {
      jQuery(".coer-3dbackfrontBox .load-more-btn").css("visibility", "hidden");
    }
  });
});

// Info About Department load more js
jQuery(function () {
  jQuery(".briefInfoFullContent p").slice(0, 0).show();
  jQuery("body").on("click ", ".briefInfoFullContent .load-more-btn .load-more", function (e) {
    e.preventDefault();
    jQuery(".briefInfoFullContent p:hidden").slice(0, 3).slideDown();
    if (jQuery(".briefInfoFullContent p:hidden").length == 0) {
      jQuery(".briefInfoFullContent .load-more-btn").css("visibility", "hidden");
    }
  });
});

// Info About Department load more js
jQuery(function () {
  jQuery(".hodMessageFullContent p").slice(0, 0).show();
  jQuery("body").on("click ", ".hodMessageFullContent .load-more-btn .load-more", function (e) {
    e.preventDefault();
    jQuery(".hodMessageFullContent p:hidden").slice(0, 3).slideDown();
    if (jQuery(".hodMessageFullContent p:hidden").length == 0) {
      jQuery(".hodMessageFullContent .load-more-btn").css("visibility", "hidden");
    }
  });
});

// Important Notes load more js
jQuery(function () {
  jQuery(".importantNotesList").slice(0, 6).show();
  jQuery("body").on("click ", ".coer-noticeBoardFilterSearch .noticeBoardList .load-more-btn .load-more", function (e) {
    e.preventDefault();
	jQuery(".importantNotesList:hidden").slice(0, 3).slideDown();
    if(jQuery(".importantNotesList:hidden").length == 0) {
      jQuery(".coer-noticeBoardFilterSearch .noticeBoardList .load-more-btn").css("visibility", "hidden");
    }
  });
});

// function tickerSlick() {
//   setTimeout(function () {
//     var slideCount = null;
//     $ticker = jQuery("#ticker01");
//     if ($ticker.hasClass("slick-initialized")) {
//       $ticker.slick("unslick");
//     }
//     $ticker.on("init", function (event, slick) {
//       slideCount = slick.slideCount;
//       jQuery("span.tst").text(slideCount);
//     });
//     $ticker.slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       vertical: true,
//       infinite: true,
//       autoplay: true,
//       speed: 300,
//       prevArrow: jQuery(".newTicker .NewsTickerSlider .arrows .prev"),
//       nextArrow: jQuery(".newTicker .NewsTickerSlider .arrows .next"),
//     });
//     $ticker.on(
//       "beforeChange",
//       function (event, slick, currentSlide, nextSlide) {
//         setCurrentSlideNumber(nextSlide);
//       }
//     );

//     function setCurrentSlideNumber(currentSlide) {
//       jQuery("span.csc").text(currentSlide + 1);
//     }
//   }, 1);
// }
//TICKER JS
// tickerSlick();
/*------------- Updates Ajax------------*/
// jQuery(".newTicker").on("click", ".dropdown-menu > a", function (e) {
//   e.preventDefault();
//   tab_id = $(this).attr("data-id");
//   $.ajax({
//     url: frontend_ajax_object.ajaxurl,
//     data: {
//       action: "announcement_section",
//       tab_id: tab_id,
//     },
//     dataType: "JSON",
//     success: function (data) {
//       if (data) {
//         jQuery("#ticker01").replaceWith(data.slides);
//         jQuery(".tickerCollapse .all > a").attr("href", data.link);
//         tickerSlick();
//       }
//     },
//     error: function (error) {
//       console.log("error " + error);
//     },
//   });
// });