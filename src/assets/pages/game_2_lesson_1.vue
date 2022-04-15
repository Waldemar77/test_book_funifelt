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
      <div id="funifelt_logo">
        
      </div>
    </div>

    <!-- Componet to crearte a canvas tool -->
    <center id="main-board">
      <div>
        <h3 id="title_canva">TABLERO DE DIBUJO</h3>
      </div>

      <!-- Tools to draw within this section -->
      <section id="tools">
        <div id="container_draw">
          <div id="button_pencil">
            <!-- Button to activate the pencil to draw into the board. -->
            <input type="image" id="pencil_logo" alt="pencil" src="data:image/png;base64,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" @click="activate_pencil">
          </div>

          <div id="button_eraser">
            <!-- Button to clear the canvas board. -->
            <input type="image" id="eraser_logo" alt="eraser" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOXSURBVEiJ1dJNaFxVFAfw/7n3vo9585VkksmkMWkrTloMWdRiTWwXUqpSRFLaGtEiCII7F3Uj7marCxEVhIKQUqqSWBCFpCrquDANsTZKTdDGGIzafDTJZJI340zm3XtcJGrFmGa68383F+49Pw6HQ9jI5f3PWouNuEeEwidkzEvSzOwlyw59eOiDN67jNkMA6ML+46mIFz/m7G56UiqrzV5YsqPF4nQ0Ej0f1ODM7t5Xl28Lf7/rVEdsZ/MTVsjtxmqhzV0tylpjELdVxXLs0aKUL0375U87B19fqRYXobbWQwI4gbn5dHhhUSWNoYRtkSelpQzvCRscvysS2suZjKgWV26iVojfboRjhbJKhVx4yoYUBBBIMCKsK12S8cPkaDAD4JeqOg8CM2qEHLEiYY5YDpQQICIQCGCWitEkgaM1ig9PHH3OqQoXK6VxbYt3C9HwVCGobPKFXEuLdsXUjVi0vSr8gd5MviT481Vbnr3h2mUNw8yM9QNiJtKEaFE5nT/V33Hy9CtDddvGCeCRnc5iSfIFP+YNLjP7GsQAg4lhBFPe9sTXjXsavmjteHjFDj906rWJ2HZwCQDZbJa70/f6tuMsC2PSNqNRMVRZ2ZiOJTDU3Ibh5jTNeTURI4RLuvRra+cj89ey72w2x3/iANA/Pqwf33cwZzmuLQK9q6zsxGRiB13asRffNexCzo2QIWWBRAzCaDvk/Xx18Mz8lmO56c6+/+NSUQUDc15oYKwuuTSUvBPj9S1Ydj0YEmABYuIkC3lYCXXkqTe/TG6r8/Xux/npjiP+dLLev1abapyMNKRLobhkEgARCExMkAQKE4kwaff6tweSE8hm+ZY4AJz9Jhuku0/mck5tvqTsjrKxUlKp9b0HQGACyGJQHcPIA+GW768MvLVwq7H8lZdfeMaHI4dtad4mU5gzrA3DbLwSQEQAxSHEwbKIPfho5rK3bRwAz6b8JYHKgC3KFyuVQk6b4G+cQQAJsIgLg5Z43ItXg6O/p0dH1jDlSvRLXb5CbErry88AyBCwII35DLryicrP5TYz/jXzmzP08blg3/DVvDFWYBhNhilFQjIRZgXoI2n0OWg90vtil79ZvdoKBxHn+/oW9NTvF3kt0MLlgrKsJIGHtOH3NPtfnT993+p/lm+J/5nH+uSx9oaolXBaPMtNBsDMWrE01f/8/SUAm67h9vGNZDIsxu4eV8CY7u/p0dXU/r/yB1XsdErAgrcMAAAAAElFTkSuQmCC" @click="activate_eraser" >
          </div>

          <div id="button_clear">
            <!-- Button to clear the canvas board. -->
            <input type="image" id="board_logo" alt="board" src="data:image/png;base64,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" @click="clean_board">
          </div>

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

    this.vueCanvas.lineWidth = 1; // set default line width.
    this.vueCanvas.strokeStyle = "#ffffff"; //set a default color white for using pencil.  

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
      document.getElementById("canvas").style.cursor =
        'url("data:image/png;base64,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"), auto';
      this.vueCanvas.strokeStyle = this.selected; //set a color white to erase
      this.vueCanvas.lineWidth = this.value; //set the eraser width
    },

    // This function actives the eraser and set white color and size
    activate_eraser() {
      this.vueCanvas.strokeStyle = "#ffffff"; //set a color white to erase
      this.vueCanvas.lineWidth = this.valueEraser; //set the eraser width
      document.getElementById("canvas").style.cursor =
        'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOXSURBVEiJ1dJNaFxVFAfw/7n3vo9585VkksmkMWkrTloMWdRiTWwXUqpSRFLaGtEiCII7F3Uj7marCxEVhIKQUqqSWBCFpCrquDANsTZKTdDGGIzafDTJZJI340zm3XtcJGrFmGa68383F+49Pw6HQ9jI5f3PWouNuEeEwidkzEvSzOwlyw59eOiDN67jNkMA6ML+46mIFz/m7G56UiqrzV5YsqPF4nQ0Ej0f1ODM7t5Xl28Lf7/rVEdsZ/MTVsjtxmqhzV0tylpjELdVxXLs0aKUL0375U87B19fqRYXobbWQwI4gbn5dHhhUSWNoYRtkSelpQzvCRscvysS2suZjKgWV26iVojfboRjhbJKhVx4yoYUBBBIMCKsK12S8cPkaDAD4JeqOg8CM2qEHLEiYY5YDpQQICIQCGCWitEkgaM1ig9PHH3OqQoXK6VxbYt3C9HwVCGobPKFXEuLdsXUjVi0vSr8gd5MviT481Vbnr3h2mUNw8yM9QNiJtKEaFE5nT/V33Hy9CtDddvGCeCRnc5iSfIFP+YNLjP7GsQAg4lhBFPe9sTXjXsavmjteHjFDj906rWJ2HZwCQDZbJa70/f6tuMsC2PSNqNRMVRZ2ZiOJTDU3Ibh5jTNeTURI4RLuvRra+cj89ey72w2x3/iANA/Pqwf33cwZzmuLQK9q6zsxGRiB13asRffNexCzo2QIWWBRAzCaDvk/Xx18Mz8lmO56c6+/+NSUQUDc15oYKwuuTSUvBPj9S1Ydj0YEmABYuIkC3lYCXXkqTe/TG6r8/Xux/npjiP+dLLev1abapyMNKRLobhkEgARCExMkAQKE4kwaff6tweSE8hm+ZY4AJz9Jhuku0/mck5tvqTsjrKxUlKp9b0HQGACyGJQHcPIA+GW768MvLVwq7H8lZdfeMaHI4dtad4mU5gzrA3DbLwSQEQAxSHEwbKIPfho5rK3bRwAz6b8JYHKgC3KFyuVQk6b4G+cQQAJsIgLg5Z43ItXg6O/p0dH1jDlSvRLXb5CbErry88AyBCwII35DLryicrP5TYz/jXzmzP08blg3/DVvDFWYBhNhilFQjIRZgXoI2n0OWg90vtil79ZvdoKBxHn+/oW9NTvF3kt0MLlgrKsJIGHtOH3NPtfnT993+p/lm+J/5nH+uSx9oaolXBaPMtNBsDMWrE01f/8/SUAm67h9vGNZDIsxu4eV8CY7u/p0dXU/r/yB1XsdErAgrcMAAAAAElFTkSuQmCC"), auto';
    },

    // This function actives the pencil and set white color and size
    activate_pencil() {
      this.vueCanvas.strokeStyle = "#000000"; //set a color black for stroking
      this.vueCanvas.lineWidth = this.value; //set the eraser width
      document.getElementById("canvas").style.cursor =
        'url("data:image/png;base64,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"), auto';
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
#tools {
  align-items: center;
}

#container_draw #color_section {
  display: inline-block;
  padding: 5px 10px;
}

#container_draw #line_width_section {
  display: inline-block;
  padding: 5px 10px;
}

.input {
  cursor: pointer;
}

#container_draw #show_width {
  display: inline-block;
  padding: 5px 10px;
}

#container_draw #button_pencil{
  display: inline-block;
  padding: 5px 5px;
}

#container_draw #button_clear {
  display: inline-block;
  padding: 5px 5px;
}

#container_draw #button_eraser {
  display: inline-block;
  padding: 5px 5px;
}

#pencil_logo {
  display: inline-block;
  width: 25px;
}

#eraser_logo{
  display: inline-block;
  width: 25px;
}

#board_logo {
  display: inline-block;
  width: 25px;
}

/* styles of div container eraser */
#container_eraser #eraser_size {
  display: inline-block;
  padding: 5px 10px;
}

#container_eraser #show_width_eraser {
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
}

#line_width #eraser_width {
  padding: 5px;
  font-family: "Courier New", Courier, monospace;
}

#title_canva {
  padding: 10px;
}
</style>