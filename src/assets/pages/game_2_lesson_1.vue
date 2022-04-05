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
    <center id="main-board">
      <section id="tools">
        Color de Línea:
        <input type="color" v-model="selected" @change="set_color(selected)" />
        Ancho de Línea:
        <input
          type="range"
          max="150"
          min="1"
          step="1"
          v-model="value"
          @change="set_line(value)"
        /><span id="line_width">1</span>
        <input type="button" value="clean" @click="clean_board" />
      </section>
      <canvas id="canvas" width="800" height="500">
        No Funciona correctamente el canvas.
      </canvas>
    </center>
  </body>
</template>

<script >
export default {
  name: "Lesson1_g2_app",
  data() {
    return {
      vueCanvas: null,
      canvasG: null,
      x: 0,
      y: 0,
      ruta: false,
    };
  },

  mounted() {
    var canvas = document.getElementById("canvas");
    var contexto = canvas.getContext("2d");
    this.vueCanvas = contexto;
    this.canvasG = canvas;

    this.vueCanvas.lineWidth = 1;

    canvas.addEventListener("mousemove", this.drawing);

    canvas.addEventListener("mousedown", this.moving);

    canvas.addEventListener("mouseup", this.stoping);
  },

  methods: {
    drawing(evento) {
      this.x = evento.clientX - this.canvasG.offsetLeft;
      this.y = evento.clientY - this.canvasG.offsetTop;

      if (this.ruta == true) {
        this.vueCanvas.lineTo(this.x, this.y);
        console.log("Position X:" + this.x + " Y:" + this.y);
        this.vueCanvas.stroke();
      }
    },

    moving() {
      this.ruta = true;

      this.vueCanvas.beginPath();
      this.vueCanvas.moveTo(this.x, this.y);
      console.log("Position Initial X:" + this.x + " Y:" + this.y);

      this.canvasG.addEventListener("mousemove", this.drawing);
    },

    stoping() {
      this.ruta = false;
    },

    set_color(color) {
      console.log("Color selected: " + color);
      this.vueCanvas.strokeStyle = color;
    },

    set_line(l_width) {
      console.log("Line width: " + l_width);
      this.vueCanvas.lineWidth = l_width;
      document.getElementById("line_width").innerHTML = l_width;
    },

    clean_board() {
      this.vueCanvas.clearRect(0, 0, this.canvasG.width, this.canvasG.height);
    },
  },
};
</script>

<style scoped>
#container-pg12 #main-board {
  position: absolute;
  top: 0%;
  left: 20%;
}

#tools {
  position: relative;
  width: 800px;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
  border: 2px solid black;
}

#canvas {
  position: relative;
  background-color: white;
  border: 2px solid black;
  margin-top: 20px;
}
</style>