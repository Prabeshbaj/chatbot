// Add this to your HTML
const chatWidgetHtml = `
<button class="chat-icon-button" id="chatToggleButton" aria-label="Toggle chat">
  <svg class="chat-icon" viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
  </svg>
</button>
<div class="chat-iframe-container" id="chatIframeContainer">
  <iframe 
    src="YOUR_CHAT_APP_URL_HERE" 
    class="chat-iframe"
    title="Chat Application"
  ></iframe>
</div>
`;

// Add this to your JavaScript
document.body.insertAdjacentHTML('beforeend', chatWidgetHtml);

const toggleButton = document.getElementById('chatToggleButton');
const iframeContainer = document.getElementById('chatIframeContainer');

toggleButton.addEventListener('click', () => {
  const isOpen = iframeContainer.classList.contains('open');
  if (isOpen) {
    iframeContainer.classList.remove('open');
  } else {
    iframeContainer.classList.add('open');
  }
});
