// src/modal.js
import './modal.css';

export function createModal(isAuthorized, apiUrl) {
  if (!isAuthorized) return;

  const button = document.createElement('button');
  button.id = 'nexus-notes-button';
  button.innerText = 'Open Notes';
  document.body.appendChild(button);

  const modal = document.createElement('div');
  modal.id = 'nexus-modal';
  modal.innerHTML = `
    <div class="modal-section">
      <input id="search-field" type="text" placeholder="Search..." />
    </div>
    <div class="modal-section">
      <textarea id="note-field" placeholder="Write a note..."></textarea>
      <button id="save-note">Save Note</button>
    </div>
    <button id="history-button">View History</button>
    <div id="history-section" class="modal-section"></div>
  `;
  document.body.appendChild(modal);

  button.addEventListener('click', () => {
    modal.classList.toggle('show');
  });

  document.getElementById('save-note').addEventListener('click', async () => {
    const note = document.getElementById('note-field').value;
    await fetch(`${apiUrl}/save-note`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ note })
    });
  });

  document.getElementById('history-button').addEventListener('click', async () => {
    const response = await fetch(`${apiUrl}/get-notes`);
    const notes = await response.json();
    document.getElementById('history-section').innerText = notes.join('\n');
  });
}
