import { createApp, defineCustomElement } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import TestButton from './components/testButton.ce.vue'
import TestButton2 from './components/testButton2.ce.vue'
import SeparateStoresTestButton from './components/separateStoresTestButton.ce.vue'

const TestButtonElement = defineCustomElement(TestButton)
customElements.define('test-button', TestButtonElement)

const TestButtonElement2 = defineCustomElement(TestButton2)
customElements.define('test-two', TestButtonElement2)

const separateStoresTestButtonElement = defineCustomElement(SeparateStoresTestButton)
customElements.define('test-unique', separateStoresTestButtonElement)

const piniata = createPinia()
createApp(App).use(piniata).mount('#app')
