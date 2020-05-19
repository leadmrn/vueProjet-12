<template>
  <div class="listing">
    <h2>ACTUS</h2>
    <div class="listing__content">
      <div class="listing__article" v-for="post in posts" :key="post.id">
        <h4>{{ post.title }}</h4>
        <div>
          <router-link :to="`/article/${ post.id }`">
            En savoir plus
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: null
    }
  },
  created () {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
      response.json().then((data) => {
        this.posts = data
      })
    })
  }
}
</script>
