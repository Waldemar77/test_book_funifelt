<template>
  <body>
    <div id="container-pg2">
      <router-link to="/index">
        <button type="button" id="btn-continue"></button>
      </router-link>
      <router-link to="/home">
        <button type="button" id="btn-return"></button>
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
  background-color: #1a428a;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

#container-pg2 #btn-continue {
  width: 80px;
  height: 80px;
  float: right;
  background-image: url("../../assets/img/bg_pages/next_row.png");
  padding: 5px;
  border-radius: 50%;
  background-color: #1a428a;
  background-size: cover;
  border: #1a428a;
  position: absolute;
  top: 50%;
  left: 93%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

#container-pg2 #btn-return {
  width: 80px;
  height: 80px;
  float: right;
  background-image: url("../../assets/img/bg_pages/back_row.png");
  padding: 5px;
  border-radius: 50%;
  background-color: #1a428a;
  background-size: cover;
  border: #1a428a;
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>