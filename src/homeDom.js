import createProject from "./createProject.js";
import displayList from "./displayList.js";
import saveItem from "./saveItem.js";
import displayProjects from "./displayProjects.js";
import addItemForm from "./addItemForm.js";
import newProjectForm from "./newProjectForm.js";

const HomeDOM = () => {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.className ="list-container";
    content.appendChild(div);

    //render heading
    const heading = document.createElement('h1');
    heading.className = "list-name";
    div.appendChild(heading);

    //render list
    var list = document.createElement('ul');
    list.className = 'list';
    list.id = "Main";
    div.appendChild(list);

    addItemForm(list);
    newProjectForm();
    
    displayList(list.id);
    displayProjects();

}

export default HomeDOM;