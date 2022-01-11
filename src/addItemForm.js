import saveItem from "./saveItem.js";
import addItemToList from "./addItem.js";

const addItemForm = (list) => {
    const div = document.querySelector('.list-container');

    const form = document.createElement('div');
    form.className = "add-item-form";

    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Task name";
    input.id = "item-title";
    var itemLabel = document.createElement('label');
    itemLabel.setAttribute("for", input.id);
    itemLabel.innerHTML = "Task name";
    form.appendChild(itemLabel);
    form.appendChild(input);

    const description = document.createElement('input');
    description.type = "text";
    description.placeholder = "Description";
    description.id ="item-desc"
    var descLabel = document.createElement('label');
    descLabel.setAttribute("for", description.id);
    descLabel.innerHTML = "Description";
    form.appendChild(descLabel);
    form.appendChild(description);

    const dueDate = document.createElement('input');
    dueDate.type = "date";
    dueDate.id = "task-date";
    var dateLabel = document.createElement('label');
    dateLabel.setAttribute("for", dueDate.id);
    dateLabel.innerHTML = " Due date";
    form.appendChild(dateLabel);
    form.appendChild(dueDate);

    const priority = document.createElement('select');
    priority.className = "priority-select";
    priority.id = "task-priority";
    var option1 = document.createElement("option");
    priority.appendChild(option1);
    var option2 = document.createElement("option");
    priority.appendChild(option2);
    var option3 = document.createElement("option");
    priority.appendChild(option3);
    option1.value = "High";
    option1.text = "High";
    option2.value = "Mid";
    option2.text = "Mid";
    option3.value = "Low";
    option3.text = "Low";
    var priorLabel = document.createElement('label');
    priorLabel.setAttribute("for", priority.id);
    priorLabel.innerHTML = "Priority";
    form.appendChild(priorLabel);
    form.appendChild(priority);


    const addItemBtn = document.createElement('button');
    addItemBtn.className = "add-item-btn";
    addItemBtn.textContent = "Add a task";
    addItemBtn.addEventListener('click', () => {
        const newTask = {
            title: input.value,
            description: description.value,
            dueDate: dueDate.value,
            priority: priority.value
    
        }
        
        saveItem(newTask, list.id);
        addItemToList(newTask.title);
        input.value= "";
        
    });
    form.appendChild(addItemBtn);
    div.appendChild(form);

}

export default addItemForm;