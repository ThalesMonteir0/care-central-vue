<script setup>
import {ref,reactive} from "vue";
const isDrawerOpen = ref(true)

const state = reactive({
  items:[
    { text: 'Home', icon: 'mdi-home', path:'/' },
    { text: 'Pacientes', icon: 'mdi-account', path: 'pacientes' },
    { text: 'Sessões', icon: 'mdi-account-group', path: 'sessoes' },
    { text: 'Agenda semanal', icon: 'mdi-calendar-cursor', path: '' },
  ],
})

</script>

<template>
  <v-navigation-drawer theme="dark" v-model="isDrawerOpen">
    <v-list nav>
      <v-list-subheader>Menu</v-list-subheader>
      <router-link :to="item.path"  v-for="(item, i) in state.items" class="no-link-style">
        <v-list-item
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
      </router-link>
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
.no-link-style {
  text-decoration: none;
  color: inherit;
}

</style>