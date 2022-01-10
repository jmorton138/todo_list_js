const saveItem = (input) => {
    const index = localStorage.length + 1
    window.localStorage.setItem(`${index}`,`${input}`);
}

export default saveItem;