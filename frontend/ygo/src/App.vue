<script>
export default {
  data() {
    return {
      cardDetail: "",
    }
  },
  methods: {
    recieveEmit(detailImg) {
      console.log('got your message', detailImg)
      this.cardDetail = detailImg
    },

  }
}
</script>

<template>
  <h1>YU-GI-OH</h1>
  <main>
    <section class="single-card spacer">
      <img data-v-c6c3362a="" :src="cardDetail"
      >
    </section>

    <section class="deck-build spacer">

    </section>

    <section class="search-section spacer">
      
      <card @found="recieveEmit"></card>
       <!-- <card></card> -->
    </section>
  </main>
  

</template>

<style scoped>
h1 {
  text-align: center;
}

main {
  display: flex;
  justify-content: center;
}

.spacer {
  margin: 5px;
  border: solid white 1px;
  border-radius: 5px;
}

.single-card {
  width: 25%;
  /* background-color: green; */
}

.single-card img {
  width: 100%;
}

.deck-build {
  width: 40%;
  height: 600px;
  /* background-color: rgba(226, 226, 226, 0.5); */
}

.search-section {
  width: 25%;
  /* background-color: yellow; */
  margin:
}

</style>
