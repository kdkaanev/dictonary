import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
// import ButtonCounter from './components/ButtonCounter.vue';
import './styles/reset.css';

const app = createApp(App);
app.use(createPinia());

// app.component('ButtonCounter', ButtonCounter);

app.mount('#app');
