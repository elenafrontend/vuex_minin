export default {
  actions: {
    async fetchPosts(ctx) {
      const responce = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      const posts = await responce.json()
      
      ctx.commit('updatePosts', posts)
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    }
  },
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts
    }
  },
}