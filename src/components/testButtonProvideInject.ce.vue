<template>
  <div>
    <div style="height: 42px; margin-bottom: 16px; background: palevioletred;">
      <button @click="store.addOne">
        Click me {{ store.getCount }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { provide } from 'vue'

import { useTestStore } from '../stores/testStoreUniqueId.js'
import { v4 } from 'uuid'

const id = v4()
const store = useTestStore(id)
provide('store', store)
</script>
