<script setup>
import { defineProps, ref, watch } from 'vue';
import NavBar from '../pages/header/NavBar.vue';
import SerchField from '../pages/header/SearchField.vue';

const props = defineProps(['fontFamily', 'isDark']);
const localFontFamily = ref(props.fontFamily);

watch(() => props.fontFamily, (newVal) => {
  localFontFamily.value = newVal;
});
</script>

<template>
  <NavBar />
  <SerchField />
</template>

<style>
:root {
  --global-font-family: sans-serif;
}
body{
  margin: 0;
  padding: 0;
  font-family: var(--global-font-family);
}
</style>
