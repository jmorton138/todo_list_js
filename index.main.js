/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addItem.js":
/*!************************!*\
  !*** ./src/addItem.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addItemToList = (input) => {
    const list = document.querySelector('.list')
    const listItem = document.createElement('li');
    listItem.textContent = input;
    list.appendChild(listItem);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addItemToList);

/***/ }),

/***/ "./src/addItemForm.js":
/*!****************************!*\
  !*** ./src/addItemForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _saveItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveItem.js */ "./src/saveItem.js");
/* harmony import */ var _addItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addItem.js */ "./src/addItem.js");
/* harmony import */ var _itemFormPartial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemFormPartial.js */ "./src/itemFormPartial.js");




const addItemForm = (list) => {
    const partial = (0,_itemFormPartial_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    // const div = document.querySelector('.list-container');
    // const form = document.querySelector('.item-form');

    var input = document.querySelector('#task-title');
    var description =  document.querySelector('#task-desc');
    var dueDate =  document.querySelector('#task-date');
    var priority =  document.querySelector('#task-priority');

    const addItemBtn = document.createElement('button');
    addItemBtn.className = "add-item-btn";
    addItemBtn.textContent = "Add a task";
    addItemBtn.addEventListener('click', () => {
        
        const newTask = {
            title: input.value,
            description: description.value,
            dueDate: dueDate.value,
            priority: priority.value
        }
        ;(0,_saveItem_js__WEBPACK_IMPORTED_MODULE_0__["default"])(newTask, list.id);
        (0,_addItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(newTask.title);
        input.value= "";
        
    });
    partial.appendChild(addItemBtn);
    // div.appendChild(form);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addItemForm);

/***/ }),

/***/ "./src/collapseItem.js":
/*!*****************************!*\
  !*** ./src/collapseItem.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _expandItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expandItem */ "./src/expandItem.js");


const collapseItem = (task, event) => {
    console.log(task)
    var element = event.target;
    element.innerHTML = `title: ${task.title}`;
    element.onclick = (event) => (0,_expandItem__WEBPACK_IMPORTED_MODULE_0__["default"])(task, event);


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (collapseItem);

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createProject = (input) => {
    let tasks = []
    localStorage.setItem(input, JSON.stringify(tasks));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);

/***/ }),

/***/ "./src/deleteItem.js":
/*!***************************!*\
  !*** ./src/deleteItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deleteItem = (list, index) => {
    var items = JSON.parse(localStorage.getItem(list));
    items.splice(index, 1);
    items = JSON.stringify(items);
    localStorage.setItem(list, items);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteItem);

/***/ }),

/***/ "./src/displayItemMin.js":
/*!*******************************!*\
  !*** ./src/displayItemMin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayItemMin = (listName, index) => {
    var items = JSON.parse(localStorage.getItem(listName));
    const task = items[index];
    const div = document.createElement('div');
    div.textContent = `${task.title}`;

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "DELETED!";
    deleteBtn.oncldivk = () => deleteItem(listName, index);
    div.appendChild(deleteBtn)

    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit task";
    editBtn.onclick = () => editItemForm(listName, index);
    div.appendChild(editBtn);
    return div
    //li.onclick = (event) => expandItem(task, event);


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayItemMin);

/***/ }),

/***/ "./src/displayList.js":
/*!****************************!*\
  !*** ./src/displayList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _expandItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expandItem.js */ "./src/expandItem.js");
/* harmony import */ var _deleteItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteItem.js */ "./src/deleteItem.js");
/* harmony import */ var _editItemForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editItemForm.js */ "./src/editItemForm.js");
/* harmony import */ var _displayItemMin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayItemMin.js */ "./src/displayItemMin.js");





const displayList = (listName) => {
    document.querySelector('.list').innerHTML = "";
    const heading = document.querySelector('.list-name');
    heading.textContent = `${listName} To Do's`;
    const list = document.querySelector('ul');
    list.id = listName;
    const tasks = JSON.parse(localStorage.getItem(listName));
    tasks.forEach( (task, index) => {
        const item = (0,_displayItemMin_js__WEBPACK_IMPORTED_MODULE_3__["default"])(listName, index);
        list.appendChild(item);
    })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayList);

/***/ }),

/***/ "./src/displayProjects.js":
/*!********************************!*\
  !*** ./src/displayProjects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayList */ "./src/displayList.js");


const displayProjects = () => {
    const content = document.getElementById('content');
    var list = document.querySelector('.projects');
    if (list === null) {
        list = document.createElement('ul');
        list.className = "projects";
    } else {
        list.innerHTML = "";
    }

 
        for (let i = 0; i < localStorage.length; i++) {
            const li = document.createElement('li');
            const name = localStorage.key(i);
            li.textContent = name;
            li.addEventListener('click', () => {
                (0,_displayList__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
            })
            list.appendChild(li);
        }
        content.appendChild(list);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayProjects);

/***/ }),

/***/ "./src/editItem.js":
/*!*************************!*\
  !*** ./src/editItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const editItem = (list, editedInfo, index) => {
    var items = JSON.parse(localStorage.getItem(list));
    items[index] = editedInfo;
    items = JSON.stringify(items);
    localStorage.setItem(list, items);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editItem);

/***/ }),

/***/ "./src/editItemForm.js":
/*!*****************************!*\
  !*** ./src/editItemForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _itemFormPartial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemFormPartial.js */ "./src/itemFormPartial.js");
/* harmony import */ var _editItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editItem.js */ "./src/editItem.js");



const editItemForm = (list, index) => {
    (0,_itemFormPartial_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const div = document.querySelector('.list-container');
    const form = document.querySelector('.item-form');

    var items = JSON.parse(localStorage.getItem(list));
    const task = items[index];
    var input = document.querySelector('#task-title');
    var description =  document.querySelector('#task-desc');
    var dueDate =  document.querySelector('#task-date');
    var priority =  document.querySelector('#task-priority');
    input.value = task.title;
    description.value = task.description;
    dueDate.value = task.dueDate;
    priority.value = task.priority;
    
    const editBtn = document.createElement('button');
    editBtn.className ="edit-btn";
    editBtn.textContent = "Submit edits";
    editBtn.addEventListener('click', () => {
        
        const taskEdits = {
            title: input.value,
            description: description.value,
            dueDate: dueDate.value,
            priority: priority.value
        }
        ;(0,_editItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(list, taskEdits, index);
        
    });
    form.appendChild(editBtn);
    div.appendChild(form);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editItemForm);

/***/ }),

/***/ "./src/expandItem.js":
/*!***************************!*\
  !*** ./src/expandItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _collapseItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapseItem */ "./src/collapseItem.js");


const expandItem = (task, event) => {
    var element = event.target;
    element.innerHTML = `title: ${task.title},description: ${task.description}, due: ${task.dueDate}, priority: ${task.priority}`;
    element.onclick = (event) => (0,_collapseItem__WEBPACK_IMPORTED_MODULE_0__["default"])(task, event);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (expandItem);

/***/ }),

/***/ "./src/homeDom.js":
/*!************************!*\
  !*** ./src/homeDom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addItem.js */ "./src/addItem.js");
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _displayList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayList.js */ "./src/displayList.js");
/* harmony import */ var _saveItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saveItem.js */ "./src/saveItem.js");
/* harmony import */ var _displayProjects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayProjects.js */ "./src/displayProjects.js");
/* harmony import */ var _addItemForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addItemForm.js */ "./src/addItemForm.js");
/* harmony import */ var _newProjectForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newProjectForm.js */ "./src/newProjectForm.js");








const HomeDOM = () => {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.className ="list-container";
    content.appendChild(div);

    //render heading
    const heading = document.createElement('h1');
    heading.className = "list-name";
    div.appendChild(heading);

    //render list
    var list = document.createElement('ul');
    list.className = 'list';
    list.id = "Main";
    div.appendChild(list);

    (0,_addItemForm_js__WEBPACK_IMPORTED_MODULE_5__["default"])(list);
    (0,_newProjectForm_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
    
    (0,_displayList_js__WEBPACK_IMPORTED_MODULE_2__["default"])(list.id);
    (0,_displayProjects_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeDOM);

/***/ }),

/***/ "./src/itemFormPartial.js":
/*!********************************!*\
  !*** ./src/itemFormPartial.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemFormPartial = () => {

    const div = document.querySelector('.list-container');

    const form = document.createElement('div');
    form.className = "item-form";

    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Task name";
    input.id = "task-title";
    var itemLabel = document.createElement('label');
    itemLabel.setAttribute("for", input.id);
    itemLabel.innerHTML = "Task name";
    form.appendChild(itemLabel);
    form.appendChild(input);

    const description = document.createElement('input');
    description.type = "text";
    description.placeholder = "Description";
    description.id ="task-desc"
    var descLabel = document.createElement('label');
    descLabel.setAttribute("for", description.id);
    descLabel.innerHTML = "Description";
    form.appendChild(descLabel);
    form.appendChild(description);

    const dueDate = document.createElement('input');
    dueDate.type = "date";
    dueDate.id = "task-date";
    var dateLabel = document.createElement('label');
    dateLabel.setAttribute("for", dueDate.id);
    dateLabel.innerHTML = " Due date";
    form.appendChild(dateLabel);
    form.appendChild(dueDate);

    const priority = document.createElement('select');
    priority.className = "priority-select";
    priority.id = "task-priority";
    var option1 = document.createElement("option");
    priority.appendChild(option1);
    var option2 = document.createElement("option");
    priority.appendChild(option2);
    var option3 = document.createElement("option");
    priority.appendChild(option3);
    option1.value = "High";
    option1.text = "High";
    option2.value = "Mid";
    option2.text = "Mid";
    option3.value = "Low";
    option3.text = "Low";
    var priorLabel = document.createElement('label');
    priorLabel.setAttribute("for", priority.id);
    priorLabel.innerHTML = "Priority";
    form.appendChild(priorLabel);
    form.appendChild(priority);
    div.appendChild(form);
    return div

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemFormPartial);

/***/ }),

/***/ "./src/newProjectForm.js":
/*!*******************************!*\
  !*** ./src/newProjectForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _displayProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProjects.js */ "./src/displayProjects.js");



const newProjectForm = () => {
    const content = document.getElementById('content');

    const newProjectForm = document.createElement('div');
    newProjectForm.className = "new-project-form";
    const projectName = document.createElement('input');
    projectName.type = "text";
    newProjectForm.appendChild(projectName)
  
    const newProjectBtn = document.createElement('button');
    newProjectBtn.className = "new-project-btn";
    newProjectBtn.textContent = "Create new project";
    newProjectBtn.addEventListener('click', () => {
        (0,_createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName.value);
        (0,_displayProjects_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        projectName.value = "";
    })
    newProjectForm.appendChild(newProjectBtn)
    content.appendChild(newProjectForm);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjectForm);

/***/ }),

/***/ "./src/saveItem.js":
/*!*************************!*\
  !*** ./src/saveItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const saveItem = (newTask, listName) => {
    let list;
    if (localStorage.getItem(listName) === null) {
        list = [];
    } else {
        list = JSON.parse(localStorage.getItem(listName));
    }
    list.push(newTask);
    localStorage.setItem(listName, JSON.stringify(list));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveItem);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeDom.js */ "./src/homeDom.js");


window.addEventListener('load', () => {
    (0,_homeDom_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RpQjtBQUNJOztBQUVuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBYTtBQUNyQixRQUFRLCtEQUFlO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7OztBQ3hCN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUNYdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tQzs7QUFFbkM7QUFDQSxJQUFJLHVEQUFPOztBQUVYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvYWRkSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvYWRkSXRlbUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2NvbGxhcHNlSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZGVsZXRlSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvZGlzcGxheUl0ZW1NaW4uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2Rpc3BsYXlMaXN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9kaXNwbGF5UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2VkaXRJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9lZGl0SXRlbUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2V4cGFuZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2hvbWVEb20uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL2l0ZW1Gb3JtUGFydGlhbC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvLi9zcmMvbmV3UHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X2pzLy4vc3JjL3NhdmVJdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3RfanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdF9qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdF9qcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRJdGVtVG9MaXN0ID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JylcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpbnB1dDtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkSXRlbVRvTGlzdDsiLCJpbXBvcnQgc2F2ZUl0ZW0gZnJvbSBcIi4vc2F2ZUl0ZW0uanNcIjtcbmltcG9ydCBhZGRJdGVtVG9MaXN0IGZyb20gXCIuL2FkZEl0ZW0uanNcIjtcbmltcG9ydCBpdGVtRm9ybVBhcnRpYWwgZnJvbSBcIi4vaXRlbUZvcm1QYXJ0aWFsLmpzXCI7XG5cbmNvbnN0IGFkZEl0ZW1Gb3JtID0gKGxpc3QpID0+IHtcbiAgICBjb25zdCBwYXJ0aWFsID0gaXRlbUZvcm1QYXJ0aWFsKCk7XG4gICAgLy8gY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XG4gICAgLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWZvcm0nKTtcblxuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJyk7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2MnKTtcbiAgICB2YXIgZHVlRGF0ZSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kYXRlJyk7XG4gICAgdmFyIHByaW9yaXR5ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5Jyk7XG5cbiAgICBjb25zdCBhZGRJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkSXRlbUJ0bi5jbGFzc05hbWUgPSBcImFkZC1pdGVtLWJ0blwiO1xuICAgIGFkZEl0ZW1CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBhIHRhc2tcIjtcbiAgICBhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkudmFsdWVcbiAgICAgICAgfVxuICAgICAgICBzYXZlSXRlbShuZXdUYXNrLCBsaXN0LmlkKTtcbiAgICAgICAgYWRkSXRlbVRvTGlzdChuZXdUYXNrLnRpdGxlKTtcbiAgICAgICAgaW5wdXQudmFsdWU9IFwiXCI7XG4gICAgICAgIFxuICAgIH0pO1xuICAgIHBhcnRpYWwuYXBwZW5kQ2hpbGQoYWRkSXRlbUJ0bik7XG4gICAgLy8gZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEl0ZW1Gb3JtOyIsImltcG9ydCBleHBhbmRJdGVtIGZyb20gXCIuL2V4cGFuZEl0ZW1cIjtcblxuY29uc3QgY29sbGFwc2VJdGVtID0gKHRhc2ssIGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2codGFzaylcbiAgICB2YXIgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGB0aXRsZTogJHt0YXNrLnRpdGxlfWA7XG4gICAgZWxlbWVudC5vbmNsaWNrID0gKGV2ZW50KSA9PiBleHBhbmRJdGVtKHRhc2ssIGV2ZW50KTtcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbGxhcHNlSXRlbTsiLCJjb25zdCBjcmVhdGVQcm9qZWN0ID0gKGlucHV0KSA9PiB7XG4gICAgbGV0IHRhc2tzID0gW11cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpbnB1dCwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDsiLCJjb25zdCBkZWxldGVJdGVtID0gKGxpc3QsIGluZGV4KSA9PiB7XG4gICAgdmFyIGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0KSk7XG4gICAgaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpdGVtcyA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaXN0LCBpdGVtcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUl0ZW07IiwiY29uc3QgZGlzcGxheUl0ZW1NaW4gPSAobGlzdE5hbWUsIGluZGV4KSA9PiB7XG4gICAgdmFyIGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0TmFtZSkpO1xuICAgIGNvbnN0IHRhc2sgPSBpdGVtc1tpbmRleF07XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnRleHRDb250ZW50ID0gYCR7dGFzay50aXRsZX1gO1xuXG4gICAgXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJERUxFVEVEIVwiO1xuICAgIGRlbGV0ZUJ0bi5vbmNsZGl2ayA9ICgpID0+IGRlbGV0ZUl0ZW0obGlzdE5hbWUsIGluZGV4KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXQgdGFza1wiO1xuICAgIGVkaXRCdG4ub25jbGljayA9ICgpID0+IGVkaXRJdGVtRm9ybShsaXN0TmFtZSwgaW5kZXgpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICByZXR1cm4gZGl2XG4gICAgLy9saS5vbmNsaWNrID0gKGV2ZW50KSA9PiBleHBhbmRJdGVtKHRhc2ssIGV2ZW50KTtcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlJdGVtTWluOyIsImltcG9ydCBleHBhbmRJdGVtIGZyb20gXCIuL2V4cGFuZEl0ZW0uanNcIjtcbmltcG9ydCBkZWxldGVJdGVtIGZyb20gXCIuL2RlbGV0ZUl0ZW0uanNcIjtcbmltcG9ydCBlZGl0SXRlbUZvcm0gZnJvbSBcIi4vZWRpdEl0ZW1Gb3JtLmpzXCI7XG5pbXBvcnQgZGlzcGxheUl0ZW1NaW4gZnJvbSBcIi4vZGlzcGxheUl0ZW1NaW4uanNcIjtcblxuY29uc3QgZGlzcGxheUxpc3QgPSAobGlzdE5hbWUpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LW5hbWUnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gYCR7bGlzdE5hbWV9IFRvIERvJ3NgO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgIGxpc3QuaWQgPSBsaXN0TmFtZTtcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdE5hbWUpKTtcbiAgICB0YXNrcy5mb3JFYWNoKCAodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRpc3BsYXlJdGVtTWluKGxpc3ROYW1lLCBpbmRleCk7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TGlzdDsiLCJpbXBvcnQgZGlzcGxheUxpc3QgZnJvbSBcIi4vZGlzcGxheUxpc3RcIjtcblxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIHZhciBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4gICAgaWYgKGxpc3QgPT09IG51bGwpIHtcbiAgICAgICAgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGxpc3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0c1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG5cbiBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheUxpc3QobmFtZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVByb2plY3RzOyIsImNvbnN0IGVkaXRJdGVtID0gKGxpc3QsIGVkaXRlZEluZm8sIGluZGV4KSA9PiB7XG4gICAgdmFyIGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0KSk7XG4gICAgaXRlbXNbaW5kZXhdID0gZWRpdGVkSW5mbztcbiAgICBpdGVtcyA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaXN0LCBpdGVtcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRJdGVtOyIsImltcG9ydCBpdGVtRm9ybVBhcnRpYWwgZnJvbSBcIi4vaXRlbUZvcm1QYXJ0aWFsLmpzXCI7XG5pbXBvcnQgZWRpdEl0ZW0gZnJvbSBcIi4vZWRpdEl0ZW0uanNcIjtcblxuY29uc3QgZWRpdEl0ZW1Gb3JtID0gKGxpc3QsIGluZGV4KSA9PiB7XG4gICAgaXRlbUZvcm1QYXJ0aWFsKCk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWZvcm0nKTtcblxuICAgIHZhciBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdCkpO1xuICAgIGNvbnN0IHRhc2sgPSBpdGVtc1tpbmRleF07XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKTtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzYycpO1xuICAgIHZhciBkdWVEYXRlID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUnKTtcbiAgICB2YXIgcHJpb3JpdHkgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHknKTtcbiAgICBpbnB1dC52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgcHJpb3JpdHkudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuICAgIFxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnRuLmNsYXNzTmFtZSA9XCJlZGl0LWJ0blwiO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdCBlZGl0c1wiO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrRWRpdHMgPSB7XG4gICAgICAgICAgICB0aXRsZTogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgZWRpdEl0ZW0obGlzdCwgdGFza0VkaXRzLCBpbmRleCk7XG4gICAgICAgIFxuICAgIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRJdGVtRm9ybTsiLCJpbXBvcnQgY29sbGFwc2VJdGVtIGZyb20gXCIuL2NvbGxhcHNlSXRlbVwiO1xuXG5jb25zdCBleHBhbmRJdGVtID0gKHRhc2ssIGV2ZW50KSA9PiB7XG4gICAgdmFyIGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgdGl0bGU6ICR7dGFzay50aXRsZX0sZGVzY3JpcHRpb246ICR7dGFzay5kZXNjcmlwdGlvbn0sIGR1ZTogJHt0YXNrLmR1ZURhdGV9LCBwcmlvcml0eTogJHt0YXNrLnByaW9yaXR5fWA7XG4gICAgZWxlbWVudC5vbmNsaWNrID0gKGV2ZW50KSA9PiBjb2xsYXBzZUl0ZW0odGFzaywgZXZlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBleHBhbmRJdGVtOyIsImltcG9ydCBhZGRJdGVtVG9MaXN0IGZyb20gXCIuL2FkZEl0ZW0uanNcIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3QuanNcIjtcbmltcG9ydCBkaXNwbGF5TGlzdCBmcm9tIFwiLi9kaXNwbGF5TGlzdC5qc1wiO1xuaW1wb3J0IHNhdmVJdGVtIGZyb20gXCIuL3NhdmVJdGVtLmpzXCI7XG5pbXBvcnQgZGlzcGxheVByb2plY3RzIGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0cy5qc1wiO1xuaW1wb3J0IGFkZEl0ZW1Gb3JtIGZyb20gXCIuL2FkZEl0ZW1Gb3JtLmpzXCI7XG5pbXBvcnQgbmV3UHJvamVjdEZvcm0gZnJvbSBcIi4vbmV3UHJvamVjdEZvcm0uanNcIjtcblxuY29uc3QgSG9tZURPTSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID1cImxpc3QtY29udGFpbmVyXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgLy9yZW5kZXIgaGVhZGluZ1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcuY2xhc3NOYW1lID0gXCJsaXN0LW5hbWVcIjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICAvL3JlbmRlciBsaXN0XG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3QuY2xhc3NOYW1lID0gJ2xpc3QnO1xuICAgIGxpc3QuaWQgPSBcIk1haW5cIjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgICBhZGRJdGVtRm9ybShsaXN0KTtcbiAgICBuZXdQcm9qZWN0Rm9ybSgpO1xuICAgIFxuICAgIGRpc3BsYXlMaXN0KGxpc3QuaWQpO1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVET007IiwiY29uc3QgaXRlbUZvcm1QYXJ0aWFsID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSBcIml0ZW0tZm9ybVwiO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBuYW1lXCI7XG4gICAgaW5wdXQuaWQgPSBcInRhc2stdGl0bGVcIjtcbiAgICB2YXIgaXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpdGVtTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0LmlkKTtcbiAgICBpdGVtTGFiZWwuaW5uZXJIVE1MID0gXCJUYXNrIG5hbWVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGl0ZW1MYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb24udHlwZSA9IFwidGV4dFwiO1xuICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uLmlkID1cInRhc2stZGVzY1wiXG4gICAgdmFyIGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBkZXNjcmlwdGlvbi5pZCk7XG4gICAgZGVzY0xhYmVsLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgICBkdWVEYXRlLmlkID0gXCJ0YXNrLWRhdGVcIjtcbiAgICB2YXIgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGR1ZURhdGUuaWQpO1xuICAgIGRhdGVMYWJlbC5pbm5lckhUTUwgPSBcIiBEdWUgZGF0ZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eS5jbGFzc05hbWUgPSBcInByaW9yaXR5LXNlbGVjdFwiO1xuICAgIHByaW9yaXR5LmlkID0gXCJ0YXNrLXByaW9yaXR5XCI7XG4gICAgdmFyIG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuICAgIHZhciBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24yKTtcbiAgICB2YXIgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG4gICAgb3B0aW9uMS52YWx1ZSA9IFwiSGlnaFwiO1xuICAgIG9wdGlvbjEudGV4dCA9IFwiSGlnaFwiO1xuICAgIG9wdGlvbjIudmFsdWUgPSBcIk1pZFwiO1xuICAgIG9wdGlvbjIudGV4dCA9IFwiTWlkXCI7XG4gICAgb3B0aW9uMy52YWx1ZSA9IFwiTG93XCI7XG4gICAgb3B0aW9uMy50ZXh0ID0gXCJMb3dcIjtcbiAgICB2YXIgcHJpb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgcHJpb3JpdHkuaWQpO1xuICAgIHByaW9yTGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIHJldHVybiBkaXZcblxufVxuXG5leHBvcnQgZGVmYXVsdCBpdGVtRm9ybVBhcnRpYWw7IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdC5qc1wiO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0cyBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdHMuanNcIjtcblxuY29uc3QgbmV3UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTmFtZSA9IFwibmV3LXByb2plY3QtZm9ybVwiO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpXG4gIFxuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwibmV3LXByb2plY3QtYnRuXCI7XG4gICAgbmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIG5ldyBwcm9qZWN0XCI7XG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICBwcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgfSlcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXdQcm9qZWN0Rm9ybTsiLCJjb25zdCBzYXZlSXRlbSA9IChuZXdUYXNrLCBsaXN0TmFtZSkgPT4ge1xuICAgIGxldCBsaXN0O1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0TmFtZSkgPT09IG51bGwpIHtcbiAgICAgICAgbGlzdCA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3ROYW1lKSk7XG4gICAgfVxuICAgIGxpc3QucHVzaChuZXdUYXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaXN0TmFtZSwgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzYXZlSXRlbTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBIb21lRE9NIGZyb20gJy4vaG9tZURvbS5qcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIEhvbWVET00oKTtcblxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==