<template>
  <div id="app">
    <Header />
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/listing">Listing</router-link>
    </div>
    -->
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
