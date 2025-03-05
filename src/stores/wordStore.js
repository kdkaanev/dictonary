import { defineStore } from 'pinia';
import axiosTA from '../axiosinstance';

export const useWordStore = defineStore('word', {
  state: () => ({
    word: { '': [] },
    errorMessage: '',
  }),

  actions: {
    async getWord(word) {
      try {
        const response = await axiosTA.get(`${word}`);
        if (response) {
          this.word = response.data;
          this.errorMessage = '';
          console.log('Get word success', this.word);
          return true;
        }
      }
      catch (error) {
        if (!word) {
          this.errorMessage = '';
        }
        else {
          this.errorMessage = error.message;
          this.word = { '': [] };
          console.error('Get word failed', error);
        }
      }
      return false;
    },
  },
});
