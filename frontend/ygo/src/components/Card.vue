<script>
export default {
  data() {
    return {
      cardImg: "",
      cardList: [],
      results: [],
      detailImg: "",
      deckList: [],
      receivedCard: "",
    }
  },
  methods: {
    randomizer(max) {
      return Math.floor(Math.random() * max);
    },
    details(card) {
      this.detailImg = card.cardImg;
      this.$emit('found', this.detailImg);
    },
    recieveEmit(search) {
      console.log('cards got your message');
      this.cardSearch(search);
    },
    // async getData() {
    //   const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?"
    //   try {
    //     const response = await fetch(url);
    //     if(!response.ok) {
    //       throw new Error(`Response status: ${response.status}`);
    //     }

    //     const json = await response.json();
    //     const totalCards = json.data.length;

    //     this.cardList = [];

    //     for (let x = 0; x < 20; x++)
    //     {
    //       const randomIndex = this.randomizer(totalCards);
    //       const cardImg = json.data[randomIndex].card_images[0].image_url
    //       const cardId = json.data[randomIndex].id
    //       this.cardList.push({cardImg, cardId});
    //       this.results.push[cardId]
    //     }
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    // },
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
          this.cardList.push({cardImg, cardId});
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
  mounted() {
    // this.getData();
    // this.cardSearch();
  }
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

