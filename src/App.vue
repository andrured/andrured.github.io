<script setup>
import Header from './components/Header.vue';
import LoginForm from './components/LoginForm.vue';
import Footer from './components/Footer.vue';
import RegisterForm from './components/RegisterForm.vue';

</script>

<template>
  <div id="app">
    <Header />
    <div class="container">
      
      <LoginForm />
      <Footer />
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #ffffff;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>