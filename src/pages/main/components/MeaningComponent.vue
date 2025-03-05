<script setup>
import { useWordStore } from '../../../stores/wordStore';

const wordStore = useWordStore();
</script>

<template>
  <div
    v-if="wordStore.word.length > 0" class="meaning-container"
  >
    <section v-for="meaning in wordStore.word[0].meanings" :key="meaning.partOfSpeech" class="part-of-speech">
      <h5 class="speech">
        {{ meaning.partOfSpeech }}
      </h5>
      <h6 class="meaning">
        Meaning
      </h6>
      <ul class="meaning-text">
        <li v-for="text in meaning.definitions" :key="text.definition">
          {{ text.definition }}
        </li>
      </ul>
      <h6 v-if="meaning.synonyms.length > 0" class="synonyms">
        Synonyms <span v-for="text in meaning.synonyms" :key="text.synonyms" style="color: rgb(164 69 237) ">
          {{ text }}
        </span>
      </h6>
      <h6 v-if="meaning.antonyms.length > 0" class="synonyms">
        Antonyms <span v-for="text in meaning.antonyms" :key="text.antonyms" style="color: rgb(164 69 237); ">
          {{ text }}
        </span>
      </h6>
    </section>
  </div>
</template>

<style scoped>
.meaning-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:baseline;
  padding: 1rem;
}
.speech::after {
  content: "";
  display: inline-block;
  width: 80%;
  border-top: 1px solid black ;
  opacity: 0.4;
  margin-left: 24px;

}
.speech {

  font-size: 1rem;
  font-weight: bold;
}
.meaning {
  font-size: 1rem;
  color: gray;
  padding-top: 0.5rem;

}
li {
  list-style-type:disc;

  margin: 0;
  padding: 0;
}
li::marker {
  color: rgb(164 69 237);
}
h5 ,h6 {
  font-weight:400 !important;
}
.synonyms {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 1rem;
  color: gray;
  padding-top: 0.5rem;
}
.part-of-speech{
  width: 100%;
}
</style>
