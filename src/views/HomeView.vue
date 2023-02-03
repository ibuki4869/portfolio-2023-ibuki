<template>
  <div class="home">
    <div :style="{ height: height + 'px' }" class="page-size">
      <MainPage />
    </div>
    <div :style="{ height: height + 'px' }" class="page-size">
      <TopAbout />
    </div>
    <div :style="{ height: height + 'px' }" class="page-size">
      <TopCareer />
    </div>
    <div :style="{ height: height + 'px' }" class="page-size">
      <TopHackathon />
    </div>
    <div :style="{ height: height + 'px' }" class="page-size">
      <TopWorks />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
import TopAbout from "@/components/TopAbout.vue";
import TopCareer from "@/components/TopCareer.vue";
import TopWorks from "@/components/TopWorks.vue";
import TopHackathon from "@/components/TopHackathon.vue";

export default {
  name: "HomeView",
  components: {
    MainPage,
    TopAbout,
    TopCareer,
    TopWorks,
    TopHackathon,
  },
  data() {
    return {
      height: window.innerHeight,
    };
  },
  mounted() {
    //if (process.client) {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    //}
  },
  unmounted() {
    //if (process.client) {
    window.removeEventListener("resize", this.handleResize);
    //}
  },
  methods: {
    handleResize() {
      this.height = window.innerHeight;
    },
  },
};
</script>

<style lang="scss">
.h {
  color: #2d4059;
}

//.page-size {
//border: 2px solid #000000;
//}
</style>
