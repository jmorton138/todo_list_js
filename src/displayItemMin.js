import deleteItem from "./deleteItem.js";
import displayFormController from "./displayForm.js";
import editItemForm from "./editItemForm.js";

const displayItemMin = (listName, index) => {
    var items = JSON.parse(localStorage.getItem(listName));
    const task = items[index];
    const div = document.createElement('div');
    const text = document.createElement('div');
    text.textContent = `${task.title}`;
    text.className = "task-body";
    div.appendChild(text);

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "DELETED!";
    deleteBtn.onclick = () => deleteItem(listName, index);
    div.prepend(deleteBtn)

    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit task";
    editBtn.onclick = () => {
        displayFormController('edit');
        editItemForm(listName, index);
    };

    div.appendChild(editBtn);
    // div.onclick = (event) => expandItem(task, event);

    return div


}

export default displayItemMin;