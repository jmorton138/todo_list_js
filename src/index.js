import HomeDOM from './homeDom.js';
import './style.css';
import displayForm from "./displayForm.js";

window.addEventListener('load', () => {
    //navbar
    const addItemPopup = document.querySelector('.add-item-popup');
    addItemPopup.onclick = () => displayForm("add-item");
    const addProjectPopup = document.querySelector('.add-project-popup');
    addProjectPopup.onclick = () => displayForm('add-project');


    //load homepage
    HomeDOM();

})
