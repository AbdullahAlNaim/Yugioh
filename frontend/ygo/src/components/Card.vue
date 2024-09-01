<script>
export default {
  data() {
    return {
      cardImg: "", // loading card img
      cardList: [], //  results for searching on right
      results: [], // holds cardID
      deckList: [], //  send deck to parent
      receivedCard: "", //  got from search 
      total: 0, //  
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

        // this.cardImg = json.data[num].card_images[0].image_url;

        // console.log(num);
        for (let x = 0; x < 20; x++)
        {
          const cardImg = json.data[x].card_images[0].image_url;
          const cardId = json.data[x].id;

          const cardMarketPrice = json.data[x].card_prices[0].cardmarket_price;
          const tcgPlayerPrice = json.data[x].card_prices[0].tcgplayer_price;
          const ebayPrice = json.data[x].card_prices[0].ebay_price;
          const amazonPrice = json.data[x].card_prices[0].amazon_price;
          const coolStuffIncPrice = json.data[x].card_prices[0].coolStuffinc_price;

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
        console.log(this.cardList)
        // console.log(this.randomizer())
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
      const tcgPlayerPrice = card.tcgplayerPrice;
      const ebayPrice = card.ebayPrice;
      const amazonPrice = card.amazonPrice;
      const coolStuffIncPrice = card.coolstuffIncPrice;

      this.deckList.push({cardImg, cardId, cardMarketPrice, tcgPlayerPrice, ebayPrice, amazonPrice, coolStuffIncPrice});
     
      this.$emit('full-deck', this.deckList);

      this.deckList = [];
    },
    // FOCUS
    details(card) { 
      this.$emit('found', card);
    },
  },
  emits: ['found', 'full-deck'],
}

</script>

<template>
  
  <main>
    <section>
      <!-- <img :src="cardImg" alt="Yu-Gi-Oh card image" v-if="cardImg" /> -->
    </section>
    <section>
      <ul>
        <img v-for="card in cardList" :src="card"/>
      </ul>
    </section>
  </main>
</template>

<style scoped>


main {
  /* margin: auto; */
  width: 80%;
}
section {
  margin: auto;
  display: flex;
  /* justify-content: space-between; */
}

section img {
  width: 20%;
}
</style>

