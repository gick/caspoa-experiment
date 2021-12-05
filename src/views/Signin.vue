<template>
  <div class="p-m-2 welcome">Welcome to CASPOA-experiment!</div>

  <div class="p-d-inline-flex p-jc-center p-flex-column p-mt-2 p-mb-3">
    <div>
      Please log in or register to start.
      <button @click="checkSession">Check session</button>
    </div>
    <TabView class="p-mt-2">
      <TabPanel header="Signup">
        <Signup />
      </TabPanel>
      <TabPanel header="Login">
        <Login />
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";

export default {
  name: "Signin",
  components: {
    TabView,
    TabPanel,
    Login,
    Signup,
  },
  computed:{
    user(){
      return this.$store.state.user
    }
  },
  watch:{
    user(old,newv){
      if(newv){
          this.$router.push('/dashboard')
      }
    }
  },
  methods: {
    checkSession() {
      fetch("http://localhost:3000/user/session", {
        credentials: "include",
      }).then(function (response) {
        console.log(response);
      });
    },
  },
};
</script>

<style>
.welcome {
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: 300;
}
</style>