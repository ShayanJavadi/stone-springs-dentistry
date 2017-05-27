"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lastScrollTop = 0;

var NavControl = function () {
  function NavControl() {
    var _this2 = this;

    _classCallCheck(this, NavControl);

    this.headerTop = document.querySelector(".header-top--js");
    this.header = document.querySelector("header");
    this.hamburger = document.querySelector(".hamburger");
    this.cross = document.querySelector(".cross");
    this.dropDown = document.querySelector(".drop-down-nav");
    this.mobileHoverableLi = document.querySelector(".mobile-hoverable-li--js");
    this.hamburger.addEventListener('click', function () {
      return _this2.mobileNavDown();
    });
    this.cross.addEventListener('click', function () {
      return _this2.mobileNavUp();
    });
    this.mobileHoverableLi.addEventListener('click', function () {
      return _this2.mobileHoverableLiToggle();
    });
  }

  _createClass(NavControl, [{
    key: "mobileHoverableLiToggle",
    value: function mobileHoverableLiToggle() {
      this.mobileHoverableLi.classList.toggle('hoverable-li-active');
    }
  }, {
    key: "mobileNavDown",
    value: function mobileNavDown() {
      this.hamburger.classList.remove("active");
      this.cross.classList.add("active");
      this.dropDown.classList.add("active");
    }
  }, {
    key: "mobileNavUp",
    value: function mobileNavUp() {
      this.cross.classList.remove("active");
      this.hamburger.classList.add("active");
      this.dropDown.classList.remove("active");
    }
  }, {
    key: "detectScroll",
    value: function detectScroll() {
      var _this = this;
      window.addEventListener("scroll", function () {
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
          _this.headerTop.classList.add("header-top-mini");
          _this.header.classList.add("nav-up");
        } else {
          _this.headerTop.classList.remove("header-top-mini");
          _this.header.classList.remove("nav-up");
        }
        lastScrollTop = st;
      }, false);
    }
  }]);

  return NavControl;
}();

var navTest = new NavControl();
navTest.detectScroll();
