const displayProjects = () => {
    const content = document.getElementById('content');
    const list = document.createElement('ul');
    for (let i = 0; i < localStorage.length; i++) {
        const li = document.createElement('li');
        const name = localStorage.key(i);
        li.textContent = name;
        list.appendChild(li);
    }
    content.appendChild(list);
}

export default displayProjects;