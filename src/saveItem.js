const saveItem = (newTask, listName) => {
    let list;
    if (localStorage.getItem(listName) === null) {
        list = [];
    } else {
        list = JSON.parse(localStorage.getItem(listName));
    }

    list.push(newTask);
    localStorage.setItem(listName, JSON.stringify(list));
}

export default saveItem;