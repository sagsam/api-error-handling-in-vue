<template>
  <div id="login">
    <form method="post" @submit.prevent="onSubmit">

      <label for="username">        
        Username: 
      </label>
      <input type="email" name="username">

      <br>

      <label for="password">        
        Password: 
      </label>
      <input type="password" name="password">

      <br>

      <input type="submit" name="login" value="Login">
      
    </form>  
  </div>
</template>

<script>

export default {
  name: 'login',
  methods: {
    onSubmit(){
      
    }
  }
}
</script>

<style>
</style>
