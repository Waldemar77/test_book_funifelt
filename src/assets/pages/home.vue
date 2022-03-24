<template>
  <body>
    <div id="container">
      <!--// eslint-disable-next-line-->
      <router-link to="/credits">
        <button type="button" id="btn-start"></button>
      </router-link>
    </div>
  </body>
</template>

<script>
export default {
  name: "Home_app",

  data() {
    return {
      front_book: require("@/assets/img/bg_pages/01_Tomo 1 - JPEG2.png"),
    };
  },
};
</script>

<style scoped>
#container {
  height: 100vh;
  background-image: url("../../assets/img/bg_pages/01_Tomo 1 - JPEG2.png");
  background-size: contain;
  background-color: #1a428a;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

#container img {
  width: 100%;
  height: auto;
}

#container #btn-start {
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

#book-front {
  width: 100%;
  height: 100%;
}
</style>