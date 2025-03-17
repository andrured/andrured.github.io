<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const isConfirmed = ref(false); // Nuevo estado para el checkbox

function submitForm() {
  alert('¡Esto es un ejemplo de simulación de phishing! En un escenario real, las credenciales habrían sido capturadas.');
  
  // Limpiar el formulario
  email.value = '';
  password.value = '';
  isConfirmed.value = false; // Reiniciar checkbox
}
</script>

<template>
  <div class="main-content">
    <h1 style="text-align: center;">Acceso a su Banca en Línea</h1>

    <div class="alert-box">
      Para acceder introduzca sus credenciales de red. Si no conoce su usuario, introduzca su Cédula de Ciudadanía
    </div>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">Usuario:</label>
        <input 
          type="text" 
          id="username" 
          placeholder="Ingrese su usuario" 
          v-model="username" 
          required
        >
      </div>


      <div class="form-group">
        <label for="password">Clave personal:</label>
        <input 
          type="password" 
          id="password" 
          placeholder="Ingrese su contraseña" 
          v-model="password" 
          required
        >
      </div>

      <!-- Checkbox de confirmación -->
      <div class="form-group checkbox-group">
        <input type="checkbox" id="confirm" v-model="isConfirmed">
        <label for="confirm">Confirmo que los datos ingresados son correctos</label>
      </div>

      <div class="form-group">
        <button type="submit" :disabled="!isConfirmed">Ingresar de forma segura</button>
      </div>
    </form>

    <div class="form-links">
      <a href="#" class="form-link">¿Olvidó su clave?</a>
      <a href="#" class="form-link">Registrarse</a>
    </div>

    <div class="security-badge">
    
      <span>Conexión segura SSL - Sus datos están protegidos</span>
    </div>
  </div>
</template>

<style scoped>
.form-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  margin-top: 10px;
}

.form-link {
  color: #00529b;
  text-decoration: none;
  transition: color 0.3s;
  margin-bottom: 5px;
}

.form-link:hover {
  color: #0099cc;
  text-decoration: underline;
}

.main-content {
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-top: 30px;
}

h1 {
  color: #0056b3;
  margin-bottom: 20px;
}

.alert-box {
  background-color: #fff8e1;
  border-left: 4px solid #ffc107;
  padding: 15px;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Checkbox */
.checkbox-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.checkbox-group input {
  width: auto;
  margin: 0;
}

/* Botón deshabilitado */
button {
  background-color: #0056b3;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  transition: background-color 0.3s;
}

button:disabled {
  background-color: #669cdb;
  cursor: not-allowed;
}

button:hover:enabled {
  background-color: #003d82;
}

.security-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.security-badge img {
  width: 20px;
  margin-right: 10px;
}
</style>
