<template>
  <div class="main">
    <div class="top-space"></div>
    <div class="top-area">
      <h1>森 伊吹 (もり いぶき)</h1>
    </div>
    <div class="mid-area">
      <div class="mid-sep">
        <div class="face-pic">
          <img src="@/assets/face2.jpg" />
        </div>
      </div>
      <div class="mid-sep">
        <div class="myname">
          <p>
            出身:&nbsp;兵庫県生まれ岡山県育ち<br />
            在住:&nbsp;広島県<br />
            現職:&nbsp;プロジェクトマネージャー<br />
            得意なこと:&nbsp;早寝早起き<br />
            苦手なこと:&nbsp;短距離走<br />
            現職:&nbsp;プロジェクトマネージャー<br />
            座右の銘:&nbsp;ASSUME INNOCENCE<br />
          </p>
        </div>
      </div>
    </div>
    <div class="top-space"></div>
    <div id="career" class="top-area">
      <h1>経歴</h1>
    </div>
    <div class="mid-area">
      <div class="myname">
        <div v-for="(item, index) in data" :key="index">
          <div v-if="item.id">
            {{ item.date }}&nbsp;&nbsp;<router-link
              :to="{ name: 'works_detail', params: { id: item.id } }"
              class="router"
              ><span>{{ item.title }}</span></router-link
            ><br />
          </div>
          <div v-if="!item.id">
            {{ item.date }}&nbsp;&nbsp;{{ item.title }}<br />
          </div>
        </div>
      </div>
    </div>
    <div class="top-area"></div>
  </div>
</template>
   
<script>
import { format } from "date-fns";
import db from "@/firebase/firebase.js";

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted: function () {
    db.collection("about")
      .orderBy("date")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          //console.log(doc.data());
          this.data.push({
            id: doc.data().id,
            title: doc.data().title,
            date: format(doc.data().date.toDate(), "yyyy/MM"),
          });
        });
      });
  },
};
</script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  width: 80%;
  margin: auto;
}

.top-space {
  height: 60px;
}
.top-area {
  width: 80%;
  height: 100px;
  margin: auto;
  color: #2d4059;
}
.mid-area {
  width: 80%;
  margin: auto;
  display: flex;
  //background-color: green;
}
.mid-sep {
  width: 50%;
  //border: 2px solid #000000;
}
.face-pic {
  width: 100%;
  text-align: center;
}
.face-pic img {
  width: 60%;
  margin: auto;
}
.myname {
  //margin:auto;
  text-align: left;
  //background-color:red;
}
.router {
  color: #2d4059;
  //text-decoration: none;
}
a.router:hover,
a.router:hover span {
  color: #ea5455;
}
</style>
   