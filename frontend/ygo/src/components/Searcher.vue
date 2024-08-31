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
  <form @submit.prevent="submitSearch">
    <label for="search">Search:</label>
    <input type="text" placeholder="Enter card name"
    v-model="searchTerm">
    <input type="submit" value="Search" @click="submitSearch">
  </form>
</template>

<style scoped>

</style>