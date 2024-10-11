// app.js

// Función para mostrar/ocultar el chat
function toggleChat() {
  const chatContainer = document.getElementById('chat-container');
  chatContainer.classList.toggle('hidden');
}

// Función para enviar un mensaje
function sendMessage() {
  const userInput = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');

  // Obtener el valor del input del usuario
  const message = userInput.value.trim();

  if (message) {
      // Crear un nuevo div para el mensaje del usuario
      const userMessageDiv = document.createElement('div');
      userMessageDiv.className = 'user-message';
      userMessageDiv.textContent = message;

      // Agregar el mensaje del usuario al chat
      chatBox.appendChild(userMessageDiv);

      // Limpiar el input
      userInput.value = '';

      // Obtener la respuesta del bot
      const botResponse = getBotResponse(message);

      // Crear un nuevo div para la respuesta del bot
      const botMessageDiv = document.createElement('div');
      botMessageDiv.className = 'bot-message';
      botMessageDiv.innerHTML = botResponse; // Cambiar a innerHTML para poder usar HTML

      // Agregar la respuesta del bot al chat
      chatBox.appendChild(botMessageDiv);

      // Desplazar el chat hacia abajo
      chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// Función para simular una respuesta del bot (puedes mejorar esta lógica)
function getBotResponse(message) {
  const lowerMessage = message.toLowerCase();

  // Respuestas básicas del bot
  if (lowerMessage === "menu") {
      return `
          Aquí tienes las opciones que puedo ofrecerte:
          <ol>
              <li><a href="index.html">Inicio</a></li>
              <li><a href="about.html">Nosotros</a></li>
              <li><a href="package.html">Paquetes</a></li>
              <li><a href="destination.html">Destinos</a></li>
              <li><a href="alojamiento.html">Alojamiento</a></li>
              <li><a href="contact.html">Contactar</a></li>
              <li><a href="testimonial.html">Testimonios</a></li>
              <li><a href="single.html">Galería</a></li>
              <li><a href="blog.html">Blog</a></li>
          </ol>
          Escribe el número o el nombre de la opción para más información.
      `;
  }

  // Agregar respuestas específicas a otras entradas
  const options = {
      "1": "Aquí está la información sobre los paquetes turísticos. [Link a <a href='paquetes.html'>paquetes</a>]",
      "paquetes": "Aquí está la información sobre los paquetes turísticos. [Link a <a href='paquetes.html'>paquetes</a>]",
      "2": "Nosotros: Aquí puedes encontrar información sobre nosotros. [Link a <a href='nosotros.html'>nosotros</a>]",
      "nosotros": "Nosotros: Aquí puedes encontrar información sobre nosotros. [Link a <a href='nosotros.html'>nosotros</a>]",
      // Agrega más opciones aquí según lo necesites
  };

  // Retorna la respuesta correspondiente o un mensaje predeterminado
  return options[lowerMessage] || "Lo siento, no entiendo tu pregunta.";
}


  