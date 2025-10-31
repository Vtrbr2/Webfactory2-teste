const toggleBtn = document.getElementById("chat-toggle");
const chatModal = document.getElementById("chat-modal");
const closeBtn = document.getElementById("close-chat");
const messages = document.getElementById("messages");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// abre e fecha modal
toggleBtn.addEventListener("click", () => {
  chatModal.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  chatModal.classList.remove("active");
});

// envio de mensagem
sendBtn.addEventListener("click", handleUserMessage);
input.addEventListener("keypress", e => {
  if (e.key === "Enter") handleUserMessage();
});

function handleUserMessage() {
  const text = input.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  input.value = "";
  respond(text.toLowerCase());
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function respond(text) {
  let reply = "";

  if (text.includes("oi")) reply = "Olá! Como posso te ajudar? 😊";
  else if (text.includes("serviço")) reply = "Oferecemos criação de sites, bots e sistemas inteligentes! 💡";
  else if (text.includes("contato")) reply = "Você pode nos chamar pelo e-mail: suporte@seudominio.com 📩";
  else reply = "Desculpe, não entendi muito bem 🤔";

  setTimeout(() => addMessage(reply, "bot"), 600);
}
