import addItemToList from "./addItem.js";
import displayList from "./displayList.js";
import saveItem from "./saveItem.js";

const HomeDOM = () => {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.className ="list-container";

    const heading = document.createElement('h1');
    heading.textContent = "To Do List";

    var list = document.createElement('ul');
    list.className = 'list';
    list.id = 'home-list'
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
        addItemToList(input.value)
    });
    form.appendChild(addItemBtn);

    const newProjectBtn = document.createElement('button');
    newProjectBtn.className = "new-project-btn";
    newProjectBtn.textContent = "Create new project";

    div.appendChild(heading);
    div.appendChild(list);

    div.appendChild(form);
    content.appendChild(div);
    content.appendChild(newProjectBtn)
    displayList(list.id);

}

export default HomeDOM;