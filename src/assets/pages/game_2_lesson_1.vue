<template>
  <body>
    <div id="container-pg12" class="container">
      <router-link to="/lesson1_7">
        <button type="button" class="btn-continue"></button>
      </router-link>
      <router-link to="/lesson1_6">
        <button type="button" class="btn-return"></button>
      </router-link>
    </div>
 
  </body>
</template>

<script>
export default {
  name: "Lesson1_g2_app",
};
</script>

<style scoped>
#container-pg12 {
  height: 100vh;
  /*background-image: url("../../assets/img/bg_pages/09_Tomo 1 - JPEG.png");*/
  /*background-color: #1a428a;*/
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}
</style>