<template>
  <div class="home">
    <div class="content">
      <section class="background d-flex justify-content-center">
        <b-button
          class="transparent animate__animated animate__flip animate__slower animate__infinite"
          href="#next-shows"
          variant="dark"
          id="landingScroll"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-calendar-event"
            viewBox="0 0 16 16"
          >
            <path
              d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
            />
            <path
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
            /></svg
        ></b-button>

      </section>
      <div>
        <div>
          <h2 id="proximasDatas" class="my-3 text-center">Próximas Datas</h2>
          <section id="next-shows">
            <b-card-group deck id="show-deck" class="mx-2">
              <b-row class="mt-1 mb-2  border-0  justify-content-center">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <b-card
                    class="text-center border-danger mt-1 mb-1"
                    img-src="https://res.cloudinary.com/dsfbhbeyt/image/upload/v1628263066/opera%20isto/foto_mz8wof.webp"
                    img-alt="Card image"
                    style="height:11rem; background-color:white"
                    img-left
                  >
                    <b-card-text style="color:white">
                      Some quick example text to build on the card and make up
                      the bulk of the card's content.
                    </b-card-text>
                  </b-card>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <b-card
                    class="text-center border-danger mt-1 mb-1"
                    img-src="https://res.cloudinary.com/dsfbhbeyt/image/upload/v1628263066/opera%20isto/foto_mz8wof.webp"
                    img-alt="Card image"
                    style="height:11rem; background-color:white"
                    img-left
                  >
                    <b-card-text style="color:white">
                      Some quick example text to build on the card and make up
                      the bulk of the card's content.
                    </b-card-text>
                  </b-card>
                </div>
              </b-row>
            </b-card-group>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style>
.home{
  background-color:white
}
.background {
  background-image: url("https://res.cloudinary.com/dsfbhbeyt/image/upload/v1628173349/A-rolha-da-garrafa-12_rm6lj1.webp");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  margin-top:0;
  padding-left:-11vw;
}
#landingScroll {
  margin-top: 90vh;
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
}
#proximasDatas{
  color:white; 
}

/* @media only screen and (min-width: 1920px) {
  #show-deck{
    margin-left: 5rem;
  }

} */
</style>
