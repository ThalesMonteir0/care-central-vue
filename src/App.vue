<script setup>

import SideBarMenu from "./components/side-bar-menu.vue";
</script>

<template>
  <v-app style="background-color: #F5F5F9;">
    <side-bar-menu/>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>

</template>

<style scoped>

</style>
