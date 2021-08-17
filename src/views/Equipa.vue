<template>
  <div class="equipa">
    <div class="content">
      <div id="team">
        <b-row class="d-flex justify-content-center">
          <div v-for="n in 12" :key="n">
            <b-col class="mx-4 teamPhotos1">
              <img
                class="rounded-circle"
                id="teamPhoto"
                src="../assets/Grupo 10.png"
              />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </b-col>
          </div>
        </b-row>
        <div v-if="detectScroll()">
          <span id="teamScrollIcon" class=""
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="
                bi bi-chevron-double-down
                animate__animated
                animate__heartBeat
                animate__slower
                animate__infinite
              "
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
              <path
                fill-rule="evenodd"
                d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              /></svg
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#team {
  background-image: url("../assets/cadeiras-teatro.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin-top: -18vh;
}
.overlay {
  height: 20vh;
  width: 20vh;
  margin-top: -20vh;
  margin-left: 2.5vw;
  margin-right: 0vw;
  transition: 0.5s ease-in;
  background-color: rgb(rgb(165, 55, 55));

  border-radius: 100px;
  opacity: 0;
}
.text {
  color: white;
  padding-top: 10vh;
}
.teamPhotos1 {
  margin-top: 20vh;
}

#teamPhoto {
  height: 25vh;
}
.teamPhotos1:hover #teamPhoto {
  opacity: 0.45;
}
.teamPhotos1:hover .overlay {
  opacity: 1;
}
#teamScrollIcon {
  color: white;
  
}
</style>
<script>
//angela alves- cantora
//miguel reis- cantor
//gabriel neves - cantor
//mario alves - cantor
//paulina sá machado -cantora
//Joao tiago magalhaes - pianista
//alexandre reis - flautista
//david wyn lloyd - violinista
//angela marques - atriz
//ana paula sousa - direção de cena
//nuno almeida - tecnico de luz
//sandra carneiro - produção~
export default {
  name: "Equipa",
  components: {},
  data() {
    return {
      send: {
        typeOfferId: "",
        areaId: "",
        name: "",
      },
      checkedType: [],
      checkedArea: [],
    };
  },
  methods: {
    detectScroll() {
      window.onscroll = function (e) {
        // print "false" if direction is down and "true" if up
        console.log(this.oldScroll > this.scrollY);
        this.oldScroll = this.scrollY;
      };
      return window.onscroll;
    },
  },
};
</script>
