import saveItem from "./saveItem.js";
import itemFormPartial from "./itemFormPartial.js";
import displayFormController from "./displayForm.js";
import displayList from "./displayList.js";

const addItemForm = (list) => {
    const partial = itemFormPartial('add');
    var input = document.querySelector('#add-task-title');
    var description =  document.querySelector('#add-task-desc');
    var dueDate =  document.querySelector('#add-task-date');
    var priority =  document.querySelector('#add-task-priority');
    
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
        saveItem(newTask, list.id);
        displayList(list.id);
        displayFormController();
        
    });
    const itemForm = document.querySelector('.add-item-form');
    itemForm.appendChild(addItemBtn);

}

export default addItemForm;