<template>
  <div class="home">
    <MainHackathon />
    <MainWorks />
  </div>
</template>
  
<script>
// @ is an alias to /src
import MainHackathon from "@/components/MainHackathon.vue";
import MainWorks from "@/components/MainWorks.vue";

export default {
  name: "WorksView",
  components: {
    MainHackathon,
    MainWorks,
  },
};
</script>
  
  <style lang="scss">
</style>
  