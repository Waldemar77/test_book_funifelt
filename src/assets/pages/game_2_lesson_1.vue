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
      <div>
        <h3 id="title_canva">TABLERO DE DIBUJO</h3>
      </div>

      <!-- Tools to draw within this section -->
      <section id="tools">
        <div id="container_draw">
          <div id="color_section">
            <!-- Color selector, using v-model by vuejs, we got the value from selector and calling the js function. -->
            Color de Línea:
            <input
              id="input_color"
              type="color"
              v-model="selected"
              @change="set_color(selected)"
            />
          </div>

          <div id="line_width_section">
            <!-- Line Width selector, using v-model by vuejs, we got the value from selector and calling the js function. -->
            Tamaño Línea:
            <input
              type="range"
              max="90"
              min="1"
              step="1"
              v-model="value"
              @change="set_line(value)"
            />
          </div>

          <div id="show_width">
            <!-- Indicator about the line width (pixeles) -->
            <span id="line_width">1</span>
          </div>
        </div>

        <div id="container_eraser">
          <div id="eraser_size">
            <!-- Line Width selector to eraser, using v-model by vuejs, we got the value from selector and calling the js function. -->
            Tamaño Borrador:
            <input
              type="range"
              max="50"
              min="1"
              step="1"
              v-model="valueEraser"
              @change="set_eraser_size(valueEraser)"
            />
          </div>

          <div id="show_width_eraser">
            <!-- Indicator about the line width (pixeles) -->
            <span id="eraser_width">15</span>
          </div>

          <div id="button_eraser">
            <!-- Button to clear the canvas board. -->
            <input type="button" value="Borrador" @click="activate_eraser" />
          </div>

          <div id="button_clear">
            <!-- Button to clear the canvas board. -->
            <input type="button" value="Limpiar Tablero" @click="clean_board" />
          </div>
        </div>
      </section>

      <!-- Board where the user can draw using the mouse -->
      <canvas id="canvas" width="800" height="500">
        <p>
          No Funciona correctamente el canvas. Por favor, debes seleccionar otro
          navegador de internet para continuar.
        </p>
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
      valueEraser: 5, // set a default value to the eraser
      value: 1, // set the default value to the line width
      vueCanvas: null,
      canvasG: null,
      x: 0, // position X of the mouse
      y: 0, // position Y of the mouse
      line_way: false, //boolean to define if we are drawing
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
      this.x = evento.clientX - this.canvasG.offsetLeft; //getting the  ubication X value from canvas
      this.y = evento.clientY - this.canvasG.offsetTop; //getting the ubication Y value from canvas

      if (this.line_way == true) {
        this.vueCanvas.lineTo(this.x, this.y); // Draw the line while the line_way is true
        //console.log("Position X:" + this.x + " Y:" + this.y); // print in the console the coordinates of each stroke
        this.vueCanvas.stroke(); // stroke of the line drew.
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
      document.getElementById("line_width").innerHTML = l_width; // this line show the width number pixel of the stoke in the view
      this.vueCanvas.strokeStyle = this.selected;
    },

    // This function let us to clear the canvas board.
    clean_board() {
      this.vueCanvas.clearRect(0, 0, this.canvasG.width, this.canvasG.height);
      document.documentElement.style.cursor = 'url("data:image/png;base64,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"), auto';
    },

    // This function actives the eraser and set white color and size
    activate_eraser() {
      this.vueCanvas.strokeStyle = "#ffffff"; //set a color white to erase
      this.vueCanvas.lineWidth = this.valueEraser; //set the eraser width
      document.documentElement.style.cursor = 'url("data:image/png;base64,"), auto';
    },

    // This function let us to active the eraser with the mouse
    set_eraser_size(evento) {
      this.x = evento.clientX - this.canvasG.offsetLeft; //getting the  ubication X value from canvas
      this.y = evento.clientY - this.canvasG.offsetTop; //getting the ubication Y value from canvas
      this.vueCanvas.clearRect(this.x, this.y, evento, evento); //clear each line or stroke depending of size taken
      document.getElementById("eraser_width").innerHTML = evento; // Showing the width number pixel of the eraser in the view
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

/* styles of div container draw */
#container_draw #color_section {
  display: inline-block;
  padding: 5px 10px;
}

#container_draw #line_width_section {
  display: inline-block;
  padding: 5px 10px;
}

#container_draw #show_width {
  display: inline-block;
  padding: 5px 10px;
}

/* styles of div container eraser */
#container_eraser #eraser_size {
  display: inline-block;
  padding: 5px 10px;
}

#container_eraser #button_eraser {
  display: inline-block;
  padding: 5px 10px;
}

#container_eraser #show_width_eraser {
  display: inline-block;
  padding: 5px 10px;
}

#container_eraser #button_clear {
  display: inline-block;
  padding: 5px 10px;
}

#tools {
  position: relative;
  width: 800px;
  margin: auto;
  box-sizing: border-box;
  /*padding: 20px;*/
  border: 2px solid black;
}

#canvas {
  position: relative;
  background-color: white;
  border: 2px solid black;
  margin-top: 20px;
  /*cursor: url("../../assets/img/common/pencil.png"), auto;*/
}

#line_width #eraser_width {
  padding: 5px;
  font-family: "Courier New", Courier, monospace;
}

#title_canva {
  padding: 10px;
}
</style>