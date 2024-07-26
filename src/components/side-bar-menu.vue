<script setup>
import {ref,reactive} from "vue";
const isDrawerOpen = ref(false)

const state = reactive({
  items:[
    { text: 'Home', icon: 'mdi-home' },
    { text: 'Pacientes', icon: 'mdi-account' },
    { text: 'Sessões', icon: 'mdi-account-group' },
    { text: 'Agenda semanal', icon: 'mdi-calendar-cursor' },
  ],
})

</script>

<template>
  <v-navigation-drawer theme="dark" v-model="isDrawerOpen">
    <v-list nav>
      <v-list-subheader>Menu</v-list-subheader>
      <v-list-item
          v-for="(item, i) in state.items"
          :key="i"
          :value="item"
          color="white"
          rounded="xl"
      >
        <template #prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>

  <v-app-bar flat class="border-b">
    <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
    <v-app-bar-title>Care-Central</v-app-bar-title>

    <template #append>
      <v-avatar>
        <v-img
            cover
            alt="John"
            src="https://photos.peopleimages.com/picture/202308/2763847-portrait-serious-and-a-man-psychologist-in-a-chair-on-a-white-background-in-studio-to-listen-for-diagnosis.-psychology-mental-health-and-concern-with-a-person-counseling-during-a-therapy-session-fit_400_400.jpg"
        ></v-img>
      </v-avatar>
    </template>
  </v-app-bar>

</template>

<style scoped>

</style>