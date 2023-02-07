<template>
  <div class="main">
    <div class="main-area">
      <div class="top-area">
        <h1>Works</h1>
      </div>
      <div class="mid-area">
        <div v-for="(item, index) in data" :key="index" class="mid-sep">
          <div class="img-pic">
            <img :src="item.image" />
          </div>
          <router-link
            class="router"
            :to="{ name: 'works_detail', params: { id: id[index] } }"
            ><h3>{{ item.title }}</h3>
          </router-link>
          <p>
            <b>言語：</b><br />{{ item.langage }}<br />
            <b>開発時期：</b><br />{{ item.period }}
          </p>
        </div>
      </div>
      <div class="detail">
        <router-link to="/works#others">More&#9654; </router-link>
      </div>
      <div class="top-area"></div>
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
      .where("kind", "==", "works")
      .orderBy("date", "desc")
      .limit(3)
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
         
      
<style  scoped lang="scss">
.main-area {
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
  flex-wrap: wrap;
}
.mid-sep {
  width: 26%;
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
.router {
  text-decoration: none;
}
a.router:hover,
a.router:hover h3 {
  color: #ea5455;
}
.img-pic {
  width: 100%;
  text-align: center;
}
.img-pic img {
  width: 100%;
  margin: auto;
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
         