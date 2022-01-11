import expandItem from "./expandItem.js";
import deleteItem from "./deleteItem.js";

const displayList = (listName) => {
    document.querySelector('.list').innerHTML = "";
    const heading = document.querySelector('.list-name');
    heading.textContent = `${listName} To Do's`;
    const list = document.querySelector('ul');
    list.id = listName;
    const tasks = JSON.parse(localStorage.getItem(listName));
    tasks.forEach( (task, index) => {
        const li = document.createElement('li');
        li.textContent = `${task.title}`;
        li.addEventListener('click', (event) => {
            expandItem(task, event);

        })
        list.appendChild(li);
    })

}

export default displayList;