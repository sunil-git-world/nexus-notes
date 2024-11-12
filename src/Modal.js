export function createModal() {
  // Create button on the right edge
  const button = document.createElement('button');
  button.innerText = 'Open Modal';
  button.style.position = 'fixed';
  button.style.right = '0';
  button.style.top = '50%';
  document.body.appendChild(button);

  button.addEventListener('click', openModal);

  function openModal() {
    const modal = document.createElement('div');
    modal.className = 'nexus-modal';
    modal.innerHTML = '<div><input type="text" placeholder="Search..." id="search-field"/><textarea placeholder="Write a note..." id="note-field"></textarea><button id="history-btn">History</button>      </div>';
    document.body.appendChild(modal);
  }
}
