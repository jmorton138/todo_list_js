const displayList = () => {
    const list = document.querySelector('ul');

    for (let i = 0; i < localStorage.length; i++) {
        const li = document.createElement('li');
        li.textContent = localStorage.getItem(localStorage.key(i))
        list.appendChild(li);
    }

}

export default displayList;