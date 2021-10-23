/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/browser/graphics/components/clock.tsx":
/*!***************************************************!*\
  !*** ./src/browser/graphics/components/clock.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clock": () => (/* binding */ Clock)
/* harmony export */ });
/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/common.css */ "./src/browser/graphics/styles/common.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_it_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @use-it/interval */ "./node_modules/@use-it/interval/dist/interval.m.js");





const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])({
  root: {
    position: 'absolute',
    color: 'white',
    fontFamily: 'PressStart2P',
    textAlign: 'center'
  }
});
const Clock = props => {
  const classes = useStyles({}); // 現在時刻

  const [now, setNow] = react__WEBPACK_IMPORTED_MODULE_1__.useState(new Date().getTime());
  (0,_use_it_interval__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    setNow(new Date().getTime());
  }, 100);
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.root,
    style: { ...props
    }
  }, props.type === 'line' ? react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, moment__WEBPACK_IMPORTED_MODULE_2___default()(now).format('YYYY/MM/DD HH:mm:ss'))) : react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, moment__WEBPACK_IMPORTED_MODULE_2___default()(now).format('YYYY/MM/DD')), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, moment__WEBPACK_IMPORTED_MODULE_2___default()(now).format('HH:mm:ss'))));
};

/***/ }),

/***/ "./src/browser/graphics/views/rr_hd2.tsx":
/*!***********************************************!*\
  !*** ./src/browser/graphics/views/rr_hd2.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/common.css */ "./src/browser/graphics/styles/common.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _images_logo_R2_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/logo/R2_1.png */ "./src/browser/graphics/images/logo/R2_1.png");
/* harmony import */ var _images_background_background_rr_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/background/background-rr.png */ "./src/browser/graphics/images/background/background-rr.png");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util */ "./src/browser/util/index.ts");
/* harmony import */ var _components_clock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/clock */ "./src/browser/graphics/components/clock.tsx");
/* harmony import */ var _images_icon_star_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/icon/star.png */ "./src/browser/graphics/images/icon/star.png");









const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 720;
const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"])({
  root: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },

  /** ロゴの位置 */
  logo: {
    position: 'absolute',
    width: 325,
    top: -90
  },

  /** 走者名1P */
  runInfoArea1p: {
    position: 'absolute',
    top: 165,
    left: 200,
    color: 'blue',
    fontSize: 30,
    width: 430,
    height: 90
  },

  /** 走者名2P */
  runInfoArea2p: {
    position: 'absolute',
    top: 165,
    left: 660,
    color: 'blue',
    fontSize: 30,
    width: 430,
    textAlign: 'right',
    height: 90
  },

  /** ゲーム名エリア */
  gameArea: {
    height: 65
  },

  /** カテゴリ名エリア */
  categoryArea: {
    width: 650
  },

  /** ラベル */
  runInfoLabel: {
    fontFamily: 'PressStart2P',
    fontSize: 25
  },

  /** 走者名ラベル1P */
  runInfoValue1p: {
    paddingLeft: '1em',
    fontFamily: 'PixelMplus10'
  },

  /** 走者名ラベル2P */
  runInfoValue2p: {
    paddingRight: '1em',
    fontFamily: 'PixelMplus10'
  },

  /** ゲーム名とカテゴリ名 */
  gameValue: {
    paddingLeft: '3em',
    fontFamily: 'PixelMplus10'
  },

  /** 解説者エリア */
  commentatorArea: {
    position: 'absolute',
    top: 670,
    left: 10,
    color: 'green',
    width: 400
  },

  /** 解説者のラベル */
  commentatorLabel: {
    fontFamily: 'PressStart2P',
    fontSize: 18
  },

  /** 解説者名 */
  commentators: {
    fontFamily: 'PixelMplus10',
    fontSize: 22,
    marginLeft: '1em',
    wordBreak: 'keep-all'
  },

  /** 見えなくする */
  hidden: {
    visibility: 'hidden'
  },
  round1p: {
    position: 'absolute',
    top: 125,
    left: 10,
    width: 200,
    textAlign: 'center'
  },
  round2p: {
    position: 'absolute',
    top: 125,
    left: 1070,
    width: 200,
    textAlign: 'center'
  },
  roundTitle: {
    position: 'absolute',
    top: 560,
    left: 340,
    width: 600,
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'PixelMplus10'
  },
  starEffect: {
    animation: '$round-get 1 0.5s linear'
  },
  '@keyframes round-get': {
    '0%': {
      transform: 'scale(3,3)'
    },
    '100%': {
      transform: 'scale(1,1)'
    }
  }
});
const currentRunRep = nodecg.Replicant('current-run');
const tournamentRep = nodecg.Replicant('tournamentCurrent');

const App = () => {
  var _runners$runners$, _runners$runners$2;

  const classes = useStyles({});
  const canvasRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const [runners, setRunners] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);

  const runnerHandler = newVal => setRunners(newVal && { ...newVal
  });

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    currentRunRep.on('change', runnerHandler);
    return () => {
      currentRunRep.removeListener('change', runnerHandler);
    };
  }, [currentRunRep]);
  const [tournament, setTournament] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
    title: '',
    runner1: {
      round: 0
    },
    runner2: {
      round: 0
    },
    runner3: {
      round: 0
    },
    runner4: {
      round: 0
    }
  });

  const tournamentHandler = newVal => {
    setTournament(newVal && { ...newVal
    });
  };

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    tournamentRep.on('change', tournamentHandler);
    return () => {
      tournamentRep.removeListener('change', tournamentHandler);
    };
  }, [tournamentRep]); // 背景画像

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const image = new Image();
    image.src = _images_background_background_rr_png__WEBPACK_IMPORTED_MODULE_4__["default"];
    image.addEventListener('load', function () {
      // 背景画像
      canvas.width = SCREEN_WIDTH;
      canvas.height = SCREEN_HEIGHT;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0); // 映像の領域を切り取り

      ctx.globalCompositeOperation = 'xor';
      const gameW = 620;
      const gameH = 349;
      const timerW = 200;
      const timerH = 40; // ゲーム1

      ctx.fillRect(10, 205, gameW, gameH); // ゲーム2

      ctx.fillRect(650, 205, gameW, gameH); // 走者1タイマー

      ctx.fillRect(10, 165, timerW, timerH); // 走者2タイマー

      ctx.fillRect(1070, 165, timerW, timerH);
    });
  });

  const numToStar = round => {
    let dom = [];

    for (let i = 0; i < round; i++) {
      dom.push(react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
        key: i,
        src: _images_icon_star_png__WEBPACK_IMPORTED_MODULE_7__["default"],
        width: 30,
        className: classes.starEffect
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, dom.map(a => a));
  };

  const commentators = (runners === null || runners === void 0 ? void 0 : runners.commentators.map(commentator => {
    return `${commentator.name}`;
  }).join('　')) ?? '';
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    className: classes.logo,
    src: _images_logo_R2_1_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_clock__WEBPACK_IMPORTED_MODULE_6__.Clock, {
    top: 8,
    left: 815,
    fontSize: 24,
    type: 'line',
    color: 'yellow'
  })), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.runInfoArea1p
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.runInfoValue1p
  }, (runners === null || runners === void 0 ? void 0 : (_runners$runners$ = runners.runners[0]) === null || _runners$runners$ === void 0 ? void 0 : _runners$runners$.name) ?? '')), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.runInfoArea2p
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.runInfoValue2p
  }, (runners === null || runners === void 0 ? void 0 : (_runners$runners$2 = runners.runners[1]) === null || _runners$runners$2 === void 0 ? void 0 : _runners$runners$2.name) ?? '')), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.roundTitle
  }, tournament.title), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      position: 'absolute',
      left: 440,
      top: 570
    }
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.gameArea
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.runInfoLabel
  }, "GAME"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.gameValue,
    style: {
      fontSize: (0,_util__WEBPACK_IMPORTED_MODULE_5__.calcWidthFitFontSize)((runners === null || runners === void 0 ? void 0 : runners.title) ?? '', 600, 12, 22, 'px', 'PixelMplus10')
    }
  }, runners === null || runners === void 0 ? void 0 : runners.title)), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.categoryArea
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.runInfoLabel
  }, "CATEGORY"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.gameValue,
    style: {
      fontSize: (0,_util__WEBPACK_IMPORTED_MODULE_5__.calcWidthFitFontSize)((runners === null || runners === void 0 ? void 0 : runners.category) ?? '', 600, 12, 22, 'px', 'PixelMplus10')
    }
  }, runners === null || runners === void 0 ? void 0 : runners.category))), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.round1p
  }, numToStar(tournament.runner1.round)), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.round2p
  }, numToStar(tournament.runner2.round)), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.commentatorArea
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.commentatorLabel
  }, "COMMENTATOR"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.commentators,
    style: {
      fontSize: (0,_util__WEBPACK_IMPORTED_MODULE_5__.calcWidthFitFontSize)(commentators ?? '', 420, 12, 22, 'px', 'PixelMplus10')
    }
  }, commentators)), react__WEBPACK_IMPORTED_MODULE_1__.createElement("canvas", {
    ref: canvasRef,
    id: 'background',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  }));
};

react_dom__WEBPACK_IMPORTED_MODULE_2__.render(react__WEBPACK_IMPORTED_MODULE_1__.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./src/browser/util/index.ts":
/*!***********************************!*\
  !*** ./src/browser/util/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcWidthFitFontSize": () => (/* binding */ calcWidthFitFontSize)
/* harmony export */ });
/**
 * 横幅に合わせていい感じにフォントサイズを調整する
 * @param text テキスト
 * @param maxWidth 横幅最大値
 * @param minFontSize フォントサイズ最小値
 * @param initSize フォントサイズ初期値
 * @param unit フォントサイズ単位。pxとか。
 * @param fontFamily フォントの種類
 */
const calcWidthFitFontSize = (text, maxWidth, minFontSize, initSize, unit, fontFamily) => {
  var _document$querySelect;

  // 幅計算用のエレメント作る
  const elem = document.createElement('span');
  elem.style.visibility = 'hidden';
  elem.style.fontFamily = fontFamily;
  elem.style.fontSize = `${initSize}${unit}`;
  elem.innerText = text; // FIXME: DOMにマウントしたくない

  (_document$querySelect = document.querySelector('body')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.append(elem);
  let fontSize = initSize;
  let tempWidth = elem.offsetWidth;

  while (tempWidth >= maxWidth && fontSize > minFontSize) {
    --fontSize;
    elem.style.fontSize = `${fontSize}${unit}`;
    tempWidth = elem.offsetWidth;
  }

  elem.remove();
  return fontSize;
};

/***/ }),

/***/ "./src/browser/graphics/images/background/background-rr.png":
/*!******************************************************************!*\
  !*** ./src/browser/graphics/images/background/background-rr.png ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "background-rr.904a81836c3758d60b1678a1e965408d.png");

/***/ }),

/***/ "./src/browser/graphics/images/icon/star.png":
/*!***************************************************!*\
  !*** ./src/browser/graphics/images/icon/star.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "star.55698380280704e4f143e9e16f99fb6b.png");

/***/ }),

/***/ "./src/browser/graphics/images/logo/R2_1.png":
/*!***************************************************!*\
  !*** ./src/browser/graphics/images/logo/R2_1.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "R2_1.b899aa44e64c7d530adc992855786495.png");

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"rr_hd2": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkrtainorenti_layouts"] = globalThis["webpackChunkrtainorenti_layouts"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common-node_modules_material-ui_core_esm_styles_makeStyles_js-node_modules_use-it_interval_di-7046fc","vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-248d90"], () => (__webpack_require__("./src/browser/graphics/views/rr_hd2.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=rr_hd2.js.map