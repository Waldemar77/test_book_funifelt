<template>
  <body>
    <div id="container-pg5" class="container">
      <router-link to="/lesson1_2">
        <button type="button" class="btn-continue"></button>
      </router-link>
      <router-link to="/lesson1">
        <button type="button" class="btn-return"></button>
      </router-link>
    </div>
  </body>
</template>

<script>
export default {
  name: "Lesson1_1_app",
};
</script>

<style scoped>
#container-pg5 {
  height: 100vh;
  background-image: url("../../assets/img/bg_pages/05_Tomo 1 - JPEG.png");
  background-color: #1a428a;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

</style>