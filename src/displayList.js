import expandItem from "./expandItem.js";
import deleteItem from "./deleteItem.js";
import editItemForm from "./editItemForm.js";

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
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "DELETED!";
        deleteBtn.onclick = () => deleteItem(listName, index);
        li.appendChild(deleteBtn)

        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit task";
        editBtn.onclick = () => editItemForm(listName, index);
        li.appendChild(editBtn);
        //li.onclick = (event) => expandItem(task, event);
        list.appendChild(li);
    })

}

export default displayList;