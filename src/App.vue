<script setup>
import FooterPage from './components/FooterPage.vue';
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue';
</script>

<template>
  <article class="container">
    <HeaderPage />
    <MainPage />
    <FooterPage />
  </article>
</template>

<style>
:root {
  --global-font-family: sans-serif;
  --bg-color: #ffffff;
  --text-color: #000000;

}
[data-time="dark"] {
  --bg-color:#222 ;
  --text-color: #ffffff ;

}
body{
  /* background-color: var(--bg-color) ; */
  color: var(--text-color) ;
  transition: bacground-color 0.3s, color 0.3s;
  margin: 0;
  padding: 0;
  font-family: var(--global-font-family);
}
.container{
  width: 740px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  padding: 1rem;

}
</style>
