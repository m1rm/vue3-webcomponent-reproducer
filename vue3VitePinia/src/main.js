import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from "./App.vue";

const piniata = createPinia()
createApp(App).use(piniata).mount('#app')
