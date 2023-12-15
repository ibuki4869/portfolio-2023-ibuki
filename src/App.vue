<template>
  <div>
    <div class="header">
      <HeaderMenu />
    </div>
    <router-view />
    <div class="footer">
      <FooterBar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMenu from "@/components/HeaderMenu.vue";
import FooterBar from "@/components/FooterBar.vue";
export default {
  components: {
    HeaderMenu,
    FooterBar,
    //created() {
    //  console.log("env", process.env.VUE_APP_APIKEY);
    //},
  },
};
</script>

<style lang="scss">
#app {
  font-family: "メイリオ", "Meiryo", "MS ゴシック";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #343434;
}
h1 {
  position: relative;
  text-shadow: 0 0 2px white;
}
h1:before {
  content: "";
  position: absolute;
  background: #ea545463;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 50%;
  /* border: dashed 1px white; */
  left: -15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: -1;
}

.header {
  position: fixed;
  z-index: 100;
  top: 0; /* 上下の固定位置を上から0pxにする */
  left: 0;
  height: 40px;
  width: 100%;
  background-color: #ffffff48;
  text-align: center;
}
</style>
