// src/index.js

class NexusNotes {
  constructor() {
    this.initButton();
  }

  initButton() {
    // Create a button to open the popup
    const button = document.createElement('button');
    button.innerText = 'Open Nexus Notes';
    button.className = 'nexus-notes-btn';

    // Append button to the body
    document.body.appendChild(button);

    // Create the popup
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

    // Button event listeners
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
    // Logic to save note (API call can be added here)
    alert('Note saved');
  }

  viewHistory() {
    // Logic to view note history (API call can be added here)
    alert('Showing note history');
  }
}

// Export as default
export default NexusNotes;
