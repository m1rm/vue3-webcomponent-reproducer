import { createApp, defineCustomElement } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'

import TestButton from './components/testButton.ce.vue'
import SeparateStoresTestButton from './components/separateStoresTestButton.ce.vue'

const TestButtonElement = defineCustomElement(TestButton)
customElements.define('test-button', TestButtonElement)

const separateStoresTestButtonElement = defineCustomElement(SeparateStoresTestButton)
customElements.define('test-unique', separateStoresTestButtonElement)

const piniata = createPinia()
createApp(App).use(piniata).mount('#app')
