<template>
  <div class="header">
    <h3 class="header__logo"><router-link to="/">Boobagarre</router-link></h3>
    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
          <input v-model="theme" type="checkbox" id="checkbox" />
          <div class="slider round"></div>
      </label>
    </div>
    <div class=header__icon>
      <div></div>
      <div></div>
      <div></div>
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
  watch: {
    theme: function(e) {
      e ? document.documentElement.setAttribute('data-theme', 'dark'): document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}
</script>



