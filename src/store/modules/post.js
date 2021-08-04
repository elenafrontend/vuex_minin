export default {
  actions: {
    async fetchPosts(ctx, limit = 3) {
      const responce = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)
      const posts = await responce.json()
      
      ctx.commit('updatePosts', posts)
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },

    // тк добавление new post синхронная операция изменения state
    // добавляем в мутации
    createPost(state, newPost) {
      state.posts.unshift(newPost)
    }
  },
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts
    },

    postCount(state, getters) {
      return getters.validPosts.length
    },

    // в getters часто размещают f фильтрации/сортировки/валидации
    // создаем функцию для валидации posts из state
    validPosts(state) {
      return state.posts.filter((post) => {
        // фильтруем только те посты, у которых есть title и body
        return post.title && post.body
      })
    } 
  },
}