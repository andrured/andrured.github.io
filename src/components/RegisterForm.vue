<!-- RegisterForm.vue -->
<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['close']);

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');

function registerUser() {
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Las contraseñas no coinciden';
    return;
  }

  // Aquí podrías enviar los datos a una API real
  alert(`Registro exitoso para: ${name.value}`);

  // Limpiar los campos
  name.value = '';
  email.value = '';
  password.value = '';
  confirmPassword.value = '';
  errorMessage.value = '';

  // Cerrar el modal
  emit('close');
}
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Registro de Usuario</h2>

      <div v-if="errorMessage" class="error-box">{{ errorMessage }}</div>

      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="name">Nombre Completo:</label>
          <input type="text" id="name" v-model="name" required />
        </div>

        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" v-model="email" required />
        </div>

        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required />
        </div>

        <div class="form-group">
          <button type="submit">Registrarse</button>
        </div>
      </form>

       <!-- Mostrar el formulario de registro cuando showRegister sea true -->
    <RegisterForm v-if="showRegister" @close="showRegister = false" />

    <button class="close-btn" @click="$emit('close')">Cerrar</button>

    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 350px;
  text-align: center;
}

.error-box {
  background: #ffcccc;
  color: red;
  padding: 10px;
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: #0056b3;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #003d82;
}

.close-btn {
  background: #ccc;
  margin-top: 10px;
}
</style>
