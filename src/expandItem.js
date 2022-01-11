import collapseItem from "./collapseItem";

const expandItem = (task, event) => {
    var element = event.target;
    element.innerHTML = `title: ${task.title},description: ${task.description}, due: ${task.dueDate}, priority: ${task.priority}`;
    element.onclick = (event) => collapseItem(task, event);
}

export default expandItem;