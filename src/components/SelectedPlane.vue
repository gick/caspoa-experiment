<template>
  <div v-for="(col,index) in currentCols" v-bind:key="index" class="p-grid">
	<div class="p-col"><b>{{col.label}}:</b>{{selectedPlane[col.field]}}</div>
</div>

</template>

<script>
export default {
    name:'SelectedPlane',
    props:{
        selectedPlane:Object
    },
    computed:{
        currentCols(){
            return this.$store.state.currentCols
        }
    }

}
</script>

<style>

</style>