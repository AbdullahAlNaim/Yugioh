<script>
export default {
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    submitSearch() {
      this.$emit('search', this.searchTerm);
      // this.searchTerm = "";
    },
  }
}
</script>

<template>
  <form @submit.prevent="submitSearch" class="card-search">
    <label for="search">Search:</label>
    <input id="text-input" type="text" placeholder="Enter card name"
    v-model="searchTerm">
    <input class="button-input" type="submit" value="Search" @click="submitSearch">
  </form>
</template>

<style scoped>
.card-search {
  margin: 10px;
  text-align: center;
  border: solid 1px white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.card-search input {
  border-radius: 5px;
  border: solid 1px white;
  padding: 3px;
}

.text-input {
  width: 100px;
}
</style>