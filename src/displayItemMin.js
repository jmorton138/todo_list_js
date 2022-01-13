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

    const checklabel = document.createElement('label');
    checklabel.className = "check-container";
    const deleteBtn = document.createElement('input');
    deleteBtn.type = "checkbox";
    checklabel.appendChild(deleteBtn);
    // deleteBtn.textContent = "DELETED!";
    const span = document.createElement('span');
    span.className = "checkmark";
    checklabel.appendChild(span);
    // deleteBtn.onclick = () => deleteItem(listName, index);
    div.prepend(checklabel);

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