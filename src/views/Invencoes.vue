/*
<template>
  <div class="invencoes">
    <b-container>
      <b-row class="d-flex justify-content-md-center mb-5">
        <b-col sm="12" md="4" class="justify-content-center"
          ><b-button id="invBtn" variant="outline-danger" v-on:click="showSpe()"
            >Espetáculos</b-button
          ></b-col
        >
        <b-col sm="12" md="4"
          ><b-button class="invBtn" v-on:click="showEd()"
            >Edições</b-button
          ></b-col
        >
        <b-col sm="12" md="4"
          ><b-button class="invBtn" v-on:click="showForm()"
            >Formações</b-button
          ></b-col
        >
      </b-row>
      <div v-if="showSpet">
        <b-row align-h="center" class="d-flex  mt-5">
          <b-row align-h="center" class="d-flex  mt-5">
            <b-col sm="12" md="3">
              <b-row>
                <b-col sm="12" md="9" class="d-flex">
                  <div class="invSpeImgDia">
                    <b-img
                      fluid
                      class="invSpeImg"
                      src="https://scontent.fopo3-1.fna.fbcdn.net/v/t1.6435-9/52913776_2201119723475306_5311530396482011136_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=BP34Qd4hoNsAX9JKcHK&_nc_ht=scontent.fopo3-1.fna&oh=e403aa6bac027679646505a0407aa7be&oe=61868CB6"
                    ></b-img>
                  </div>
                </b-col>
                <b-col
                  sm="12"
                  md="3"
                  align-self="center"
                  class=" d-flex invTxtRotate text-nowrap  "
                >
                  <h3 class="invTxtRotate-1">
                    A Rolha da garrafa do Rei Daonde?
                  </h3>
                </b-col>
              </b-row>
            </b-col>
            <b-col sm="12" md="3">
              <b-row>
                <b-col sm="12" md="9" class="d-flex">
                  <div class="invSpeImgDia">
                    <b-img
                      fluid
                      class="invSpeImg"
                      src="https://scontent.fopo3-1.fna.fbcdn.net/v/t1.6435-9/52913776_2201119723475306_5311530396482011136_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=BP34Qd4hoNsAX9JKcHK&_nc_ht=scontent.fopo3-1.fna&oh=e403aa6bac027679646505a0407aa7be&oe=61868CB6"
                    ></b-img>
                  </div>
                </b-col>
                <b-col
                  sm="12"
                  md="3"
                  align-self="center"
                  class=" d-flex invTxtRotate text-nowrap  "
                >
                  <h3 class="invTxtRotate-1">
                    A Rolha da garrafa do Rei Daonde?
                  </h3>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row align-h="center" class="d-flex mt-n3">
            <b-col sm="12" md="3">
              <b-row>
                <b-col sm="12" md="9" class="d-flex">
                  <div class="invSpeImgDia">
                    <b-img
                      fluid
                      class="invSpeImg"
                      src="https://scontent.fopo3-1.fna.fbcdn.net/v/t1.6435-9/52913776_2201119723475306_5311530396482011136_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=BP34Qd4hoNsAX9JKcHK&_nc_ht=scontent.fopo3-1.fna&oh=e403aa6bac027679646505a0407aa7be&oe=61868CB6"
                    ></b-img>
                  </div>
                </b-col>
                <b-col
                  sm="12"
                  md="3"
                  align-self="center"
                  class=" d-flex invTxtRotate text-nowrap  "
                >
                  <h3 class="invTxtRotate-1">
                    A Rolha da garrafa do Rei Daonde?
                  </h3>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row align-h="center" class="d-flex mt-n3">
            <b-col sm="12" md="3">
              <b-row>
                <b-col sm="12" md="9" class="d-flex">
                  <div class="invSpeImgDia">
                    <b-img
                      fluid
                      class="invSpeImg"
                      src="https://scontent.fopo3-1.fna.fbcdn.net/v/t1.6435-9/52913776_2201119723475306_5311530396482011136_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=BP34Qd4hoNsAX9JKcHK&_nc_ht=scontent.fopo3-1.fna&oh=e403aa6bac027679646505a0407aa7be&oe=61868CB6"
                    ></b-img>
                  </div>
                </b-col>
                <b-col
                  sm="12"
                  md="3"
                  align-self="center"
                  class=" d-flex invTxtRotate text-nowrap  "
                >
                  <h3 class="invTxtRotate-1">
                    A Rolha da garrafa do Rei Daonde?
                  </h3>
                </b-col>
              </b-row>
            </b-col>
            <b-col sm="12" md="3">
              <b-row>
                <b-col sm="12" md="9" class="d-flex">
                  <div class="invSpeImgDia">
                    <b-img
                      fluid
                      class="invSpeImg"
                      src="https://scontent.fopo3-1.fna.fbcdn.net/v/t1.6435-9/52913776_2201119723475306_5311530396482011136_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=BP34Qd4hoNsAX9JKcHK&_nc_ht=scontent.fopo3-1.fna&oh=e403aa6bac027679646505a0407aa7be&oe=61868CB6"
                    ></b-img>
                  </div>
                </b-col>
                <b-col
                  sm="12"
                  md="3"
                  align-self="center"
                  class=" d-flex invTxtRotate text-nowrap  "
                >
                  <h3 class="invTxtRotate-1">
                    A Rolha da garrafa do Rei Daonde?
                  </h3>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-row>
      </div>
      <div v-if="showEdu"></div>
      <div v-if="showForma"></div>
      <!-- <h1 id="criacaoTitleOne">Em Circulação</h1>
     
      <b-row>
        <b-col
          class="mt-3 col-xl-6 col-lg-6 col-md-12 col-sm-12"
          v-for="criacao in this.$store.state.shows"
          :key="criacao.id"
          ><h1
            class="animate__animated d-flex justify-content-center criacaoName"
          >
            {{ criacao.name }}
          </h1></b-col
        >

        <b-col
            class="col-xl-12 col-lg-6 col-md-12 col-sm-12"
            v-for="n in 2"
            :key="n"
          >
            <b-card
              class="text-center border-danger mt-2 mb-1 show-card"
              img-src="https://res.cloudinary.com/dsfbhbeyt/image/upload/v1628263066/opera%20isto/foto_mz8wof.webp"
              img-alt="Card image"
              style="height: 35vh; background-color: #202124"
              img-left
            >
              <b-card-text>
                <h6>Nome</h6>
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-book-half"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                    /></svg
                  ><a href="">Dossier de Imprensa</a></span
                >
                <br />
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-blockquote-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm.79-5.373c.112-.078.26-.17.444-.275L3.524 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282c.024-.203.065-.37.123-.498a1.38 1.38 0 0 1 .252-.37 1.94 1.94 0 0 1 .346-.298zm2.167 0c.113-.078.262-.17.445-.275L5.692 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282a1.75 1.75 0 0 1 .118-.492c.058-.13.144-.254.257-.375a1.94 1.94 0 0 1 .346-.3z"
                    /></svg
                  ><a href="">Sinopes</a><br
                /></span>

                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-image"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    <path
                      d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"
                    /></svg
                  ><a href=""> Fotografias</a></span
                ><br />
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-camera-reels"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
                    />
                    <path
                      d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"
                    />
                    <path
                      d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                    /></svg
                  ><a href="">Video Teaser</a></span
                >
                <br />
              </b-card-text>
            </b-card>
          </b-col>
      </b-row> -->
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Invencoes",
  data() {
    return {
      showSpet: true,
      showEdu: false,
      showForma: false,
    };
  },
  methods: {
    showSpe() {
      this.showSpet = true;
      this.showEdu = false;
      this.showForma = false;
    },
    showEd() {
      this.showEdu = true;
      this.showSpet = false;
      this.showForma = false;
    },
    showForm() {
      this.showForma = true;
      this.showSpet = false;
      this.showEdu = false;
    },
  },
};
</script>

<style>
@media (max-width: 575px) {
}
@media (min-width: 576px) {
  .invTxtRotate {
  }
}

@media (min-width: 768px) {
  .invSpeImgDia {
    
    transition: transform 1s;
    overflow: hidden;
    transform: rotate(-45deg);
  }

  .invSpeImgDia:hover {
    transform: rotate(0deg);
  }
  .invSpeImg {
    
    filter: grayscale(100%);
    transition: transform 1s;
    transform: rotate(45deg) scale(1.5);
  }
  .invSpeImg:hover {
    
    filter: grayscale(0%);
    transform: rotate(0deg) ;
    
  }
}

@media (min-width: 992px) {
  .invSpeImgDia {
    
    transition: transform 1s;
    overflow: hidden;
    transform: rotate(-45deg);
  }

  .invSpeImgDia:hover {
    transform: rotate(0deg);
  }
  .invSpeImg {
    
    filter: grayscale(100%);
    transition: transform 1s;
    transform: rotate(45deg) scale(1.5);
  }
  .invSpeImg:hover {
    
    filter: grayscale(0%);
    transform: rotate(0deg) ;
    
  }
}

@media (min-width: 1200px) {
  .invSpeImgDia {
    
    transition: transform 1s;
    overflow: hidden;
    transform: rotate(-45deg);
  }

  .invSpeImgDia:hover {
    transform: rotate(0deg);
  }
  .invSpeImg {
    
    filter: grayscale(100%);
    transition: transform 1s;
    transform: rotate(45deg) scale(1.5);
  }
  .invSpeImg:hover {
    
    filter: grayscale(0%);
    transform: rotate(0deg) ;
    
  }
  .invTxtRotate {
    margin-top: -37vh;
    margin-left: -1vw;
    transform-origin: 0 0;
    transform: rotate(90deg);
  }
  .invTxtRotate-1 {
    color: white !important;
  }
}

.invencoes {
  margin-top: 15vh;
}
.invTxtRotate {
  /* transform-origin: 0 0;
    transform: rotate(90deg); */
}
#invBtn {
  border-radius: 100vw;
  color: black;
}
/* .criacaoName {
  font-family: "Titillium Web", sans-serif;
  font-weight: 200;
}
.criacaoName:hover {
  cursor: pointer;
  animation: bounce;
  animation-duration: 1s;
}
#criacaoTitleOne {
  margin-bottom: 5vh;
}
.show-card span svg {
  opacity: 0;
}
.show-card span:hover a {
  visibility: hidden;
}
.show-card span:hover svg {
  margin-left: 10vh;
  opacity: 1;
}
.show-card span a {
  text-decoration: none;
  color: white;
} */
</style>
