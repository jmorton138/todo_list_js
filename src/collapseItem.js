import expandItem from "./expandItem";

const collapseItem = (task, event) => {
    console.log(task)
    var element = event.target;
    element.innerHTML = `title: ${task.title}`;
    element.onclick = (event) => expandItem(task, event);


}

export default collapseItem;