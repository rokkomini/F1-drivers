import { defineStore } from "pinia";
import axios from "axios";

const URL = 'http://ergast.com/api/f1/2023/drivers.json'

export const useDriversStore = defineStore({
  id: 'drivers',

  state: () => ({
    drivers: [],
    loadingDrivers: false,
    driverError: null
  }),

  actions: {
    async getDrivers() {
      this.drivers = []
      this.loadingDrivers = true
      console.log('drivers store 1', this.drivers)
      console.log(URL)
      try {
        this.drivers = await axios.get(URL).then(response => response.data.MRData.DriverTable.Drivers)
        console.log('drivers', this.drivers)
        const response = await axios
          .get(URL)   
          .then(res => res)
        console.log(response.data.MRData.DriverTable.Drivers)
        
      } catch (error) {
        this.driverError = error
      } finally {
        this.loadingDrivers = false
      }

    }
  }
})