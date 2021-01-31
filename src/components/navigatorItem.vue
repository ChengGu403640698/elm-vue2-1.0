<template>
  <nav>
    <div
      v-for="item in $store.state.seller.productsList"
      :clickKey="item.key"
      :key="item.key"
      :style="{ backgroundColor: computedColor(item) }"
      @click="changeSelection($event)"
    >
      {{ item.key }}
    </div>
  </nav>
</template>
<script>
export default {
  name: "productNav",
  data() {
    return {};
  },
  methods: {
    changeSelection(e) {
      let key = e.target.getAttribute("clickKey");
      this.$store.commit("setClickItem", key);
      window.location.hash = "#" + key;
    },
    computedColor(item) {
      return this.$store.state.clickItem === item.key
        ? "white"
        : "rgba(40, 40, 40, 0.05)";
    },
  },
};
</script>
<style scope>
nav {
  overflow: scroll;
  position: absolute;
  width: 20%;
  height: 150%;
}
nav > div {
  padding: 20px;
  background: rgba(40, 40, 40, 0.05);
}
</style>
