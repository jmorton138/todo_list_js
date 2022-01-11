const expandItem = (list, index) => {
    console.log(JSON.parse(localStorage.getItem(list))[index])
}

export default expandItem;