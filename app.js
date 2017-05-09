//
//
// slider.classList.remove("section-hero-1");
// slider.classList.add("section-hero-2");
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
      //add the next slide
      _this.slider.classList.add("section-hero-" + _this.currentSlide);

    }, _this.slideTime);
  }
}

slider = new Slider(2000);
slider.start();
