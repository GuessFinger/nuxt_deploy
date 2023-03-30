<template>
  <div class="container">
    <header class="header">
      <img src="/images/profile.png" alt="fingerGuess"
           :class="$route.path === '/' ? 'headerHomeImage borderCircle' : 'headerImage borderCircle' ">
      <h1 :class="$route.path === '/' ? 'heading2Xl' : 'headingLg' ">Guess Finger</h1>
    </header>
    <main>
      <slot/>
    </main>
  </div>
</template>
<script setup>


</script>
<style>
@import '../styles/Home.css';
@import '../styles/globals.css';
@import '../styles/utils.css';
</style>

