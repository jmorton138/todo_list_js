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
    if (tasks !== null) {
        tasks.forEach( (task, index) => {
            const item = displayItemMin(listName, index);
            item.className = "list-item";
            list.appendChild(item);
        })

    }


}

export default displayList;