<template>
  <div class="home">
    <Button @click="startMission">Start round</Button>
    <PlaneTable :currentCols="cols"  />
    <div v-for="(tic,index) in $store.state.currentTIC" v-bind:key="index">
    <TICSituation class="p-mb-2 p-mt-2" :currentTIC="tic" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {createAircraftCols,createWorldState} from '@/dummyData/missionGenerator.js'
import {createTIC} from '@/dummyData/TICGenerator.js'
import PlaneTable from '@/components/PlaneTable'
import TICSituation from '@/components/TICSituation'
import { DateTime } from "luxon";
import Button from 'primevue/button'
export default {
  name: 'Home',
  data(){
    return {
      planes:[],
      currentTIC:{},
      startTime:Object,
      }

  },
  components: {
    PlaneTable,Button,TICSituation
  },
  methods:{
    startMission(){

    this.planes= createWorldState(5)
    this.$store.commit('setCurrentPlanes',{currentPlanes:createWorldState(5)})
    this.$store.commit('addNewTIC',{currentTIC:createTIC()})
    this.cols=createAircraftCols()
    //this.currentTIC=createTIC()
    this.startTime=DateTime.now()
    }
  }


}
</script>
