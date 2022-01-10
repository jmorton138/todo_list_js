const saveItem = (input) => {
    const index = localStorage.length + 1
    console.log(index);
    window.localStorage.setItem(`${index}`,`${input}`);
}

export default saveItem;