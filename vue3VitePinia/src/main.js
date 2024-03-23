import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import { defineCustomElement } from 'vue'

const piniata = createPinia()
const app = createApp(App).use(piniata)

const TestButtonElement = defineCustomElement(app)
customElements.define('test-button', TestButtonElement)
