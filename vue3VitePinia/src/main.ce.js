import { defineCustomElement } from 'vue'
import TestButton from "./components/testButton.ce.vue";

const TestButtonElement = defineCustomElement(TestButton)
customElements.define('test-button', TestButtonElement)
