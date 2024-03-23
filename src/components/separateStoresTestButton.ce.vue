<template>
  <div>
    <div style="height: 42px; margin-bottom: 16px; background: cadetblue;">
      <button @click="store.addOne">
        Click me {{ store.getCount }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useTestStore } from '../stores/testStoreUniqueId.js'
import { v4 } from 'uuid'

const id = v4()
const store = useTestStore(id)
</script>
