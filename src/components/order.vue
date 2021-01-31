<template>
  <div>
    <product-nav></product-nav>
    <product-list @renewShopList="renewShopList"></product-list>
    <shop-cart-item @getSum="getSum()"></shop-cart-item>
  </div>
</template>
<script>
import shopCartItem from "./shopCart.vue";
import productNav from "./navigatorItem.vue";
import productList from "./productList.vue";
export default {
  components: { shopCartItem, productNav, productList },
  data() {
    return {
      totalCost: 0,
      shopList: {},
    };
  },
  name: "order",

  methods: {
    getSum() {
      this.totalCost = 0;
      for (let key in this.shopList) {
        this.totalCost += this.shopList[key].sumprice;
      }
      console.log(this.totalCost);
    },
    renewShopList(value) {
      this.shopList = value;
    },
  },
};
</script>
<style scoped>
</style>