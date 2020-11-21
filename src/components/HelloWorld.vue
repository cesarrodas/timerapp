<template>
  <Menu 
    @changeusername="changeUsername" 
    @changebedtime="changeBedtime"
    :username="username" 
    :bedtime="bedtime" 
  />
  <div class="pageContainer">
    <div class="tile"><h1>Hello {{username}}</h1></div>
    <div class="tile"><h2>Today is {{ today() }}</h2></div>
    <div class="tile"><h2>{{ daysTillMonthEnd() }} days till the end of the month. </h2></div>
    <div class="tile"><h2>{{ daysTillYearEnd() }} days till the end of the year. </h2></div>
    <Tile 
      msg1="The world is awesome"
      msg2="43 days till"
      msg3="thrid data rules"
    />
    <img class="smallicon" src="https://source.unsplash.com/200x200/?happy" />
    <img class="smallicon" src="https://source.unsplash.com/200x200/?tree" />
  </div>
</template>

<script>
import Tile from './Tile.vue'
import Menu from './Menu.vue'

export default {
  name: 'HelloWorld',
  components: {
    Tile,
    Menu
  },
  data: () => {
    return {
      username: 'Cesar',
      bedtime: '22:00'
    }
  },
  methods: {
    changeUsername: function(user){
      console.log("CHANGE USER PARAM: ", user);
      this.username = user;
    },
    changeBedtime: function(time){
      this.bedtime = time;
    },
    today: function () {
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
      const date = new Date().getDate();
      const month = new Date().getMonth();
      const year = new Date().getFullYear();
      return `${monthNames[month]} ${date} ${year}`;
    },
    daysTillMonthEnd: function() {
      const date = new Date();
      const month = date.getMonth();
      const endMonth = new Date().getMonth() == 11 ? 1 : new Date().getMonth() + 2;
      const endYear = month == 11 ? date.getFullYear() + 1 : date.getFullYear();
      const endDate = new Date(`${endMonth}/1/${endYear}`);
      const diff = Math.abs(endDate - date);
      const days = Math.floor((diff / (60*60*24*1000)) % 365);
      return days;
    },
    daysTillYearEnd: function() {
      const date = new Date();
      const year = date.getFullYear();
      const endDate = new Date(`1/1/${year + 1}`);
      const diff = Math.abs(endDate - date);
      const days = Math.floor((diff / (60*60*24*1000)) % 365);
      return days;
    }
  }
}
</script>

<style scoped>
  .pageContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(12, 1fr);
    grid-column: 3 / span 8;
    gap: .5em;
    padding: 10px;
  }
  h1 {
    font-size: 60px;
  }
  .smallicon {
    box-shadow: 0 0 5px #333;
  }

  .tile {
    background-color: dodgerblue;
    width: 100%;
    height: 100%;
  }
</style>