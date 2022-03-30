<template>
  <body>
    <div id="container-pg9" class="container">
      <!--
      <router-link to="/lesson1_6">
        <button type="button" class="btn-continue"></button>
      </router-link>-->
      <router-link to="/lesson1_4">
        <button type="button" class="btn-return"></button>
      </router-link>
      <router-link to="/lesson1_6">
        <button type="button" id="btn-game">¡A JUGAR!</button>
      </router-link>
    </div>
  </body>
</template>

<script>
export default {
  name: "Lesson1_5_app",
};
</script>

<style scoped>
#container-pg9 {
  height: 100vh;
  background-image: url("../../assets/img/bg_pages/09_Tomo 1 - JPEG.png");
  /*background-color: #1a428a;*/
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

.container #btn-game {
    width: 180px;
    height: 180px;
    float: right;
    /*background-image: url("../../assets/img/common/next_arrow.png");*/
    padding: 0px;
    border-radius: 20%;
    background-size: cover;
    border: #90ff34;
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}
</style>