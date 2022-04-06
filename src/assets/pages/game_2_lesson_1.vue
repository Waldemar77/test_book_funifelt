<template>
  <body>
    <div id="container-pg12" class="container">
      <!-- Button next page -->
      <router-link to="/lesson1_7">
        <button type="button" class="btn-continue"></button>
      <!-- Button next page -->
      </router-link>
      <router-link to="/lesson1_6">
        <button type="button" class="btn-return"></button>
      </router-link>
    </div>

    <!-- Componet to crearte a canvas tool -->
    <center id="main-board">
      
      <!-- Tools to draw within this section -->
      <section id="tools">

        <!-- Color selector, using v-model by vuejs, we got the value from selector and calling the js function. -->
        Color de Línea:
        <input type="color" v-model="selected" @change="set_color(selected)" /> 
        
        <!-- Line Width selector, using v-model by vuejs, we got the value from selector and calling the js function. -->
        Ancho de Línea:
        <input
          type="range"
          max="150"
          min="1"
          step="1"
          v-model="value"
          @change="set_line(value)"
        />

        <!-- Indicator about the line width (pixeles) -->
        <span id="line_width">1</span>

        <!-- Button to clear the canvas board. -->
        <input type="button" value="clean" @click="clean_board" />
      </section>

      <!-- Board where the user can draw using the mouse -->
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
    // set the variables to use in the logical process.
    return {
      value: 1, // set the default value to the line width
      vueCanvas: null,
      canvasG: null,
      x: 0, // position X of the mouse
      y: 0, // position Y of the mouse
      line_way: false,  //boolean to define if we are drawing
    };
  },

  mounted() {
    // Getting the values from template of HTML
    var canvas = document.getElementById("canvas");
    var contexto = canvas.getContext("2d");
    this.vueCanvas = contexto;
    this.canvasG = canvas;

    this.vueCanvas.lineWidth = 1; // set default line width

    // When the mouse is moving within the canvas board, the function "drawing" will start
    canvas.addEventListener("mousemove", this.drawing);

    // When the mouse is being pressed, the function "moving" will start
    canvas.addEventListener("mousedown", this.moving);

    // When the mouse left to be pressed, the function "stopping" will start 
    canvas.addEventListener("mouseup", this.stoping);
  },

  methods: {
    // This function create the lines while the mouse is being pressed and moved.   
    drawing(evento) {
      this.x = evento.clientX - this.canvasG.offsetLeft;  //getting the  ubication X value from canvas 
      this.y = evento.clientY - this.canvasG.offsetTop;   //getting the ubication Y value from canvas 

      if (this.line_way == true) {
        this.vueCanvas.lineTo(this.x, this.y);  // Draw the line while the line_way is true 
        //console.log("Position X:" + this.x + " Y:" + this.y); // print in the console the coordinates of each stroke
        this.vueCanvas.stroke();  // stroke of the line drew.
      }
    },

    // This function detect when the mouse is moving
    moving() {
      this.line_way = true;

      this.vueCanvas.beginPath();
      this.vueCanvas.moveTo(this.x, this.y);
      //console.log("Position Initial X:" + this.x + " Y:" + this.y);

      this.canvasG.addEventListener("mousemove", this.drawing); //Calling the function "drawing"
    },

    // This function allow us to set the variable boolean to false when the mouse stopped.
    stoping() {
      this.line_way = false;
    },

    // This function let us to set the color in the stroke 
    set_color(color) {
      //console.log("Color selected: " + color);
      this.vueCanvas.strokeStyle = color;
    },

    // This function let us to set the line width to each stroke 
    set_line(l_width) {
      //console.log("Line width: " + l_width);
      this.vueCanvas.lineWidth = l_width;
      document.getElementById("line_width").innerHTML = l_width;  // this line show the width number pixel of the stoke in the view 
    },

    // This function let us to clear the canvas board.
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

#line_width {
  padding: 5px;
  border: solid 1px black;
}
</style>