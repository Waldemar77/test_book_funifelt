<template>
  <body>
    <div id="container-pg12" class="container">
      <!--
      <router-link to="/lesson1_6">
        <button type="button" class="btn-continue"></button>
      </router-link>-->
      <router-link to="/lesson1_6">
        <button type="button" class="btn-return"></button>
      </router-link>
      <router-link to="/lesson1_g3">
        <button type="button" class="btn-playG"></button>
      </router-link>
      <div class="play-text-box">
        <h1 class="play-text">¡A GIRAR!</h1>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Lesson1_7_app",
};
</script>

<style scoped>
#container-pg12 {
  height: 100vh;
  background-image: url("../../assets/img/bg_pages/11_Tomo 1 - JPEG.png");
  /*background-color: #1a428a;*/
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

.container .btn-playG {
  position: fixed;
  top: 65%;
  left: 37%;
}

.container .play-text-box {
  top: 30%;
  left: 31%;
}
</style>