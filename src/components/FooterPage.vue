<script setup>
import { useWordStore } from '../stores/wordStore';

const wordStore = useWordStore();
</script>

<template>
  <section v-if="wordStore.word.length > 0" class="footer">
    <p>Sourse</p>
    <a :href="wordStore.word[0].sourceUrls">{{ wordStore.word[0].sourceUrls[0] }}</a>
    <span><img src="../assets/icon-new-window.svg" alt=""></span>
  </section>
</template>

<style scoped>
.footer{
  width: 100%;
  padding: 2rem;
  border-top: 1px solid grey ;

  display: flex;

  align-items: flex-start;
  font-size:medium;
  gap: 1rem;

}
</style>
