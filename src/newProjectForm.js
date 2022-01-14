import createProject from "./createProject.js";
import displayFormController from "./displayForm.js";
import displayProjects from "./displayProjects.js";

const newProjectForm = () => {
    const content = document.getElementById('content');

    const newProjectForm = document.createElement('div');
    newProjectForm.className = "new-project-form";

    const closePopup = document.createElement('button');
    closePopup.className = "fas fa-times close-popup fa-2x";
    closePopup.onclick = () => displayFormController();
    newProjectForm.appendChild(closePopup);

    const projectName = document.createElement('input');
    projectName.type = "text";
    newProjectForm.appendChild(projectName)
  
    const newProjectBtn = document.createElement('button');
    newProjectBtn.className = "new-project-btn";
    newProjectBtn.textContent = "Create project";
    newProjectBtn.addEventListener('click', () => {
        createProject(projectName.value);
        displayProjects();
        displayFormController();
    })
    newProjectForm.appendChild(newProjectBtn)
    content.appendChild(newProjectForm);
}

export default newProjectForm;