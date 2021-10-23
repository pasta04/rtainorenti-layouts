/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/browser/dashboard/views/edit-tourny.tsx":
/*!*****************************************************!*\
  !*** ./src/browser/dashboard/views/edit-tourny.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/TableCell.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/TableHead.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/TableRow.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");











const Description = () => react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u73FE\u5728\u306E\u30B2\u30FC\u30E0\u306E\u8D70\u8005\u6B04\u3092\u3001\u4E8B\u524D\u306B\u767B\u9332\u3057\u3066\u304A\u3044\u305F\u3082\u306E\u306B\u30EF\u30F3\u30AF\u30EA\u30C3\u30AF\u3067\u5165\u308C\u66FF\u3048\u308B\u6A5F\u80FD\u3067\u3059"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u3053\u306E\u753B\u9762\u3092\u66F4\u65B0\u3059\u308B\u3068\u767B\u9332\u3055\u308C\u305F\u3082\u306E\u306F\u3059\u3079\u3066\u6D88\u3048\u308B\u306E\u6C17\u3092\u3064\u3051\u3066\u304F\u3060\u3055\u3044"));

const TmpRunnerContainer = props => {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u540D\u524D"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Twitter"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Twitch"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u30CB\u30B3\u30CB\u30B3"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__["default"], null, props.tmpRunners.map(runner => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, runner.name), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, runner.twitter), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, runner.twitch), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, runner.nico), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: 'contained',
    onClick: () => {
      props.onSelect(0, runner);
    }
  }, "\u8D70\u80050\u306B\u4F7F\u3046")), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: 'contained',
    onClick: () => {
      props.onSelect(1, runner);
    }
  }, "\u8D70\u80051\u306B\u4F7F\u3046")))))));
};

class App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      tmpRunners: [],
      tmpName: '',
      tmpTwitch: '',
      tmpNico: '',
      tmpTwitter: ''
    };
    this.currentRunRep = nodecg.Replicant('current-run');
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'grid',
        gridAutoFlow: 'row',
        rowGap: '16px'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(Description, null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(TmpRunnerContainer, {
      tmpRunners: this.state.tmpRunners,
      onSelect: (index, runner) => {
        if (!this.currentRunRep.value) {
          return;
        }

        if (index !== 0 && index !== 1) {
          return;
        }

        this.currentRunRep.value.runners[index] = runner;
      }
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        padding: '8px',
        display: 'grid',
        gridAutoFlow: 'row',
        rowGap: '8px'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: '\u540D\u524D',
      value: this.state.tmpName,
      onChange: e => {
        this.setState({
          tmpName: e.target.value
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: 'Twitter',
      value: this.state.tmpTwitter,
      onChange: e => {
        this.setState({
          tmpTwitter: e.target.value
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: 'Twitch',
      value: this.state.tmpTwitch,
      onChange: e => {
        this.setState({
          tmpTwitch: e.target.value
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: '\u30CB\u30B3\u30CB\u30B3',
      value: this.state.tmpNico,
      onChange: e => {
        this.setState({
          tmpNico: e.target.value
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: 'contained',
      onClick: () => {
        this.setState(state => ({
          tmpRunners: [...state.tmpRunners, {
            name: state.tmpName,
            nico: state.tmpNico,
            twitter: state.tmpTwitter,
            twitch: state.tmpTwitch
          }]
        }), () => {
          this.setState({
            tmpName: '',
            tmpNico: '',
            tmpTwitch: '',
            tmpTwitter: ''
          });
        });
      }
    }, "\u8FFD\u52A0")));
  }

}

react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById('root'));

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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"edit-tourny": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common-node_modules_react-dom_index_js","vendors-node_modules_material-ui_core_esm_Button_Button_js-node_modules_material-ui_core_esm_-f8b95b","vendors-node_modules_material-ui_core_esm_TableBody_TableBody_js-node_modules_material-ui_cor-cacb47"], () => (__webpack_require__("./src/browser/dashboard/views/edit-tourny.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=edit-tourny.js.map