<template>
  <nav>
    <div>
      <h1>Yu-Gi-Oh</h1>
    </div>
    <div>
      <ul class="nav-ul">
        <li class="nav-ul-li">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-ul-li">
          <router-link to="/search">Search</router-link>
        </li>
        <li class="nav-ul-li">
          <router-link to="decks">Decks</router-link>
        </li>
        <li class="nav-ul-li">
          <router-link to="/account">Account</router-link>
        </li>
      </ul>
    </div>
 </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  background-color: rgb(83, 83, 83);
}

h1 {
  padding-left: 20px;
}

.nav-ul {
  display: flex;
  width: 100%;
  list-style: none;
}

.nav-ul-li {
  padding: 10px;
}

.nav-ul-li:hover {
  background-color: white;
}

a {
  text-decoration: none;
}
</style>