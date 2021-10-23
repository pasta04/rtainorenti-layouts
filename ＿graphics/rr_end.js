/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/browser/graphics/views/rr_end.tsx":
/*!***********************************************!*\
  !*** ./src/browser/graphics/views/rr_end.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/common.css */ "./src/browser/graphics/styles/common.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _use_it_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @use-it/interval */ "./node_modules/@use-it/interval/dist/interval.m.js");
/* harmony import */ var _images_logo_R2_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/logo/R2_1.png */ "./src/browser/graphics/images/logo/R2_1.png");
/* harmony import */ var _images_background_background_rr_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/background/background-rr.png */ "./src/browser/graphics/images/background/background-rr.png");







const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 720;
const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"])(() => ({
  root: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    color: 'black'
  },
  logo: {
    position: 'absolute',
    width: 340,
    top: -100
  },
  loadingArea: {
    position: 'absolute',
    top: 330,
    left: 360,
    fontSize: 81,
    fontFamily: 'PressStart2P'
  }
}));

const Break = () => {
  const classes = useStyles({});
  const [loadingDot, setLoadingDot] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const canvasRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // 背景画像

    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    const image = new Image();
    image.src = _images_background_background_rr_png__WEBPACK_IMPORTED_MODULE_5__["default"];
    image.addEventListener('load', function () {
      // 背景画像
      canvas.width = SCREEN_WIDTH;
      canvas.height = SCREEN_HEIGHT;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
    });
  }, []);
  (0,_use_it_interval__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    let newDot = loadingDot;

    if (newDot.length === 3) {
      newDot = '';
    } else {
      newDot = `${newDot}.`;
    }

    setLoadingDot(newDot);
  }, 500);
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    className: classes.logo,
    src: _images_logo_R2_1_png__WEBPACK_IMPORTED_MODULE_4__["default"]
  })), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.loadingArea
  }, "THE END"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("canvas", {
    ref: canvasRef,
    id: 'background',
    width: SCREEN_WIDTH,
    height: 1080
  }));
};

react_dom__WEBPACK_IMPORTED_MODULE_2__.render(react__WEBPACK_IMPORTED_MODULE_1__.createElement(Break, null), document.getElementById('root'));

/***/ }),

/***/ "./src/browser/graphics/images/background/background-rr.png":
/*!******************************************************************!*\
  !*** ./src/browser/graphics/images/background/background-rr.png ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "background-rr.904a81836c3758d60b1678a1e965408d.png");

/***/ }),

/***/ "./src/browser/graphics/images/logo/R2_1.png":
/*!***************************************************!*\
  !*** ./src/browser/graphics/images/logo/R2_1.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "R2_1.b899aa44e64c7d530adc992855786495.png");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 			"rr_end": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common-node_modules_material-ui_core_esm_styles_makeStyles_js-node_modules_use-it_interval_di-7046fc"], () => (__webpack_require__("./src/browser/graphics/views/rr_end.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=rr_end.js.map