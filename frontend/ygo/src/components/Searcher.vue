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
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitSearch">
    <label for="search">Search:</label>
    <input type="text" v-model="searchTerm" placeholder="Enter card name">
    <input type="submit" value="Search">
  </form>
  
  
  
</template>

<style scoped>

</style>