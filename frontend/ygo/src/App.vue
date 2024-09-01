<script>
export default {
  data() {
    return {
      cardDetail: "",
      deckList: [],
    }
  },
  methods: {
    receiveImg(detailImg) {
      this.cardDetail = detailImg
    },
    receiveDeck(deckList) {
      this.deckList.push(deckList[0]);
      // console.log(this.deckList.length, this.deckList);
    },
  }
}
</script>

<template>
  <h1>YU-GI-OH</h1>
  <main>
    <section class="single-card spacer">
      <img :src="cardDetail">
    </section>

    <section class="deck-build spacer">
      <card-result :decklist="deckList" @found="receiveImg"></card-result>
    </section>

    <section class="search-section spacer">   
      <card @found="receiveImg" @full-deck="receiveDeck"></card>
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
}

.single-card img {
  width: 100%;
}

.deck-build {
  width: 40%;
  height: 600px;
}

.search-section {
  width: 25%;
}

</style>
