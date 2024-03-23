<template>
  <div>
    <div style="height: 100px; margin-bottom: 16px; background: red;">
      <button @click="store.addOne">
        Click me {{ store.getCount }}
      </button>
    </div>
  </div>
</template>

<script setup>
import testStore from '../store/testStore.js'
const store = testStore()
</script>
