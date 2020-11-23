<template>
  <Tile :msg1="daysTillYearEnd()" :msg2="weeksTillYearEnd()" />
  <ImgTile  :img="getImgUrl()" />
</template>

<script>
import Tile from './Tile.vue'
import ImgTile from './ImgTile.vue'

export default {
  name: 'YearTile',
  data: () => {
    return { 
      days: 0
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
    daysTillYearEnd: function() {
      const date = this.time;
      const year = date.getFullYear();
      const endDate = new Date(`1/1/${year + 1}`);
      const diff = Math.abs(endDate - date);
      const days = Math.floor((diff / (60*60*24*1000)) % 365);
      this.days = days;
      return `${days} days until the end of the year`;
    },
    weeksTillYearEnd: function () {
      const days = this.days;
      const weeks = (days/7).toFixed(2);
      if (weeks > 1){
        return `${weeks} weeks until year end`;
      }
      return `${weeks} week until year end`;
    },
    getImgUrl: function(){
      const year = this.time.getFullYear();
      return `https://source.unsplash.com/200x200/?${year}`;
    }
  }
}
</script>>

<style scoped>

</style>