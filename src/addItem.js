const addItemToList = (input) => {
    const list = document.querySelector('.list')
    const listItem = document.createElement('li');
    listItem.textContent = input;
    list.appendChild(listItem);

    console.log(input);
}

export default addItemToList;