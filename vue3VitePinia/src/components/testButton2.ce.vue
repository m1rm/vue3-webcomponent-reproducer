<template>
  <div>
    <div style="height: 42px; margin-bottom: 16px; background: burlywood;">
      <button @click="store.addOne">
        Click me {{ store.getCount }}
      </button>
    </div>
  </div>
</template>

<script setup>
import testStore from '../stores/testStore2.js'
const store = testStore()
</script>
