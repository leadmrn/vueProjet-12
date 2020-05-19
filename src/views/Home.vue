<template>
  <div class="home">
    <div class="home__divs">
      <div>
        <h1>Boobagarre : Booba et ses fans</h1>
        <p class="home__text home__text--desktop">Booba a pu rencontrer plusieurs désacord avec certains rappeurs.<br>
  Notre blog  va vous exposer plusieurs de ses confilts.<br>
  Amusez vous bien sur notre blog !</p>
      </div>
      <div>
        <img src="../assets/booba.jpg" alt="">
      </div>
      <p class="home__text home__text--mobile">Booba a pu rencontrer plusieurs désacord avec certains rappeurs.<br>
Notre blog  va vous exposer plusieurs de ses confilts.<br>
Amusez vous bien sur notre blog !</p>
    </div>

    <div class="container__actu">
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

          <div class="home__button">
            <router-link to="/listing">Voir tous les articles</router-link>
          </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      posts: null
    }
  },

  created () {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6').then((response) => {
      response.json().then((data) => {
        this.posts = data
      })
    })
  }
}
</script>
