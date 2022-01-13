import collapseItem from "./collapseItem";
import displayFormController from "./displayForm";

const expandItem = (list, task) => {
    displayFormController()
    var div = document.createElement('div');
    div.className ="item-expand";
    div.innerHTML = `title: ${task.title},description: ${task.description}, due: ${task.dueDate}, priority: ${task.priority}`;
    const content = document.querySelector('#content');
    content.appendChild(div);

}

export default expandItem;