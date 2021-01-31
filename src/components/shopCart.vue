<template>
  <div id="shopCart">
    <img id="shopcartIcon" :src="shopCart" />
    <button @click="getSum">去结算</button>
  </div>
</template>
<script>
import shopCart from "../images/shopcart.jpeg";
export default {
  name: "shopCartItem",
  data() {
    return {
      shopCart,
    };
  },
  methods: {
    getSum() {
      this.$emit("getSum");
    },
  },
};
</script>
<style scope>
#shopCart {
  position: fixed;
  width: 100%;
  height: 8%;
  background-color: white;
  bottom: 0;
}
#shopcartIcon {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 10px;
}
</style>