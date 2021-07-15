<template>
  <Menu 
    @changeusername="changeUsername" 
    @changebedtime="changeBedtime"
    :username="username" 
    :bedtime="bedtime"
  />
  <div class="pageContainer">
    <div class="tile nameTile"><h1>Hello {{username}}</h1></div>
    <Today :time="time" />
    <Month :time="time" />
    <Year :time="time" />
    <Bedtime :time="time" :bedtime="bedtime" />
  </div>
</template>

<script>
import Menu from './Menu.vue'
import Today from './Today.vue'
import Month from './Month.vue'
import Year from './Year.vue'
import Bedtime from './Bedtime.vue'

import { dbSave, dbLoad } from '../db.js';

export default {
  name: 'Container',
  components: {
    Menu,
    Today,
    Month,
    Year,
    Bedtime
  },
  data: () => {
    return {
      username: 'Cesar',
      bedtime: '22:00:00',
      time: new Date()
    }
  },
  mounted() {
    this.username = this.dbLoad("username") ? this.dbLoad("username") : "User";
    this.bedtime = this.dbLoad("bedtime") ? this.dbLoad("bedtime") : "22:00:00";
    setInterval(() => {
      this.time = new Date();
    }, 1000)
  },
  methods: {
    changeUsername: function(user){
      this.username = user;
    },
    changeBedtime: function(time){
      this.bedtime = time;
    },
    dbSave,
    dbLoad
  }
}
</script>

<style scoped>
  
  .pageContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-column: span 12;
    gap: .5em;
    padding: 10px;
  }

  @media (min-width: 576px) {
    .pageContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(5, 1fr);
      grid-column: span 12;
      gap: .5em;
      padding: 10px;
    }
  }

  @media (min-width: 768px) {
    .pageContainer {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: repeat(3, 1fr);
      grid-column: 2 / span 10;
      gap: .5em;
      padding: 10px;
    }
  }

  @media (min-width: 992px) {
    .pageContainer {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: repeat(3, 1fr);
      grid-column: 3 / span 8;
      gap: .5em;
      padding: 10px;
    }
  }

  /* @media (min-width: 1200px) { 

  } */

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

  .nameTile {
    grid-column: span 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>