import saveItem from "./saveItem.js";
import addItemToList from "./addItem.js";

const addItemForm = (list) => {
    const div = document.querySelector('.list-container');

    const form = document.createElement('div');
    form.className = "add-item-form";
    const input = document.createElement('input');
    input.type = "text";
    form.appendChild(input);
    const addItemBtn = document.createElement('button');
    addItemBtn.className = "add-item-btn";
    addItemBtn.textContent = "Add a task";
    addItemBtn.addEventListener('click', () => {
        saveItem(input.value, list.id);
        addItemToList(input.value);
        input.value= "";
        
    });
    form.appendChild(addItemBtn);
    div.appendChild(form);

}

export default addItemForm;