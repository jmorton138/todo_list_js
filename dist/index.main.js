(()=>{"use strict";const e=e=>{document.querySelector(".list").innerHTML="",document.querySelector(".list-name").textContent=`${e} To Do's`;const t=document.querySelector("ul");t.id=e,JSON.parse(localStorage.getItem(e)).forEach((e=>{const n=document.createElement("li");n.textContent=e.name,t.appendChild(n)}))},t=()=>{const t=document.getElementById("content");var n=document.querySelector(".projects");null===n?(n=document.createElement("ul")).className="projects":n.innerHTML="";for(let t=0;t<localStorage.length;t++){const l=document.createElement("li"),c=localStorage.key(t);l.textContent=c,l.addEventListener("click",(()=>{e(c)})),n.appendChild(l)}t.appendChild(n)},n=()=>{const n=document.getElementById("content"),l=document.createElement("div");l.className="list-container",n.appendChild(l);const c=document.createElement("h1");c.className="list-name",l.appendChild(c);var a=document.createElement("ul");a.className="list",a.id="Main",l.appendChild(a);const o=document.createElement("div");o.className="add-item-form";const d=document.createElement("input");d.type="text",o.appendChild(d);const m=document.createElement("button");m.className="add-item-btn",m.textContent="Add a task",m.addEventListener("click",(()=>{((e,t)=>{let n;n=null===localStorage.getItem(t)?[]:JSON.parse(localStorage.getItem(t));let l={name:e};n.push(l),localStorage.setItem(t,JSON.stringify(n))})(d.value,a.id),(e=>{const t=document.querySelector(".list"),n=document.createElement("li");n.textContent=e,t.appendChild(n)})(d.value),d.value=""})),o.appendChild(m),l.appendChild(o);const r=document.createElement("div");r.className="new-project-form";const s=document.createElement("input");s.type="text",r.appendChild(s);const i=document.createElement("button");i.className="new-project-btn",i.textContent="Create new project",i.addEventListener("click",(()=>{(e=>{localStorage.setItem(e,JSON.stringify([]))})(s.value),t(),s.value=""})),r.appendChild(i),n.appendChild(r),e(a.id),t()};window.addEventListener("load",(()=>{n()}))})();