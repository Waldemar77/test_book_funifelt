<template>
  <body>
    <div class="container">
      <!--// eslint-disable-next-line-->
      <router-link to="/credits">
        <button type="button" class="btn-continue"></button>
      </router-link>
    </div>
  </body>
</template>

<script>
export default {
  name: "Home_app"
};
</script>

<style scoped>
.container {
  background-image: url("../../assets/img/bg_pages/01_Tomo 1 - JPEG.png");
  height: 100vh;
  background-size: contain;
  /*background-color: #1a428a;*/
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

.container img {
  width: 100%;
  height: auto;
}
</style>