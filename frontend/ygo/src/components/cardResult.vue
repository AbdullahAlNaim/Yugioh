<script>
export default {
  data() {
    return {
      cardImg: "", 
    }
  },
  methods: {
    details(card) {
      this.$emit('found', card);
    },
    removeFromDeck(index) {
      this.$emit('removeItem', index);
      console.log('clicked deck')
    }
  },
  emits: ['found', 'remove'],
  props: ['decklist', 'totalCardMarket', 'totalTcgPlayer', 'totalEbay', 'totalAmazon', 'totalCoolStuffInc']
}
</script>

<template>
  <main>
    <section class="result-section">
      <ul id="total-list">
        <li class="totals">
          <h6>Card Market</h6>
          $ {{ totalCardMarket.toFixed(2) }}
        </li>
        <li class="totals">
          <h6>TcgPlayer</h6>
          $ {{ totalTcgPlayer.toFixed(2) }}
        </li>
        <li class="totals">
          <h6>Ebay</h6>
          $ {{ totalEbay.toFixed(2) }}
        </li>
        <li class="totals">
          <h6>Amazon</h6>
          $ {{ totalAmazon.toFixed(2) }}
        </li>
        <li class="totals">
          <h6>Cool Stuff Inc</h6>
          $ {{ totalCoolStuffInc.toFixed(2) }}
        </li>
      </ul>

      <ul class="ul-card-list">
        <li v-for="(card, index) in decklist" class="card-holder">
          <img :src="card.cardImg" @click="details(card)" 
          @dbclick="removeFromDeck(index)"
          class="single-card">
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
main {
  margin: auto;
}

#total-list {
  padding: 0;
  margin: auto;
  justify-content: space-between;
}

.totals {
  border: solid white 1px;
  margin: 2px;
  padding: 3px;
  border-radius: 4px;;
  width:100px;
  text-align: center;
}

h6 {
  margin: 0;
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
  transition: transform 0.3s ease;
  transform-origin: center;
}

.single-card:hover {
  transform: scale(1.2);
}
</style>