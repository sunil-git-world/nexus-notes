// src/index.js

// Simple function that creates a button and displays a modal when clicked
export default function NexusNotes() {
    // Create button
    const button = document.createElement('button');
    button.textContent = "Open Nexus Notes";
    button.style.position = "fixed";
    button.style.right = "10px";
    button.style.bottom = "10px";
    button.style.zIndex = "1000";
    button.style.padding = "10px";
    button.style.backgroundColor = "#007BFF";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    
    document.body.appendChild(button);

    // Create the modal
    const modal = document.createElement('div');
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.backgroundColor = "#fff";
    modal.style.padding = "20px";
    modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    modal.style.zIndex = "1001";

    const textarea = document.createElement('textarea');
    textarea.placeholder = "Write your note here...";
    modal.appendChild(textarea);

    const historyButton = document.createElement('button');
    historyButton.textContent = "Show History";
    historyButton.style.marginTop = "10px";
    modal.appendChild(historyButton);

    document.body.appendChild(modal);

    // Show modal when the button is clicked
    button.addEventListener('click', () => {
        modal.style.display = "block";
    });

    // Hide modal when clicked outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // History button functionality (for demonstration, just logs to console)
    historyButton.addEventListener('click', () => {
        console.log("Fetching note history...");
        // You can replace this with a call to an API
    });
}
