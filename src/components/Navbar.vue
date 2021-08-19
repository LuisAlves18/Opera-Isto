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
            <b-nav-item
              ><router-link class="navRouter" :to="{ name: 'Agenda' }"
                >AGENDA</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link class="navRouter" :to="{ name: 'Criacoes' }"
                >CRIAÇÕES</router-link
              ></b-nav-item
            >

            <b-nav-item
              ><router-link class="navRouter" :to="{ name: 'Edicoes' }"
                >EDIÇÕES</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link class="navRouter" :to="{ name: 'Educacao' }"
                >EDUCAÇÃO</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link class="navRouter" :to="{ name: 'Equipa' }"
                >EQUIPA</router-link
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
  margin-left: 3vw;
  padding: 0;
}
#logo {
  margin: 0px;
  margin-right: 5vw;
  width: 7vw;
}
.navRouter,
#dropdown {
  margin-left: 5vw;
  margin-right: 5vw;
  color: #e8eaed;
  font-size: 1.5rem;
  font-family: Oswald extralight;
  text-decoration: None !important;
}
</style>