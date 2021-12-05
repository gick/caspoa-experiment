  <template>
  <div class="p-field p-grid">
    <label for="name" class="p-col-fixed" style="width:100px">Mission name</label>
    <div class="p-col">
      <InputText id="name" v-model="missionName" type="text" />
    </div>
  </div>
  <div class="p-field p-grid">
    <label for="missionDuration" class="p-col-fixed" style="width:100px">Password</label>
    <div class="p-col">
      <Slider id="missionDuration" step v-model="missionDuration" />
    </div>
  </div>

  <Button @click="handleLogin" label="Submit" class="p-mt-2" />
</template>

<script>
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'

export default {
data(){
    return {
        missionName:null,
        missionDuration:null

    }
},
components:{
    Slider,

}
}
</script>

<style>

</style>