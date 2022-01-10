import addItemToList from "./addItem.js";

const HomeDOM = () => {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.className ="list-container";

    const heading = document.createElement('h1');
    heading.textContent = "To Do List";

    var list = document.createElement('ul');
    list.className = 'list';
    const form = document.createElement('div');
    form.className = "add-item-form";
    const input = document.createElement('input');
    input.type = "text";
    form.appendChild(input);

    const addItemBtn = document.createElement('button');
    addItemBtn.textContent = "Add a task";
    addItemBtn.addEventListener('click', () => addItemToList(input.value));
    form.appendChild(addItemBtn);

    div.appendChild(heading);
    div.appendChild(list);
    div.appendChild(form);
    content.appendChild(div);

}

export default HomeDOM;