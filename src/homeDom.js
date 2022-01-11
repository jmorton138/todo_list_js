import addItemToList from "./addItem.js";
import createProject from "./createProject.js";
import displayList from "./displayList.js";
import saveItem from "./saveItem.js";
import displayProjects from "./displayProjects.js";

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

    const newProjectForm = document.createElement('div');
    newProjectForm.className = "new-project-form";
    const projectName = document.createElement('input')
    projectName.type = "text";
    newProjectForm.appendChild(projectName)

    const newProjectBtn = document.createElement('button');
    newProjectBtn.className = "new-project-btn";
    newProjectBtn.textContent = "Create new project";

    newProjectBtn.addEventListener('click', () => {
        createProject(projectName.value);
    })

    div.appendChild(heading);
    div.appendChild(list);

    div.appendChild(form);
    content.appendChild(div);
    content.appendChild(newProjectForm);
    newProjectForm.appendChild(newProjectBtn)
    displayList(list.id);
    displayProjects();

}

export default HomeDOM;