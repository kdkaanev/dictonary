<script setup>
import { useFontStore } from '../../stores/fontStore';
import { useThemeStore } from '../../stores/themeStore';

const fontStore = useFontStore();
const themeStore = useThemeStore();

/* const isDropdownOpen = ref(false);
const darkMode = ref(false); */

/* function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function changeFont(event) {
  console.log(event.target.value);
}

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
  document.body.classList.toggle('dark-mode');
} */
</script>

<template>
  <div class="nav">
    <img src="../../assets/logo.svg" alt="book logo" class="nav__logo">
    <section class="right">
      <div class="dropdown">
        <select v-model="fontStore.fontFamily" class="font">
          <option value="sans-serif">
            Sans Serif
          </option>
          <option value="serif">
            Serif
          </option>
          <option value="monospace">
            Mono
          </option>
        </select>
      </div>

      <div class="swicth-container">
        <label class="switch">
          <input id="switch" v-model="themeStore.isDark" type="checkbox">
          <span class="slider round" />
        </label>
        <img v-if="themeStore.isDark" class="dark" src="../../assets/icon-moon.svg" alt="moon icon">
        <img v-else class="light" src="../../assets/icon-moon.svg" alt="sun icon">
      </div>
    </section>
  </div>
</template>

<style scoped>
    .nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        /* background-color:#ffffff; */
    }

    .nav__logo {
        width: 32px;
        height: 36.5px;
    }
    .right {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 2rem;
        margin: 0;
    }

    .drop-icon {
        width: 24px;
        height: 24px;
    }

    .font {
        font-family: 'serif';
        background-image: url('../../assets/icon-arrow-down.svg');
        background-repeat: no-repeat;
        background-color: transparent;
        border: none;
        margin: 0;
        cursor: pointer;

    }
    .font::after{
    display: none !important;
  }
  .swicth-container{
    display: flex;
    align-items: center;
    border-left: 1px solid #cccccc;
    padding-left: 2rem;
    gap: 1rem;
  }

    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
        margin: 0;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #757575;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
    .slider:hover {
        background-color: #a445ed;
    }

    .slider:before {
        position: absolute;
        content: '';
        height: 14px;
        width: 14px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: #a445ed;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #a445ed;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
    .dark {
      background-color: #af73df ;
      -webkit-mask: url('../../assets/icon-moon.svg') no-repeat center / contain;
      mask: url('../../assets/icon-moon.svg') no-repeat center / contain ;
      z-index: 1;
    }
</style>
