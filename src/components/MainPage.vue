<template>
  <div class="main">
    <div class="top-area"></div>
    <div class="mid-area">
      <div class="myname">
        <h2>Mori Ibuki</h2>
      </div>
    </div>
    <div class="bottom-area">
      <div class="guide">
        <img src="@/assets/scrolling.png" />
      </div>
    </div>
  </div>
</template>
   
<script>
</script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  height: 100%;
  margin-top: 0;
}
.top-area {
  height: 25%;
}
.mid-area {
  height: 50%;
  width: 100%;
  //background-color: green;
  position: relative;
}
.myname {
  font-size: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  color: #2d4059;
}
.bottom-area {
  height: 25%;
  //background-color: red;
}

.guide {
  height: 100%;
  text-align: left;
  margin-left: 20px;
}
.guide img {
  height: 100%;
}
.detail {
  text-align: right;
  height: 100px;
  //background: red;
  a {
    text-decoration: none;
    color: #2d4059;
  }
  a:hover {
    color: #ea5455;
  }
}
</style>
   