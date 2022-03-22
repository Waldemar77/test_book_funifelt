<template>
  <body>
    <div id="container-pg2">
      <router-link to="/index">
        <button type="button" id="btn-continue" class="btn btn-purple">NEXT</button>
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
  background-image: url("../../assets/img/bg_pages/02_Tomo 1 - JPEG2.png");
  background-color: #6fcfeb;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

#container-pg2 #btn-continue {
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