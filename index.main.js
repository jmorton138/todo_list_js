(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.className="list-container";const n=document.createElement("h1");n.textContent="To Do List";var l=document.createElement("ul");l.className="list",l.id="home-list";const a=document.createElement("div");a.className="add-item-form";const c=document.createElement("input");c.type="text",a.appendChild(c);const o=document.createElement("button");o.className="add-item-btn",o.textContent="Add a task",o.addEventListener("click",(()=>{((e,t)=>{let n;n=null===localStorage.getItem(t)?[]:JSON.parse(localStorage.getItem(t));let l={name:e};n.push(l),localStorage.setItem(t,JSON.stringify(n))})(c.value,l.id),(e=>{const t=document.querySelector(".list"),n=document.createElement("li");n.textContent=e,t.appendChild(n)})(c.value)})),a.appendChild(o);const d=document.createElement("div");d.className="new-project-form";const m=document.createElement("input");m.type="text",d.appendChild(m);const s=document.createElement("button");s.className="new-project-btn",s.textContent="Create new project",s.addEventListener("click",(()=>{(e=>{localStorage.setItem(e,JSON.stringify([]))})(m.value)})),t.appendChild(n),t.appendChild(l),t.appendChild(a),e.appendChild(t),e.appendChild(d),d.appendChild(s),(e=>{const t=document.querySelector("ul");JSON.parse(localStorage.getItem(e)).forEach((e=>{const n=document.createElement("li");n.textContent=e.name,t.appendChild(n)}))})(l.id),(()=>{const e=document.getElementById("content"),t=document.createElement("ul");for(let e=0;e<localStorage.length;e++){const n=document.createElement("li"),l=localStorage.key(e);n.textContent=l,t.appendChild(n)}e.appendChild(t)})()};window.addEventListener("load",(()=>{e()}))})();