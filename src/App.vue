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
  watch: {
  $route(to) {
     document.title = `Opera Isto - ${to.meta.title}`;
  }
}
  
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Varela&display=swap');

html {
  background-color: white;
  margin:0;
  overflow-x: hidden;
}
#app {
  background-color: white;
  font-family: 'Varela', sans-serif;;
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
 
  font-family: "Oswald", sans-serif !important;
  
  color: black !important;
   
}
p {
  font-family: 'Varela', sans-serif !important;
  font-weight: 400 !important;
  color: black !important;
}

</style>

