<template>
  <div id="login">    
    <form method="post" @submit.prevent="onSubmit" @keydown="form.errors.clear()">
      <span class="error__message" v-if="form.errors.has('non_field_errors')" v-text="form.errors.get('non_field_errors')"></span>
      <br>

      <label for="username">        
        Username: 
      </label>
      <p>
        <input type="email" name="username" v-model="form.username" v-error="form.errors.get('username')">
      </p>
      
      
      <!-- <span v-if="form.errors.has('username')" v-text="form.errors.get('username')"></span>
      <br> -->

      <label for="password">        
        Password: 
      </label>
      <p>
        <input type="password" name="password" v-model="form.password" v-error="form.errors.get('password')">
      </p>
      
      <!-- <span v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
      <br> -->

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
input[type="password"],
input[type="email"] {
  padding: 10px;
  border: solid 2px #c9c9c9;
  font-size: 18px;
  border-radius: 4px;
  outline: 0;
}

input[type="password"].focus,
input[type="password"]:focus,
input[type="email"].focus,
input[type="email"]:focus {
  outline: 0;
}

input[type="password"].error,
input[type="email"].error{
  border: solid 2px #F84036;
  outline: 0;
  color:#F84036;
}

.error__message{
  padding-top:4px;
  font-size:90%;
  color:#F84036;
}

</style>
