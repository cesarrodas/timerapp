<template>
  <div id="iconContainer">
    <div @click="click" id="menuIcon">
      <span></span>
      <span id="middleBar"></span>
      <span></span>
    </div>
  </div>
  <div id="menu">
    <form>
      <label for="fname">First name:</label>
      <input type="text" id="fname" v-bind:value="username" @change="changeUsername" name="fname">
      <label for="bedtime">What time do you go to bed? </label>
      <input type="time" id="appt" v-bind:value="bedtime" @change="changeBedtime" name="bedtime"
       min="00:00" max="24:00" required><br/>
      <input type="submit" value="Submit">

    </form>
  </div>
</template>

<script>
import { dbSave, dbLoad } from '../db';

// save();

export default {
  name: 'Menu',
  data: () => {
    return {
      showMenu: false
    }
  },
  props: {
    username: String,
    bedtime: String
  },
  //created() {
    // this.username = this.loadData("username");
    // this.bedtime = this.loadData("bedtime");
  //},
  emits: ['changeusername', 'changebedtime'],
  methods: {
    click: function (){
      this.showMenu = !this.showMenu;
      let button = document.getElementById("menuIcon");
      let menu = document.getElementById("menu");
      if(this.showMenu){
        menu.classList = "show";
        button.classList = "cancel";
      } else {
        button.classList = "";
        menu.classList = "";
      }
    },
    loadData: function(name){
      this[name] = dbLoad(name);
    },
    saveData: function(name, value){
      dbSave(name, value);
    },
    changeUsername: function (e) {
      // console.log("USA NAME: ", );
      this.$emit('changeusername', e.target.value)
    },
    changeBedtime: function(e){
      this.$emit('changebedtime', e.target.value)
    }
  }
}
</script>

<style scoped>
  #iconContainer {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 40px;
    z-index: 10;
  }

  #menuIcon {
    position: relative;
    cursor: pointer;
    height: 40px;
    width: 40px;
  }
  #menuIcon span {
    display: block;
    height: 6px;
    width: 40px;
    background-color: black;
    border-radius: 5px;
    transition: 1s ease-in-out;
  }
  #menuIcon span:first-child {
    position: absolute;
    top: 0px;
  }
  #menuIcon span:nth-child(2) {
    transition: opacity 1s;
    position: absolute;
    top: 10px;
  }
  #menuIcon span:last-child {
    position: absolute;
    top: 20px;
  }

  .cancel span:first-child {
    transform: translateY(10px) rotate(45deg);
    width: 35px;
  }
  .cancel span:nth-child(2) {
    opacity: 0;
  }
  .cancel span:last-child {
    transform: translateY(-10px) rotate(-45deg);
    width: 35px;
  }

  /* Menu Styles */
  #menu {
    background-color: rgb(36, 33, 224);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    left: -100%;
    transition: .5s ease-in-out;
    display: flex;
    justify-content: center;
    color: white;
  }

  .show {
    transform: translateX(100%);
  }

  #menu form {
    text-align: left;
    margin-top: 200px;
    display: block;
  }

  label {
    display: block;
    margin: 0;
  }

  input {
    margin-bottom: 10px;
    margin-top: 6px;
  }
</style>