import itemFormPartial from "./itemFormPartial.js";
import editItem from "./editItem.js";
import displayList from "./displayList.js";
import displayFormController from "./displayForm.js";

const editItemForm = (list, index) => {
    const partial = itemFormPartial('edit');
    //retreive task from storage
    var items = JSON.parse(localStorage.getItem(list));
    const task = items[index];
    // fill edit form with task's data
    var input = document.querySelector('#edit-task-title');
    var description =  document.querySelector('#edit-task-desc');
    var dueDate =  document.querySelector('#edit-task-date');
    var priority =  document.querySelector('#edit-task-priority');
    input.value = task.title;
    description.value = task.description;
    dueDate.value = task.dueDate;
    priority.value = task.priority;
    
    const editBtn = document.createElement('button');
    editBtn.className ="edit-form-btn";
    editBtn.textContent = "Submit edits";
    editBtn.addEventListener('click', () => {
        
        const taskEdits = {
            title: input.value,
            description: description.value,
            dueDate: dueDate.value,
            priority: priority.value
        }
        editItem(list, taskEdits, index);
        displayList(list);
        displayFormController();
        
    });
    // form.appendChild(editBtn);
    // div.appendChild(form);
    partial.append(editBtn);

}

export default editItemForm;