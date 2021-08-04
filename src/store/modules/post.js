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