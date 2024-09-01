<script>
export default {
  data() {
    return {
      detailImg: "", 
      total: 0,
    }
  },
  methods: {
    details(card) {
      this.detailImg = card.cardImg;
      this.$emit('found', this.detailImg);
    },
    deckTotal(card) {
      console.log(card.cardPrices)
    }
  },
  props: ['decklist']
}
</script>

<template>
  <main>
    <section class="result-section">
      <ul class="ul-card-list">
        <li v-for="card in decklist" class="card-holder">
          <img :src="card.cardImg" @click="details(card)" class="single-card">
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
main {
  margin: auto;
}

.result-section {
  width: 100%;
  margin: 20px;
}

.result-section ul {
  margin: center;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.ul-card-list {
  padding: 0; 
  width: 100%;
}

.single-card {
  width: 70px;
  /* display: block; */
}
</style>