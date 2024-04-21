/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./index.scss");


let activeButton = null
let currentVolume = null
let audio = null

window.onload = function () {
  const weatherButtons = document.querySelectorAll('.button__weather')
  const volumeControl = document.getElementById('volume-control')

  weatherButtons.forEach((weatherButton) => {
    weatherButton.onclick = setWeather
  })

  currentVolume = volumeControl.value
  volumeControl.onchange = (event) => {
    if (!audio) {
      return
    }

    currentVolume = event.target.value
    audio.volume = currentVolume / 100
  }
}

function setWeather (event) {
  if (activeButton === event.target) {
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
    activeButton.classList.toggle('paused')
    return
  }

  activeButton?.classList.remove('paused')
  activeButton = event.target

  const weather = event.target.dataset.weather
  setAudio(weather)
  setBodyBackgroundImage(weather)
}

function setBodyBackgroundImage (weather) {
  document.body.style.backgroundImage = `url(./assets/images/${weather}-bg.jpg)`
}

function setAudio (weather) {
  if (audio) {
    audio.pause()
    audio = null
  }
  // eslint-disable-next-line no-undef
  audio = new Audio(`./assets/sounds/${weather}.mp3`)
  audio.volume = currentVolume / 100
  audio.loop = true
  audio.play()
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMDBlZGY2YmY4MmI4MmM4NzVkYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUI7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrREFBK0QsUUFBUTtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LnNjc3M/MjgyNSIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5sZXQgYWN0aXZlQnV0dG9uID0gbnVsbFxubGV0IGN1cnJlbnRWb2x1bWUgPSBudWxsXG5sZXQgYXVkaW8gPSBudWxsXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHdlYXRoZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbl9fd2VhdGhlcicpXG4gIGNvbnN0IHZvbHVtZUNvbnRyb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sdW1lLWNvbnRyb2wnKVxuXG4gIHdlYXRoZXJCdXR0b25zLmZvckVhY2goKHdlYXRoZXJCdXR0b24pID0+IHtcbiAgICB3ZWF0aGVyQnV0dG9uLm9uY2xpY2sgPSBzZXRXZWF0aGVyXG4gIH0pXG5cbiAgY3VycmVudFZvbHVtZSA9IHZvbHVtZUNvbnRyb2wudmFsdWVcbiAgdm9sdW1lQ29udHJvbC5vbmNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGlmICghYXVkaW8pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGN1cnJlbnRWb2x1bWUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICBhdWRpby52b2x1bWUgPSBjdXJyZW50Vm9sdW1lIC8gMTAwXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0V2VhdGhlciAoZXZlbnQpIHtcbiAgaWYgKGFjdGl2ZUJ1dHRvbiA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgaWYgKGF1ZGlvLnBhdXNlZCkge1xuICAgICAgYXVkaW8ucGxheSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGF1ZGlvLnBhdXNlKClcbiAgICB9XG4gICAgYWN0aXZlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3BhdXNlZCcpXG4gICAgcmV0dXJuXG4gIH1cblxuICBhY3RpdmVCdXR0b24/LmNsYXNzTGlzdC5yZW1vdmUoJ3BhdXNlZCcpXG4gIGFjdGl2ZUJ1dHRvbiA9IGV2ZW50LnRhcmdldFxuXG4gIGNvbnN0IHdlYXRoZXIgPSBldmVudC50YXJnZXQuZGF0YXNldC53ZWF0aGVyXG4gIHNldEF1ZGlvKHdlYXRoZXIpXG4gIHNldEJvZHlCYWNrZ3JvdW5kSW1hZ2Uod2VhdGhlcilcbn1cblxuZnVuY3Rpb24gc2V0Qm9keUJhY2tncm91bmRJbWFnZSAod2VhdGhlcikge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi9hc3NldHMvaW1hZ2VzLyR7d2VhdGhlcn0tYmcuanBnKWBcbn1cblxuZnVuY3Rpb24gc2V0QXVkaW8gKHdlYXRoZXIpIHtcbiAgaWYgKGF1ZGlvKSB7XG4gICAgYXVkaW8ucGF1c2UoKVxuICAgIGF1ZGlvID0gbnVsbFxuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBhdWRpbyA9IG5ldyBBdWRpbyhgLi9hc3NldHMvc291bmRzLyR7d2VhdGhlcn0ubXAzYClcbiAgYXVkaW8udm9sdW1lID0gY3VycmVudFZvbHVtZSAvIDEwMFxuICBhdWRpby5sb29wID0gdHJ1ZVxuICBhdWRpby5wbGF5KClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==