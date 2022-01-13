import displayList from "./displayList";

const displayProjects = () => {
    const content = document.getElementById('content');
    var list = document.querySelector('.projects');
    const heading = document.createElement('h2');
    heading.textContent = "Projects";
    if (list === null) {
        list = document.createElement('div');
        list.className = "projects";
    } else {
        list.innerHTML = "";
    }


 
        for (let i = 0; i < localStorage.length; i++) {
            const li = document.createElement('div');
            const name = localStorage.key(i);
            li.textContent = name;
            li.className = "project";
            li.addEventListener('click', () => {
                displayList(name);
            })
            list.appendChild(li);
        }
        list.prepend(heading);
        content.prepend(list);
}

export default displayProjects;