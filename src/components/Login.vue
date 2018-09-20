<template>
  <div id="login">    
    <form method="post" @submit.prevent="onSubmit" @keydown="form.errors.clear()">
      <span v-if="form.errors.has('non_field_errors')" v-text="form.errors.get('non_field_errors')"></span>
      <br>

      <label for="username">        
        Username: 
      </label>
      <input type="email" name="username" v-model="form.username" v-error>
      <br>
      <span v-if="form.errors.has('username')" v-text="form.errors.get('username')"></span>
      <br>

      <label for="password">        
        Password: 
      </label>
      <input type="password" name="password" v-model="form.password">
      <br>
      <span v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
      <br>

      <input type="submit" name="login" value="Login">

    </form>  
  </div>
</template>

<script>
import { setToken } from '@/utils/token'
import Form from '@/Form/'
export default {
  name: 'login',
  data() {
    return {
      form: new Form({
        username: '',
        password: ''
      })
    }
  },
  methods: {
    async onSubmit(){
      await this.form.post('/auth/login/')
              .then(data => {
                alert(this.form.errors)
                setToken(data.token)
                console.log(data)
              })
    }
  }
}
</script>

<style>
</style>
