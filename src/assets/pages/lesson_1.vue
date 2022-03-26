<template>
  <body>
    <div id="container-pg4" class= "container">
      <router-link to="/lesson1_1">
        <button type="button" class="btn-continue"></button>
      </router-link>
      <router-link to="/index">
        <button type="button" class="btn-return"></button>
      </router-link>
    </div>
  </body>
</template>

<script>
export default {
  name: "Lesson1_app",
};
</script>

<style scoped>
#container-pg4 {
  height: 100vh;
  background-image: url("../../assets/img/bg_pages/04_Tomo 1 - JPEG4.png");
  /*background-color: #1a428a;*/
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

</style>