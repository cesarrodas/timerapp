<template>
  <Tile :msg1="endOfDay()" :msg2="endOfDayMinutes()" />
</template>

<script>
import Tile from './Tile.vue'

export default {
  name: 'BedtimeTile',
  data: () => {
    return { 
      days: 0
    }
  },
  components: {
    Tile
  },
  props: {
    time: Object,
    bedtime: String
  },
  methods: {
    endOfDay: function() {
      const bedtime = new Date(this.time.toDateString() + ' ' + this.bedtime );
      const timeTill = bedtime - this.time;

      let seconds = Math.floor((timeTill / 1000) % 60);
      if(Number(seconds) < 0){
        return `Go to Bed!`
      }
      seconds = seconds < 10 ? '0' + seconds : seconds;
      let minutes = Math.floor((timeTill / (1000 * 60)) % 60);
      minutes = minutes < 10 ? '0' + minutes : minutes;
      const hours = Math.floor((timeTill / (1000 * 60 * 60)) % 24);

      return `Bedtime in ${hours}:${minutes}:${seconds}`;
    },
    endOfDayMinutes: function() {
      const bedtime = new Date(this.time.toDateString() + ' ' + this.bedtime );
      const timeTill = bedtime - this.time;

      let seconds = Math.floor((timeTill / 1000) % 60);
      if(Number(seconds) < 0){
        return `Past Bedtime!`
      }
      seconds = seconds < 10 ? '0' + seconds : seconds;
      let minutes = Math.floor((timeTill / (1000 * 60)));

      return `Bedtime in ${minutes} minutes with ${seconds} seconds`;
    }
  }
}
</script>>

<style scoped>

</style>