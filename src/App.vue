<template>
  <div id="app">
    <article class="post" v-for='post of allPosts' :key='post.id'>
      <h2 class="post__title">{{ post.title }}</h2>
      <p class="post__body">{{ post.body }}</p>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',

  // В компонент из Vuex данные можно получить 2 способами:
  
  // 1. 
  // возвращаем необходимое свойство из getters в вычисляемлм св-ве
  // любые изменения this.$store.getters.allPosts вызовут перерасчёт вычисляемого свойства и запуск связанных с ним обновлений DOM
  // computed: {
  //   allPosts() {
  //     return this.$store.getters.allPosts
  //   }
  // }, 

  // 2. Когда компонент должен использовать множество свойств или геттеров хранилища, 
  // объявлять все эти вычисляемые свойства может быть утомительно
  // В таких случаях можно использовать функцию mapState, mapGetters
  // которые автоматически генерирует вычисляемые свойства

  computed: mapGetters(["allPosts"]),

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
