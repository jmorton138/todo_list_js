const displayList = () => {
    const list = document.querySelector('ul');
    console.log(list)

    for (let i = 0; i < localStorage.length; i++) {
        const li = document.createElement('li');
        li.textContent = localStorage.getItem(localStorage.key(i))
        console.log(li);
        list.appendChild(li);
    }

}

export default displayList;