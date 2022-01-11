import displayList from "./displayList";

const displayProjects = () => {
    const content = document.getElementById('content');
    var list = document.querySelector('.projects');
    if (list === null) {
        list = document.createElement('ul');
        list.className = "projects";
    } else {
        list.innerHTML = "";
    }

 
        for (let i = 0; i < localStorage.length; i++) {
            const li = document.createElement('li');
            const name = localStorage.key(i);
            li.textContent = name;
            li.addEventListener('click', () => {
                displayList(name);
            })
            list.appendChild(li);
        }
        content.appendChild(list);
}

export default displayProjects;