<template>
  <div class="main">
    <div class="top-area"></div>
    <div class="mid-area">
      <div class="mid-sep">
        <div class="face-pic">
          <img src="@/assets/face2.jpg" />
        </div>
      </div>
      <div class="mid-sep">
        <div class="myname">
          <h2>森 伊吹 (もり いぶき)</h2>
          <p>
            出身:&nbsp;兵庫県生まれ岡山県育ち<br />
            在住:&nbsp;広島県<br />
            現職:&nbsp;プロジェクトマネージャー<br />
            座右の銘:&nbsp;我以外皆我師<br />
            得意なこと:&nbsp;早寝早起き<br />
            苦手なこと:&nbsp;短距離走<br />
            現職:&nbsp;プロジェクトマネージャー<br />
            座右の銘:&nbsp;ASSUME INNOCENCE<br />
          </p>
        </div>
      </div>
    </div>
    <div class="detail">
      <router-link to="/about">More&#9654; </router-link>
    </div>
  </div>
</template>
 
<script>
</script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  height: 100%;
  width: 80%;
  margin: auto;
  //background-color:red;
}
.top-area {
  height: 25%;
}
.mid-area {
  height: 50%;
  width: 100%;
  margin: auto;
  display: flex;
  //background-color:green;
}
.mid-sep {
  width: 50%;
  //border: 2px solid #000000;
}
.face-pic {
  height: 100%;
  text-align: center;
}
.face-pic img {
  max-height: 100%;
  max-width: 100%;
  margin: auto;
}
.myname {
  text-align: left;
  h2 {
    color: #2d4059;
  }
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
 