<template>
  <div class="main-area">
    <div class="top-area">
      <h1>Hackathon</h1>
    </div>
    <div v-for="(item, index) in data" :key="index" class="mid-area">
      <div class="mid-sep">
        <div class="img-pic">
          <img :src="item.image" />
        </div>
      </div>
      <div class="mid-sep">
        <router-link
          class="title"
          :to="{ name: 'works_detail', params: { id: id[index] } }"
          ><h4>{{ item.title }}<br />{{ item.award }}</h4></router-link
        >
        <p>
          <b>分野：</b>{{ item.category }}<br />
          <b>ポジション：</b>{{ item.position }}<br />
          <b>言語：</b>{{ item.langage }}<br />
          <b>期間：</b>{{ item.period }}<br />
          <b>チームメンバー：</b>{{ item.member }}<br />
          <b>概要：</b>{{ item.overview }}
        </p>
        <div class="detail">
          <router-link :to="{ name: 'works_detail', params: { id: id[index] } }"
            >More&#9654;
          </router-link>
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
      id: [],
    };
  },
  mounted: function () {
    db.collection("works")
      .where("kind", "==", "hackathon")
      .orderBy("date", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.id.push(doc.id);
          this.data.push(doc.data());
        });
      });
  },
};
</script>
     
     <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
.main-area {
  width: 80%;
  margin: auto;
  //background-color: red;
}
.top-area {
  width: 80%;
  margin: auto;
  margin-top: 60px;
  color: #2d4059;
}
.mid-area {
  width: 80%;
  height: 70%;
  display: flex;
  margin-bottom: 20px;
  //background-color: green;
  align-items: flex-start;
}
.mid-sep {
  width: 50%;
  height: 100%;
  //border: 2px solid #000000;
}
.mid-sep h4 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0;
  color: #2d4059;
}
.title {
  text-decoration: none;
}
.img-pic {
  width: 100%;
  text-align: center;
}
.img-pic img {
  width: 60%;
  margin: auto;
}
.detail {
  text-align: right;
  height: 100px;
  //background: red;
  a {
    color: #2d4059;
    text-decoration: none;
  }
  a:hover {
    color: #ea5455;
  }
}
</style>
       