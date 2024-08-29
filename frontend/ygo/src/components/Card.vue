<script>
export default {
  data() {
    return {
      cardImg: "",
      cardList: [],
      results: [],
      deckList: [],
    }
  },
  methods: {
    randomizer(max) {
      return Math.floor(Math.random() * max);
    },
    async getData() {
      // num = this.randomizer()
      const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php"
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
          const randomIndex = this.randomizer(totalCards);
          this.cardList.push(json.data[randomIndex].card_images[0].image_url);
        }
        console.log(this.cardList)
        // console.log(this.randomizer())
      } catch (error) {
        console.error(error.message);
      }
    }
  },
  mounted() {
    this.getData();
  }
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

