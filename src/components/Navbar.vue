<template>
  <div class="navbar">
    <b-container class="navbar justify-content-center">
      <b-navbar toggleable="lg">
        <b-navbar-brand>
          <router-link to="/"
            ><img id="logo" src="../assets/logo branco opera isto.png"
          /></router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown class="drowpdown" text="Sobre">
              <b-dropdown-item ><router-link class="navRouter" :to="{ name: 'Companhia' }"
                >Companhia</router-link
              ></b-dropdown-item>
              <b-dropdown-item ><router-link class="navRouter" :to="{ name: 'MarioJoaoAlves' }"
                >Mário João Alves</router-link
              ></b-dropdown-item>
              <b-dropdown-item ><router-link class="navRouter" :to="{ name: 'Equipa' }"
                >Equipa</router-link
              ></b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item
              ><router-link class="navRouter" :to="{ name: 'Agenda' }"
                >Agenda</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link class="navRouter" :to="{ name: 'Invencoes' }"
                >Invenções</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link class="navRouter" :to="{ name: 'Contactos' }"
                >Contactos</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link class="navRouter" :to="{ name: 'Blog' }"
                >Blog</router-link
              ></b-nav-item
            >
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
.navbar {
  margin: 0;
  margin-left: 1vw;
  padding: 0;
}
#logo {
  margin: 0px;
  margin-right: 2vw;
  width: 8vw;
}
.navRouter:hover{
 color:black
}
.navRouter:focus{
  outline:none !important
}
.navRouter,.drowpdown,.dropdown-toggle span,.dropdown-toggle::after{
  margin-left: 4vw;
  margin-right: 4vw;
  color: black;
  font-size: 1.5rem;
  font-family: Oswald extralight;
  text-decoration: None !important;
}
.dropdown-toggle span,.dropdown-toggle::after{
  margin-left:0;
  margin-right:0
}
</style>