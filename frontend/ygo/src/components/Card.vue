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

          const cardMarketPrice = json.data[x].card_prices[0].cardmarket_price;
          const tcgPlayerPrice = json.data[x].card_prices[0].tcgplayer_price;
          const ebayPrice = json.data[x].card_prices[0].ebay_price;
          const amazonPrice = json.data[x].card_prices[0].amazon_price;
          const coolStuffIncPrice = json.data[x].card_prices[0].coolstuffinc_price;

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

.result-section ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 310px;
  padding: 10px;
}

.ul-card-list {
  overflow: auto;
  max-height: 500px;
  width: 100px;
  padding: 0;
  margin: 0;
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

