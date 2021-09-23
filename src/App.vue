<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Varela&display=swap');

html {
  background-color: white;
  margin:0;
  overflow-x: hidden;
}
#app {
  background-color: white;
  font-family: 'Titillium Web', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}
h1,
h2,
h3,
h4,
h5,
h6 {
 
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  color: black;
   
}
p {
  font-family: 'Varela', sans-serif;;
  font-weight: 400;
  color: black;
}

</style>

