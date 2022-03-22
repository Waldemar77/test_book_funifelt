<template>
  <body>
    <div id="container-pg4">
      <router-link to="/lesson1_1">
        <button type="button" id="btn-continue" class="btn btn-purple">NEXT</button>
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
  background-color: #6fcfeb;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

#container-pg4 #btn-continue {
  float: right;
  padding: 15px;
  border-radius: 30%;
  border: 7px solid #6fcfeb;
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>