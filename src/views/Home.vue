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
          <b-card-group deck>
            <b-row class="mt-1 mb-3 mr-1 ml-1">
              <b-card
                class="text-center border-danger"
                img-src="https://res.cloudinary.com/dsfbhbeyt/image/upload/v1628263066/opera%20isto/foto_mz8wof.webp"
                img-alt="Card image"
                style="height:18rem; background-color:#202124"
                img-left
              >
                <b-card-text>
                  Some quick example text to build on the card and make up the
                  bulk of the card's content.
                </b-card-text>
              </b-card>
              <b-card
                class="text-center border-danger"
                img-src="https://res.cloudinary.com/dsfbhbeyt/image/upload/v1628263066/opera%20isto/foto_mz8wof.webp"
                img-alt="Card image"
                style="height:18rem; background-color:#202124"
                img-left
              >
                <b-card-text>
                  Some quick example text to build on the card and make up the
                  bulk of the card's content.
                </b-card-text>
              </b-card>
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
  overflow-y: block;
  margin-top: -9vw;
  margin-left: -11vw;
  margin-right: 0;
  width: 110vw;
}
</style>
