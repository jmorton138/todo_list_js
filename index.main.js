(()=>{"use strict";const e=e=>{document.querySelector(".list").innerHTML="",document.querySelector(".list-name").textContent=`${e} To Do's`;const t=document.querySelector("ul");t.id=e,JSON.parse(localStorage.getItem(e)).forEach((e=>{const n=document.createElement("li");n.textContent=e.name,t.appendChild(n)}))},t=()=>{const t=document.getElementById("content");var n=document.querySelector(".projects");null===n?(n=document.createElement("ul")).className="projects":n.innerHTML="";for(let t=0;t<localStorage.length;t++){const c=document.createElement("li"),l=localStorage.key(t);c.textContent=l,c.addEventListener("click",(()=>{e(l)})),n.appendChild(c)}t.appendChild(n)},n=e=>{const t=document.querySelector(".list-container"),n=document.createElement("div");n.className="add-item-form";const c=document.createElement("input");c.type="text",n.appendChild(c);const l=document.createElement("button");l.className="add-item-btn",l.textContent="Add a task",l.addEventListener("click",(()=>{((e,t)=>{let n;n=null===localStorage.getItem(t)?[]:JSON.parse(localStorage.getItem(t));let c={name:e};n.push(c),localStorage.setItem(t,JSON.stringify(n))})(c.value,e.id),(e=>{const t=document.querySelector(".list"),n=document.createElement("li");n.textContent=e,t.appendChild(n)})(c.value),c.value=""})),n.appendChild(l),t.appendChild(n)},c=()=>{const c=document.getElementById("content"),l=document.createElement("div");l.className="list-container",c.appendChild(l);const a=document.createElement("h1");a.className="list-name",l.appendChild(a);var o=document.createElement("ul");o.className="list",o.id="Main",l.appendChild(o),n(o);const d=document.createElement("div");d.className="new-project-form";const r=document.createElement("input");r.type="text",d.appendChild(r);const m=document.createElement("button");m.className="new-project-btn",m.textContent="Create new project",m.addEventListener("click",(()=>{var e;e=r.value,localStorage.setItem(e,JSON.stringify([])),t(),r.value=""})),d.appendChild(m),c.appendChild(d),e(o.id),t()};window.addEventListener("load",(()=>{c()}))})();