<template>
  <div class="border-black flex flex-wrap justify-around	">
    <div v-for="driver in drivers" :key="driver.id" class="w-60 bg-teal-600	text-white border-red-700	border-4" >
      <p class="font-medium text-lg ">Name: {{driver.givenName}} {{ driver.familyName }}</p>
      <p class="font-thin">Nationality: {{ driver.nationality }}</p>
      <p>Born: {{ driver.dateOfBirth }}</p>
    </div>
   {{ test }}

  </div>
</template>

<script>
  export default {
    name: 'DriverCard',
    props: {
      test: String,
      drivers: {
        type: Array
      }
    }
  }
</script>
