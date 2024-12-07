// A simple chatbot that responds with some predefined answers
function chatbot(input) {
  let output = "";
  input = input.toLowerCase();
  if (input.includes("hello") || input.includes("hi")) {
      output = "Hello, nice to meet you!";
  } else if (input.includes("how are you")) {
      output = "I'm doing fine, thank you for asking.";
  } else if (input.includes("what is your name")) {
      output = "My name is Kelly, I'm a chatbot.";
  } else if (input.includes("what can you do")) {
      output = "I can chat with you and answer some simple questions.";
  } else if (input.includes("Who is the priminister of India")) {
      output = "The Priminister of India is Narendra Modi";
  } else {
      output = "Sorry, I don't understand that. Please try something else.";
  }
  return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
  const chat = document.getElementById("chat");
  const userMessage = document.createElement("div");
  userMessage.classList.add("message", "user");

  const userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");

  const userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;

  userMessage.appendChild(userAvatar);
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
  const chat = document.getElementById("chat");
  const botMessage = document.createElement("div");
  botMessage.classList.add("message", "bot");

  const botAvatar = document.createElement("div");
  botAvatar.classList.add("avatar");

  const botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;

  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
  const input = document.getElementById("input");
  const message = input.value.trim();
  if (message) {
      displayUserMessage(message);
      const output = chatbot(message);
      setTimeout(() => {
          displayBotMessage(output);
      }, 1000);
      input.value = "";
  }
}

// Event listeners for button click and "Enter" key
document.getElementById("button").addEventListener("click", sendMessage);
document.getElementById("input").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
      sendMessage();
  }
});