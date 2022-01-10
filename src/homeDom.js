const HomeDOM = () => {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.className ="list-container";

    const heading = document.createElement('h1');
    heading.textContent = "To Do List";

    var list = document.createElement('ul');
    list.className = 'list';
    
    const addItemBtn = document.createElement('button');
    addItemBtn.textContent = "Add a task";
    div.appendChild(heading);
    div.appendChild(list);
    div.appendChild(addItemBtn);
    content.appendChild(div);

    console.log(content.id);
}

export default HomeDOM;