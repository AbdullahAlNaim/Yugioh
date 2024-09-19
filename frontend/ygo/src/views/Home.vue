<template>
  <h1 id="home-title">Yu-Gi-Oh Card Market Pricing</h1>
  <div id="jumbotron">
    <h2 id="summary">
      Build a deck or search for cards you're interested in and see how they compare in prices for the 5 different markets they are found in.
    </h2> 
    
     <router-link to="/search">
      <button class="search-page-btn">
      <h2>Search</h2>
      </button>
    </router-link>
    
  </div>
</template>

<style scoped>
#home-title {
  text-align: center;
}

#jumbotron {
  background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('../assets/yugioh-bg-img.jpg');
  background-repeat: no-repeat;
  width: 800px;
  height: 500px;
  margin: auto;
  text-align: center;
}

#summary {
  padding-top: 80px;
  padding-bottom: 50px;
  width: 400px;
  margin: auto;
}


</style>

