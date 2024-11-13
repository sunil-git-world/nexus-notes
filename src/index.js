// src/index.js

// Import CSS if running in a modern environment that supports ES module CSS imports
// This will ensure it's framework-independent
import '../styles/popup.css';

export default class NexusNotes {
  constructor() {
    this.initButton();
  }

  initButton() {
    const button = document.createElement('button');
    button.innerText = 'Open Nexus Notes';
    button.className = 'nexus-notes-btn';
    document.body.appendChild(button);

    this.popup = document.createElement('div');
    this.popup.className = 'nexus-notes-popup';
    this.popup.innerHTML = `
      <div class="popup-content">
        <span class="close-btn">&times;</span>
        <div class="section">
          <input type="text" placeholder="Search" />
          <textarea placeholder="Write your note..."></textarea>
          <button id="save-note">Save Note</button>
        </div>
        <div class="section">
          <button id="view-history">View History</button>
        </div>
      </div>
    `;
    document.body.appendChild(this.popup);

    button.addEventListener('click', () => this.showPopup());
    this.popup.querySelector('.close-btn').addEventListener('click', () => this.hidePopup());
    this.popup.querySelector('#save-note').addEventListener('click', this.saveNote.bind(this));
    this.popup.querySelector('#view-history').addEventListener('click', this.viewHistory.bind(this));
  }

  showPopup() {
    this.popup.style.display = 'block';
  }

  hidePopup() {
    this.popup.style.display = 'none';
  }

  saveNote() {
    alert('Note saved');
  }

  viewHistory() {
    alert('Showing note history');
  }
}
