<template>
<Menubar :model="items">
</Menubar>
  <router-view class="p-mb-2 p-mt-2"/>
</template>
<script>
import Menubar from 'primevue/menubar';
import {items} from '@/router/menu.js'
export default {
    data() {
        return {
          items:items
        }
    


  },
  components:{
    Menubar
  }
}
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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
