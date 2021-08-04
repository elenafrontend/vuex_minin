
<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="title" v-model="title">
    <input type="text" placeholder="body" v-model="body">
    <button type="submit">Create Post</button>
    <hr>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: ''
    }
  },
  
  methods: {
    submit() {

    }
  }
}
</script>

<style scoped>
input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  margin-bottom: 20px;
}
</style>