<script setup>
import { ref, watch } from 'vue';

import { useWordStore } from '../../../stores/wordStore';
import { useInputStore } from '../../../stores/inputStore';

const inputStore = useInputStore();
const wordStore = useWordStore();
const audioPlayer = ref(null);
const audioSrc = ref('');

async function playAudio() {
  try {
    const phonetics = wordStore.word.length > 0 ? wordStore.word[0].phonetics : [];
    const audioItems = phonetics.filter(item => item.audio);
    if (audioItems.length > 0) {
      const response = await fetch(audioItems[0].audio);
      const blob = await response.blob();
      audioSrc.value = URL.createObjectURL(blob);
      if (audioPlayer.value) {
        audioPlayer.value.load();
        audioPlayer.value.play();
      }
    }
  }
  catch (error) {
    console.error(error);
  }
}




</script>

<template>
  <div v-if="wordStore.word.length > 0" class="word-container">
    <section class="word ">
      <p class="word-type">
        {{ wordStore.word[0].word }}
      </p>
      <p class="vocal">
        {{ wordStore.word[0].phonetic }}
      </p>
    </section>
    <button @click="playAudio">
      <img src="../../../assets/icon-play.svg" alt="">
      <audio ref="audioPlayer" controls hidden>
        <source :src="audioSrc" type="audio/mpeg">
      </audio>
    </button>
  </div>
</template>

<style scoped>
.word-type {
    font-size: 3.25rem;
    font-weight: bold;
    margin: 0;
}
.word-container {
    width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 20px;
}
.word{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    gap: 10px;

}
.vocal{
    font-size: 1.25rem;
    color: rgb(164 69 237);

}
button{
    background-color: transparent;
    border: none;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
}
</style>
