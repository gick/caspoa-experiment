<template>
  <Menubar :model="items">
    <template v-if="user" #end>
      <li class="p-menuitem user">
        <span class="p-menuitem-text user">Current user : {{user.username}}</span>
      </li>
    </template>
  </Menubar>
  <ConfirmDialog></ConfirmDialog>

  <router-view class="p-mb-2 p-mt-2" />
</template>
<script>
import ConfirmDialog from "primevue/confirmdialog";
import Menubar from "primevue/menubar";
import { menu } from "@/router/menu.js";
export default {
  data() {
    return {
      items: new menu(this.$store).items(),
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.axios
      .get("http://localhost:3000/user/session", { withCredentials: true })
      .then((response) => {
         console.log(response.data.user)
        if (typeof response.data.username =="undefined") {
          this.$router.push("/login");
        } else {
          this.$store.commit("setUser", { user: response.data });
          this.$router.push("/dashboard");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  components: {
    Menubar,
    ConfirmDialog,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
.user {
  list-style-type: none;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
