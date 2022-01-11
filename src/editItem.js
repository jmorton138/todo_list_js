const editItem = (list, index) => {
    var items = JSON.parse(localStorage.getItem(list));
    // edit items[index] items[index] = newInfoHash
    items = JSON.stringify(items);
    localStorage.setItem(list, items);
}

export default editItem;