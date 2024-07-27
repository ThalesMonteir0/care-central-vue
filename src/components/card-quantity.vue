<template>
  <VCard class="d-flex justify-center align-center card">
    <div class="text-center">
      <span class="title-card">{{props.quantity}}</span> <br>
      <span class="sub-title-card">{{props.description}}</span>
    </div>
  </VCard>
</template>

<script setup>
const props = defineProps({
  quantity: String|Number,
  description: String
})

</script>

<style scoped>
.card {
  width: 352px;
  height: 128px
}
.title-card {
  font-family: Roboto;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
}

.sub-title-card {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
}

</style>