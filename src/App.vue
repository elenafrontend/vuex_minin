<template>
  <div id="app">
    <article class="post" v-for='post of posts' :key='post.id'>
      <h2 class="post__title">{{ post.title }}</h2>
      <p class="post__body">{{ post.body }}</p>
    </article>
  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      posts: []
    } 
  },

  async mounted() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    const posts = await responce.json()
    this.posts = posts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;

}
</style>
