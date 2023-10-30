$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend({
    start: 0,
    end: 100,
    easing: 'swing',
    duration: 400,
    complete: ''
  }, options);

  var thisElement = $(this);

  $({ count: settings.start }).animate({ count: settings.end }, {
    duration: settings.duration,
    easing: settings.easing,
    step: function () {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};


$('#number1').jQuerySimpleCounter({ end: 232, duration: 3000 });
$('#number2').jQuerySimpleCounter({ end: 521, duration: 3000 });
$('#number3').jQuerySimpleCounter({ end: 1463, duration: 2000 });
$('#number4').jQuerySimpleCounter({ end: 15, duration: 2500 });



/* AUTHOR LINK */
$('.about-me-img').hover(function () {
  $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
}, function () {
  $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
});

// Logic Here || Important Stuff Here!

let scrollToTop = document.getElementById("up");

window.onscroll = function () {
  scroll();
};

function scroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTop.style.display = "flex";
  } else {
    scrollToTop.style.display = "none";
  }
}


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


$(document).ready(function () {
  $(".question-slide").ready(function () {
    $(".ans-slide").hide();
  })

  $(".question-slide").click(function () {
    $(".ans-slide").slideToggle(200);
  })
})

$(document).ready(function () {
  $(".question-slide1").ready(function () {
    $(".ans-slide1").hide();
  })

  $(".question-slide1").click(function () {
    $(".ans-slide1").slideToggle(200);
  })
})

$(document).ready(function () {
  $(".question-slide2").ready(function () {
    $(".ans-slide2").hide();
  })

  $(".question-slide2").click(function () {
    $(".ans-slide2").slideToggle(200);
  })
})

$(document).ready(function () {
  $(".question-slide3").ready(function () {
    $(".ans-slide3").hide();
  })

  $(".question-slide3").click(function () {
    $(".ans-slide3").slideToggle(200);
  })
})

$(document).ready(function () {
  $(".question-slide4").ready(function () {
    $(".ans-slide4").hide();
  })

  $(".question-slide4").click(function () {
    $(".ans-slide4").slideToggle(200);
  })
})