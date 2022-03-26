<template>
  <body>
    <div id="container-pg3" class="container">
      <router-link to="/lesson1">
        <button type="button" class="btn-continue"></button>
      </router-link>
      <router-link to="/credits">
        <button type="button" class="btn-return"></button>
      </router-link>
    </div>
  </body>
</template>

<script>
export default {
  name: "Index_app",
};
</script>

<style scoped>
#container-pg3 {
  height: 100vh;
  background-image: url("../../assets/img/bg_pages/03_Tomo 1 - JPEG4.png");
  /*background-color: #1a428a;*/
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}
</style>