<template>
  <div style="height: 225px">
    <div class="first-level">
      <div class="second-level">
        <img class="seller-icon" :src="$store.state.seller.src" />
        <span id="title">{{ $store.state.seller.title }}</span>
        <span id="description">
          商家配送约{{ $store.state.seller.cosume }}分钟 月售{{
            $store.state.seller.numPerMonth
          }}
          开发票 食无忧
        </span>
        <span id="info">{{ $store.state.seller.info }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mainHeader",
};
</script>
<style scoped>
* {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 20px;
}
.first-level {
  position: relative;
  height: 150px;
  width: 100%;
  background-color: rgba(43, 101, 128, 0.2);
  /* 理论上这里应该是背景图 */
}
.second-level {
  position: relative;
  top: 50%;
  height: 150px;
  margin: 0 auto;
  width: 80%;
  background-color: rgba(255, 253, 250);
  border-radius: 20px;
}
.seller-icon {
  position: absolute;
  top: 30px;
  right: 30px;
  height: 60px;
  width: 60px;
  border-radius: 10px;
}
span {
  display: inline-block;
  padding: 20px;
}
#description {
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 70%;
}
#info {
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 70%;
  color: rgba(0, 0, 0, 0.3);
}
</style>