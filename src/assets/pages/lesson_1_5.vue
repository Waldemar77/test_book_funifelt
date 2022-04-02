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
      <router-link to="/lesson1_g1">
        <button type="button" class="btn-playG"></button>
      </router-link>
      <div class="play-text-box">
          <h1 class="play-text">¡A JUGAR!</h1>
      </div>
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
</style>