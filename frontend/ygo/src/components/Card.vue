<script>
export default {
  data() {
    return {
      cardImg: "", // loading card img
      cardList: [], //  results for searching on right
      results: [], // holds cardID
      deckList: [], //  send deck to parent
      receivedCard: "", //  got from search 
    }
  },
  methods: {
    recieveEmit(search) {
      this.cardSearch(search);
    },
    async cardSearch(looking) {
      const url = `http://localhost:3000/api/cards/search?name=${looking}`;
      try {
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const totalCards = json.length;
        this.cardList = [];

        for(let x = 0; x < totalCards; x++) 
        {
          const cardImg = json[x].image_url;
          const cardId = json[x].cardId;
          const cardMarketPrice = json[x].cardmarket_price;
          const tcgPlayerPrice = json[x].tcgplayer_price;
          const ebayPrice = json[x].ebay_price;
          const amazonPrice = json[x].amazon_price;
          const coolStuffIncPrice = json[x].coolstuffinc_price;

          this.cardList.push({
            cardImg, 
            cardId, 
            cardMarketPrice, 
            tcgPlayerPrice, 
            ebayPrice, 
            amazonPrice, 
            coolStuffIncPrice
          });
          this.results.push[cardId];
        }
      } catch (error) {
        console.error(error.message);
      }
    },
    searchByCardName(searching) {
      this.receivedCard = searching;
      this.cardSearch(searching);
    },
    addToDeck(card) {
      const cardId = card.cardId;
      const cardImg = card.cardImg;
      const cardMarketPrice = card.cardMarketPrice;
      const tcgPlayerPrice = card.tcgPlayerPrice;
      const ebayPrice = card.ebayPrice;
      const amazonPrice = card.amazonPrice;
      const coolStuffIncPrice = card.coolStuffIncPrice;

      this.deckList.push({cardImg, cardId, cardMarketPrice, tcgPlayerPrice, ebayPrice, amazonPrice, coolStuffIncPrice});
     
      this.$emit('full-deck', this.deckList);

      this.deckList = [];
    },
    details(card) { 
      this.$emit('found', card);
    },
  },
  emits: ['found', 'full-deck'],
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
  width: 300px;
}

.result-section {
  /* margin: 0px; */
}

.result-section ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 310px;
  padding: 10px;
}

.card-holder {
  /* margin: 3px; */
  height: 100px;
  /* padding: 5px; */
  /* background-color: red; */
}

.ul-card-list {
  /* padding: 10px;  */
  overflow: auto;
  height: 500px;
  width: 100px;
  padding: 0;
  margin: 0;
  /* background-color: yellow; */
}

.single-card {
  width: 70px;
  transition: transform 0.3s ease;
  transform-origin: center;
}

.single-card:hover {
  transform: scale(1.2);
}
</style>

