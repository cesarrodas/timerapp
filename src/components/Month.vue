<template>
  <ImgTile class="img1" :img="getImgUrl()" />
  <Tile :msg1="daysTillMonthEnd()" :msg2="weeksTillMonthEnd()" />
  <ImgTile class="img2" :img="getImgUrl()" />
</template>

<script>
import Tile from './Tile.vue'
import ImgTile from './ImgTile.vue'

export default {
  name: 'MonthTile',
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
    daysTillMonthEnd: function() {
      const date = this.time;
      const month = this.time.getMonth();
      const endMonth = this.time.getMonth() == 11 ? 1 : this.time.getMonth() + 2;
      const endYear = month == 11 ? date.getFullYear() + 1 : date.getFullYear();
      const endDate = new Date(`${endMonth}/1/${endYear}`);
      const diff = Math.abs(endDate - date);
      const days = Math.floor((diff / (60*60*24*1000)) % 365);
      this.days = days;
      return `${days} days until month end`;
    },
    weeksTillMonthEnd: function () {
      const days = this.days;
      const weeks = (days/7).toFixed(2);
      if (weeks > 1){
        return `${weeks} weeks until month end`;
      }
      return `${weeks} week until month end`;
    },
    getImgUrl: function(){
      const month = this.time.getMonth();
      return `https://source.unsplash.com/200x200/?${month}`;
    }
  }
}
</script>>

<style scoped>

  .img1 {
    display: block;
  }

  .img2 {
    display: none;
  }

  @media (min-width: 576px) {
    .img1 {
      display: block;
    }

    .img2 {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .img1 {
      display: none;
    }

    .img2 {
      display: block;
    }
  }

  @media (min-width: 992px) {
    .img1 {
      display: none;
    }

    .img2 {
      display: block;
    }
  }
</style>