<template>
  <div class="agenda">
    <b-container>
        <section class="mb-2 mt-1"
          v-for="spetacle in this.$store.state.spetacles"
          :key="spetacle.id"
        >
          <div class="row justify-content-center">
            <p class="nome">{{ getNameById(spetacle.name_id) }}</p>
          </div>
          <div class="row justify-content-center">
            <p class="localdata">
              <span class="local">{{ spetacle.location.split(",")[0] }}</span
              >,{{ spetacle.location.split(",")[1] }}
              <span class="divide">|</span> {{ spetacle.date }}
            </p>
          </div>
        </section>
    
      
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Agenda",
  methods: {
    getNameById(id) {
      return this.$store.state.shows.find((show) => show.id === id).name;
    },
  },
};
</script>

<style>

.nome {
  margin: 0;
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
}

.localdata {
  margin: 0;
  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
}
.local {
  margin: 0;
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
}
.divide {
  margin: 0;
  font-family: "Titillium Web", sans-serif;
  font-weight: 200;
}
</style>