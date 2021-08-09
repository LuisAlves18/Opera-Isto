<template>
  <div class="home">
    <div class="background">
      <b-img
        fluid
        src="https://res.cloudinary.com/dsfbhbeyt/image/upload/v1628173349/A-rolha-da-garrafa-12_rm6lj1.webp"
      >
      </b-img>
    </div>
    <div class="content">
      <div>
        <div>
          <h2>Próximas Datas</h2>
          <b-card-group deck id="show-deck">
            <b-row class="mt-1 mb-2  border-0  justify-content-center">
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12" >
                <b-card
                  class="text-center border-danger mt-1 mb-1"
                  img-src="https://res.cloudinary.com/dsfbhbeyt/image/upload/v1628263066/opera%20isto/foto_mz8wof.webp"
                  img-alt="Card image"
                  style="height:11rem; background-color:#202124"
                  img-left
                >
                  <b-card-text>
                    Some quick example text to build on the card and make up the
                    bulk of the card's content.
                  </b-card-text>
                </b-card>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <b-card
                  class="text-center border-danger mt-1 mb-1"
                  img-src="https://res.cloudinary.com/dsfbhbeyt/image/upload/v1628263066/opera%20isto/foto_mz8wof.webp"
                  img-alt="Card image"
                  style="height:11rem; background-color:#202124"
                  img-left
                >
                  <b-card-text>
                    Some quick example text to build on the card and make up the
                    bulk of the card's content.
                  </b-card-text>
                </b-card>
              </div>
            </b-row>
          </b-card-group>
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
.background {
  
  margin-top: -9vw;
  margin-left: -11vw;
  margin-right: 0;
  width: 110vw;
}
#show-deck{
  margin:0;
}
/* @media only screen and (min-width: 1920px) {
  #show-deck{
    margin-left: 5rem;
  }

} */
</style>
