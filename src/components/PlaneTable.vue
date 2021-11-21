<template>

<DataTable showGridlines v-model:selection="selectedPlane" selectionMode="single" data-key="nickName" :value="currentPlanes">
    <Column v-for="col of currentCols" :field="col.field" :header="col.label" :key="col.field"></Column>
</DataTable>

</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default {
  name:'PlaneTable',
  data:function(){
      return {
          selectedPlane:null
      }
  },
  components: {
    DataTable,
    Column,
  },
  watch:{
    selectedPlane:function(){
      this.$store.commit("setSelectedPlane",{selectedPlane:this.selectedPlane})
    }
  }
  ,
  props:{
      currentCols:Array,
  },
  computed:{
    currentPlanes(){
      return this.$store.state.currentPlanes
    }
  }

};
</script>

<style>
</style>