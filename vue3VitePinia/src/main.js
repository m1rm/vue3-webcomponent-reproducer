import { createApp } from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import { defineCustomElement } from 'vue'
import TestButton from 'components/testButton.vue'

const piniata = createPinia()
const app = createApp(App).use(piniata).mount("#app");

const TestButtonElement = defineCustomElement(TestButton)

customElements.define('test-button', TestButtonElement)
