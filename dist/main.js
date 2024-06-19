/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTask)
/* harmony export */ });
//create new dom element inside body
//add text obtained from task.js
//append all children to container dom element

function displayTask(task) {
    let parent = createParentDiv();
    let children = createChildren();
    addTextToChildren(children, task); 
    addChildrenToParent(children, parent);
}

//Variables
let container = document.getElementById('main'),
    title,
    description,
    dueDate,
    priority,
    complete;

const createChildren = function() {
    const children = [
        title = document.createElement('div'),
        description = document.createElement('div'),
        dueDate = document.createElement('div'),
        priority = document.createElement('button'),
        complete = document.createElement('button'),
    ]

    title.className = 'task-title';
    description.className = 'task-description';
    dueDate.className = 'due-date';
    priority.className = 'task-priority';
    complete.className = 'task-complete';

    return children;
}

const addTextToChildren = function(children, task) {
    let i = 0;
    for (const property in task) {
        children[i].textContent = task[property];
        i++;
    }
    return children;
};

const addChildrenToParent = function(children, parent) {
    for (let i = 0; i < children.length; i++) {
        parent.appendChild(children[i]);
    };
};

const createParentDiv = function() {
    let parent = document.createElement('div');
    parent.id = 'task-container';
    container.appendChild(parent);
    return parent;
};

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newTask)
/* harmony export */ });
function newTask() {
    let data = getTaskProps()

    let newTask = new Task(data)
    return newTask
}

function Task(data) {
    this.title = data[0];
    this.description = data[1];
    this.dueDate = data[2];
    this.priority = data[3];
    this.complete = data[4];
}

const getTaskProps = function() {
    let title = prompt('Title');
    let description = prompt('Description');
    let dueDate = prompt('Due Date');
    let priority = prompt('Priority', 'High, Medium, Low');
    let complete = prompt('complete', 'True or False');

    return [title, description, dueDate, priority, complete]
}

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/task.js */ "./src/task.js");
/* harmony import */ var _src_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/display.js */ "./src/display.js");



(0,_src_display_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_src_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
(0,_src_display_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_src_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
(0,_src_display_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_src_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6RGU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7QUNObUM7QUFDTTs7QUFFekMsMkRBQVcsQ0FBQyx3REFBTztBQUNuQiwyREFBVyxDQUFDLHdEQUFPO0FBQ25CLDJEQUFXLENBQUMsd0RBQU8sSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NyZWF0ZSBuZXcgZG9tIGVsZW1lbnQgaW5zaWRlIGJvZHlcbi8vYWRkIHRleHQgb2J0YWluZWQgZnJvbSB0YXNrLmpzXG4vL2FwcGVuZCBhbGwgY2hpbGRyZW4gdG8gY29udGFpbmVyIGRvbSBlbGVtZW50XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2spIHtcbiAgICBsZXQgcGFyZW50ID0gY3JlYXRlUGFyZW50RGl2KCk7XG4gICAgbGV0IGNoaWxkcmVuID0gY3JlYXRlQ2hpbGRyZW4oKTtcbiAgICBhZGRUZXh0VG9DaGlsZHJlbihjaGlsZHJlbiwgdGFzayk7IFxuICAgIGFkZENoaWxkcmVuVG9QYXJlbnQoY2hpbGRyZW4sIHBhcmVudCk7XG59XG5cbi8vVmFyaWFibGVzXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKSxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNvbXBsZXRlO1xuXG5jb25zdCBjcmVhdGVDaGlsZHJlbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW1xuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXG4gICAgICAgIGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXG4gICAgXVxuXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ3Rhc2stdGl0bGUnO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICd0YXNrLWRlc2NyaXB0aW9uJztcbiAgICBkdWVEYXRlLmNsYXNzTmFtZSA9ICdkdWUtZGF0ZSc7XG4gICAgcHJpb3JpdHkuY2xhc3NOYW1lID0gJ3Rhc2stcHJpb3JpdHknO1xuICAgIGNvbXBsZXRlLmNsYXNzTmFtZSA9ICd0YXNrLWNvbXBsZXRlJztcblxuICAgIHJldHVybiBjaGlsZHJlbjtcbn1cblxuY29uc3QgYWRkVGV4dFRvQ2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZHJlbiwgdGFzaykge1xuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRhc2spIHtcbiAgICAgICAgY2hpbGRyZW5baV0udGV4dENvbnRlbnQgPSB0YXNrW3Byb3BlcnR5XTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW47XG59O1xuXG5jb25zdCBhZGRDaGlsZHJlblRvUGFyZW50ID0gZnVuY3Rpb24oY2hpbGRyZW4sIHBhcmVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuW2ldKTtcbiAgICB9O1xufTtcblxuY29uc3QgY3JlYXRlUGFyZW50RGl2ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5pZCA9ICd0YXNrLWNvbnRhaW5lcic7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmVudCk7XG4gICAgcmV0dXJuIHBhcmVudDtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3VGFzaygpIHtcbiAgICBsZXQgZGF0YSA9IGdldFRhc2tQcm9wcygpXG5cbiAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKGRhdGEpXG4gICAgcmV0dXJuIG5ld1Rhc2tcbn1cblxuZnVuY3Rpb24gVGFzayhkYXRhKSB7XG4gICAgdGhpcy50aXRsZSA9IGRhdGFbMF07XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRhdGFbMV07XG4gICAgdGhpcy5kdWVEYXRlID0gZGF0YVsyXTtcbiAgICB0aGlzLnByaW9yaXR5ID0gZGF0YVszXTtcbiAgICB0aGlzLmNvbXBsZXRlID0gZGF0YVs0XTtcbn1cblxuY29uc3QgZ2V0VGFza1Byb3BzID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHRpdGxlID0gcHJvbXB0KCdUaXRsZScpO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IHByb21wdCgnRGVzY3JpcHRpb24nKTtcbiAgICBsZXQgZHVlRGF0ZSA9IHByb21wdCgnRHVlIERhdGUnKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBwcm9tcHQoJ1ByaW9yaXR5JywgJ0hpZ2gsIE1lZGl1bSwgTG93Jyk7XG4gICAgbGV0IGNvbXBsZXRlID0gcHJvbXB0KCdjb21wbGV0ZScsICdUcnVlIG9yIEZhbHNlJyk7XG5cbiAgICByZXR1cm4gW3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlXVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG5ld1Rhc2sgZnJvbSAnL3NyYy90YXNrLmpzJztcbmltcG9ydCBkaXNwbGF5VGFzayBmcm9tICcvc3JjL2Rpc3BsYXkuanMnXG5cbmRpc3BsYXlUYXNrKG5ld1Rhc2soKSk7XG5kaXNwbGF5VGFzayhuZXdUYXNrKCkpO1xuZGlzcGxheVRhc2sobmV3VGFzaygpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=