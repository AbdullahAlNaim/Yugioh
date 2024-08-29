<script setup>

</script>

<template>
  <h1>YU-GI-OH</h1>
  <main>
    <section class="single-card spacer">
      <img data-v-c6c3362a="" src="https://images.ygoprodeck.com/images/cards/5373478.jpg">
    </section>

    <section class="deck-build spacer">

    </section>

    <section class="search-section spacer">
      <searcher @search="searchByCardName"></searcher>
      <card></card>
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

.spacer {
  margin: 5px;
  border: solid white 1px;
  border-radius: 5px;
}

.single-card {
  width: 25%;
  /* background-color: green; */
}

.single-card img {
  width: 100%;
}

.deck-build {
  width: 40%;
  height: 600px;
  /* background-color: rgba(226, 226, 226, 0.5); */
}

.search-section {
  width: 25%;
  /* background-color: yellow; */
}

</style>
