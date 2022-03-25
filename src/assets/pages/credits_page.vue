<template>
  <body>
    <div id="container-pg2" class="container">
      <router-link to="/index">
        <button type="button" class="btn-continue"></button>
      </router-link>
      <router-link to="/home">
        <button type="button" class="btn-return"></button>
      </router-link>
    </div>
  </body>
</template>

<script>
export default {
  name: "Credits_app",
};
</script>

<style scoped>
#container-pg2 {
  height: 100vh;
  background-image: url("../../assets/img/bg_pages/02_Tomo 1 - JPEG.png");
  background-color: #1a428a;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

</style>