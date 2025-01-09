const chatbox = document.getElementById('chatbox');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

// Preguntas y respuestas predefinidas
const qaPairs = {
    "¿Cuál es el videojuego más vendido de todos los tiempos?": "Minecraft, con más de 200 millones de copias vendidas.",
    "¿Qué consola introdujo el joystick analógico?": "La consola Nintendo 64.",
    "¿En qué año se lanzó el primer juego de Mario Bros?": "En 1985.",
    "¿Qué significa RPG en videojuegos?": "Significa Role-Playing Game (Juego de rol).",
    "¿Qué videojuego popular tiene un personaje llamado Master Chief?": "La saga Halo.",
    "¿Qué desarrolladora creó el juego The Legend of Zelda?": "Nintendo.",
    "¿En qué año se lanzó la PlayStation 2?": "En el año 2000.",
    "¿Qué videojuego popular incluye el modo Battle Royale?": "Fortnite.",
    "¿Qué compañía desarrolló el juego Minecraft?": "Mojang Studios.",
    "¿Qué juego popular incluye la frase 'Finish Him'?": "Mortal Kombat.",
    "¿Quién es el creador de la saga Metal Gear Solid?": "Hideo Kojima.",
    "¿Cuál es el nombre del protagonista de The Witcher?": "Geralt de Rivia.",
    "¿Qué significa NPC en videojuegos?": "Non-Playable Character (Personaje no jugable).",
    "¿Qué juego popular tiene lugar en el mundo de Hyrule?": "The Legend of Zelda.",
    "¿Cuál es el primer videojuego de la historia?": "Pong, lanzado en 1972.",
    "¿Qué significa FPS en videojuegos?": "First-Person Shooter (Disparos en primera persona).",
    "¿Qué juego se considera el precursor de los eSports?": "StarCraft.",
    "¿Cuál es el nombre del creador de Super Mario?": "Shigeru Miyamoto.",
    "¿Qué significa MMO en videojuegos?": "Massively Multiplayer Online (Multijugador masivo en línea).",
    "¿Qué juego incluye personajes como Ryu y Chun-Li?": "Street Fighter."
};

// Manejar el envío del formulario
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage('user', userMessage);
        const botResponse = getBotResponse(userMessage);
        addMessage('bot', botResponse);
        userInput.value = '';
    }
});

// Obtener respuesta del bot
function getBotResponse(message) {
    return qaPairs[message] || "Lo siento, no tengo una respuesta para esa pregunta.";
}

// Añadir mensaje al chatbox
function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.innerHTML = `<div class="message">${text}</div>`;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}
