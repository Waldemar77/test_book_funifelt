<template>
  <body>
    <div id="container">
      <!--// eslint-disable-next-line-->
      <!--
      <div id="book-front">
        <img :src="front_book" alt="front-book" />
      </div>
      -->
      <router-link to="/credits">
        <button type="button" id="btn-start" class="btn btn-purple">GO</button>
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
  background-color: #6fcfeb;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

#container img {
  width: 100%;
  height: auto;
}

#container #btn-start {
  float: right;
  padding: 15px;
  border-radius: 50%;
  border: 7px solid #6fcfeb;
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

#book-front {
  width: 100%;
  height: 100%;
}
</style>