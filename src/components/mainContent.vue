<template>
  <div id="header" :class="{ fixed: iftop }">
    <div id="blockTitles" ref="blockTitles">
      <router-link to="/order">点餐</router-link>
      <router-link to="/comments">评价</router-link>
      <router-link to="/sellerInfo">商家</router-link>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iftop: false,
    };
  },
  props: ["seller"],
  name: "mainContent",
  mounted() {
    let box = this.$refs.blockTitles;
    console.log(box);
    window.onscroll = function () {
      if (window.scrollY > 225) {
        box.style.position = "fixed";
        box.style.top = "0";
        box.style.backgroundColor = "white";
        box.style.zIndex = "20";
      } else {
        box.style.position = "static";
      }
    };
  },
};
</script>
<style scoped>
#blockTitles {
  width: 100%;
}
#header {
  height: 20px;
  width: 100%;
}
a {
  display: inline-block;
  padding: 20px;
  text-decoration: none;
  color: black;
}
.router-link-active {
  text-decoration: none;
}
.fixed {
  position: fiexd;
  top: 0;
}
</style>