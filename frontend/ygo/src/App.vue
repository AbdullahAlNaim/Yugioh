<script>
export default {
  data() {
    return {
      cardImg: "",
      cardMarketPrice: 0,
      deckList: [],
      marketPrice: 0,
      tcgPlayerPrice: 0,
      ebayPrice: 0,
      amazonPrice: 0,
      coolStuffIncPrice: 0,
      cardMarketTotal: 0,
      tcgPlayerTotal: 0,
      ebayTotal: 0,
      amazonTotal: 0,
      coolStuffIncTotal: 0,
    }
  },
  methods: {
    receiveCard(card) {
      this.cardImg = card.cardImg
      this.cardMarketPrice = parseFloat(card.cardMarketPrice);
      this.tcgPlayerPrice = parseFloat(card.tcgplayerPrice);
      this.ebayPrice = parseFloat(card.ebayPrice);
      this.amazonPrice = parseFloat(card.amazonPrice);
      this.coolStuffIncPrice = parseFloat(card.coolstuffIncPrice);
      console.log(card);
    },
    receiveDeck(deckList) {
      this.deckList.push(deckList[0]);
      this.cardMarketTotal += parseFloat(this.deckList[this.deckList.length - 1].cardMarketPrice);
      this.tcgPlayerTotal += parseFloat(this.deckList[this.deckList.length - 1].tcgPlayerPrice);
      this.ebayTotal += parseFloat(this.deckList[this.deckList.length - 1].ebayPrice);
      this.amazonTotal += parseFloat(this.deckList[this.deckList.length - 1].amazonPrice);
      this.coolStuffIncTotal += parseFloat(this.deckList[this.deckList.length - 1].coolStuffIncPrice);

      console.log("cardMarket total: ", 
        this.cardMarketTotal, 
        this.tcgPlayerTotal, 
        this.ebayTotal, 
        this.amazonTotal, 
        this.coolStuffIncTotal);
    },
    deckTotal() {
      // console.log(this.deckList);
      for(let x = 0; x < this.deckList.length; x++) {
        console.log(deckList[x].cardMarketPrice);
      }
    }
  },
  mounted() {
    this.deckTotal();
  }
}
</script>

<template>
  <h1>YU-GI-OH</h1>
  <main>
    <section class="single-card spacer">
      <img :src="cardImg">
      <ul id="total-list">
        <li class="totals">
          <h6>Card Market</h6>
          $ {{ cardMarketPrice }}
        </li>
        <li class="totals">
          <h6>TcgPlayer</h6>
          $ {{ tcgPlayerPrice }}
        </li>
        <li class="totals">
          <h6>Ebay</h6>
          $ {{ ebayPrice }}
        </li>
        <li class="totals">
          <h6>Amazon</h6>
          $ {{ amazonPrice }}
        </li>
        <li class="totals">
          <h6>Cool Stuff Inc</h6>
          $ {{ coolStuffIncPrice }}
        </li>
      </ul>
    </section>

    <section class="deck-build spacer">
      <card-result 
      :decklist="deckList" 
      :totalCardMarket="cardMarketTotal"
      :totalTcgPlayer="tcgPlayerTotal"
      :totalEbay="ebayTotal"
      :totalAmazon="amazonTotal"
      :totalCoolStuffInc="coolStuffIncTotal"
      @found="receiveCard"
      >
      </card-result>
    </section>

    <section class="search-section spacer">   
      <card @found="receiveCard" @full-deck="receiveDeck"></card>
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

#total-list {
  padding: 0;
  list-style: none;
  display: flex;
}

h6 {
  margin: 0;
}

.totals {
  border: solid white 1px;
  margin: 2px;
  padding: 3px;
  border-radius: 4px;;
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
