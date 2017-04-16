/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Scene2 = __webpack_require__(1);

var _Scene3 = _interopRequireDefault(_Scene2);

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneStream = function (_Scene) {
    _inherits(SceneStream, _Scene);

    function SceneStream(props) {
        _classCallCheck(this, SceneStream);

        return _possibleConstructorReturn(this, (SceneStream.__proto__ || Object.getPrototypeOf(SceneStream)).call(this, props));
    }

    _createClass(SceneStream, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _get(SceneStream.prototype.__proto__ || Object.getPrototypeOf(SceneStream.prototype), 'componentWillMount', this).call(this);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: this.props.id, className: 'scene' },
                React.createElement(
                    'div',
                    { id: 'snippet-player' },
                    React.createElement(
                        'div',
                        { className: 'player' },
                        React.createElement(
                            'div',
                            { className: 'content' },
                            React.createElement(
                                'div',
                                { className: 'bar' },
                                React.createElement('div', { className: 'progress clickable', 'data-value': 'progress' }),
                                React.createElement('div', { className: 'actual' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'channel-number' },
                                React.createElement('div', { className: 'text' })
                            ),
                            React.createElement(
                                'table',
                                null,
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement('td', { className: 'channels channel1' }),
                                    React.createElement(
                                        'td',
                                        { className: 'titles title1' },
                                        React.createElement('div', null)
                                    ),
                                    React.createElement('td', { className: 'time time1' })
                                ),
                                React.createElement(
                                    'tr',
                                    { className: 'secondRow' },
                                    React.createElement('td', { className: 'channels channel2' }),
                                    React.createElement(
                                        'td',
                                        { className: 'titles title2' },
                                        React.createElement('div', null)
                                    ),
                                    React.createElement('td', { className: 'time time2' })
                                )
                            ),
                            React.createElement(
                                'ul',
                                { className: 'buttons' },
                                React.createElement(_Button2.default, { className: 'button-play',
                                    'data-value': 'play',
                                    text: 'Play'
                                }),
                                React.createElement(_Button2.default, { className: 'button-back',
                                    'data-value': 'back',
                                    text: 'Startover'
                                }),
                                React.createElement(_Button2.default, { className: 'button-record',
                                    'data-value': 'record',
                                    text: 'Record'
                                }),
                                React.createElement(_Button2.default, { className: 'button-live',
                                    'data-value': 'live',
                                    text: 'Live',
                                    iconClassName: 'icon-play3'
                                }),
                                React.createElement(_Button2.default, { className: 'button-previous',
                                    'data-value': 'prev',
                                    text: 'Previous',
                                    iconClassName: 'icon-backward2'
                                }),
                                React.createElement(_Button2.default, { className: 'button-next',
                                    'data-value': 'next',
                                    text: 'Next',
                                    iconClassName: 'icon-forward3'
                                })
                            ),
                            React.createElement('div', { className: 'logo' })
                        ),
                        React.createElement(
                            'div',
                            { id: 'timeframe', className: 'focusable' },
                            React.createElement(
                                'div',
                                { className: 'icon-timeframe' },
                                React.createElement('span', { className: 'time' }),
                                React.createElement('span', { className: 'path1' }),
                                React.createElement('span', { className: 'path2' })
                            )
                        )
                    )
                ),
                '/*',
                React.createElement(
                    'div',
                    { className: 'snippet-rc-buttons rc-buttons' },
                    React.createElement(
                        'table',
                        null,
                        React.createElement('tr', null)
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'snippet', id: 'snippet-stream-error' },
                    React.createElement('div', { className: 'error-head' }),
                    React.createElement('div', { className: 'error-body' })
                ),
                '*/'
            );
        }
    }]);

    return SceneStream;
}(_Scene3.default);

exports.default = SceneStream;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
    Abstract class for Scenes
    needs to be filled with elements to render
    root element needs to be <div id="scene-{sceneName} ></div>
 */
var Scene = function (_React$Component) {
    _inherits(Scene, _React$Component);

    function Scene(props) {
        _classCallCheck(this, Scene);

        return _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this, props));
    }

    _createClass(Scene, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({ className: ' scene' });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement('div', { className: this.props.className });
        }
    }]);

    return Scene;
}(React.Component);

exports.default = Scene;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ChooseSceneButton = __webpack_require__(6);

var _ChooseSceneButton2 = _interopRequireDefault(_ChooseSceneButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
    Component to maintain ChooseSceneButton components
    always one is selected - changes onclick
    if you want to add more buttons, modify this.childrenIdx in componentWillMount
    on first render is selected first child
 */
var ChooseSceneContainer = function (_React$Component) {
    _inherits(ChooseSceneContainer, _React$Component);

    function ChooseSceneContainer() {
        _classCallCheck(this, ChooseSceneContainer);

        return _possibleConstructorReturn(this, (ChooseSceneContainer.__proto__ || Object.getPrototypeOf(ChooseSceneContainer)).apply(this, arguments));
    }

    _createClass(ChooseSceneContainer, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // selected[index] == true if item with given index is currently selected
            this.setState({ selected: 0 });
            this.childrenIdx = {
                id: [0, 1],
                text: ['Stream', 'Pairing']
            };
        }
    }, {
        key: 'onItemClick',
        value: function onItemClick(id) {
            this.setState({ selected: id });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'choose-scene-container' },
                this.childrenIdx.id.map(function (value, i) {
                    return React.createElement(_ChooseSceneButton2.default, { selected: this.state.selected === i,
                        onClick: this.onItemClick.bind(this),
                        index: i,
                        text: this.childrenIdx.text[i]
                    });
                }, this)
            );
        }
    }]);

    return ChooseSceneContainer;
}(React.Component);

exports.default = ChooseSceneContainer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SceneStream = __webpack_require__(0);

var _SceneStream2 = _interopRequireDefault(_SceneStream);

var _ScenePairing = __webpack_require__(7);

var _ScenePairing2 = _interopRequireDefault(_ScenePairing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
    }

    _createClass(Container, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "viewport" },
                React.createElement(_SceneStream2.default, { id: "scene-stream" }),
                React.createElement(_ScenePairing2.default, { id: "scene-pairing" })
            );
        }
    }]);

    return Container;
}(React.Component);

exports.default = Container;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
    Abstract Button component
    needs Props:
        className
        dataValue
        text = innerHTML
        optional iconClassName

 */

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'renderIcon',
        value: function renderIcon() {
            if (this.props.iconClassName) {
                //TODO: create component Icon and render it here
                //<span class={this.props.iconClassName}></span>
                return '';
            } else {
                return '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var classes = (0, _classnames2.default)('buttons focusable', this.props.className);

            return React.createElement(
                'li',
                { className: classes, 'data-value': this.props.dataValue },
                this.renderIcon(),
                React.createElement(
                    'div',
                    { className: 'text' },
                    this.props.text
                )
            );
        }
    }]);

    return Button;
}(React.Component);

exports.default = Button;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChooseSceneButton = function (_React$Component) {
    _inherits(ChooseSceneButton, _React$Component);

    function ChooseSceneButton() {
        _classCallCheck(this, ChooseSceneButton);

        return _possibleConstructorReturn(this, (ChooseSceneButton.__proto__ || Object.getPrototypeOf(ChooseSceneButton)).apply(this, arguments));
    }

    _createClass(ChooseSceneButton, [{
        key: 'click',
        value: function click() {
            this.props.onClick(this.props.index);
        }
    }, {
        key: 'render',
        value: function render() {
            var classes = (0, _classnames2.default)('choose-button', { selected: this.props.selected ? 'selected' : '' });
            return React.createElement(
                'div',
                { className: classes,
                    onClick: this.click.bind(this) },
                this.props.text
            );
        }
    }]);

    return ChooseSceneButton;
}(React.Component);

exports.default = ChooseSceneButton;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Scene2 = __webpack_require__(1);

var _Scene3 = _interopRequireDefault(_Scene2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScenePairing = function (_Scene) {
    _inherits(ScenePairing, _Scene);

    function ScenePairing() {
        _classCallCheck(this, ScenePairing);

        return _possibleConstructorReturn(this, (ScenePairing.__proto__ || Object.getPrototypeOf(ScenePairing)).apply(this, arguments));
    }

    _createClass(ScenePairing, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "scene-pairing", className: "scene" },
                React.createElement("div", { "class": "logo" }),
                React.createElement(
                    "div",
                    { "class": "info" },
                    React.createElement("h1", null),
                    React.createElement("p", null)
                ),
                React.createElement(
                    "div",
                    { id: "snippet-code" },
                    React.createElement(
                        "div",
                        { "class": "codes pairing_code" },
                        React.createElement("h1", null),
                        React.createElement("div", { "class": "numbers pairing_code_num" })
                    ),
                    React.createElement(
                        "div",
                        { "class": "codes validity" },
                        React.createElement("h1", null),
                        React.createElement("div", { "class": "numbers validity_time" })
                    )
                ),
                React.createElement("div", { "class": "url" })
            );
        }
    }]);

    return ScenePairing;
}(_Scene3.default);

exports.default = ScenePairing;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ViewPort = __webpack_require__(4);

var _ViewPort2 = _interopRequireDefault(_ViewPort);

var _SceneStream = __webpack_require__(0);

var _SceneStream2 = _interopRequireDefault(_SceneStream);

var _ChooseSceneContainer = __webpack_require__(3);

var _ChooseSceneContainer2 = _interopRequireDefault(_ChooseSceneContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'container' },
                React.createElement(_ChooseSceneContainer2.default, null),
                React.createElement(_ViewPort2.default, null)
            );
        }
    }]);

    return Main;
}(React.Component);

exports.default = Main;


ReactDOM.render(React.createElement(Main, null), document.getElementsByTagName('body')[0]);

/***/ })
/******/ ]);