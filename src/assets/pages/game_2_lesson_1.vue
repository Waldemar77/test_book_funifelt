<template>
  <body>
    <div id="container-pg12" class="container">
      <router-link to="/lesson1_7">
        <button type="button" class="btn-continue"></button>
      </router-link>
      <router-link to="/lesson1_6">
        <button type="button" class="btn-return"></button>
      </router-link>
    </div>
    <!--
    <div id="frame-container">
      <iframe
        id="frame-puzzle"
        frameBorder="0"
        src="https://im-a-puzzle.com/share/cd2ab8be63c7094.png?embed=true&showAds=false&showNav=false&showSolve=false"
      ></iframe>
    </div>
    <div id="puzzle-credits">
      <p>
        Desarrollado por <a href="https://im-a-puzzle.com/" target="_blank">"Im a puzzle".</a>     
      </p>
    </div>
    -->
  </body>
</template>

<script>
export default {
  name: "Lesson1_g2_app",
};
</script>

<style scoped>
#container-pg12 {
  height: 100vh;
  /*background-image: url("../../assets/img/bg_pages/09_Tomo 1 - JPEG.png");*/
  /*background-color: #1a428a;*/
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

/*
#frame-puzzle {
  border: 0;
  top: 0%;
  width: 100%;
  height: 100%;
}

#frame-container {
  position: fixed;
  top: 0%;
  left: 13%;
  right: 10%;
  align-content: center;
  width: 72%;
  height: 100%;
}

#puzzle-credits {
    top: 85%;
    left: 87%;
    position: fixed;
    width: 10%;
    height: 20%;
    text-align: center;
    font-size: 15px;
    padding-bottom: 5px;
}*/
</style>