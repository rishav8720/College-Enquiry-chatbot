const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value;
    if (message.trim() === '') return;

    appendMessage('user', message);
    userInput.value = '';

    setTimeout(() => {
        const botReply = getBotReply(message);
        appendMessage('bot', botReply);
    }, 500);
}

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


function getBotReply(userMessage) {
    
    const responses = {
        "Hello": "Hi there! How can I assist you today?",
        "How do I apply for courses?": "You can apply for courses through the college website. Would you like more details?",
       
    };
    return responses[userMessage] || "I'm sorry, I am having some issues please try again later...";
}
