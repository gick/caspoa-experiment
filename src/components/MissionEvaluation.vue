<template>
  <Button type="button" label="Risk assessment" class="p-button-warning"  @click="toggle" />

  <OverlayPanel ref="op" :showCloseIcon="true" :dismissable="true">
    <div class="p-d-flex p-flex-column p-jc-l text">
      <div class="p-m-2">{{risk.fuelRisk.nl}}</div>
      <div class="p-m-2">{{risk.manpadRisk.nl}}</div>
      <div class="p-m-2">{{risk.soldierRisk.nl}}</div>
    </div>
  </OverlayPanel>
</template>

<script>
import OverlayPanel from "primevue/overlaypanel";
import Button from "primevue/button";
export default {
  name:'MissionEvaluation',
  components:{
      OverlayPanel,
      Button
  },
  props: {
    risk: Object,
  },
  methods: {
    toggle() {
      this.$refs.op.toggle(event);
    },
  },
};
</script>

<style>
</style>