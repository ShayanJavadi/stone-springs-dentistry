//waypoints

let lastScrollTop = 0;

class NavControl {
  constructor() {
    this.headerTop = document.querySelector(".header-top--js");
  }

  detectScroll() {
    let _this = this;
    window.addEventListener("scroll", function(){
       let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
       if (st > lastScrollTop){
         _this.headerTop.classList.add("header-top-mini");
       } else {
         _this.headerTop.classList.remove("header-top-mini");
       }
       lastScrollTop = st;
    }, false);
  }
}

navTest = new NavControl;
navTest.detectScroll();
// slider

class Slider {
  constructor(slideTime) {
    let slider = document.querySelector(".slider--js");
    this.slider = slider;
    this.currentSlide = "1";
    this.slideTime = slideTime || 3000;
  }

  start() {
    //fix scope issues
    let _this = this;
    setInterval(function(){

      //remove current slide
      _this.slider.classList.remove("section-hero-" + _this.currentSlide);
      //reset back to 1 since we only have a certain amount of slides
      // TODO: make number of slides dynamic

      if (_this.currentSlide === 3) {
        _this.currentSlide = "0";
      }
      //iterate once
      _this.currentSlide++;

      //re-trigger css animation
      _this.slider.style.webkitAnimation = 'none';
        setTimeout(function() {
        _this.slider.style.webkitAnimation = '';
        _this.slider.classList.remove("loading");
      }, 10);

      //add the next slide
      _this.slider.classList.add("section-hero-" + _this.currentSlide);
      //hide div at first so it doens't load twice
      _this.slider.classList.add("loading");
    }, _this.slideTime);
  }
}

slider = new Slider(10000);
slider.start();
