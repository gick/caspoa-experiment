<template>
  <div class="p-field p-grid">
    <label for="firstname" class="p-col-fixed" style="width:100px">Username</label>
    <div class="p-col">
      <InputText id="firstname" v-model="name" type="text" />
    </div>
  </div>
  <div class="p-field p-grid">
    <label for="lastname" class="p-col-fixed" style="width:100px">Password</label>
    <div class="p-col">
      <Password id="lastname" v-model="password" />
    </div>
  </div>

  <Button @click="handleLogin" label="Submit" class="p-mt-2" />
</template>

<script>
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import axios from "axios"
export default {
  name: "Login",
  components: {
    InputText,
    Password,
    Button,
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    handleLogin() {
      axios
        .post(
          "http://localhost:3000/user/login",
          {
            username: this.name,
            password: this.password,
          },
          { withCredentials: true }
        )
        .then( response=> {
          this.$store.commit("setUser",{user:response.data})
          console.log(response.data)
          })
          .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>