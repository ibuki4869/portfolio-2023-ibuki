<template>
  <router-link v-bind:to="{ path: lnk }" style="text-decoration: none;">
    <span class="hello">
      <div class="ball-title">もりいぶき</div>
      <div class="ball-title">{{ msg }}</div>
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    lnk:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
span.hello{
  display: inline-grid;
  color: #fff;
  background-color: #f00;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  text-align: center;
  align-content: center;
  margin:20px;
  backdrop-filter: blur(12px);
}


span.hello:hover {
	cursor: pointer;
	transform: scale(1.1, 1.1);
}

.ball-title{
  font-size:24px;
}

a {
  color: #42b983;
}
</style>
