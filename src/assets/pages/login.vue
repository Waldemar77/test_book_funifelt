<template>
  <body>
    <div class="login">
      <img
        class="logo-funifelt"
        src="../../assets/img/common/Logo_Funifelt_Sombra.png"
        alt="Logo Funifelt"
      />
      <!-- <img class="subtitle_logo" src="../../assets/img/common/longrectangle.png" alt="Subtitulo"> -->
      <form action="#" @submit.prevent="login">
        <input
          type="text"
          name="u"
          placeholder="Username"
          required="required"
          v-model="email"
        />
        <input
          type="password"
          name="p"
          placeholder="Password"
          required="required"
          v-model="password"
        />
        <button type="submit" class="btn btn-primary btn-block btn-large">
          INGRESAR
        </button>
      </form>
      <br />
      <div v-if="errorM">
        {{ errorM }}
      </div>
    </div>
  </body>
</template>

<script>
import db from "@/assets/firebase/init";
//import firebase from "firebase";

export default {
  name: "Login_app",

  // Setting the variable to use for each text box and error message.
  data() {
    return {
      email: "",
      password: "",
      errorM: "",
    };
  },

  // Configuring the methods of functions to verificate the user who has permition to enter.
  methods: {
    login() {
      this.errorM = ""; // Reinit of error variable.

      // If the text boxes (email and password) are correctly fill,
      // the connection with Firebase is started.
      if (this.email && this.password) {
        db.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            console.log(user);
            // If user exists, the home page can be showed.
            this.$router.push({ name: "Home_app" });
          })
          .catch((err) => {
            // We must show the error message when the user doesn't exist or the password doesn't correct.
            this.errorM = err.message;
          });
      } else {
        this.errorM = "Debes diligenciar todos los campos.";
      }
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
.logo-funifelt {
  max-width: 300px;
  margin-top: 5px;
  margin-left: 3px;
}

.subtitle_logo {
  max-width: 300px;
  margin-top: 5px;
  margin-left: 3px;
}

.btn {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  padding: 4px 10px 4px;
  margin-bottom: 0;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
  vertical-align: middle;
  background-color: #1a428a;
  background-repeat: repeat-x;
  filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#ffffff, GradientType=0);
  border-color: #ffffff #ffffff #ffffff;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  border: 1px solid #e6e6e6;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  *margin-left: 0.3em;
}

.btn:hover,
.btn:active,
.btn.active,
.btn.disabled,
.btn[disabled] {
  background-color: #ffffff;
}

.btn-large {
  padding: 9px 14px;
  font-size: 15px;
  line-height: normal;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.btn:hover {
  color: #ffffff;
  text-decoration: none;
  background-color: #ffffff;
  background-position: 0 -15px;
  -webkit-transition: background-position 0.1s linear;
  -moz-transition: background-position 0.1s linear;
  -ms-transition: background-position 0.1s linear;
  -o-transition: background-position 0.1s linear;
  transition: background-position 0.1s linear;
}

.btn-primary,
.btn-primary:hover {
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  color: #ffffff;
}
.btn-primary.active {
  color: #1a428a;
}

.btn-primary {
  background-color: #1a428a;
  background-repeat: repeat-x;
  filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6fcfeb, endColorstr=#6fcfeb, GradientType=0);
  border: 1px solid #6fcfeb;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.5);
}
.btn-primary:hover,
.btn-primary:active,
.btn-primary.active,
.btn-primary.disabled,
.btn-primary[disabled] {
  filter: none;
  background-color: #6fcfeb;
}
.btn-block {
  width: 100%;
  display: block;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  width: 100%;
  height: 100%;
  font-family: "Open Sans", sans-serif;
  background-image: url("../../assets/img/common/bg_pages.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: fixed;
}

.login {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -150px;
  width: 300px;
  height: 300px;
}
.login h1 {
  color: rgb(2, 48, 29);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
  text-align: center;
}

input {
  width: 100%;
  margin-bottom: 10px;
  background: #ffffff;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 13px;
  color: rgb(10, 10, 10);
  /*text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);*/
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
    0 1px 1px rgba(255, 255, 255, 0.2);
  -webkit-transition: box-shadow 0.5s ease;
  -moz-transition: box-shadow 0.5s ease;
  -o-transition: box-shadow 0.5s ease;
  -ms-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;
}
input:focus {
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
    0 1px 1px rgba(255, 255, 255, 0.2);
}
</style>
