<template>
  <Tile :msg1="today()" :msg2="dayOfYear()" :msg3="endOfDay()" />
  <ImgTile  img="https://source.unsplash.com/200x200/?season" />
</template>

<script>
import Tile from './Tile.vue'
import ImgTile from './ImgTile.vue'

export default {
  name: 'today',
  data: () => {
    return { 
      day: 'Hello'
    }
  },
  components: {
    Tile,
    ImgTile
  },
  props: {
    time: Object
  },
  methods: {
    today: function () {
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
      const date = this.time.getDate();
      const month = this.time.getMonth();
      const year = this.time.getFullYear();
      return `${monthNames[month]} ${date} ${year}`;
    },
    dayOfYear: function() {
      const year = this.time.getFullYear();
      const dayOne = new Date(`1/1/${year}`);
      const time = this.time - dayOne;
      const days = Math.floor((time / (60*60*24*1000)) % 365);
      return `Day ${days} of the year`;
    },
    endOfDay: function() {
      const today = this.time;
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(0, 0, 0, 0);
      const timeTill = tomorrow - this.time;

      let seconds = Math.floor((timeTill / 1000) % 60);
      seconds = seconds < 10 ? '0' + seconds : seconds;
      let minutes = Math.floor((timeTill / (1000 * 60)) % 60);
      minutes = minutes < 10 ? '0' + minutes : minutes;
      const hours = Math.floor((timeTill / (1000 * 60 * 60)) % 24);
      return `End of day in ${hours}:${minutes}:${seconds}`;
    }
  }
}
</script>>

<style scoped>

</style>