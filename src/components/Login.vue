<template>
  <div class="login-container">
    <div class="title">{{info}}</div>
    <div class="inputer">
      <input type="text" placeholder="username" autocomplete="off">
    </div>
    <div class="inputer">
      <input type="password" placeholder="password" autocomplete="off">
    </div>
    <div class="inputer">
      <button @click="login">login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: 'hello login components'
    }
  },
  methods: {
    login() {
      this.$router.push('/bills')
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  max-width: 500px;
  text-align: center;

  div.title {
    margin: 3em 0;
    font-size: 19px;
    font-style: italic;
  }

  div.inputer {
    margin-bottom: 1em;
    font-size: 16px;

    input {
      width: 100%;
      border: none;
      border-radius: 0;
      padding: .7em .4em;
      font-weight: bold;
      text-align: center;
      background-color: #ddd;
    }

    button {
      width: 100%;
      border: none;
      border-radius: 0;
      padding: .7em .4em;
    }
  }
}
</style>
