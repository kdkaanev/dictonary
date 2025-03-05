import axiosTA from '../axiosinstance';

export async function getWord(word) {
  if (!word) {
    this.errorMessage = '';
  }
  try {
    const response = await axiosTA.get(`${word}`);
    return response.data;
  }
  catch (error) {
    if (!word) {
      this.errorMessage = '';
    }
    else {
      error.message = 'Get word failed';
      console.error(error);
    }
  }
}
