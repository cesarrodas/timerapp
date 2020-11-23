<template>
  <div class="flip-box">
    <div class="flip-box-inner">
      <div @click="flip" class="flip-box-front">
        <h2>{{msg1}}</h2>
      </div>
      <div @click="flip" class="flip-box-back">
        <h2>{{msg2}}</h2>
      </div>
      <div v-if="msg3" @click="flip" class="flip-box-back third">
        <h2>{{msg3}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tile',
    data: () => {
      return {
        flipped: false,
        third: false
      }
    },
    props: {
      msg1: String,
      msg2: String,
      msg3: String
    },
    methods: {
      flip: function () {
        let inner = this.$el.children[0];
        if(this.flipped){
          inner.classList = "flip-box-inner";
          this.flipped = false; 
        } else {
          if(this.$props.msg3){
            let thirdTile = this.$el.children[0].children[2];
            if(this.third){
              thirdTile.style.display = "flex";
              this.third = false;
            } else {
              thirdTile.style.display = "none";
              this.third = true;
            }
          }
          inner.classList = "flip-box-inner flipping";
          this.flipped = true;
        }
      }
    }
  }
</script>

<style scoped>

  .flip-box {
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
  }

  /* This container is needed to position the front and back side */
  .flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flipping {
    transform: rotateX(180deg);
  }

  /* Position the front and back side */
  .flip-box-front, .flip-box-back {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    cursor: pointer;
  }

  /* Style the front side */
  .flip-box-front {
    background-color: dodgerblue;
    color: black;
    padding: 8px;
    box-sizing: border-box;
  }

  /* Style the back side */
  .flip-box-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateX(180deg);
    padding: 8px;
    box-sizing: border-box;
  }

  .hidden {
    display: none;
  }
</style>