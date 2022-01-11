import itemFormPartial from "./itemFormPartial.js";
import editItem from "./editItem.js";

const editItemForm = (list, index) => {
    itemFormPartial();
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
        editItem(list, taskEdits, index);
        
    });
    form.appendChild(editBtn);
    div.appendChild(form);

}

export default editItemForm;