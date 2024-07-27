<template>
  <span class="title">{{props.title}}</span>
</template>

<script setup>
const props = defineProps({
  title: String
})
</script>

<style scoped>
.title {
  width: 155px;
  height: 32px;
  gap: 0px;
  font-family: Roboto;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;

}

</style>