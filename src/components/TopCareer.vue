<template>
  <div class="main">
    <div class="main-area">
      <div class="top-area">
        <h1>Career</h1>
      </div>
      <div class="mid-area">
        <div v-for="(item, index) in data" :key="index" class="mid-sep">
          <div class="img-pic">
            <img :src="item.image" />
          </div>
          <h3>{{ item.title }}</h3>
          <p>
            <b>ポジション：</b><br />{{ item.position }}<br />
            <b>形態：</b><br />{{ item.status }}<br />
            <b>期間：</b><br />{{ item.period }}
          </p>
        </div>
      </div>
      <div>
        <div class="detail">
          <router-link to="/about#career">More&#9654; </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
   
<script>
import db from "@/firebase/firebase.js";

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted: function () {
    db.collection("works")
      .where("kind", "==", "career")
      .orderBy("date", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.data.push(doc.data());
        });
      });
  },
};
</script>
   

<style  scoped lang="scss">
.main {
  height: 100%;
  //background-color:red;
}
.main-area {
  height: 100%;
  width: 80%;
  margin: auto;
}
.top-area {
  height: 15%;
  color: #2d4059;
}
.mid-area {
  height: 70%;
  display: flex;
  //background-color: green;
}
.mid-sep {
  width: 25%;
  height: 100%;
  margin: auto;
  //border: 2px solid #000000;
}
.mid-sep h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #2d4059;
}
.img-pic {
  width: 100%;
  text-align: center;
}
.img-pic img {
  width: 100%;
  margin: auto;
}
.myname {
  //margin:auto;
  text-align: left;
  //background-color:red;
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
   