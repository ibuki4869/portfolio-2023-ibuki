<template>
  <div class="header">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/works">Works</router-link>
      <router-link to="/link">Link</router-link>
    </nav>
  </div>
</template>



<style lang="scss">
div.header {
  display: inline-block;
}
nav {
  margin: 10px;
  a {
    font-weight: bold;
    margin: 10px;
    color: #343434;
    text-decoration: none;
    &.router-link-exact-active {
      color: #2d4059;
    }
  }
  a:hover {
    color: #ea5455;
  }
}
</style>
