<template>
  <body>
    <div id="container-pg5">
      <router-link to="/lesson1_2">
        <button type="button" id="btn-continue" class="btn btn-purple">NEXT</button>
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
  background-color: #6fcfeb;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

#container-pg5 #btn-continue {
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