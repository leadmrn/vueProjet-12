<template>
  <div class="header">
    <div class="header__content">
      <h3 class="header__logo"><router-link to="/">Boobagarre</router-link></h3>
      <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
            <input v-model="theme" type="checkbox" id="checkbox" />
            <div class="slider round"></div>
        </label>
      </div>
      <div class="header__icon">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav class="header__menu">
        <ul>
          <li v-on:click="closeMenu"><router-link to="/">Accueil</router-link></li>
          <li v-on:click="closeMenu"><router-link to="/listing">Actualités</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: null
    }
  },
  mounted () {
    var iconMenu = document.querySelector('.header__icon');
    var menu = document.querySelector('.header__menu');
    iconMenu.addEventListener('click', ()=>{
      iconMenu.classList.toggle('visible');
      menu.classList.toggle('visible');
    })
  },
  watch: {
    theme: function(e) {
      e ? document.documentElement.setAttribute('data-theme', 'dark'): document.documentElement.setAttribute('data-theme', 'light');
    }
  },
  methods: {
    closeMenu: function() {

    document.querySelector('.header__icon').classList.remove('visible');
    document.querySelector('.header__menu').classList.remove('visible');
      
    }
  }
}
</script>



