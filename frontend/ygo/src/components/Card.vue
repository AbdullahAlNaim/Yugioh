<script>
export default {
  data() {
    return {
      cardImg: "",
      cardList: [],
    }
  },
  methods: {
    randomizer() {
      return Math.floor(Math.random() * 13308);
    },
    async getData(num) {
      num = this.randomizer()
      const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php"
      try {
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        this.cardImg = json.data[num].card_images[0].image_url;
        console.log(num);
        for (let x = 0; x < 10; x++)
        {
          this.cardList.push(json.data[x].card_images[0].image_url);
        }
        console.log(this.cardList)
      } catch (error) {
        console.error(error.message);
      }
    }
  },
  mounted() {
    this.getData(this.randomizer);
  }
}

</script>

<template>
  
  <main>
    <section>

      <img :src="cardImg" alt="Yu-Gi-Oh card image" v-if="cardImg" />
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

