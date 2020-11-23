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
      <input type="text" id="name" v-bind:value="username" @change="changeUsername" maxlength="10" name="fname">
      <label for="bedtime">What time do you go to bed? </label>
      <input type="time" id="bedtime" v-bind:value="bedtime" @change="changeBedtime" name="bedtime"
       min="00:00" max="24:00" required><br/>
       <button id="saveButton" class="save" @click="saveInfo">Save</button>
    </form>
  </div>
</template>

<script>
import { dbSave, dbLoad } from '../db';

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
  mounted() {
    let user = this.loadData("username");
    this.$emit('changeusername', user);
    let bedtime = this.loadData("bedtime");
    this.$emit('changebedtime', bedtime);
  },
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
    saveInfo: function(e){
      e.preventDefault();
      let name = document.getElementById("name").value;
      let bedtime = document.getElementById("bedtime").value;
      this.saveData("username", name);
      this.saveData("bedtime", bedtime);
      let saveButton = document.getElementById("saveButton");
      saveButton.innerText = "Saved!";
    },
    loadData: function(name){
      return dbLoad(name);
    },
    saveData: function(name, value){
      dbSave(name, value);
    },
    changeUsername: function (e) {
      let saveButton = document.getElementById("saveButton");
      saveButton.innerText = "Save";
      this.$emit('changeusername', e.target.value)
    },
    changeBedtime: function(e){
      let saveButton = document.getElementById("saveButton");
      saveButton.innerText = "Save";
      this.$emit('changebedtime', e.target.value)
    }
  }
}
</script>

<style scoped>
  #iconContainer {
    position: fixed;
    left: 14px;
    top: 14px;
    width: 40px;
    z-index: 10;
  }

  #saveButton {
    background: hsl(209.46,	99.12%, 55.69%);
    color: white;
    font-weight: bold;
    padding: 10px;
    float: right;
    cursor: pointer;
    border: none;
  }

  #saveButton:hover {
    background: hsl(209.46,	99.12%, 45.69%);
  }

  #saveButton:focus {
    outline: none;
  }

  #saveButton:after {
    content: "";
    clear: both;
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
    background-color: hsl(0, 0%, 82%);
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
    color: #2c3e50;
  }

  input {
    font-size: 18px;
    margin-bottom: 10px;
    margin-top: 6px;
    border: none;
    border-bottom: black solid 2px;
    width: 120px;
    background-color: hsl(0, 0%, 82%);
  }

  input:focus {
    border: none;
    border-bottom: dodgerblue solid 2px;
    outline: none;
  }
</style>