const displayItemMin = (listName, index) => {
    var items = JSON.parse(localStorage.getItem(listName));
    const task = items[index];
    const div = document.createElement('div');
    div.textContent = `${task.title}`;

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "DELETED!";
    deleteBtn.oncldivk = () => deleteItem(listName, index);
    div.appendChild(deleteBtn)

    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit task";
    editBtn.onclick = () => editItemForm(listName, index);
    div.appendChild(editBtn);
    return div
    //li.onclick = (event) => expandItem(task, event);


}

export default displayItemMin;