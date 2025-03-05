<script setup>
import MeaningComponent from '../pages/main/components/MeaningComponent.vue';
import NoWord from '../pages/main/components/NoWord.vue';
import WordComponent from '../pages/main/components/WordComponent.vue';

import { useInputStore } from '../stores/inputStore';
import { useWordStore } from '../stores/wordStore';

const wordStore = useWordStore();
const inputStore = useInputStore();
</script>

<template>
  <NoWord v-if="wordStore.errorMessage && inputStore.value" />
  <div v-else>
    <WordComponent />
    <MeaningComponent />
  </div>
</template>
