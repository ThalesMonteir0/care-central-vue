<template>
  <v-menu>
    <template #activator="{ props} ">
      <div v-bind="props" style="cursor: pointer">
        <img src="../assets/three-dots-vertical-svgrepo-com.svg">
      </div>
    </template>
    <v-card>
      <slot>

      </slot>
    </v-card>
  </v-menu>

</template>

<script setup>
const props = defineProps({
  listItens: Array
})
</script>

<style scoped>

</style>