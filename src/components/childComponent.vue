<template>
  <span style="background: darkgoldenrod;">
    {{ store.getCount }}
  </span>
</template>

<script setup>
import { inject } from 'vue'
const store = inject('store')
</script>