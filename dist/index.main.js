(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.className="list-container";const n=document.createElement("h1");n.textContent="To Do List";var d=document.createElement("ul");d.className="list";const c=document.createElement("div");c.className="add-item-form";const o=document.createElement("input");o.type="text",c.appendChild(o);const a=document.createElement("button");a.textContent="Add a task",a.addEventListener("click",(()=>(e=>{const t=document.querySelector(".list"),n=document.createElement("li");n.textContent=e,t.appendChild(n),console.log(e)})(o.value))),c.appendChild(a),t.appendChild(n),t.appendChild(d),t.appendChild(c),e.appendChild(t)};window.addEventListener("load",(()=>{e()}))})();