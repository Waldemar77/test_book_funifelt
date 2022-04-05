<template>
  <body>
    <div id="container-pg11" class="container">
      <!--
      <router-link to="/lesson1_6">
        <button type="button" class="btn-continue"></button>
      </router-link>-->
      <router-link to="/lesson1_5">
        <button type="button" class="btn-return"></button>
      </router-link>
      <router-link to="/lesson1_g2">
        <button type="button" class="btn-playG"></button>
      </router-link>
      <div class="play-text-box">
          <h1 class="play-text">¡A DIBUJAR!</h1>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Lesson1_6_app",
};
</script>

<style scoped>
#container-pg11 {
  height: 100vh;
  background-image: url("../../assets/img/bg_pages/10_Tomo 1 - JPEG.png");
  /*background-color: #1a428a;*/
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

.container .btn-playG {
    position: fixed;
    top: 65%;
    left: 60%;
}

.container .play-text-box{
    top: 30%;
    left: 52%;
}

</style>