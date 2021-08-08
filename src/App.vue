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
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap");

html {
  background-color: #202124;
}
#app {
  background-color: #202124;
  font-family: 'Titillium Web', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  color: #e8eaed;
}
p {
  font-family: 'Titillium Web', sans-serif;;
  font-weight: 300;
  color: #e8eaed;
}
</style>

