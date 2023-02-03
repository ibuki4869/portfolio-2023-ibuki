<template>
  <div class="home">
    <MainAbout />
  </div>
</template>

<script>
// @ is an alias to /src
import MainAbout from "@/components/MainAbout.vue";

export default {
  name: "AboutView",
  components: {
    MainAbout,
  },
};
</script>

<style lang="scss">
</style>
