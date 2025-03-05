import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useFontStore = defineStore(
  'font',
  () => {
    const fontFamily = ref('sans-serif');
    watch(fontFamily, (newFont) => {
      document.body.style.setProperty('--global-font-family', newFont);
    });
    return {
      fontFamily,
    };
  },
);
