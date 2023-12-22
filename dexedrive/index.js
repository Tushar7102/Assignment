// const header = document.querySelector("header");
// window.addEventListener("scroll",function (){
//   header.classList.toggle("sticky",window.scrollY > 0);})
  

var currSlide = 0,
  position = 'positionOne',
  rPos = ['98% 50%', '98% 50%', '13% 50%', '38% 50%', '0% 50%', '91% 50%'],
  nextbtn = document.querySelector('.button'),
  slidebtn = document.querySelector('.slide__right'),
  slideList = document.querySelectorAll('.slide__left .slideImage'),
  slideListRight = document.querySelectorAll('.slide__right .slideImage'),
  slideLen = slideList.length;


function setSlides() {
  slideList[currSlide].classList.add('active');
  slideListRight[currSlide].classList.add('active');
  slideListRight[0].style.objectPosition = rPos[0];
  slideListRight[1].style.objectPosition = rPos[1];
  slideListRight[2].style.objectPosition = rPos[2];

}

function advanceSlide() {
  console.log(position);
  slideList[currSlide].classList.add('prev');
  slideListRight[currSlide].classList.add('prev');
  currSlide++;
  if (currSlide > slideLen - 1) {
    currSlide = 0;
    changePos();
  }

  slideList[currSlide].classList.add('active');
  slideListRight[currSlide].classList.add('active');

  if (currSlide == slideLen - 1) {
    slideList[0].classList.remove('active', 'prev');
    slideListRight[0].classList.remove('active', 'prev');
  } else {
    slideList[currSlide + 1].classList.remove('active', 'prev');
    slideListRight[currSlide + 1].classList.remove('active', 'prev');
  }
}

function toggle(v) {
  return { positionOne: 'positionTwo', positionTwo: 'positionOne' }[v];
}

function changePos() {
  position = toggle(position);
  if (position == 'positionOne') {
    slideListRight[0].style.objectPosition = rPos[0];
    slideListRight[1].style.objectPosition = rPos[1];
    slideListRight[2].style.objectPosition = rPos[2];
  } else {
    slideListRight[0].style.objectPosition = rPos[3];
    slideListRight[1].style.objectPosition = rPos[4];
    slideListRight[2].style.objectPosition = rPos[5];
  }
}

setSlides();
nextbtn.onclick = advanceSlide;
slidebtn.onclick = advanceSlide;




$(".circle_percent").each(function () {
  var $this = $(this),
    $dataV = $this.data("percent"),
    $dataDeg = $dataV * 3.6,
    $round = $this.find(".round_per");
  $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
  $this.prop('Counter', 0).animate({ Counter: $dataV },
    {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $this.find(".percent_text").text(Math.ceil(now) + "%");
      }
    });
  if ($dataV >= 51) {
    $round.css("transform", "rotate(" + 360 + "deg)");
    setTimeout(function () {
      $this.addClass("percent_more");
    }, 1000);
    setTimeout(function () {
      $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
    }, 1000);
  }
});

new WOW().init();


