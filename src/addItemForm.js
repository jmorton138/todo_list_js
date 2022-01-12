import saveItem from "./saveItem.js";
import addItemToList from "./addItem.js";
import itemFormPartial from "./itemFormPartial.js";

const addItemForm = (list) => {
    const partial = itemFormPartial('add');
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
        saveItem(newTask, list.id);
        addItemToList(newTask.title);
        input.value= "";
        
    });
    const itemForm = document.querySelector('.add-item-form');
    itemForm.appendChild(addItemBtn);

}

export default addItemForm;