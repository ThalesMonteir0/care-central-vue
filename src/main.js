import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { loadFonts } from './plugins/webfontloader';
import router from "./router/index.js";

loadFonts();

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).use(router).mount('#app')
