<template>
  <div class="navbar">
    <b-container class="navbar justify-content-center">
      <b-navbar toggleable="lg">
        <b-navbar-brand>
          <router-link to="/"><img id="logo" src="../assets/logo branco opera isto.png"/></router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link class="navRouter" :to="{name:'Agenda'}">AGENDA</router-link></b-nav-item>
            
            <b-nav-item-dropdown id="dropdown" text="CRIAÇÕES">
              <b-dropdown-item href="#"><router-link class="navRouter" :to="{name:'Espetaculos'}">ESPETÁCULOS</router-link></b-dropdown-item>
              <b-dropdown-item ><router-link class="navRouter" :to="{name:'Agenda'}">EM CIRCULAÇÃO</router-link></b-dropdown-item>
            </b-nav-item-dropdown>
            
            <b-nav-item><router-link class="navRouter" :to="{name:'Edicoes'}">EDIÇÕES</router-link></b-nav-item>
            <b-nav-item><router-link class="navRouter" :to="{name:'Educacao'}">EDUCAÇÃO</router-link></b-nav-item>
            
          </b-navbar-nav>

          
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  
};
</script>

<style>
.navbar{
  margin: 0; 
  padding:0;
}
#logo {
  margin:0px;
  margin-right:5vw;
  width:9vw;
  
}
.navRouter,#dropdown{
  margin-left: 5vw;
  margin-right: 5vw;
    color: #e8eaed;
    font-size: 1.5vw;
    font-family:Oswald extralight;
}


</style>