<template>
  <div>
    <nav>
      <div
        v-for="item in seller.productsList"
        :clickKey="item.key"
        :key="item.key"
        :style="{ backgroundColor: computedColor(item) }"
        @click="changeSelection($event)"
      >
        {{ item.key }}
      </div>
    </nav>

    <div id="productList" ref="movebox">
      <div v-for="item in seller.productsList" :key="item.key" :id="item.key">
        <div v-for="(num, index) in item.value" :key="index">
          <div class="img">{{ item.key }}{{ num }}</div>
          <transition name="slide-fade">
            <div
              class="decreaseButtom"
              v-if="
                item.key + num in shopList &&
                shopList[item.key + num].amount !== 0
              "
              @click="decreaseShopCart($event, item.key, num)"
            ></div
          ></transition>
          <transition name="slide-fade">
            <div
              id="count"
              v-if="
                item.key + num in shopList &&
                shopList[item.key + num].amount !== 0
              "
            >
              {{ shopList[item.key + num].amount }}
            </div>
          </transition>
          <div class="addbuttom" @click="addShopCart($event, item.key, num)">
            <div class="ball hide"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="shopCart">
      <img id="shopcartIcon" :src="shopCart" />
      <button @click="getSum()">去结算</button>
    </div>
  </div>
</template>
<script>
import shopCart from "../images/shopcart.jpeg";
export default {
  data() {
    return {
      totalCost: 0,
      shopList: {},
      shopCart: shopCart,
      itemsNames: [],
      calHeight: [],
      clickItem: "新春主打",
    };
  },
  props: ["seller"],
  name: "order",
  created() {},
  mounted() {
    for (let item of this.seller.productsList) {
      this.calHeight.push(item.value.length);
      this.itemsNames.push(item.key);
    }

    this.calHeight.reduce((sum, item, index) => {
      this.calHeight[index] = sum;
      return sum + item;
    }, 0);

    let box = this.$refs.movebox;
    box.addEventListener("scroll", () => {
      if (this.calHeight.includes(Math.floor(box.scrollTop / 100))) {
        this.clickItem = this.itemsNames[
          this.calHeight.indexOf(Math.floor(box.scrollTop / 100))
        ];
      }
    });
    //需要从本地得到购物清清单信息
    console.log(window.sessionStorage.getItem("shopList"));
    let record = JSON.parse(window.sessionStorage.getItem("shopList"));
    if (record) {
      this.shopList = record;
    }
  },
  methods: {
    changeSelection(e) {
      this.clickItem = e.target.getAttribute("clickKey");
      this.moveToCorresProducets(e.target);
    },
    computedColor(item) {
      return this.clickItem === item.key ? "white" : "rgba(40, 40, 40, 0.05)";
    },
    moveToCorresProducets(clickItem) {
      console.log(clickItem.getAttribute("clickKey"));
      window.location.hash = "#" + clickItem.getAttribute("clickKey");
    },
    addShopCart(event, type, num) {
      let group = this.seller.productsList.filter((item) => {
        return item["key"] === type;
      });
      group = group[0];
      let index = group.value.indexOf(num);
      let price = group.price[index];
      if (type + num in this.shopList) {
        this.shopList[type + num].amount++;
        this.shopList[type + num].sumprice += price;
      } else {
        this.shopList[type + num] = {
          amount: 1,
          sumprice: price,
        };
      }
      let x_start = event.clientX;
      let y_start = event.clientY;
      let x_end = 20;
      let y_end = window.innerHeight - 20;
      let ball = event.target;
      ball.className += " show";
      ball.style.transform = `translate3d(${x_end - x_start}px,${
        y_end - y_start
      }px,0)`;
      this.$forceUpdate(); //这句话很重要
      window.sessionStorage.setItem("shopList", JSON.stringify(this.shopList));
      setTimeout(() => {
        ball.style.transform = "";
        ball.className = ball.className.split("show").join("");
      }, 500);
    },
    getSum() {
      this.totalCost = 0;
      for (let key in this.shopList) {
        this.totalCost += this.shopList[key].sumprice;
      }
      console.log(this.totalCost);
    },
    ifInshopcart(id) {
      console.log(id);
      return id in this.shopList;
    },
    decreaseShopCart(event, type, num) {
      let price =
        this.shopList[type + num].sumprice / this.shopList[type + num].amount;
      this.shopList[type + num].amount--;
      this.shopList[type + num].sumprice -= price;
      this.$forceUpdate();
      window.sessionStorage.setItem("shopList", JSON.stringify(this.shopList));
    },
  },
};
</script>
<style scoped>
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
#productList {
  height: 145%;
  overflow: scroll;
  width: 75%;
  position: absolute;
  right: 0;
}
#productList > div > div {
  position: relative;
  height: 100px;
  text-align: center;
}
#productList > div > div .img {
  position: relative;
  width: 80px;
  height: 80px;
  background: rgba(113, 123, 180, 0.3);
  top: 10px;
  left: 10px;
}
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
.addbuttom {
  position: absolute;
  top: calc(50% - 10px);
  right: 70px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: rgb(67, 67, 148);
}
.ball {
  position: absolute;
  top: 0;
  right: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: lightblue;
  transition: transform 0.5s linear;
}
.decreaseButtom {
  position: absolute;
  top: calc(50% - 10px);
  right: 120px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: rgb(67, 67, 148);
}
#count {
  position: absolute;
  top: calc(50% - 10px);
  right: 100px;
}
.hide {
  opacity: 0;
}
.show {
  opacity: 100%;
}
.end {
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 10;
}
button {
  position: absolute;
  right: 20px;
  top: calc(50% - 10px);
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0.2;
}
</style>