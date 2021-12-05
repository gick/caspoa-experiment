  <template>
  <div class="p-d-flex p-jc-center p-grid p-text-left">
    <div class="p-col-5">
      <Card class="p-shadow-4">
        <template #title>User Information</template>
        <template #content>
          <div>Username : {{user.username}}</div>
          <div>Email : {{user.email}}</div>
          <div>First login : {{user.date}}</div>
          <div>Number of missions : {{user.mission}}</div>
        </template>
        <template #footer>
          <div class="p-d-flex p-d-row p-jc-evenly">
          <Button @click="startMission" label="Start mission"/>
          <Button @click="deleteUser" label="Delete user"/>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
  
  <script>
import Card from "primevue/card";
import Button from "primevue/button";

export default {
    components:{
        Card,
        Button
    },
  methods:{
    startMission(){

    }
  },
  computed: {
    user() {
      console.log(this.$store.state.user);

      return this.$store.state.user;
    },
  },
};
</script>
  
  <style>
</style>
