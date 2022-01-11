const displayList = (listName) => {
    const list = document.querySelector('ul');
    const tasks = JSON.parse(localStorage.getItem(listName));
    tasks.forEach( task => {
        const li = document.createElement('li');
        li.textContent = task;
        list.appendChild(li);
    })

}

export default displayList;