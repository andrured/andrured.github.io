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
            <li><a href="package.html">Paquetes</a></li>
            <li><a href="about.html">Nosotros</a></li>
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
    "1": "Paquetes: Ofrecemos una variedad de tours, como excursiones fotográficas, aventuras en la selva y recorridos culturales. Descubre todos los detalles aquí. [Link a <a href='package.html'>paquetes</a>]",
    "paquetes": "Paquetes: Ofrecemos una variedad de tours, como excursiones fotográficas, aventuras en la selva y recorridos culturales. Descubre todos los detalles aquí. [Link a <a href='package.html'>paquetes</a>]",
    
    "2": "Nosotros: Aprende sobre nuestra misión de promover el turismo responsable y sostenible en el Vaupés, conectando la naturaleza con las comunidades locales. [Link a <a href='about.html'>nosotros</a>]",
    "nosotros": "Nosotros: Aprende sobre nuestra misión de promover el turismo responsable y sostenible en el Vaupés, conectando la naturaleza con las comunidades locales. [Link a <a href='about.html'>nosotros</a>]",
    
    "3": "Destinos: Explora los destinos más impresionantes del Vaupés, desde selvas tropicales hasta ríos majestuosos y reservas indígenas. [Link a <a href='destination.html'>destinos</a>]",
    "destinos": "Destinos: Explora los destinos más impresionantes del Vaupés, desde selvas tropicales hasta ríos majestuosos y reservas indígenas. [Link a <a href='destination.html'>destinos</a>]",

    "4": "Alojamiento: Encuentra eco-lodges, cabañas rústicas y otros tipos de alojamiento rodeados de naturaleza. [Link a <a href='contact.html'>alojamiento</a>]",
    "alojamiento": "Alojamiento: Encuentra eco-lodges, cabañas rústicas y otros tipos de alojamiento rodeados de naturaleza. [Link a <a href='contact'>alojamiento</a>]",
    
    "5": "Contactar: Estamos aquí para responder cualquier pregunta o ayudarte a planificar tu viaje al Vaupés. [Link a <a href='contact.html'>contacto</a>]",
    "contactar": "Contactar: Estamos aquí para responder cualquier pregunta o ayudarte a planificar tu viaje al Vaupés. [Link a <a href='contact.html'>contacto</a>]",
    
    "6": "Testimonios: Lee lo que otros viajeros han dicho sobre sus experiencias en el Vaupés. [Link a <a href='testimonial.html'>testimonial</a>]",
    "testimonios": "Testimonios: Lee lo que otros viajeros han dicho sobre sus experiencias en el Vaupés. [Link a <a href='testimonial.html'>testimonios</a>]",

    "7": "Galería: Descubre las impresionantes imágenes de paisajes, flora y fauna que te esperan en el Vaupés. [Link a <a href='blog.html'>galería</a>]",
    "galería": "Galería: Descubre las impresionantes imágenes de paisajes, flora y fauna que te esperan en el Vaupés. [Link a <a href='blog.html'>galería</a>]",

    "8": "Blog: Lee historias, consejos y noticias sobre turismo en el Vaupés. [Link a <a href='single.html'>blog</a>]",
    "blog": "Blog: Lee historias, consejos y noticias sobre turismo en el Vaupés. [Link a <a href='single.html'>blog</a>]",
};


  // Retorna la respuesta correspondiente o un mensaje predeterminado
  return options[lowerMessage] || "Lo siento, no entiendo tu pregunta.";
}

document.getElementById("chat-button").addEventListener("click", function() {
  const chatbotContainer = document.querySelector(".chatbot-container");
  chatbotContainer.classList.toggle("open");
});


  