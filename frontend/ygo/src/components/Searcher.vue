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
      console.log('you tried to search')
      this.searchTerm = "";
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitSearch">
    <label for="search">Search:</label>
    <input type="text" placeholder="Enter card name" v-bing="searchTerm">
    <input type="submit" value="Search">
  </form>
</template>

<style scoped>

</style>