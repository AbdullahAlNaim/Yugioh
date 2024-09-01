<script>
export default {
  data() {
    return {
      cardImg: "", // loading card img
      cardList: [], // results for searching on right
      results: [], // holds cardID
      detailImg: "",  // send img to parent
      deckList: [], // send deck to parent
      receivedCard: "", //  got from search 
    }
  },
  methods: {
    addToDeck(card) {
      const cardId = card.cardId;
      const cardImg = card.cardImg;
      const cardPrices = card.cardPrices;

      this.deckList.push({cardImg, cardId, cardPrices});
      this.$emit('full-deck', this.deckList);

      this.deckList = [];
    },
    details(card) {
      this.detailImg = card.cardImg;
      this.$emit('found', this.detailImg);
    },
    recieveEmit(search) {
      this.cardSearch(search);
    },
    async cardSearch(looking) {
      const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=${looking}`;
      try {
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const totalCards = json.data.length;
        this.cardList = [];

        for(let x = 0; x < totalCards; x++) 
        {
          const cardImg = json.data[x].card_images[0].image_url;
          const cardId = json.data[x].id;
          const cardPrices = json.data[x].card_prices
          this.cardList.push({cardImg, cardId, cardPrices});
          this.results.push[cardId];
        }
      } catch (error) {
        console.error(error.message);
      }
    },
    searchByCardName(searching) {
      this.receivedCard = searching;
      this.cardSearch(searching);
    }
  },
}

</script>

<template>
  <searcher @search="searchByCardName"></searcher>
  <main>
    <section class="result-section">
      <ul class="ul-card-list">
        <li v-for="card in cardList" :key="card.cardId" class="card-holder">
          <img  
          :src="card.cardImg" 
          @click="details(card)"
          @dblclick="addToDeck(card)"
          class="single-card" />
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

