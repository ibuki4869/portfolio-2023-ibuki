<template>
  <div class="main-area">
    <div v-for="(item, index) in data" :key="index">
      <div class="top-area">
        <h1>{{ item.title }}</h1>
        <h2>{{ item.award }}</h2>
      </div>
      <div class="mid-area">
        <div class="mid-sep">
          <div class="img-pic">
            <img :src="item.image" />
          </div>
          <div
            class="img-pic"
            v-for="(item_image, index) in detail_image"
            :key="index"
          >
            <img :src="item_image.image" />
          </div>
        </div>
        <div class="mid-sep">
          <p>
            <b>分野：</b>{{ item.category }}<br />
            <b>ポジション：</b>{{ item.position }}<br />
            <b>言語：</b>{{ item.langage }}<br />
            <b>期間：</b>{{ item.period }}<br />
            <b>チームメンバー：</b>{{ item.member }}<br />
            <b>概要：</b>{{ item.overview }}
          </p>
          <p><b>詳細：</b><br />{{ item.story }}</p>
        </div>
      </div>
    </div>
    <div class="top-area">
      <h2>関連リンク</h2>
      <div v-for="(item, index) in detail_url" :key="index">
        <li>{{ item.title }}</li>
        <button class="link" v-on:click="jump(item.url)">{{ item.url }}</button>
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
      detail_image: [],
      detail_url: [],
    };
  },
  mounted: async function () {
    const id = this.$route.params.id;
    console.log(id);
    const work = db.collection("works").doc(id);
    const doc = await work.get();
    this.data.push(doc.data());

    work
      .collection("images")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          //console.log(doc.id);
          this.detail_image.push(doc.data());
        });
      });
    work
      .collection("urls")
      .orderBy("lank")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          //console.log(doc.id);
          this.detail_url.push(doc.data());
        });
      });
  },
  methods: {
    jump: function (url) {
      window.open(url, "_blank");
    },
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
.img-pic {
  width: 100%;
  text-align: center;
}
.img-pic img {
  width: 60%;
  margin: auto;
}

button {
  background: none;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #343434;
  text-decoration: underline;
}
button :hover {
  color: #ea5455;
}
</style>
         