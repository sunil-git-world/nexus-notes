const e={init:(e,t)=>{!function(e,t){if(!e)return;const n=document.createElement("button");n.id="nexus-notes-button",n.innerText="Open Notes",document.body.appendChild(n);const o=document.createElement("div");o.id="nexus-modal",o.innerHTML='\n    <div class="modal-section">\n      <input id="search-field" type="text" placeholder="Search..." />\n    </div>\n    <div class="modal-section">\n      <textarea id="note-field" placeholder="Write a note..."></textarea>\n      <button id="save-note">Save Note</button>\n    </div>\n    <button id="history-button">View History</button>\n    <div id="history-section" class="modal-section"></div>\n  ',document.body.appendChild(o),n.addEventListener("click",(()=>{o.classList.toggle("show")})),document.getElementById("save-note").addEventListener("click",(async()=>{const e=document.getElementById("note-field").value;await fetch(`${t}/save-note`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({note:e})})})),document.getElementById("history-button").addEventListener("click",(async()=>{const e=await fetch(`${t}/get-notes`),n=await e.json();document.getElementById("history-section").innerText=n.join("\n")}))}(e,t)}};export{e as default};
//# sourceMappingURL=nexus-notes.esm.js.map
