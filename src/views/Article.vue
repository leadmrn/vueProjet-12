<template>
  <div class="article__post" v-if='post'>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <div id="parallelogram">
  <span>actus</span>
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: null
    }
  },
  created () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.slug}`).then((response) => {
      response.json().then((data) => {
        this.post = data
      })
    })
  }
}
</script>