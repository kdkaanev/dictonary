import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false);
  watch(isDark, (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
  });
  return {
    isDark,
  };
});
