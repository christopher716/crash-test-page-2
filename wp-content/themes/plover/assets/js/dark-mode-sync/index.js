/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/scripts/utils/get-color-mode.js":
/*!************************************************!*\
  !*** ./static/scripts/utils/get-color-mode.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getColorMode: () => (/* binding */ getColorMode),
/* harmony export */   getSessionColorMode: () => (/* binding */ getSessionColorMode),
/* harmony export */   getSystemColorMode: () => (/* binding */ getSystemColorMode)
/* harmony export */ });
/**
 * Get current color mode from cookie
 *
 * @returns {undefined|string}
 */
function getSessionColorMode() {
  const cookie = document.cookie.split(';').filter(c => c.indexOf('ploverDarkMode') !== -1).at(0);
  if (!cookie) {
    return undefined;
  }
  const value = cookie.substring(cookie.indexOf('=') + 1);
  if (value === 'true') {
    return 'dark';
  } else if (value === 'false') {
    return 'light';
  } else if (value === 'system') {
    return 'system';
  }
  return undefined;
}

/**
 * Get current device color mode
 *
 * @returns {string|null}
 */
function getSystemColorMode() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
  return isDarkMode ? 'dark' : isLightMode ? 'light' : null;
}

/**
 * Get current active color mode
 *
 * @param el
 * @returns {string|*}
 */
function getColorMode(el = document.body) {
  var _getSessionColorMode;
  if (el) {
    if (el.classList.contains('is-style-dark')) {
      return 'dark';
    }
    if (el.classList.contains('is-style-light')) {
      return 'light';
    }
    if (el.classList.contains('is-style-system')) {
      return 'system';
    }
  }
  return (_getSessionColorMode = getSessionColorMode()) !== null && _getSessionColorMode !== void 0 ? _getSessionColorMode : window?.PloverTheme?.darkMode?.defaultMode;
}

/***/ }),

/***/ "./static/scripts/utils/get-editor-root-element.js":
/*!*********************************************************!*\
  !*** ./static/scripts/utils/get-editor-root-element.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEditorRootElement: () => (/* binding */ getEditorRootElement)
/* harmony export */ });
/**
 * Find the editor element
 *
 * @returns
 */
function getEditorRootElement() {
  const editorIframe = document.querySelector('[name=editor-canvas]');
  if (editorIframe) {
    return editorIframe.contentDocument.body;
  }
  const editorStylesWrapper = document.getElementsByClassName('editor-styles-wrapper')[0];
  if (editorStylesWrapper) {
    return editorStylesWrapper;
  }
  return document.body;
}

/***/ }),

/***/ "./static/scripts/utils/index.js":
/*!***************************************!*\
  !*** ./static/scripts/utils/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getColorMode: () => (/* reexport safe */ _get_color_mode__WEBPACK_IMPORTED_MODULE_2__.getColorMode),
/* harmony export */   getEditorRootElement: () => (/* reexport safe */ _get_editor_root_element__WEBPACK_IMPORTED_MODULE_0__.getEditorRootElement),
/* harmony export */   getSessionColorMode: () => (/* reexport safe */ _get_color_mode__WEBPACK_IMPORTED_MODULE_2__.getSessionColorMode),
/* harmony export */   getSystemColorMode: () => (/* reexport safe */ _get_color_mode__WEBPACK_IMPORTED_MODULE_2__.getSystemColorMode),
/* harmony export */   persistentDarkMode: () => (/* reexport safe */ _persistent_dark_mode__WEBPACK_IMPORTED_MODULE_1__.persistentDarkMode),
/* harmony export */   setColorMode: () => (/* reexport safe */ _set_color_mode__WEBPACK_IMPORTED_MODULE_3__.setColorMode)
/* harmony export */ });
/* harmony import */ var _get_editor_root_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-editor-root-element */ "./static/scripts/utils/get-editor-root-element.js");
/* harmony import */ var _persistent_dark_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persistent-dark-mode */ "./static/scripts/utils/persistent-dark-mode.js");
/* harmony import */ var _get_color_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-color-mode */ "./static/scripts/utils/get-color-mode.js");
/* harmony import */ var _set_color_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-color-mode */ "./static/scripts/utils/set-color-mode.js");





/***/ }),

/***/ "./static/scripts/utils/persistent-dark-mode.js":
/*!******************************************************!*\
  !*** ./static/scripts/utils/persistent-dark-mode.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   persistentDarkMode: () => (/* binding */ persistentDarkMode)
/* harmony export */ });
/**
 * persistent dark mode in cookie
 *
 * @param mode
 * @param cookiePeriod
 *
 * @returns
 */
function persistentDarkMode(mode, cookiePeriod) {
  const cookiePeriodInSeconds = {
    '1-day': 3600 * 24,
    '7-days': 3600 * 24 * 7,
    '30-days': 3600 * 24 * 30
  };
  const colorModeValue = mode === 'system' ? mode : mode === 'dark';
  if (cookiePeriod === 'session') {
    document.cookie = `ploverDarkMode=${colorModeValue};path=/`;
  } else {
    document.cookie = `ploverDarkMode=${colorModeValue};path=/;max-age=${cookiePeriodInSeconds[cookiePeriod]}`;
  }
}

/***/ }),

/***/ "./static/scripts/utils/set-color-mode.js":
/*!************************************************!*\
  !*** ./static/scripts/utils/set-color-mode.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setColorMode: () => (/* binding */ setColorMode)
/* harmony export */ });
/* harmony import */ var _persistent_dark_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persistent-dark-mode */ "./static/scripts/utils/persistent-dark-mode.js");


/**
 * Set color mode for given el
 *
 * @param {HTMLElement} el
 * @param {string} mode
 */
function setColorMode(el, mode, persistent = true) {
  el.classList.remove(`is-style-dark`);
  el.classList.remove(`is-style-light`);
  el.classList.remove(`is-style-system`);
  if (mode !== '') {
    el.classList.add(`is-style-${mode}`);
    if (persistent) {
      var _window$PloverTheme$d;
      (0,_persistent_dark_mode__WEBPACK_IMPORTED_MODULE_0__.persistentDarkMode)(mode, ((_window$PloverTheme$d = window?.PloverTheme?.darkMode?.cookiePeriod) !== null && _window$PloverTheme$d !== void 0 ? _window$PloverTheme$d : 'session').toLowerCase());
    }
  }
}

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["domReady"];

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./static/scripts/dark-mode-sync/index.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./static/scripts/utils/index.js");


/**
 * Internal dependencies
 */

function getCurrentColorPresets() {
  var _window$PloverTheme$d;
  const themeColors = (_window$PloverTheme$d = window?.PloverTheme?.darkMode?.colors) !== null && _window$PloverTheme$d !== void 0 ? _window$PloverTheme$d : {};
  const documentStyles = window.getComputedStyle(document.documentElement);
  const bodyStyles = window.getComputedStyle(document.body);
  const currentColors = {};
  Object.keys(themeColors).forEach(color => {
    let current = documentStyles.getPropertyValue(`--wp--preset--color--${color}`);
    if (!current) {
      // backward compatible
      current = bodyStyles.getPropertyValue(`--wp--preset--color--${color}`);
    }
    if (current) {
      currentColors[color] = current;
    }
  });
  return currentColors;
}
function getDarkModeCss() {
  var _window$PloverTheme$d2, _window$PloverTheme$d3;
  const system = ['current', 'currentcolor', 'currentColor', 'inherit', 'initial', 'transparent', 'unset'];
  const shadeMap = (_window$PloverTheme$d2 = window?.PloverTheme?.darkMode?.shadeMap) !== null && _window$PloverTheme$d2 !== void 0 ? _window$PloverTheme$d2 : {};
  const customThemeVars = (_window$PloverTheme$d3 = window?.PloverTheme?.darkMode?.customThemeVars) !== null && _window$PloverTheme$d3 !== void 0 ? _window$PloverTheme$d3 : {};
  const currentColors = getCurrentColorPresets();
  let default_styles = '';
  let opposite_styles = '';
  for (const color in currentColors) {
    var _explode$, _explode$2;
    const value = currentColors[color];
    const explode = color.split('-');
    const name = (_explode$ = explode[0]) !== null && _explode$ !== void 0 ? _explode$ : '';
    const shade = (_explode$2 = explode[1]) !== null && _explode$2 !== void 0 ? _explode$2 : '';
    if (shade && system.indexOf(color) === -1) {
      var _shadeMap$name$shade, _currentColors;
      default_styles += `--wp--preset--color--${color}:${value};`;
      const opposite_shade = (_shadeMap$name$shade = shadeMap[name][shade]) !== null && _shadeMap$name$shade !== void 0 ? _shadeMap$name$shade : '';
      const opposite_value = (_currentColors = currentColors[`${name}-${opposite_shade}`]) !== null && _currentColors !== void 0 ? _currentColors : '';
      if (opposite_value) {
        opposite_styles += `--wp--preset--color--${color}:${opposite_value};`;
      }
    }
  }
  for (const cssVar in customThemeVars) {
    default_styles += `${cssVar}:${customThemeVars[cssVar]};`;
    opposite_styles += `${cssVar}:${customThemeVars[cssVar]};`;
  }
  let css = `html .is-style-light{ ${default_styles} }`;
  css += `html .is-style-dark{ ${opposite_styles} }`;
  css += `@media (prefers-color-scheme:dark){body{ ${opposite_styles} }}`;
  return css;
}
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  setTimeout(() => {
    // sync color mode classnames
    const rootEl = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEditorRootElement)();
    if (rootEl) {
      const syncDarkModeClassnames = () => {
        var _window$PloverTheme$d4;
        const rootEl = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEditorRootElement)();
        const currentMode = (_window$PloverTheme$d4 = window?.PloverTheme?.darkMode?.sessionMode) !== null && _window$PloverTheme$d4 !== void 0 ? _window$PloverTheme$d4 : window?.PloverTheme?.darkMode?.defaultMode;
        const defaultModeCss = currentMode === 'system' ? 'default-mode-system' : `default-mode-${window?.PloverTheme?.darkMode?.defaultMode}`;
        if (rootEl !== document.body) {
          document.body.classList.remove(defaultModeCss);
          (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setColorMode)(document.body, '', false);
        }
        if (rootEl && !rootEl.classList.contains(defaultModeCss)) {
          rootEl.classList.add(defaultModeCss);
          (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setColorMode)(rootEl, currentMode, false);
        }
      };
      syncDarkModeClassnames();
      const observer = new MutationObserver(syncDarkModeClassnames);
      observer.observe(rootEl, {
        childList: true,
        subtree: true
      });
    }

    // sync dark mode css in site-editor
    if (window?.PloverTheme?.darkMode?.isSiteEditor) {
      //
      // Create dark mode style element
      //
      let syncStyle = document.querySelector('#plover-dark-mode-sync');
      if (!syncStyle) {
        syncStyle = document.createElement('style');
        syncStyle.textContent = getDarkModeCss();
        syncStyle.id = 'plover-dark-mode-sync';
      }
      document.body.appendChild(syncStyle);

      //
      // Re-generate the dark mode css if the characters of any of the style elements change.
      //

      const styles = document.querySelectorAll('style');
      const callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
          if (mutation.type === 'characterData') {
            syncStyle.textContent = '';
            syncStyle.textContent = getDarkModeCss();
          }
        }
      };
      const config = {
        characterData: true,
        subtree: true
      };
      styles.forEach(style => {
        if (style.id !== 'plover-dark-mode-sync') {
          const observer = new MutationObserver(callback);
          observer.observe(style, config);
        }
      });
    }
  }, 100); // Delay a little while
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map