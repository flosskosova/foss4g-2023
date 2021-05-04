(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");






_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBell"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBookOpen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faClock"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFacebook"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFacebookF"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGitlab"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInstagram"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faKeybase"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLinkedin"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLinkedinIn"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMastodon"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMedium"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPinterest"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faReddit"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faRedditAlien"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faRss"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faStackOverflow"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTag"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTwitter"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faWeibo"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faYoutube"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  loadFontAwesome: () => {
    _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["dom"].watch();
  },
  bootstrapify: () => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content blockquote').addClass('blockquote');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content table').addClass('table');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content table').wrap('<div class="table-responsive" />');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content table thead').addClass('thead-dark');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content pre').wrap('<figure class="highlight" />');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content figure > img').addClass('img-fluid');
  },
  lazyload: async () => {
    const {
      default: LazyLoad
    } = await __webpack_require__.e(/*! import() | lazyload */ "lazyload").then(__webpack_require__.t.bind(null, /*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js", 7));
    new LazyLoad({
      thresholds: "40px 10%",
      load_delay: 100
    });
  },
  navbarFade: () => {
    let $position = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(() => {
      const $scroll = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
      const $navbarHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#navbar-main-menu.fixed-top').outerHeight();
      $scroll > $position ? jquery__WEBPACK_IMPORTED_MODULE_0___default()('#navbar-main-menu.fixed-top').css('top', -$navbarHeight) : jquery__WEBPACK_IMPORTED_MODULE_0___default()('#navbar-main-menu.fixed-top').css('top', 0);

      if ($scroll <= 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#navbar-main-menu.fixed-top').css('top', 0);
      }

      $position = $scroll;
    });
  },
  syntaxHighlight: () => {
    if (!window.Prism) {
      return;
    }

    Prism.highlightAll();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('pre:has(> code[class*=language-])').removeAttr('style');
    const element = jquery__WEBPACK_IMPORTED_MODULE_0___default()('pre:has(> code:not([class*=language-]))');
    element.addClass('language-none');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('> code', element).addClass('language-none');
  }
});

/***/ })

}]);
//# sourceMappingURL=app.js.map