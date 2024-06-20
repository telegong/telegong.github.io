(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();let f;const M=new Uint8Array(16);function U(){if(!f&&(f=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!f))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return f(M)}const d=[];for(let s=0;s<256;++s)d.push((s+256).toString(16).slice(1));function R(s,e=0){return d[s[e+0]]+d[s[e+1]]+d[s[e+2]]+d[s[e+3]]+"-"+d[s[e+4]]+d[s[e+5]]+"-"+d[s[e+6]]+d[s[e+7]]+"-"+d[s[e+8]]+d[s[e+9]]+"-"+d[s[e+10]]+d[s[e+11]]+d[s[e+12]]+d[s[e+13]]+d[s[e+14]]+d[s[e+15]]}const F=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),I={randomUUID:F};function O(s,e,t){if(I.randomUUID&&!e&&!s)return I.randomUUID();s=s||{};const o=s.random||(s.rng||U)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,e){t=t||0;for(let n=0;n<16;++n)e[t+n]=o[n];return e}return R(o)}const q={message:"Make anything here as you want, even something longer.",msgDate:new Date,status:!1};class A{constructor(e){this.cost=1e5,this.progress=.9,this.todoList=[];for(const t in e)this[t]=e[t];this.id||(this.id=O()),this.setUI()}setUI(){this.ui=document.createElement("div"),this.ui.className="project-card";const e=Math.floor(Math.random()*5);this.ui.setAttribute("icon-color",`var(--icon-char-bg-color${e})`),this.updateUI()}updateUI(){this.ui.setAttribute("pname",this.name),this.ui.innerHTML=`
        <div class="card-header">
            <p style="background-color: ${this.ui.getAttribute("icon-color")};
                    padding: 5px; border-radius: 8px; aspect-ratio: 1;
                    text-transform: uppercase; text-align: center; width: 36px;
                    display: flex; flex-direction: column; justify-content: center;"  >
                ${this.name.slice(0,2)}</p>
            <div>
                <h5>${this.name}</h5>
                <!--h5>${this.id}</h5-->
                <p>${this.description}</p>
            </div>
        </div>
        <div class="card-content">
            <div class="card-property">
                <p style="color: #969696;">Status</p>
                <p>${this.status}</p>
            </div>
            <div class="card-property">
                <p style="color: #969696;">Role</p>
                <p>${this.userRole}</p>
            </div>
            <div class="card-property">
                <p style="color: #969696;">Cost</p>
                <p>$${this.cost}</p>
            </div>
            <div class="card-property">
                <p style="color: #969696;">Estimated Progress</p>
                <p>${this.progress*100}%</p>
            </div>
        </div> `}}class H{constructor(e){this.list=[],this.ui=e}newProject(e){this.validProjectInput(e);const t=new A(e);return t.todoList.length===0&&t.todoList.push(q),t.ui.addEventListener("click",()=>{const o=document.getElementById("projects-page"),n=document.getElementById("project-details");o&&n&&(o.style.display="none",n.style.display="flex",this.setDetailsPage(t),this.updateTodoListUI(t))}),this.ui.append(t.ui),this.list.push(t),t}validProjectInput(e){if(this.list.map(n=>n.name).includes(e.name))throw new Error(`A project with the name "${e.name}" already exists`);if(e.name.length<5)throw new Error("project name have to longer than 5 charactor")}setDetailsPage(e){const t=document.getElementById("project-details");if(!t)return;const o={name:e.name,icon_char:[e.name.slice(0,2),e.ui.getAttribute("icon-color")],description:e.description,name_s:e.name,description_s:e.description,status:e.status,userRole:e.userRole,cost:e.cost,finishDate:e.finishDate,progress:e.progress};for(const n in o){const r=t.querySelector(`[data-project-info='${n}']`);if(r){const i=o[n];switch(n){case"cost":r.textContent="$"+i;break;case"finishDate":r.textContent=this.y4m2d2(i);break;case"progress":r.textContent=`${i*100}%`,r.style.width=`${i*100}%`;break;case"icon_char":r.textContent=i[0],r.style.backgroundColor=i[1];break;default:r.textContent=i}}}console.log("setDetailsPage: ",e.name)}updateTodoListUI(e){let t=document.getElementById("todo-list");t&&(t.innerHTML="",e.todoList.forEach(o=>{const n=new Date(o.msgDate).toDateString().split(" "),r=`${n[0]}, ${n[2]} ${n[1]}`,i=o.status?'style= "opacity: 50%;"':"",l=o.status?"done":"construction",u=`
            <div class="todo-item" ${i}>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; column-gap: 15px; align-items: center;">
                        <span name='todostatus' class="material-icons-round" style="padding: 10px; background-color: #686868; border-radius: 10px;">${l}</span>
                        <p name='todomessage'>${o.message}</p>
                    </div>
                    <p style="text-wrap: nowrap; margin-left: 10px;">
                    ${r}</p>
                </div>
            </div>`;t.innerHTML+=u}))}getProject(e){return this.list.find(o=>o.id===e)}editProject(e,t){if(!e)return;e!=t.name&&this.validProjectInput(t);const o=this.getProjectByName(e);return Object.assign(o,t),o.updateUI(),this.setDetailsPage(o),o}deleteProject(e){const t=this.getProject(e);if(!t)return;t.ui.remove();const o=this.list.filter(n=>n.id!==e);this.list=o}totalCostOfAllProjects(){return this.list.reduce((t,o)=>t+o.cost,0)}getProjectByName(e){return this.list.find(o=>o.name===e)}newTodo(e,t,o){if(!(t&&e))return;const n=this.getProjectByName(e);if(n)return n.todoList.push({message:t,msgDate:new Date,status:o}),this.updateTodoListUI(n),n}editTodo(e,t,o,n){if(!(t&&e))return;const r=this.getProjectByName(e);if(r.todoList[n])return r.todoList[n]={message:t,msgDate:r.todoList[n].msgDate,status:o},this.updateTodoListUI(r),!0}exportToJSON(e="projects"){const t=JSON.stringify(this.list,null,2),o=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(o),r=document.createElement("a");r.href=n,r.download=e,r.click(),URL.revokeObjectURL(n)}importFromJSON(){const e=document.createElement("input");e.type="file",e.accept="application/json";const t=new FileReader;t.addEventListener("load",()=>{var r;const o=t.result;if(!o)return;const n=JSON.parse(o);for(const i of n)try{console.log(`importing... ${i.name}: ${i.id}`);const l=this.getProject(i.id);if(l){console.log(`projectExist.name: ${l.name}`);const{ui:u,...c}=i;this.editProject(l.name,c)}else this.getProjectByName(i.name)?console.log(`"${i.name}" project exist! But it has different id,

    Import Project id: ${i.id}
    Exist Project id: ${(r=this.getProjectByName(i.name))==null?void 0:r.id}`):this.newProject(i)}catch(l){console.log(l)}}),e.addEventListener("change",()=>{const o=e.files;o&&t.readAsText(o[0])}),e.click()}y4m2d2(e){let t=e instanceof Date?e:new Date(e??"Invalid Date string or Date instance");return`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}`}}function a(s,e){const t=document.getElementById(s);if(!(t&&t instanceof HTMLDialogElement)){console.warn("The provided modal wasn't found. ID: ",s);return}switch(e){case"show":t.showModal();break;case"hide":t.close();break}}let C=document.getElementById("projects-list");const m=new H(C),D=document.getElementById("new-project-btn");D?D.addEventListener("click",()=>{document.getElementsByName("finishDate")[0].valueAsDate=new Date(m.y4m2d2(Date())),a("new-project-modal","show"),C=m.ui}):console.warn("New projects button was not found");function k(s){const e=document.querySelectorAll(".page");for(const t of e)t.style.display=s===t.id?"flex":"none"}const v=document.getElementById("projects-list-page-button");v?v.addEventListener("click",()=>{k("projects-page")}):console.warn("Projects List button was not found");const B=document.getElementById("users-list-page-button");B?B.addEventListener("click",()=>{k("users-page")}):console.warn("Users List button was not found");const g=document.getElementById("new-project-form");g&&g instanceof HTMLFormElement?(g.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(g),n={name:o.get("name"),description:o.get("description"),userRole:o.get("userRole"),status:o.get("status"),finishDate:new Date(o.get("finishDate"))};try{const r=m.newProject(n);g.reset(),a("new-project-modal","hide")}catch(r){const i=document.getElementById("error-message");i.textContent=`${r.message}`,a("error-message-modal","show")}}),document.getElementById("error-message-check-button").addEventListener("click",()=>{a("error-message-modal","hide")}),document.getElementById("project-input-canel").addEventListener("click",()=>{g.reset(),a("new-project-modal","hide")})):console.warn("The project form was not found. Check the ID!");const L=document.getElementById("export-projects-btn");L&&L.addEventListener("click",()=>{m.exportToJSON()});const x=document.getElementById("import-projects-btn");x&&x.addEventListener("click",()=>{m.importFromJSON()});const P=document.getElementById("edit-project-btn");P?P.addEventListener("click",()=>{var o,n;const s=document.getElementById("project-details");let e=(o=s.querySelector("[data-project-info='name']"))==null?void 0:o.textContent;if(!(s&&e))return;a("edit-project-modal","show");const t=document.getElementById("edit-project-form");if(t instanceof HTMLFormElement){const r={name:"input[name='name']",description:"textarea[name='description']",userRole:"select[name='userRole']",status:"select[name='status']",finishDate:"input[name='finishDate']"};for(const u in r){const c=t.querySelector(r[u]);c.value=(n=s.querySelector(`[data-project-info='${u}']`))==null?void 0:n.textContent}t.addEventListener("submit",u=>{u.preventDefault();const c=new FormData(t),p={name:c.get("name"),description:c.get("description"),userRole:c.get("userRole"),status:c.get("status"),finishDate:new Date(c.get("finishDate"))};try{m.editProject(e,p)&&t.reset(),a("edit-project-modal","hide")}catch(h){const j=document.getElementById("edit-error-message");j.textContent=`Error: ${h.message}`,a("edit-error-message-modal","show")}finally{e=""}}),document.getElementById("edit-error-message-check-button").addEventListener("click",()=>{a("edit-error-message-modal","hide")}),document.getElementById("edit-project-input-canel").addEventListener("click",()=>{t.reset(),a("edit-project-modal","hide")})}else console.warn("The project form was not found. Check the ID!")}):console.warn("Edit projects button was not found");const T=document.getElementById("new-todo-btn");T?T.addEventListener("click",()=>{a("new-todo-modal","show")}):console.warn("New Todo button was not found");const y=document.getElementById("new-todo-form");y instanceof HTMLFormElement?(y.addEventListener("submit",e=>{var l;e.preventDefault();const t=document.getElementById("project-details");let o=(l=t.querySelector("[data-project-info='name']"))==null?void 0:l.textContent;if(!(t&&o))return;const n=new FormData(y);let r=n.get("todo-message");const i=!!n.get("todo-status");try{r&&m.newTodo(o,r,i)&&y.reset(),a("new-todo-modal","hide")}catch(u){const c=document.getElementById("edit-error-message");c.textContent=`Error: ${u.message}`,a("edit-error-message-modal","show")}finally{o="",r=""}}),document.getElementById("edit-error-message-check-button").addEventListener("click",()=>{a("edit-error-message-modal","hide")})):console.warn("New ToDo form was not found");const w=document.getElementById("todo-list");w?w.addEventListener("click",s=>{if(s.target.id=="todo-list")return;const e=N(s.target);let t=Array.from(w.children).findIndex(n=>n===e);a("edit-todo-modal","show");const o=document.getElementById("edit-todo-form");if(o instanceof HTMLFormElement){const n=o.querySelector('textarea[name="edit-todo-message"]');n.textContent=e.querySelector('p[name="todomessage"]').textContent;const r=o.querySelector('input[name="edit-todo-status"]');r.checked=e.querySelector('span[name="todostatus"]').textContent==="done",o.addEventListener("submit",l=>{var E;l.preventDefault();const u=document.getElementById("project-details");let c=(E=u.querySelector("[data-project-info='name']"))==null?void 0:E.textContent;if(!(u&&c))return;const p=new FormData(o);let h=p.get("edit-todo-message"),j=!!p.get("edit-todo-status");try{h&&m.editTodo(c,h,j,t)&&o.reset(),a("edit-todo-modal","hide")}catch($){const S=document.getElementById("edit-error-message");S.textContent=`Error: ${$.message}`,a("edit-error-message-modal","show")}finally{c="",h="",t=NaN}}),document.getElementById("edit-error-message-check-button").addEventListener("click",()=>{a("edit-error-message-modal","hide")})}else console.warn("Edit ToDo form was not found")}):console.warn("todo-list was not found");function N(s){return s?s.classList.contains("todo-item")?s:N(s.parentElement):null}const b=document.getElementById("todo-search");b&&b.addEventListener("input",J);function J(s){var r;const e=s.target.value.toLowerCase(),t=document.getElementById("project-details"),o=(r=t.querySelector("[data-project-info='name']"))==null?void 0:r.textContent;if(!(t&&o))return;const n=m.getProjectByName(o);if(m.updateTodoListUI(n),e){const i=document.getElementById("todo-list"),l=[...i.children];i.innerHTML="",l.forEach(u=>{var c,p;(p=(c=u.querySelector('[name="todomessage"]'))==null?void 0:c.textContent)!=null&&p.toLowerCase().includes(e)&&i.appendChild(u)})}}if(m.list.length==0){const s={name:"Default Project Name",description:"Housing Complex in Seoul",userRole:"Architect",status:"Active",finishDate:new Date("2022-05-01")};m.newProject(s)}