//h-menu
$(function() {
  $(".hamburger").on("click", function() {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".gl-nav").addClass("active");
    } else {
      $(".gl-nav").removeClass("active");
    }
  });
});

// Initialize Swiper
$(function() {
  var swiper = new Swiper(".swiper-container", {
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
});

//pagetop-btn faq-btn
$(document).ready(function() {
  $("#page_top, .faq").hide();
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 10) {
      $("#page_top, .faq").fadeIn("fast");
    } else {
      $("#page_top, .faq").fadeOut("fast");
    }
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      $("#page_top, .faq").css({
        position: "absolute",
        bottom: footHeight + 10
      });
    } else {
      $("#page_top, .faq").css({
        position: "fixed",
        bottom: "20px"
      });
    }
  });
  $("#page_top").click(function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      200
    );
    return false;
  });
  $(".faq").click(function() {
    $("https://lin.ee/aIKGTky").animate();
    return false;
  });
});

//スクロール
$(function() {
  $('a[href^="#"]').on("click", function() {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top - [50];
    // スムーススクロール
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
