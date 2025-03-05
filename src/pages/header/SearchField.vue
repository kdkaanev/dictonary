<script setup>
import { ref } from 'vue';
import { useInputStore } from '../../stores/inputStore';
import { useThemeStore } from '../../stores/themeStore';
import { useWordStore } from '../../stores/wordStore';

const themeStore = useThemeStore();
const inputStore = useInputStore();
const wordStore = useWordStore();
const showError = ref(false);
async function searchWord() {
  await wordStore.getWord(inputStore.value);
  if (inputStore.value === '') {
    wordStore.errorMessage = '';
  }
}
function showBorder() {
  if (inputStore.value === '') {
    showError.value = true;
    wordStore.word = [];
    wordStore.errorMessage = '';
  }
  else {
    showError.value = false;
  }
}
</script>

<template>
  <div class="search" @clickPrevent="showError.value = false">
    <input v-if="themeStore.isDark" v-model="inputStore.value" type="text" class="search-input dark" :class="{ 'border-red': showError }" placeholder="Search for any word...">
    <input v-else v-model="inputStore.value" type="text" class="search-input light" :class="{ 'border-red': showError }" placeholder="Search for any word...">
    <img src="../../assets/icon-search.svg" alt="lens" class="search-icon" @click="() => { searchWord(); showBorder(); }">
  </div>
  <p v-if="showError" class="p-error">
    Woops, can't be empty...
  </p>
</template>

<style scope>
.search {

  height:min-content;
    width: 100%;
    border-radius: 16px;
  position: relative;
  display: inline-block;

}

.search-input {
  width: 100%;
  font-weight: lighter;
  background-color: transparent;
  padding: 10px 20px 10px 10px;
  margin-bottom: 0 !important;
  border-radius: 16px;
}
.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.light {
  background-color:#f4f4f4;
}
.dark {
  background-color:#1f1f1f;
}
.border-red {
  border: 1px solid red;
  padding: 5px;
  outline: none;
}
.p-error {
  color: red;
  font-size: 1rem;
  margin: 0;
  padding-top: 6px;
}
</style>
