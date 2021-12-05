<template>
  <div class="p-d-inline-flex p-jc-center p-grid p-text-left">
    <div class="p-col-5">
      <Card class="p-shadow-4">
        <template #title>About CASPOA Experiment</template>
        <template #content>
          This software has been conceived in the framework of the
          <b>ORCHESTRAA project</b> for the training of air force officer in stress situation.
          This software has been conceived at the Heudiasyc laboratory under the direction of Domitile Lourdeaux. The main contributor for this software is Pierre-Yves Gicquel.
          <br />
          <br />This is a research software and should not be used in an educationnal goal.
        </template>
        <template #footer>The code for this software is accessible at :</template>
      </Card>
    </div>
  </div>
</template>
<script>
import Card from "primevue/card";
export default {
  components: {
    Card,
  },
};
</script>