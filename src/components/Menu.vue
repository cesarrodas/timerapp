<template>
  <div id="iconContainer">
    <div @click="click" id="menuIcon">
      <span></span>
      <span id="middleBar"></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data: () => {
    return {
      showMenu: false,
    }
  },
  methods: {
    click: function (){
      this.showMenu = !this.showMenu;
      let button = document.getElementById("menuIcon");
      if(this.showMenu){
        button.classList = "cancel";
      } else {
        button.classList = "";
      }
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
    /* margin: 4px; */
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

  .cancel {
    color: red;
  }
  .cancel span:first-child {
    transform: translateY(10px) rotate(45deg);
    width: 35px;
    /* top: 15px; */
  }
  .cancel span:nth-child(2) {
    /* visibility: hidden; */
    opacity: 0;
  }
  .cancel span:last-child {
    transform: translateY(-10px) rotate(-45deg);
    /* top: 5px; */
    width: 35px;
  }
</style>