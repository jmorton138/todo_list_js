const displayList = (listName) => {
    document.querySelector('.list').innerHTML = "";
    const heading = document.querySelector('.list-name');
    heading.textContent = listName;
    const list = document.querySelector('ul');
    const tasks = JSON.parse(localStorage.getItem(listName));
    tasks.forEach( task => {
        const li = document.createElement('li');
        li.textContent = task.name;
        list.appendChild(li);
    })

}

export default displayList;