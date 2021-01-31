<template>
  <div id="App">
    <main-header></main-header>
    <main-content></main-content>
  </div>
</template>
<script>
import mainHeader from "./components/header.vue";
import mainContent from "./components/mainContent.vue";

export default {
  name: "App",
  mounted() {
    this.$store.dispatch("getInfo");
  },
  data() {
    return {};
  },
  components: {
    mainHeader,
    mainContent,
  },
};
</script>
<style scoped>
</style>