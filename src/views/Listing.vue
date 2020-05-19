<template>
  <div class="listing">
    <h2>ACTUS</h2>
    <div class="listing__content">
      <div v-waypoint="{ active: true, callback: onWaypoint , options: intersectionOptions}" class="listing__article listing__page" v-for="post in posts" :key="post.id">
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
      posts: null,
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [.7, 1] // [0.25, 0.75] if you want a 25% offset!
      } 
    }
    
  },
  
  created () {
    
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
      response.json().then((data) => {
        this.posts = data
      })
    })
    
  },

  methods: {
    onWaypoint ({el, going, direction }) {
      console.log(el);
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        console.log('waypoint going in!');
        el.classList.add('appears')

      }
 
      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log('waypoint going top!')
      }
    }
  }
}

</script>
