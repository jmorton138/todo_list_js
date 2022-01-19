import deleteItem from "./deleteItem.js";
import displayFormController from "./displayForm.js";
import editItemForm from "./editItemForm.js";
import expandItem from "./expandItem.js";

const displayItemMin = (listName, index) => {
    var items = JSON.parse(localStorage.getItem(listName));
    const task = items[index];
    const div = document.createElement('div');
    const text = document.createElement('div');
    text.textContent = `${task.title}`;
    text.className = "task-body";
    div.appendChild(text);

    const prior = document.createElement('div');
    prior.className = "fas fa-circle priority-circle";
    if (task.priority === "High") {
        prior.style.color = "red";
    } else if (task.priority === "Mid") {
        prior.style.color = "darkorange";
    } else if (task.priority === "Low") {
        prior.style.color = "green";
    }
    

    const checklabel = document.createElement('label');
    checklabel.className = "check-container";
    const deleteBtn = document.createElement('input');
    deleteBtn.type = "checkbox";
    checklabel.appendChild(deleteBtn);
    // deleteBtn.textContent = "DELETED!";
    const span = document.createElement('span');
    span.className = "checkmark";
    checklabel.appendChild(span);
    deleteBtn.onclick = () => deleteItem(listName, index);
    div.prepend(checklabel);
    div.prepend(prior);

    const editBtn = document.createElement('button');
    editBtn.className = "edit-btn fas fa-edit fa-2x";
    editBtn.onclick = () => {
        displayFormController('edit');
        editItemForm(listName, index);
    };
    div.appendChild(editBtn);

    const expandBtn = document.createElement('button');
    expandBtn.className = "expand-btn fas fa-ellipsis-h fa-2x";
    div.appendChild(expandBtn);
    expandBtn.onclick = () => expandItem(task);

    return div


}

export default displayItemMin;