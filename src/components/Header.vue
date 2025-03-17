<script setup>
// No necesitamos importar nada aquí para este componente simple
</script>

<template>
  <header class="header">
    <img src="../assets/images/iconbanck.png" alt="Logo Empresa" class="logo">
  </header>
</template>

<style scoped>


.header {
  display: flex;          /* Activa flexbox */
  justify-content: center; /* Centra horizontalmente */
  align-items: center;     /* Centra verticalmente */
  height: 150px;          /* Ajusta la altura según necesites */
  background-color: #ffffff;
  text-align: center;
}

.logo {
  max-width: 300px;
  height: auto;
  object-fit: cover;
}

</style>
