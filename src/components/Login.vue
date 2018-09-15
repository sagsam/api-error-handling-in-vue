<template>
  <div id="login">
    <form method="post" @submit.prevent="onSubmit">

      <label for="username">        
        Username: 
      </label>
      <input type="email" name="username" v-model="form.username">

      <br>

      <label for="password">        
        Password: 
      </label>
      <input type="password" name="password" v-model="form.password">

      <br>

      <input type="submit" name="login" value="Login">

    </form>  
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit(){
      await $http.post('/auth/login/', this.form)
              .then(response => {
                console.log(response)
              })
    }
  }
}
</script>

<style>
</style>
