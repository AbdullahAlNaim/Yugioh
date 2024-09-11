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
      this.tcgPlayerPrice = parseFloat(card.tcgPlayerPrice);
      this.ebayPrice = parseFloat(card.ebayPrice);
      this.amazonPrice = parseFloat(card.amazonPrice);
      this.coolStuffIncPrice = parseFloat(card.coolStuffIncPrice);
    },
    receiveDeck(deckList) {
      this.deckList.push(deckList[0]);
      this.cardMarketTotal += parseFloat(this.deckList[this.deckList.length - 1].cardMarketPrice);
      this.tcgPlayerTotal += parseFloat(this.deckList[this.deckList.length - 1].tcgPlayerPrice);
      this.ebayTotal += parseFloat(this.deckList[this.deckList.length - 1].ebayPrice);
      this.amazonTotal += parseFloat(this.deckList[this.deckList.length - 1].amazonPrice);
      this.coolStuffIncTotal += parseFloat(this.deckList[this.deckList.length - 1].coolStuffIncPrice);
    },
    removeCard(card) {
      this.deckList.splice(card, 1);
    }
  },
  mounted() {
  }
}
</script>


<template>
  <h1>YU-GI-OH</h1>
  <main>
    <section class="single-card spacer">
      <div class="img-placeholder">
        <img :src="cardImg">
      </div>
      <ul id="total-list">
        <li class="totals">
          <p><span>Card Market:</span> <span>$ {{ cardMarketPrice }}</span></p>
        </li>
        <li class="totals">
          <p><span>TcgPlayer:</span> <span>$ {{ tcgPlayerPrice }}</span></p>
        </li>
        <li class="totals">
          <p><span>Ebay:</span> <span>$ {{ ebayPrice }}</span></p>
        </li>
        <li class="totals">
          <p><span>Amazon:</span> <span>$ {{ amazonPrice }} </span></p>
        </li>
        <li class="totals">
          <p><span>Cool Stuff Inc:</span> <span>$ {{ coolStuffIncPrice }}</span> </p>
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
      @removeItem="removeCard"
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

.img-placeholder {
  width: 300px;
  height: 430px;
}

#total-list {
  padding: 0;
  list-style: none;
}

.totals p {
  margin: 5px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

h6 {
  margin: 0;
}

.spacer {
  margin: 5px;
  border: solid white 1px;
  border-radius: 5px;
}

.single-card {
  width: 300px;
  height: 600px;
}

.single-card img {
  width: 300px;
}

.deck-build {
  width: 600px;
  height: 600px;
}

.search-section {
  width: 400px;
  height: 600px;
}

</style>