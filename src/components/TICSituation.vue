<template>
  <Panel>
    <template #header>Air support request</template>
    <div class="p-grid p-text-left">
      <div class="p-col-7">
        <b>Current information</b>
        :{{currentTIC.naturalSentenceTroop}}.
        {{currentTIC.naturalSentenceManpad}}.
        {{currentTIC.naturalSentenceVehicle}}.
      </div>
      <div class="p-col-3">
        <b>Request received at :</b>
        {{startDate}}
      </div>
      <div class="p-col">
        <b>Time elapsed :</b>
        {{timeElapsed}}
      </div>
      <div class="p-col-3">
        <Button label="Set plane" @click="setCurrentTIC" class="p-button" />
      </div>
      <div class="p-col-10">{{currentTIC.plane}}</div>
    </div>
  </Panel>
</template>

<script>
import Panel from "primevue/panel";
import Button from "primevue/button";

export default {
  name: "TICSituation",
  data() {
    return {
      missionCompleted: false,
      missionStarted: false,
      timeElapsed: 0,
      severity: Number,
      timer: null,
    };
  },
  components: {
    Panel,
    Button,
  },
  props: {
    currentTIC: Object,
  },
  mounted() {
    this.timer = setInterval(() => {
      this.timeElapsed++;
    }, 1000);
  },
  methods:{
    setCurrentTIC(){
      this.$store.commit("setActiveTIC",{startDate:this.currentTIC.startDate})
    }
  },
  
  computed: {
    currentPlane(){
      if(this.currentTIC){
        return this.currentTIC.plane
      }
      else return null
    },
    startDate() {
      if (this.currentTIC) {
        return new Date(this.currentTIC.startDate).toString();
      }
      return "";
    },
  },
};
</script>

<style>
</style>