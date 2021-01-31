<template>
  <div id="App">
    <main-header :seller="seller"></main-header>
    <main-content
      :seller="seller"
      :class="{ top: iftop }"
      ref="box"
    ></main-content>
  </div>
</template>
<script>
import mainHeader from "./components/header.vue";
import mainContent from "./components/mainContent.vue";

export default {
  name: "App",
  mounted() {
    this.getSellerInfo();
  },
  data() {
    return {
      iftop: false,
      seller: {},
    };
  },
  methods: {
    // 实际上可以通过vuex来管理商家数据
    getSellerInfo() {
      this.$axios({
        method: "get",
        url: "http://localhost:1021/getInfo",
      })
        .then((res) => {
          console.log(res.data);
          this.seller = eval(res.data);
          console.log(this.seller);
        })
        .catch((msg) => {
          console.log(msg);
        });
    },
  },
  components: {
    mainHeader,
    mainContent,
  },
};
</script>
<style scoped>
#App {
  margin: 0;
  padding: 0;
  border: 0;
}
.top {
  position: fixed;
}
</style>