<template>
  <div class="equipa">
    <div class="content">
      <div id="team">
        <b-row class="d-flex justify-content-center">
          <div v-for="elem in this.$store.state.team" :key="elem.id">
            <b-col class="mx-4 teamPhotos1">
              <img
                class="rounded-circle"
                id="teamPhoto"
                :src="require(`../assets/equipa/${elem.photoName}.jpg`)"
              />
              <div class="overlay">
                <div class="text">
                  <b-button
                    style="background-color: transparent; border:none"
                    id="modalbtn"
                    v-b-modal:[`example-modal-${elem.id}`]
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-info-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                      /></svg
                  ></b-button>
                  <b-modal
                    ok-only
                    classes=" teamModal"
                    body-bg-variant="dark"
                    header-bg-variant="dark"
                    hide-footer
                    centered
                    :title="`${elem.nome}`"
                    :id="`example-modal-${elem.id}`"
                    ><p>{{ elem.nome }}</p>
                  </b-modal>
                </div>
              </div>
              <p class="mt-3">{{ elem.nome }}</p>
              <div>
                <div></div>
              </div>
            </b-col>
          </div>
        </b-row>
        <div v-if="newScroll">
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
p {
  font-family: "Titillium Web", sans-serif;
  font-weight: 200;
}
#team {
  /* background-image: url("../assets/cadeiras-teatro.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin-top: -9vh;
}
.overlay {
  height: 20vh;
  width: 20vh;
  margin-top: -20vh;
  margin-left: 3.5vw;
  margin-right: 0vw;

  background-color: rgb(rgb(165, 55, 55));

  border-radius: 100px;
  opacity: 0;
}
.text {
  color: white;
  padding-top: 10vh;
}
.teamPhotos1 {
  margin-top: 10vh;
}

#teamPhoto {
  height: 22vh;
}
.teamPhotos1:hover #teamPhoto {
  opacity: 1;
}
.teamPhotos1:hover .overlay {
  opacity: 1;
}

#teamScrollIcon {
  color: white;
}
.teamModal {
  background-color: #222222 !important;
}
</style>
<script>
//4-5-4
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
//sandra carneiro - produção
//Ana Nogueira - Figurinos
export default {
  name: "Equipa",
  components: {},
  data() {
    return {
      newScroll: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.detectScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.detectScroll);
  },
  methods: {
    detectScroll() {
      window.onscroll = function () {
        // print "false" if direction is down and "true" if up
        this.newScroll = this.oldScroll > this.scrollY;
        console.log(this.newScroll);
        this.oldScroll = this.scrollY;
      };
    },
    getNewNameByName(name) {
      let newName = name.replace(" ", "-");
      console.log(newName);
      return newName;
    },
  },
};
</script>
