import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInputStore = defineStore('input', () => {
  const value = ref('');

  return {
    value,
  };
});
