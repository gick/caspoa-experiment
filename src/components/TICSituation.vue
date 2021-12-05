<template>
  <div class="card p-shadow-10 p-m-3">
    <div class="ticReq">Air Support Request</div>

    <div class="p-d-flex text">
      <div class="p-d-flex p-flex-column p-col-4">
        <div class="p-shadow-3 title p-m-2 p-p-1">Request information</div>
        <div class="p-fluid p-m-3">
          <b>Request received at :</b>
          {{startDate}}
        </div>
        <div class="p-fluid p-m-3">
          <b>Current information</b>
          :{{currentTIC.naturalSentenceTroop}}.
          {{currentTIC.naturalSentenceManpad}}.
          {{currentTIC.naturalSentenceVehicle}}.
        </div>
      </div>
      <Divider layout="vertical" />

      <div class="p-d-flex p-flex-column p-col-4">
        <div class="p-shadow-3 title p-m-2 p-p-1">Plane information</div>

        <div class="p-fluid p-m-2">
          <Button :disabled="planeLaunched" label="Choose plane" @click="setCurrentTIC" class="p-button" />
        </div>
        <div v-if="currentTIC.plane" class="p-fluid p-m-2">
          <Button :disabled="planeLaunched" label="Confirm launch" @click="confirmLaunch()" class="p-button" />
        </div>

        <div class="p-fluid">
          <div v-if="currentTIC.plane" class="p-col-5">
            <SelectedPlane :selectedPlane="currentTIC.plane" />
          </div>
        </div>        <div v-if="currentTIC.plane" class="p-fluid p-m-2">
          <MissionEvaluation :risk="currentRisk"/>
        </div>


      </div>
      
      <Divider layout="vertical" />

      <div class="p-d-flex p-col-2 p-flex-column p-jc-l text">
        <div class="p-shadow-3 title p-m-2 p-p-1">Situation evolution</div>

        <div class="p-col-5">
          <b>Time elapsed :</b>
          {{timeElapsed}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Divider from "primevue/divider";

import Button from "primevue/button";
import SelectedPlane from "@/components/SelectedPlane.vue";
import MissionEvaluation from "@/components/MissionEvaluation.vue";
import { evaluateRisk } from "@/dummyData/missionEvaluation";
export default {
  name: "TICSituation",
  data() {
    return {
      risk:null,
      planeLaunched:false,
      missionCompleted: false,
      missionStarted: false,
      timeElapsed: 0,
      severity: Number,
      timer: null,
    };
  },
  components: {
    Button,
    SelectedPlane,
    Divider,
    MissionEvaluation
  },
  props: {
    currentTIC: Object,
  },
  mounted() {
    this.timer = setInterval(() => {
      this.timeElapsed++;
    }, 1000);
  },
  methods: {
    setCurrentTIC() {
      this.$store.commit("setActiveTIC", {
        startDate: this.currentTIC.startDate,
      });
    },
    confirmLaunch() {
      {
        this.$confirm.require({
          message: "Are you sure you want to proceed? This decision is final.",
          header: "Confirmation",
          icon: "pi pi-exclamation-triangle",
          accept: () => {
            this.planeLaunched=true
            this.risk=evaluateRisk(this.currentTIC.plane, this.currentTIC);
            //callback to execute when user confirms the action
          },
          reject: () => {
            //callback to execute when user rejects the action
          },
        });
      }
    },
  },

  computed: {
    currentRisk(){
      if(this.currentPlane){
        console.log(evaluateRisk(this.currentTIC.plane, this.currentTIC))
        return evaluateRisk(this.currentTIC.plane, this.currentTIC);
      }
      else return null
    },
    currentPlane() {
      if (this.currentTIC) {
        return this.currentTIC.plane;
      } else return null;
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
.text {
  text-align: left;
}
.title {
  text-transform: capitalize;
  background-color: darkblue;
  color: white;
}

.ticReq {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: lightblue;
}
</style>