<template>
  <body>
    <div id="container-pg9" class="container">
      <router-link to="/lesson1_7">
        <button type="button" class="btn-continue"></button>
      </router-link>
      <router-link to="/lesson1_5">
        <button type="button" class="btn-return"></button>
      </router-link>
    </div>
    <div id="frame-container">
        <iframe
        id="frame-puzzle"
        frameBorder="0"
        src="https://im-a-puzzle.com/share/cd2ab8be63c7094.png?embed=true&showAds=false&showNav=false&showSolve=false"
      ></iframe>
    </div>
  </body>
</template>

<script>
export default {
  name: "Lesson1_6_app",
};
</script>

<style scoped>
#container-pg9 {
  height: 100vh;
  /*background-image: url("../../assets/img/bg_pages/09_Tomo 1 - JPEG.png");*/
  /*background-color: #1a428a;*/
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

#frame-puzzle {
    border: 0;
    top: 0%;
    width: 85%;
    height: 100%;
}

#frame-container {
    position: fixed;
    top: 0%;
    left: 15%;
    right: 10%;
    align-content: center;
    width: 80%;
    height: 100%;
}
</style>