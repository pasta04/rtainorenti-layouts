/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/browser/dashboard/components/checklist/index.tsx":
/*!**************************************************************!*\
  !*** ./src/browser/dashboard/components/checklist/index.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checklist": () => (/* binding */ Checklist)
/* harmony export */ });
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");




const checklistRep = nodecg.Replicant('checklist');
const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"])({
  checklist: {
    padding: '16px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: '1fr',
    gridGap: '8px',
    userSelect: 'none'
  }
});
const Checklist = () => {
  const classes = useStyles({});
  const [checkList, setCheckList] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);
  /** チェックリストの変更を検知して更新 */

  const handler = newVal => {
    // こっちだとチェックボックス押しても再レンダリングされない
    // setCheckList(newVal);
    // こっちはされる
    setCheckList(newVal.map(val => val));
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    checklistRep.on('change', handler);
    return () => {
      checklistRep.removeListener('change', handler);
    };
  }, [checklistRep]);
  /** チェックボックス切り替え */

  const toggleCheckbox = (e, checked) => {
    nodecg.sendMessage('toggleCheckbox', {
      name: e.target.name,
      checked
    });
  };
  /** チェックリスト1個を生成 */


  const makeChecklistElement = checklist => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: `${checklist.name}_${checklist.complete}`,
    control: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
      checked: checklist.complete,
      name: checklist.name
    }),
    label: checklist.name,
    onChange: toggleCheckbox,
    style: {
      margin: '0',
      borderRadius: '3px',
      border: '1px solid black'
    }
  });

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.checklist
  }, checkList.map(check => makeChecklistElement(check)));
};

/***/ }),

/***/ "./src/browser/dashboard/components/lib/bordered-box.tsx":
/*!***************************************************************!*\
  !*** ./src/browser/dashboard/components/lib/bordered-box.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BorderedBox": () => (/* binding */ BorderedBox)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const BorderedBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "bordered-box__BorderedBox",
  componentId: "sc-1vggm6n-0"
})(["box-sizing:border-box;background:white;border:1px solid black;"]);

/***/ }),

/***/ "./src/browser/dashboard/components/lib/colored-button.tsx":
/*!*****************************************************************!*\
  !*** ./src/browser/dashboard/components/lib/colored-button.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColoredButton": () => (/* binding */ ColoredButton)
/* harmony export */ });
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");




const ColoredButton = props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["default"], {
  theme: outer => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"])({ ...outer,
    palette: {
      primary: props.color
    }
  })
}, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], { ...props.ButtonProps,
  style: {
    whiteSpace: 'nowrap'
  },
  color: 'primary'
}, props.children));

/***/ }),

/***/ "./src/browser/dashboard/components/schedule/edit.tsx":
/*!************************************************************!*\
  !*** ./src/browser/dashboard/components/schedule/edit.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditRun": () => (/* binding */ EditRun)
/* harmony export */ });
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/max */ "./node_modules/lodash/max.js");
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_max__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");







const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "edit__Container",
  componentId: "mgkyr9-0"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:white;box-sizing:border-box;padding:11px;display:grid;grid-auto-flow:row;grid-gap:8px;min-width:810px;"]);
class EditRun extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super(...arguments);

    this.onRendered = () => {
      if (this.props.defaultValue) {
        this.setState(this.props.defaultValue);
      }
    };

    this.updateRunnerInfo = (updatingIndex, key, value) => {
      this.setState(state => {
        if (!state.runners) {
          return null;
        }

        const oldRunner = state.runners[updatingIndex];
        const newRunner = { ...oldRunner,
          [key]: value
        };
        const newRunners = [];
        const iterateLength = (lodash_max__WEBPACK_IMPORTED_MODULE_0___default()([updatingIndex, state.runners.length - 1]) || 0) + 1;

        for (let i = 0; i < iterateLength; i++) {
          if (i === updatingIndex) {
            newRunners.push(newRunner);
          } else {
            newRunners.push(state.runners[i]);
          }
        }

        return {
          runners: newRunners
        };
      });
    };

    this.updateCommentatorInfo = (updatingIndex, key, value) => {
      this.setState(state => {
        if (!state.commentators) {
          return null;
        }

        const oldOne = state.commentators[updatingIndex] || {};
        const newOne = { ...oldOne,
          [key]: value
        };
        const newOnes = [];
        const iterateLength = (lodash_max__WEBPACK_IMPORTED_MODULE_0___default()([updatingIndex, state.commentators.length - 1]) || 0) + 1;

        for (let i = 0; i < iterateLength; i++) {
          if (i === updatingIndex) {
            newOnes.push(newOne);
          } else {
            newOnes.push(state.commentators[i]);
          }
        }

        return {
          commentators: newOnes
        };
      });
    };

    this.updateClicked = async () => {
      await nodecg.sendMessage('modifyRun', this.state);
      this.finish();
    };

    this.finish = () => {
      this.props.onFinish();
    };
  }

  render() {
    if (!this.props.defaultValue) {
      return null;
    }

    const runners = this.props.defaultValue.runners || [];
    const commentators = this.props.defaultValue.commentators || [];
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "aria-labelledby": 'simple-modal-title',
      "aria-describedby": 'simple-modal-description',
      open: Boolean(this.props.edit),
      onRendered: this.onRendered
    }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: 'h3'
    }, this.props.edit === 'current' ? '現在の' : '次の', "\u30B2\u30FC\u30E0\u3092\u7DE8\u96C6"), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
      defaultValue: this.props.defaultValue.title,
      label: '\u30BF\u30A4\u30C8\u30EB',
      onChange: e => {
        this.setState({
          title: e.currentTarget.value
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
      defaultValue: this.props.defaultValue.category,
      label: '\u30AB\u30C6\u30B4\u30EA',
      onChange: e => {
        this.setState({
          category: e.currentTarget.value
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
      defaultValue: this.props.defaultValue.runDuration,
      label: '\u4E88\u5B9A\u30BF\u30A4\u30E0',
      onChange: e => {
        this.setState({
          runDuration: e.currentTarget.value
        });
      }
    }), Array.from({
      length: 4
    }, (_, index) => {
      const runner = runners[index] || {
        name: ''
      };
      return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: `走者${index} 名前`,
        defaultValue: runner.name,
        onChange: e => {
          this.updateRunnerInfo(index, 'name', e.currentTarget.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: `走者${index} Twitch`,
        defaultValue: runner.twitch,
        onChange: e => {
          this.updateRunnerInfo(index, 'twitch', e.currentTarget.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: `走者${index} ニコ生`,
        defaultValue: runner.nico,
        onChange: e => {
          this.updateRunnerInfo(index, 'nico', e.currentTarget.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: `走者${index} Twitter`,
        defaultValue: runner.twitter,
        onChange: e => {
          this.updateRunnerInfo(index, 'twitter', e.currentTarget.value);
        }
      }));
    }), new Array(4).fill(null).map((_, index) => {
      const commentator = {
        name: '',
        ...commentators[index]
      };
      return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: `解説${index} 名前`,
        defaultValue: commentator.name,
        onChange: e => {
          this.updateCommentatorInfo(index, 'name', e.currentTarget.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: `解説${index} Twitch`,
        defaultValue: commentator.twitch,
        onChange: e => {
          this.updateCommentatorInfo(index, 'twitch', e.currentTarget.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: `解説${index} ニコ生`,
        defaultValue: commentator.nico,
        onChange: e => {
          this.updateCommentatorInfo(index, 'nico', e.currentTarget.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: `解説${index} Twitter`,
        defaultValue: commentator.twitter,
        onChange: e => {
          this.updateCommentatorInfo(index, 'twitter', e.currentTarget.value);
        }
      }));
    }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: this.updateClicked
    }, "\u66F4\u65B0"), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: this.finish
    }, "\u30AD\u30E3\u30F3\u30BB\u30EB"))));
  }

}

/***/ }),

/***/ "./src/browser/dashboard/components/schedule/index.tsx":
/*!*************************************************************!*\
  !*** ./src/browser/dashboard/components/schedule/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Schedule": () => (/* binding */ Schedule)
/* harmony export */ });
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/browser/dashboard/components/schedule/edit.tsx");
/* harmony import */ var _run_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./run-info */ "./src/browser/dashboard/components/schedule/run-info.tsx");
/* harmony import */ var _typeahead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeahead */ "./src/browser/dashboard/components/schedule/typeahead.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _lib_bordered_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/bordered-box */ "./src/browser/dashboard/components/lib/bordered-box.tsx");









const currentRunRep = nodecg.Replicant('current-run');
const nextRunRep = nodecg.Replicant('next-run');
const scheduleRep = nodecg.Replicant('schedule');
const timerRep = nodecg.Replicant('timer');
const Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_lib_bordered_box__WEBPACK_IMPORTED_MODULE_4__.BorderedBox).withConfig({
  displayName: "schedule__Container",
  componentId: "sc-1pe8g61-0"
})(["height:calc(100vh - 32px);padding:16px;display:grid;grid-template-rows:auto 1fr;grid-gap:12px;"]);
const SelectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "schedule__SelectionContainer",
  componentId: "sc-1pe8g61-1"
})(["display:grid;grid-template-columns:1fr 50% 1fr;grid-gap:8px;"]);
const RunInfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "schedule__RunInfoContainer",
  componentId: "sc-1pe8g61-2"
})(["display:grid;grid-template-columns:1fr 0px 1fr;grid-gap:16px;"]);
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "schedule__Divider",
  componentId: "sc-1pe8g61-3"
})(["border-left:1px dashed black;"]);
const EditControls = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "schedule__EditControls",
  componentId: "sc-1pe8g61-4"
})(["display:grid;grid-template-columns:repeat(2,1fr);grid-gap:16px;"]);

const moveNextRun = () => {
  nodecg.sendMessage('nextRun');
};

const movePreviousRun = () => {
  nodecg.sendMessage('previousRun');
};

class Schedule extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      titles: []
    };

    this.editCurrentRun = () => {
      this.setState({
        edit: 'current'
      });
    };

    this.editNextRun = () => {
      this.setState({
        edit: 'next'
      });
    };

    this.onEditFinish = () => {
      this.setState({
        edit: undefined
      });
    };

    this.scheduleChangeHandler = newVal => {
      if (!newVal) {
        return;
      }

      const titles = newVal.map(run => run.title);
      this.setState({
        titles
      });
    };

    this.currentRunChangeHandler = newVal => {
      if (!newVal) {
        return;
      }

      this.setState({
        currentRun: newVal
      });
    };

    this.nextRunChangeHandler = newVal => {
      this.setState({
        nextRun: newVal || undefined
      });
    };

    this.timerChangeHandler = newVal => {
      this.setState({
        timer: newVal
      });
    };
  }

  componentDidMount() {
    scheduleRep.on('change', this.scheduleChangeHandler);
    currentRunRep.on('change', this.currentRunChangeHandler);
    nextRunRep.on('change', this.nextRunChangeHandler);
    timerRep.on('change', this.timerChangeHandler);
  }

  componentWillUnmount() {
    scheduleRep.removeListener('change', this.scheduleChangeHandler);
    currentRunRep.removeListener('change', this.currentRunChangeHandler);
    nextRunRep.removeListener('change', this.nextRunChangeHandler);
  }

  render() {
    var _this$state$timer;

    const isRunning = ((_this$state$timer = this.state.timer) === null || _this$state$timer === void 0 ? void 0 : _this$state$timer.timerState) === 'Running';
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectionContainer, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: movePreviousRun,
      disabled: isRunning
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_7__["default"], null), "\u524D"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_typeahead__WEBPACK_IMPORTED_MODULE_3__.Typeahead, {
      titles: this.state.titles,
      disabled: isRunning
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: moveNextRun,
      disabled: isRunning
    }, "\u6B21", react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(RunInfoContainer, null, this.state.currentRun && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_run_info__WEBPACK_IMPORTED_MODULE_2__.RunInfo, {
      run: this.state.currentRun,
      label: '\u73FE\u5728\u306E\u30B2\u30FC\u30E0'
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Divider, null), this.state.nextRun && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_run_info__WEBPACK_IMPORTED_MODULE_2__.RunInfo, {
      run: this.state.nextRun,
      label: '\u6B21\u306E\u30B2\u30FC\u30E0'
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditControls, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: this.editCurrentRun
    }, "\u7DE8\u96C6\uFF1A\u73FE\u5728\u306E\u30B2\u30FC\u30E0"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: this.editNextRun
    }, "\u7DE8\u96C6\uFF1A\u6B21\u306E\u30B2\u30FC\u30E0")), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_edit__WEBPACK_IMPORTED_MODULE_1__.EditRun, {
      edit: this.state.edit,
      defaultValue: (this.state.edit === 'current' ? this.state.currentRun : this.state.nextRun) || undefined,
      onFinish: this.onEditFinish
    }));
  }

}

/***/ }),

/***/ "./src/browser/dashboard/components/schedule/run-info.tsx":
/*!****************************************************************!*\
  !*** ./src/browser/dashboard/components/schedule/run-info.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RunInfo": () => (/* binding */ RunInfo)
/* harmony export */ });
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "run-info__Container",
  componentId: "sc-1oguypm-0"
})(["display:grid;grid-auto-flow:row;align-content:start;align-items:start;grid-gap:16px;"]);
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "run-info__Divider",
  componentId: "sc-1oguypm-1"
})(["border-top:1px dashed black;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "run-info__Label",
  componentId: "sc-1oguypm-2"
})(["text-align:center;"]);
const LabeledDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "run-info__LabeledDiv",
  componentId: "sc-1oguypm-3"
})(["white-space:nowrap;overflow:hidden;"]);
const RunnersContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "run-info__RunnersContainer",
  componentId: "sc-1oguypm-4"
})(["display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);align-items:start;justify-content:center;grid-gap:8px;"]);
const MiscContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "run-info__MiscContainer",
  componentId: "sc-1oguypm-5"
})(["display:grid;grid-template-columns:repeat(2,1fr);align-items:start;justify-content:center;"]);
class RunInfo extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);

    this.renderRunners = () => this.runners().map((runner, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement(LabeledDiv, {
      key: Math.random()
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: 'caption'
    }, "\u8D70\u8005", index), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, runner && runner.name)));

    this.renderCommentators = () => this.commentators().map((commentator, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement(LabeledDiv, {
      key: Math.random()
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: 'caption'
    }, "\u89E3\u8AAC", index), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, commentator && commentator.name)));

    this.runners = () => {
      const {
        runners
      } = this.props.run;

      if (!runners) {
        return [];
      }

      return new Array(4).fill(null).map((_, index) => runners[index] || _);
    };

    this.commentators = () => {
      const {
        commentators
      } = this.props.run;

      if (!commentators) {
        return [];
      }

      return new Array(4).fill(null).map((_, index) => commentators[index] || _);
    };
  }

  render() {
    const {
      run,
      label
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(Label, null, label, "\u00A0(#", run.index, ")"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(LabeledDiv, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: 'caption'
    }, "\u30B2\u30FC\u30E0"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, run.title)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Divider, null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(RunnersContainer, null, this.renderRunners()), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Divider, null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(RunnersContainer, null, this.renderCommentators()), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Divider, null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(LabeledDiv, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: 'caption'
    }, "\u30AB\u30C6\u30B4\u30EA"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, run.category)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Divider, null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(MiscContainer, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(LabeledDiv, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: 'caption'
    }, "\u4E88\u5B9A\u6642\u9593"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, run.runDuration)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(LabeledDiv, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: 'caption'
    }, "\u6A5F\u7A2E"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, run.platform))));
  }

}

/***/ }),

/***/ "./src/browser/dashboard/components/schedule/typeahead.tsx":
/*!*****************************************************************!*\
  !*** ./src/browser/dashboard/components/schedule/typeahead.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Typeahead": () => (/* binding */ Typeahead)
/* harmony export */ });
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! downshift */ "./node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");








const TypeaheadContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "typeahead__TypeaheadContainer",
  componentId: "sc-7qsluq-0"
})(["display:flex;flex-flow:column nowrap;justify-content:center;"]);
class Typeahead extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      inputText: ''
    };

    this.handleInputChange = inputText => {
      this.setState({
        inputText
      });
    };

    this.skipClicked = async () => {
      const index = this.props.titles.indexOf(this.state.inputText);
      await nodecg.sendMessage('setCurrentRunByIndex', index);
      this.setState({
        inputText: ''
      });
    };

    this.renderSuggestion = (inputValue, getItemProps, highlightedIndex) => this.getSuggestions(inputValue).map((suggestion, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], { ...getItemProps({
        item: suggestion
      }),
      key: suggestion,
      selected: index === highlightedIndex,
      component: 'div'
    }, suggestion));

    this.getSuggestions = inputValue => {
      const suggestions = [];

      if (inputValue) {
        for (const title of this.props.titles) {
          if (!title) {
            continue;
          }

          const titleMatches = title.toLowerCase().includes(inputValue.toLowerCase());

          if (titleMatches) {
            suggestions.push(title);
          }

          if (suggestions.length >= 5) {
            break;
          }
        }
      }

      return suggestions;
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TypeaheadContainer, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(downshift__WEBPACK_IMPORTED_MODULE_3__["default"], {
      inputValue: this.state.inputText,
      onInputValueChange: this.handleInputChange
    }, ({
      getInputProps,
      isOpen,
      inputValue,
      highlightedIndex,
      getItemProps
    }) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      fullWidth: true,
      inputProps: getInputProps({
        placeholder: 'ゲーム名'
      })
    }), isOpen && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        position: 'absolute',
        zIndex: 1
      },
      square: true
    }, this.renderSuggestion(inputValue, getItemProps, highlightedIndex)))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        whiteSpace: 'nowrap',
        alignSelf: 'flex-end'
      },
      size: 'small',
      onClick: this.skipClicked,
      disabled: this.props.disabled
    }, "\u6307\u5B9A\u3057\u305F\u30B2\u30FC\u30E0\u306B\u30B8\u30E3\u30F3\u30D7", react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
  }

}

/***/ }),

/***/ "./src/browser/dashboard/components/timekeeper/edit.tsx":
/*!**************************************************************!*\
  !*** ./src/browser/dashboard/components/timekeeper/edit.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTimeModal": () => (/* binding */ EditTimeModal)
/* harmony export */ });
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_colored_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/colored-button */ "./src/browser/dashboard/components/lib/colored-button.tsx");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/red.js");








const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "edit__Container",
  componentId: "l82ubl-0"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:white;box-sizing:border-box;padding:16px;display:flex;flex-flow:column nowrap;min-width:810px;"]);
const Inputs = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "edit__Inputs",
  componentId: "l82ubl-1"
})(["align-self:center;"]);
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "edit__Buttons",
  componentId: "l82ubl-2"
})(["align-self:flex-end;"]);
const timeFormat = /^(\d+:)?[0-5]?\d:[0-5]?\d$/;
class EditTimeModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: this.props.defaultValue
    };

    this.updateClicked = () => {
      this.props.onFinish(this.state.value);
    };

    this.cancelClicked = () => {
      this.props.onFinish();
    };

    this.handleInput = e => {
      this.setState({
        value: e.currentTarget.value
      });
    };
  }

  render() {
    const isValid = timeFormat.test(this.state.value);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "aria-labelledby": 'simple-modal-title',
      "aria-describedby": 'simple-modal-description',
      open: this.props.open
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: 'h3'
    }, "\u30DE\u30B9\u30BF\u30FC\u30BF\u30A4\u30DE\u30FC\u66F4\u65B0"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Inputs, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
      required: true,
      value: this.state.value,
      margin: 'normal',
      error: !isValid,
      onChange: this.handleInput
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Buttons, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_colored_button__WEBPACK_IMPORTED_MODULE_1__.ColoredButton, {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__["default"],
      ButtonProps: {
        onClick: this.updateClicked
      }
    }, "\u66F4\u65B0"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: this.cancelClicked
    }, "\u30AD\u30E3\u30F3\u30BB\u30EB"))));
  }

}

/***/ }),

/***/ "./src/browser/dashboard/components/timekeeper/index.tsx":
/*!***************************************************************!*\
  !*** ./src/browser/dashboard/components/timekeeper/index.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timekeeper": () => (/* binding */ Timekeeper)
/* harmony export */ });
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors/green */ "./node_modules/@material-ui/core/colors/green.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "./node_modules/@material-ui/core/colors/grey.js");
/* harmony import */ var _material_ui_core_colors_orange__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors/orange */ "./node_modules/@material-ui/core/colors/orange.js");
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/colors/pink */ "./node_modules/@material-ui/core/colors/pink.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Pause__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Pause */ "./node_modules/@material-ui/icons/Pause.js");
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/PlayArrow */ "./node_modules/@material-ui/icons/PlayArrow.js");
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Refresh */ "./node_modules/@material-ui/icons/Refresh.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nodecg_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../nodecg/timer */ "./src/nodecg/timer.ts");
/* harmony import */ var _lib_bordered_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/bordered-box */ "./src/browser/dashboard/components/lib/bordered-box.tsx");
/* harmony import */ var _lib_colored_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/colored-button */ "./src/browser/dashboard/components/lib/colored-button.tsx");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/browser/dashboard/components/timekeeper/edit.tsx");
/* harmony import */ var _runner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./runner */ "./src/browser/dashboard/components/timekeeper/runner.tsx");
















const checklistRep = nodecg.Replicant('checklist');
const currentRunRep = nodecg.Replicant('current-run');
const timerRep = nodecg.Replicant('timer');
const Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_lib_bordered_box__WEBPACK_IMPORTED_MODULE_3__.BorderedBox).withConfig({
  displayName: "timekeeper__Container",
  componentId: "sc-21a5yl-0"
})(["display:grid;grid-template-columns:1fr auto;grid-template-rows:105px 1fr;grid-template-areas:'timer ctrls' 'runners runners';justify-items:center;align-items:center;"]);
const Timer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "timekeeper__Timer",
  componentId: "sc-21a5yl-1"
})(["grid-area:timer;padding:0 16px;font-size:55px;"]);
const CtrlsContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "timekeeper__CtrlsContainer",
  componentId: "sc-21a5yl-2"
})(["padding-right:16px;grid-area:ctrls;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);grid-gap:8px;justify-items:center;align-items:center;"]);
const RunnersContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "timekeeper__RunnersContainer",
  componentId: "sc-21a5yl-3"
})(["justify-self:stretch;align-self:stretch;grid-area:runners;display:grid;grid-template-rows:repeat(4,1fr);"]);

const startTimer = () => {
  nodecg.sendMessage('startTimer', undefined);
};

const stopTimer = () => {
  nodecg.sendMessage('stopTimer');
};

const resetTimer = () => {
  nodecg.sendMessage('resetTimer');
};

class Timekeeper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      timer: (0,_nodecg_timer__WEBPACK_IMPORTED_MODULE_2__.newTimer)(0),
      runners: [],
      checklistComplete: false,
      isModalOpened: false
    };

    this.closeModal = value => {
      if (value) {
        nodecg.sendMessage('editTime', {
          index: 'master',
          newTime: value
        });
      }

      this.setState({
        isModalOpened: false
      });
    };

    this.openEdit = () => {
      this.setState({
        isModalOpened: true
      });
    };

    this.currentRunChangeHandler = newVal => {
      if (!newVal) {
        return;
      }

      const newRunners = newVal.runners;
      this.setState({
        runners: Array.from({
          length: 4
        }, (_, index) => {
          var _newRunners$index;

          const name = (newRunners === null || newRunners === void 0 ? void 0 : (_newRunners$index = newRunners[index]) === null || _newRunners$index === void 0 ? void 0 : _newRunners$index.name) ?? '';
          return {
            name,
            id: uuid_v4__WEBPACK_IMPORTED_MODULE_1___default()()
          };
        })
      });
    };

    this.checklistChangeHandler = newVal => {
      this.setState({
        checklistComplete: newVal.every(item => item.complete)
      });
    };

    this.stopwatchRepChangeHandler = newVal => {
      this.setState({
        timer: newVal
      });
    };
  }

  render() {
    const {
      state
    } = this; // Disable start if checklist is not completed or timer is not stopped state

    const shouldDisableStart = !state.checklistComplete || state.timer.timerState !== 'Stopped'; // Disable pause if timer is not running

    const shouldDisablePause = state.timer.timerState !== 'Running';
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(Timer, null, state.timer.formatted), react__WEBPACK_IMPORTED_MODULE_0__.createElement(CtrlsContainer, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_colored_button__WEBPACK_IMPORTED_MODULE_4__.ColoredButton, {
      color: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8__["default"],
      ButtonProps: {
        disabled: shouldDisableStart,
        onClick: startTimer,
        fullWidth: true
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_9__["default"], null), "\u958B\u59CB"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_colored_button__WEBPACK_IMPORTED_MODULE_4__.ColoredButton, {
      color: _material_ui_core_colors_orange__WEBPACK_IMPORTED_MODULE_10__["default"],
      ButtonProps: {
        disabled: shouldDisablePause,
        onClick: stopTimer,
        fullWidth: true
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Pause__WEBPACK_IMPORTED_MODULE_11__["default"], null), "\u505C\u6B62"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_colored_button__WEBPACK_IMPORTED_MODULE_4__.ColoredButton, {
      color: _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_12__["default"],
      ButtonProps: {
        onClick: resetTimer,
        fullWidth: true
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_13__["default"], null), "\u30EA\u30BB\u30C3\u30C8"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_colored_button__WEBPACK_IMPORTED_MODULE_4__.ColoredButton, {
      color: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_14__["default"],
      ButtonProps: {
        onClick: this.openEdit,
        fullWidth: true
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15__["default"], null), "\u7DE8\u96C6")), react__WEBPACK_IMPORTED_MODULE_0__.createElement(RunnersContainer, null, state.runners.map((runner, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_runner__WEBPACK_IMPORTED_MODULE_6__.Runner, {
      key: runner.id,
      checklistCompleted: state.checklistComplete,
      index: index,
      runner: runner.name,
      timer: state.timer
    }, runner))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_edit__WEBPACK_IMPORTED_MODULE_5__.EditTimeModal, {
      open: state.isModalOpened,
      defaultValue: state.timer.formatted,
      onFinish: this.closeModal
    }));
  }

  componentDidMount() {
    timerRep.on('change', this.stopwatchRepChangeHandler);
    currentRunRep.on('change', this.currentRunChangeHandler);
    checklistRep.on('change', this.checklistChangeHandler);
  }

  componentWillUnmount() {
    timerRep.removeListener('change', this.stopwatchRepChangeHandler);
    currentRunRep.removeListener('change', this.currentRunChangeHandler);
    checklistRep.removeListener('change', this.checklistChangeHandler);
  }

}

/***/ }),

/***/ "./src/browser/dashboard/components/timekeeper/runner.tsx":
/*!****************************************************************!*\
  !*** ./src/browser/dashboard/components/timekeeper/runner.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Runner": () => (/* binding */ Runner)
/* harmony export */ });
/* harmony import */ var _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors/blueGrey */ "./node_modules/@material-ui/core/colors/blueGrey.js");
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/colors/green */ "./node_modules/@material-ui/core/colors/green.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "./node_modules/@material-ui/core/colors/grey.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Flag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Flag */ "./node_modules/@material-ui/icons/Flag.js");
/* harmony import */ var _material_ui_icons_Undo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Undo */ "./node_modules/@material-ui/icons/Undo.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_colored_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/colored-button */ "./src/browser/dashboard/components/lib/colored-button.tsx");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/browser/dashboard/components/timekeeper/edit.tsx");











const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "runner__Container",
  componentId: "p9aoc1-0"
})(["padding:0 16px;display:grid;align-items:center;", ";"], props => props.index % 2 === 0 && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["background-color:#dedede;"]));
const RunnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "runner__RunnerContainer",
  componentId: "p9aoc1-1"
})(["display:grid;grid-template-columns:1fr auto;grid-template-areas:'runner button';"]);
const RunnerName = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "runner__RunnerName",
  componentId: "p9aoc1-2"
})(["font-size:24px;"]);
const RunnerStatus = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "runner__RunnerStatus",
  componentId: "p9aoc1-3"
})(["font-size:24px;color:#adadad;", ";"], props => props.finished && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["color:#43ac6a;"]));
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "runner__ButtonContainer",
  componentId: "p9aoc1-4"
})(["display:grid;grid-template-columns:repeat(3,80px);grid-gap:8px;justify-items:stretch;align-items:center;"]);
const EmptySlot = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "runner__EmptySlot",
  componentId: "p9aoc1-5"
})(["font-size:24px;color:#adadad;text-align:center;"]);
class Runner extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      isModalOpened: false
    };

    this.startEdit = () => {
      this.setState({
        isModalOpened: true
      });
    };

    this.onEditFinish = value => {
      if (value) {
        nodecg.sendMessage('editTime', {
          index: this.props.index,
          newTime: value
        });
      }

      this.setState({
        isModalOpened: false
      });
    };

    this.completeRunner = () => {
      nodecg.sendMessage('completeRunner', {
        index: this.props.index,
        forfeit: false
      });
    };

    this.resumeRunner = () => {
      nodecg.sendMessage('resumeRunner', this.props.index);
    };

    this.forfeitRunner = () => {
      nodecg.sendMessage('completeRunner', {
        index: this.props.index,
        forfeit: true
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container, {
      index: this.props.index
    }, this.renderContent());
  }

  renderContent() {
    const {
      props
    } = this;

    if (!props.runner) {
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement(EmptySlot, null, "\u2015 EMPTY SLOT \u2015");
    }

    const result = props.timer.results[props.index];
    const shouldShowResume = Boolean(result);
    const shouldDisableEdit = !shouldShowResume;
    const shouldShowFinish = Boolean(!result || result.forfeit);
    const shouldShowForfeit = Boolean(!result || !result.forfeit);
    const status = result ? result.formatted : 'Running';
    const defaultEditValue = result ? result.formatted : '00:00';
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RunnerContainer, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(RunnerName, null, props.runner), react__WEBPACK_IMPORTED_MODULE_0__.createElement(RunnerStatus, {
      finished: !shouldShowFinish
    }, status)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonContainer, null, shouldShowFinish && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_colored_button__WEBPACK_IMPORTED_MODULE_1__.ColoredButton, {
      color: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_4__["default"],
      ButtonProps: {
        fullWidth: true,
        onClick: this.completeRunner
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Flag__WEBPACK_IMPORTED_MODULE_5__["default"], null), "\u5B8C\u8D70"), shouldShowResume && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_colored_button__WEBPACK_IMPORTED_MODULE_1__.ColoredButton, {
      color: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_4__["default"],
      ButtonProps: {
        fullWidth: true,
        onClick: this.resumeRunner
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Undo__WEBPACK_IMPORTED_MODULE_6__["default"], null), "\u518D\u958B"), shouldShowForfeit && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_colored_button__WEBPACK_IMPORTED_MODULE_1__.ColoredButton, {
      color: _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_7__["default"],
      ButtonProps: {
        fullWidth: true,
        onClick: this.forfeitRunner
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_8__["default"], null), "\u30EA\u30BF\u30A4\u30A2"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_colored_button__WEBPACK_IMPORTED_MODULE_1__.ColoredButton, {
      color: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_9__["default"],
      ButtonProps: {
        fullWidth: true,
        onClick: this.startEdit,
        disabled: shouldDisableEdit
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__["default"], null), "\u7DE8\u96C6")), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_edit__WEBPACK_IMPORTED_MODULE_2__.EditTimeModal, {
      defaultValue: defaultEditValue,
      open: this.state.isModalOpened,
      onFinish: this.onEditFinish
    }));
  }

}

/***/ }),

/***/ "./src/browser/dashboard/views/tech.tsx":
/*!**********************************************!*\
  !*** ./src/browser/dashboard/views/tech.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var modern_normalize_modern_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modern-normalize/modern-normalize.css */ "./node_modules/modern-normalize/modern-normalize.css");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_checklist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/checklist */ "./src/browser/dashboard/components/checklist/index.tsx");
/* harmony import */ var _components_schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/schedule */ "./src/browser/dashboard/components/schedule/index.tsx");
/* harmony import */ var _components_timekeeper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/timekeeper */ "./src/browser/dashboard/components/timekeeper/index.tsx");









const Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "tech__Container",
  componentId: "sc-1oqjcv7-0"
})(["color:#000;height:100vh;padding:16px;box-sizing:border-box;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:20px;"]);
const Column = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "tech__Column",
  componentId: "sc-1oqjcv7-1"
})(["display:grid;grid-gap:16px;"]);
const LeftColumn = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(Column).withConfig({
  displayName: "tech__LeftColumn",
  componentId: "sc-1oqjcv7-2"
})(["height:calc(100vh - 32px);grid-template-rows:1fr auto;"]);
const appTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"])({
  props: {
    MuiButton: {
      variant: 'contained'
    }
  }
});
const App = () => react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"], {
  theme: appTheme
}, react__WEBPACK_IMPORTED_MODULE_1__.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(LeftColumn, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_timekeeper__WEBPACK_IMPORTED_MODULE_5__.Timekeeper, null), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_checklist__WEBPACK_IMPORTED_MODULE_3__.Checklist, null)), react__WEBPACK_IMPORTED_MODULE_1__.createElement(Column, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_schedule__WEBPACK_IMPORTED_MODULE_4__.Schedule, null))));
react_dom__WEBPACK_IMPORTED_MODULE_2__.render(react__WEBPACK_IMPORTED_MODULE_1__.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./src/nodecg/timer.ts":
/*!*****************************!*\
  !*** ./src/nodecg/timer.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "secondsToHMS": () => (/* binding */ secondsToHMS),
/* harmony export */   "formatHMS": () => (/* binding */ formatHMS),
/* harmony export */   "parseSeconds": () => (/* binding */ parseSeconds),
/* harmony export */   "increment": () => (/* binding */ increment),
/* harmony export */   "decrement": () => (/* binding */ decrement),
/* harmony export */   "setSeconds": () => (/* binding */ setSeconds),
/* harmony export */   "formatSeconds": () => (/* binding */ formatSeconds),
/* harmony export */   "newTimer": () => (/* binding */ newTimer)
/* harmony export */ });
/**
 * Parses a number of seconds into an HMS object.
 * @param seconds A number of seconds.
 * @returns An HMS object.
 */
const secondsToHMS = seconds => {
  return {
    h: Math.floor(seconds / 3600),
    m: Math.floor(seconds % 3600 / 60),
    s: Math.floor(seconds % 3600 % 60)
  };
};
/**
 * Formats an HMS object into a string ([hh:]mm:ss).
 * @param hms The HMS object to format.
 * @returns The formatted time string.
 */

const formatHMS = hms => {
  let str = '';

  if (hms.h) {
    str += `${hms.h}:`;
  }

  str += `${hms.m < 10 ? `0${hms.m}` : hms.m}:${hms.s < 10 ? `0${hms.s}` : hms.s}`;
  return str;
};
/**
 * Parses a formatted time string into an integer of seconds.
 * @param timeString The formatted time string to parse (hh:mm:ss or mm:ss).
 * @returns The parsed time string represented as seconds.
 */

const parseSeconds = timeString => {
  const timeParts = timeString.split(':').map(Number);

  if (timeParts.length === 3) {
    return Math.floor((timeParts[0] || 0) * 3600) + Math.floor((timeParts[1] || 0) * 60) + Math.floor(timeParts[2] || 0);
  }

  if (timeParts.length === 2) {
    return Math.floor((timeParts[0] || 0) * 60) + Math.floor(timeParts[1] || 0);
  }

  if (timeParts.length === 1) {
    return Math.floor(timeParts[0] || 0);
  }

  throw new Error(`Unexpected format of timeString argument: ${timeString}`);
};
/**
 * Increments a Timer by one second.
 * @param t - The Timer to increment.
 * @returns The Timer passed in as an argument.
 */

const increment = t => {
  t.raw++;
  const hms = secondsToHMS(t.raw);
  t.hours = hms.h;
  t.minutes = hms.m;
  t.seconds = hms.s;
  t.formatted = formatHMS(hms);
  t.timestamp = Date.now();
  return t;
};
/**
 * Decrements a Timer by one second.
 * @param t The Timer to increment.
 * @returns The Timer passed in as an argument.
 */

const decrement = t => {
  t.raw--;
  const hms = secondsToHMS(t.raw);
  t.hours = hms.h;
  t.minutes = hms.m;
  t.seconds = hms.s;
  t.formatted = formatHMS(hms);
  t.timestamp = Date.now();
  return t;
};
/**
 * Sets the value of a Timer.
 * @param t The Timer to set.
 * @param seconds The value to set to (in seconds).
 * @returns The Timer passed in as an argument.
 */

const setSeconds = (t, seconds) => {
  const hms = secondsToHMS(seconds);
  t.hours = hms.h;
  t.minutes = hms.m;
  t.seconds = hms.s;
  t.formatted = formatHMS(hms);
  t.raw = seconds;
  t.timestamp = Date.now();
  return t;
};
/**
 * Formats a number of seconds into a string ([hh:]mm:ss).
 * @param seconds The number of seconds to format.
 * @returns The formatted time sting.
 */

const formatSeconds = seconds => {
  const hms = secondsToHMS(seconds);
  return formatHMS(hms);
};
/**
 * Constructs a new Timer with the provided number of seconds.
 * @param seconds The value to instantiate this Timer with, in seconds.
 */

const newTimer = (seconds = 0) => {
  const hms = secondsToHMS(seconds);
  return {
    raw: seconds,
    hours: hms.h,
    minutes: hms.m,
    seconds: hms.s,
    formatted: formatHMS(hms),
    timestamp: Date.now(),
    timerState: 'Stopped',
    results: [null, null, null, null],
    forfeit: false
  };
};

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			"tech": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common-node_modules_react-dom_index_js","vendors-node_modules_material-ui_core_esm_Button_Button_js-node_modules_material-ui_core_esm_-f8b95b","vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_babel_runtim-4e126d","vendors-node_modules_material-ui_core_colors_blueGrey_js-node_modules_material-ui_core_colors-c1384b"], () => (__webpack_require__("./src/browser/dashboard/views/tech.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=tech.js.map