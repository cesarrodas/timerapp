<template>
  <div class="imgTile">
    <img :src="img" />
  </div>
</template>

<script>
export default {
  name: "ImgTile",
  props: {
    img: String
  }
}
</script>

<style scoped>
  .imgTile {
    background: dodgerblue;
    width: 100%;
    height: 100%;
  }

  .imgTile img {
    width: 100%;
    height: 100%;
  }
</style>