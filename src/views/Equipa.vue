<template>
  <div class="equipa">
    <div class="content">
      <div id="team">
        <b-row class=" d-flex justify-content-center">
          <div v-for="n in 12" :key="n">
            <b-col class=" mx-4 teamPhotos1">
              <img
                class="rounded-circle "
                id="teamPhoto"
                src="../assets/Grupo 10.png"
              />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </b-col>
          </div>
        </b-row>
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
//sandra carneiro - produção
</script>
