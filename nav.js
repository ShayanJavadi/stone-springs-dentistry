
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
