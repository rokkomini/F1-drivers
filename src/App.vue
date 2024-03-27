<script setup>
import {storeToRefs} from 'pinia'
import { useDriversStore } from './stores/getDrivers';
import DriverCard from './components/DriverCard.vue';

const { drivers } = storeToRefs(useDriversStore())
const { getDrivers } = useDriversStore()

getDrivers()
</script>

<template>
  <h1>F! Drivers!!</h1>
<div class="border-black flex-auto">
  <DriverCard test="whats up" :drivers="drivers"/>
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
