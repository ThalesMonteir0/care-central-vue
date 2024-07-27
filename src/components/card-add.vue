<template>
  <VCard class="d-flex justify-center align-center card" theme="dark">
    <div class="text-center">
      <img src="/src/assets/plus-svgrepo-com.svg" height="32" width="32">
      <br>
      <span class="sub-title-card">{{props.description}}</span>
    </div>
  </VCard>
</template>

<script setup>
const props = defineProps({
  description: String
})
</script>

<style scoped>
.card {
  width: 352px;
  height: 128px
}

.sub-title-card {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
}

</style>