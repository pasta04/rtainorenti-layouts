/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@material-ui/core/esm/Divider/Divider.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Divider/Divider.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 1,
      margin: 0,
      // Reset browser default style.
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider
    },

    /* Styles applied to the root element if `absolute={true}`. */
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },

    /* Styles applied to the root element if `variant="inset"`. */
    inset: {
      marginLeft: 72
    },

    /* Styles applied to the root element if `light={true}`. */
    light: {
      backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.divider, 0.08)
    },

    /* Styles applied to the root element if `variant="middle"`. */
    middle: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      height: '100%',
      width: 1
    },

    /* Styles applied to the root element if `flexItem={true}`. */
    flexItem: {
      alignSelf: 'stretch',
      height: 'auto'
    }
  };
};
var Divider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Divider(props, ref) {
  var _props$absolute = props.absolute,
      absolute = _props$absolute === void 0 ? false : _props$absolute,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'hr' : _props$component,
      _props$flexItem = props.flexItem,
      flexItem = _props$flexItem === void 0 ? false : _props$flexItem,
      _props$light = props.light,
      light = _props$light === void 0 ? false : _props$light,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$role = props.role,
      role = _props$role === void 0 ? Component !== 'hr' ? 'separator' : undefined : _props$role,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'fullWidth' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["absolute", "classes", "className", "component", "flexItem", "light", "orientation", "role", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, variant !== 'fullWidth' && classes[variant], absolute && classes.absolute, flexItem && classes.flexItem, light && classes.light, orientation === 'vertical' && classes.vertical),
    role: role,
    ref: ref
  }, other));
});
 true ? Divider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Absolutely position the element.
   */
  absolute: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * @ignore
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   */
  flexItem: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the divider will have a lighter color.
   */
  light: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The divider orientation.
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['horizontal', 'vertical']),

  /**
   * @ignore
   */
  role: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['fullWidth', 'inset', 'middle'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiDivider'
})(Divider));

/***/ }),

/***/ "./node_modules/@material-ui/icons/Add.js":
/*!************************************************!*\
  !*** ./node_modules/@material-ui/icons/Add.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Remove.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Remove.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 13H5v-2h14v2z"
}), 'Remove');

exports["default"] = _default;

/***/ }),

/***/ "./src/browser/dashboard/views/tournament.tsx":
/*!****************************************************!*\
  !*** ./src/browser/dashboard/views/tournament.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js");






const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"])({
  importText: {
    width: 600
  },
  paper: {
    padding: 10,
    margin: 5
  },
  button: {
    margin: 5
  },
  miniButton: {
    padding: 0,
    minWidth: 'initial',
    width: 30,
    margin: 5
  },
  roundInfo: {
    margin: 10
  },
  select: {
    minWidth: 300,
    maxWidth: 700
  },
  divider: {
    marginBottom: 30
  }
});
const tournamentRep = nodecg.Replicant('tournamentCurrent');
const spreadsheetRep = nodecg.Replicant('spreadsheet');
const challongeRep = nodecg.Replicant('challonge');
const currentRunRep = nodecg.Replicant('current-run');

const App = () => {
  const classes = useStyles({});
  const [tournament, setTournament] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
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
  const [matchTitle, setMatchTitle] = react__WEBPACK_IMPORTED_MODULE_0__.useState('');
  const [matchTitleList, setMatchTitleList] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);
  const [challonge, setChallonge] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    tournamentId: '',
    tournamentName: '',
    data: []
  });
  const [playerSelect, setPlayerSelect] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
  const [matchTitleSelect, setMatchTitleSelect] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
  const challongeIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  /** トーナメントレプリカント */

  const shandler = newVal => {
    setMatchTitleList([...newVal.tournamentMatchTitle]);
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    spreadsheetRep.on('change', shandler);
    return () => {
      spreadsheetRep.removeListener('change', shandler);
    };
  }, [spreadsheetRep]);
  /** トーナメントレプリカント */

  const thandler = newVal => {
    setTournament({ ...newVal
    });
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    tournamentRep.on('change', thandler);
    return () => {
      tournamentRep.removeListener('change', thandler);
    };
  }, [tournamentRep]);
  /** Challongeレプリカント */

  const chandler = newVal => {
    setChallonge({ ...newVal
    });
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    challongeRep.on('change', chandler);
    return () => {
      challongeRep.removeListener('change', chandler);
    };
  }, [challongeRep]);
  /** タイトル更新反映ボタン */

  const editMatchname = () => {
    var _matchTitleList;

    const selected = matchTitleSelect > 0 ? ((_matchTitleList = matchTitleList[matchTitleSelect - 1]) === null || _matchTitleList === void 0 ? void 0 : _matchTitleList.matchTitle) ?? '' : '';
    const msg = matchTitle ? matchTitle : selected;
    nodecg.sendMessage('editMatchname', msg);
  };

  const resetMatchname = () => {
    nodecg.sendMessage('editMatchname', '');
    setMatchTitleSelect(0);
    setMatchTitle('');
  };

  const handleTextInput = e => {
    setMatchTitle(e.target.value);
  };

  const handlePlayerSelect = e => {
    setPlayerSelect(Number(e.target.value));
  };

  const handleMatchTitleSelect = e => {
    setMatchTitleSelect(Number(e.target.value));
  };

  const fetchTournament = () => {
    var _challongeIdRef$curre;

    const id = challongeIdRef === null || challongeIdRef === void 0 ? void 0 : (_challongeIdRef$curre = challongeIdRef.current) === null || _challongeIdRef$curre === void 0 ? void 0 : _challongeIdRef$curre.value;
    if (id) nodecg.sendMessage('fetchTournament', id);
  };

  const changePlayer = () => {
    var _challonge$data$index, _challonge$data$index2;

    const index = playerSelect - 1;
    if (0 > index) return;
    const p1name = ((_challonge$data$index = challonge.data[index]) === null || _challonge$data$index === void 0 ? void 0 : _challonge$data$index.match.player1_name) ?? '';
    const p2name = ((_challonge$data$index2 = challonge.data[index]) === null || _challonge$data$index2 === void 0 ? void 0 : _challonge$data$index2.match.player2_name) ?? '';
    if (!currentRunRep.value || !p1name || !p2name) return;
    currentRunRep.value.runners[0] = {
      name: p1name,
      twitch: undefined,
      twitter: undefined,
      nico: undefined
    };
    currentRunRep.value.runners[1] = {
      name: p2name,
      twitch: undefined,
      twitter: undefined,
      nico: undefined
    };
  };

  const handle1PMinus = () => {
    if (tournament.runner1.round <= 0) return;
    nodecg.sendMessage('editMatchRound', {
      index: 0,
      round: tournament.runner1.round - 1
    });
  };

  const handle1PPlus = () => {
    nodecg.sendMessage('editMatchRound', {
      index: 0,
      round: tournament.runner1.round + 1
    });
  };

  const handle2PMinus = () => {
    if (tournament.runner2.round <= 0) return;
    nodecg.sendMessage('editMatchRound', {
      index: 1,
      round: tournament.runner2.round - 1
    });
  };

  const handle2PPlus = () => {
    nodecg.sendMessage('editMatchRound', {
      index: 1,
      round: tournament.runner2.round + 1
    });
  };

  const handle3PMinus = () => {
    if (tournament.runner3.round <= 0) return;
    nodecg.sendMessage('editMatchRound', {
      index: 2,
      round: tournament.runner3.round - 1
    });
  };

  const handle3PPlus = () => {
    nodecg.sendMessage('editMatchRound', {
      index: 2,
      round: tournament.runner3.round + 1
    });
  };

  const handle4PMinus = () => {
    if (tournament.runner4.round <= 0) return;
    nodecg.sendMessage('editMatchRound', {
      index: 3,
      round: tournament.runner4.round - 1
    });
  };

  const handle4PPlus = () => {
    nodecg.sendMessage('editMatchRound', {
      index: 3,
      round: tournament.runner4.round + 1
    });
  };

  const resetAll = () => {
    const res = confirm('ラウンド数をリセットします。よろしいですか。');
    if (!res) return;
    nodecg.sendMessage('editMatchRound', {
      index: 0,
      round: 0
    });
    nodecg.sendMessage('editMatchRound', {
      index: 1,
      round: 0
    });
    nodecg.sendMessage('editMatchRound', {
      index: 2,
      round: 0
    });
    nodecg.sendMessage('editMatchRound', {
      index: 3,
      round: 0
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: 'h5'
  }, "\u30C7\u30FC\u30BF\u53D6\u308A\u8FBC\u307F"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.importText,
    inputRef: challongeIdRef,
    variant: 'outlined',
    placeholder: 'ChallongeトーナメントのID部分(https://challonge.com/ja/xxxxxxxxの末尾)'
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.button,
    onClick: fetchTournament,
    variant: 'contained',
    color: 'secondary'
  }, "\u60C5\u5831\u53D6\u5F97")), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.divider
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: 'h4'
  }, challonge.tournamentName)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: 'h5'
  }, "N\u56DE\u6226\u306E\u6587\u5B57\u5217"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: 5
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginBottom: 5
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.select,
    variant: 'outlined',
    value: matchTitleSelect,
    onChange: handleMatchTitleSelect
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: '-',
    value: 0
  }, "-"), matchTitleList.map((m, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: m.id,
      value: index + 1
    }, m.matchTitle);
  }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: matchTitle,
    onChange: handleTextInput,
    variant: 'outlined',
    placeholder: '自由入力。何か入力していたら優先'
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.button,
    onClick: editMatchname,
    variant: 'contained',
    color: 'primary'
  }, "\u53CD\u6620"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.button,
    onClick: resetMatchname,
    variant: 'contained',
    color: 'secondary'
  }, "\u30EA\u30BB\u30C3\u30C8")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: 'h6'
  }, "\u3010\u8868\u793A\u4E2D\u3011", tournament.title))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: 'h5'
  }, "\u5BFE\u6226\u8005\u60C5\u5831\u9078\u629E"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.select,
    variant: 'outlined',
    value: playerSelect,
    onChange: handlePlayerSelect
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: '-',
    value: 0
  }, "-"), challonge.data.map((data, index) => {
    const prefix = data.match.round < 0 ? '敗者復活' : '';
    const text = `${prefix}${Math.abs(data.match.round)}回戦 ${data.match.player1_name ?? '★未定★'} vs ${data.match.player2_name ?? '★未定★'}`;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: `${text}_${index}`,
      value: index + 1
    }, text);
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.button,
    onClick: changePlayer,
    variant: 'contained',
    color: 'primary'
  }, "\u53CD\u6620"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: 'h5'
  }, "\u30E9\u30A6\u30F3\u30C9\u6570\u5236\u5FA1"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.roundInfo
  }, "1P", react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.miniButton,
    variant: 'contained',
    size: 'small',
    onClick: handle1PMinus
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, tournament.runner1.round), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.miniButton,
    variant: 'contained',
    size: 'small',
    onClick: handle1PPlus
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.roundInfo
  }, "2P", react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.miniButton,
    variant: 'contained',
    size: 'small',
    onClick: handle2PMinus
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, tournament.runner2.round), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.miniButton,
    variant: 'contained',
    size: 'small',
    onClick: handle2PPlus
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.roundInfo
  }, "3P", react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.miniButton,
    variant: 'contained',
    size: 'small',
    onClick: handle3PMinus
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, tournament.runner3.round), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.miniButton,
    variant: 'contained',
    size: 'small',
    onClick: handle3PPlus
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.roundInfo
  }, "4P", react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.miniButton,
    variant: 'contained',
    size: 'small',
    onClick: handle4PMinus
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, tournament.runner4.round), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.miniButton,
    variant: 'contained',
    size: 'small',
    onClick: handle4PPlus
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.roundInfo,
    style: {
      marginLeft: 30
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"] // className={classes.miniButton}
  , {
    // className={classes.miniButton}
    variant: 'contained',
    size: 'small',
    onClick: resetAll
  }, "\u30EA\u30BB\u30C3\u30C8")))));
};

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
/******/ 			"tournament": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common-node_modules_react-dom_index_js","vendors-node_modules_material-ui_core_esm_Button_Button_js-node_modules_material-ui_core_esm_-f8b95b","vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_babel_runtim-4e126d"], () => (__webpack_require__("./src/browser/dashboard/views/tournament.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=tournament.js.map