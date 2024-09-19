<template>
  <nav>
    <div>
      <h1>Yu-Gi-Oh</h1>
    </div>
    <div>
      <ul class="nav-ul">
        <li class="nav-ul-li">
            <router-link to="/">
              <button class="search-page-btn">
                Home
              </button>
            </router-link>
        </li>
        <li class="nav-ul-li">
          <router-link to="/search">
            <button class="search-page-btn">
              Search
            </button>
          </router-link>
        </li>
      </ul>
    </div>
 </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  background-color: rgb(112, 45, 45);
}

h1 {
  padding-left: 20px;
}

.nav-ul {
  display: flex;
  width: 100%;
  list-style: none;
  margin: 0;
}

.nav-ul-li {
  padding: 10px;
}


</style>