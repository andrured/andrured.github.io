<script setup>
// No necesitamos importar nada aquí para este componente simple
</script>

<template>
  <footer class="footer">
    <p>© 2025 Banco de Occidente. Todos los derechos reservados.</p>
    <p>Línea de atención al cliente: 01 8000 111 999</p>
    <div class="footer-content">
    <div class="footer-links">
                    <a href="#">Términos y condiciones</a>
                    <a href="#">Política de privacidad</a>
                    <a href="#">Seguridad</a>
                </div>
              </div>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  margin-top: 30px;
  color: #777;
  font-size: 14px;
}
/* Footer */
.footer {
    background-color: #ffffff;
    color: rgb(92, 90, 90);
    padding: 25px 0;
    margin-top: 80px;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
}

.footer-content p {
    margin-bottom: 10px;
}
.footer-links {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.footer-links a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    transition: opacity 0.3s;
}

.footer-links a:hover {
    opacity: 0.8;
    text-decoration: underline;
}

</style>