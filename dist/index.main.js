(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.className="list-container";const n=document.createElement("h1");n.textContent="To Do List";var a=document.createElement("ul");a.className="list",a.id="home-list";const c=document.createElement("div");c.className="add-item-form";const l=document.createElement("input");l.type="text",c.appendChild(l);const o=document.createElement("button");o.className="add-item-btn",o.textContent="Add a task",o.addEventListener("click",(()=>{((e,t)=>{let n;n=null===localStorage.getItem(t)?[]:JSON.parse(localStorage.getItem(t));let a={name:e};n.push(a),localStorage.setItem(t,JSON.stringify(n))})(l.value,a.id),(e=>{const t=document.querySelector(".list"),n=document.createElement("li");n.textContent=e,t.appendChild(n)})(l.value)})),c.appendChild(o);const d=document.createElement("button");d.className="new-project-btn",d.textContent="Create new project",t.appendChild(n),t.appendChild(a),t.appendChild(c),e.appendChild(t),e.appendChild(d),(e=>{const t=document.querySelector("ul");JSON.parse(localStorage.getItem(e)).forEach((e=>{const n=document.createElement("li");n.textContent=e.name,t.appendChild(n)}))})(a.id)};window.addEventListener("load",(()=>{e()}))})();