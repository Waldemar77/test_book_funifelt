<template>
  <body>
    <div id="container-pg7" class="container">
      <router-link to="/lesson1_4">
        <button type="button" class="btn-continue"></button>
      </router-link>
      <router-link to="/lesson1_2">
        <button type="button" class="btn-return"></button>
      </router-link>
    </div>
  </body>
</template>

<script>
export default {
  name: "Lesson1_3_app",
};
</script>

<style scoped>
#container-pg7 {
  height: 100vh;
  background-image: url("../../assets/img/bg_pages/07_Tomo 1 - JPEG.png");
  /*background-color: #1a428a;*/
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

</style>