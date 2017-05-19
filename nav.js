
let lastScrollTop = 0;

class NavControl {
  constructor() {
    this.headerTop = document.querySelector(".header-top--js");
    this.header = document.querySelector("header");
    this.hamburger = document.querySelector(".hamburger");
    this.cross = document.querySelector(".cross");
    this.dropDown = document.querySelector(".drop-down-nav");
    this.hamburger.addEventListener('click', () => this.mobileNavDown());
    this.cross.addEventListener('click', () => this.mobileNavUp());
  }

  mobileNavDown() {
    this.hamburger.classList.remove("active");
    this.cross.classList.add("active");
    this.dropDown.classList.add("active");
  }


  mobileNavUp() {
    this.cross.classList.remove("active");
    this.hamburger.classList.add("active");
    this.dropDown.classList.remove("active");

  }


  detectScroll() {
    let _this = this;
    window.addEventListener("scroll", function(){
       let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
       if (st > lastScrollTop){
         _this.headerTop.classList.add("header-top-mini");
         _this.header.classList.add("nav-up");

       } else {
         _this.headerTop.classList.remove("header-top-mini");
         _this.header.classList.remove("nav-up");

       }
       lastScrollTop = st;
    }, false);
  }
}

let navTest = new NavControl;
navTest.detectScroll();
