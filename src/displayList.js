import expandItem from "./expandItem.js";
import deleteItem from "./deleteItem.js";
import editItemForm from "./editItemForm.js";
import displayItemMin from "./displayItemMin.js";

const displayList = (listName) => {
    document.querySelector('.list').innerHTML = "";
    const heading = document.querySelector('.list-name');
    heading.textContent = `${listName} To Do's`;
    const list = document.querySelector('ul');
    list.id = listName;
    const tasks = JSON.parse(localStorage.getItem(listName));
    tasks.forEach( (task, index) => {
        const item = displayItemMin(listName, index);
        list.appendChild(item);
    })

}

export default displayList;