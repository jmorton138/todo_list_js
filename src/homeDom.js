import addItemToList from "./addItem.js";
import createProject from "./createProject.js";
import displayList from "./displayList.js";
import saveItem from "./saveItem.js";
import displayProjects from "./displayProjects.js";

const HomeDOM = () => {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.className ="list-container";
    content.appendChild(div);

    //render heading
    const heading = document.createElement('h1');
    heading.textContent = "To Do List";
    heading.className = "list-name";
    div.appendChild(heading);

    //render list
    var list = document.createElement('ul');
    list.className = 'list';
    list.id = "home-list";
    div.appendChild(list);

    //add list item form
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
    div.appendChild(form);


    //new project form
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
        displayProjects();
    })
    newProjectForm.appendChild(newProjectBtn)
    content.appendChild(newProjectForm);
    
    displayList(list.id);
    displayProjects();

}

export default HomeDOM;