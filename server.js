const  express = require('express')
const  path = require('path')
const app = express()
const port = 1021

let seller = `(function(){return {
    title: "肯德基宅急送(上虞万和城店)",
    cosume: "30",
    numPerMonth: "754",
    src:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F09%2F17%2Fd33e536cb0c1cd3d139d421ed41a44ba.jpg&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614322008&t=1045b70eca2fcc038c7ddde32bdb4ddb",
    info: "公告：欢迎光临肯德基宅急送，专业外送，全程保温，准时送达",
    productsList: [
      {
        key: "新春主打",
        value: ["1", "2", "3", "4", "5"],
        price: [15, 20, 16, 26, 30],
      },
      {
        key: "新品上市",
        value: ["1", "2", "3", "4", "5"],
        price: [15, 20, 16, 26, 30],
      },
      {
        key: "k记饭桶",
        value: ["1", "2", "3", "4", "5"],
        price: [15, 20, 16, 26, 30],
      },
      {
        key: "炸鸡啤酒",
        value: ["1", "2", "3", "4", "5"],
        price: [15, 20, 16, 26, 30],
      },
      {
        key: "桶",
        value: ["1", "2", "3", "4", "5"],
        price: [15, 20, 16, 26, 30],
      },
      {
        key: "原味鸡",
        value: ["1", "2", "3", "4", "5"],
        price: [15, 20, 16, 26, 30],
      },
      {
        key: "小食",
        value: ["1", "2", "3", "4", "5"],
        price: [15, 20, 16, 26, 30],
      },
      {
        key: "欢乐下午茶",
        value: ["1", "2", "3", "4", "5"],
        price: [15, 20, 16, 26, 30],
      },
      {
        key: "汉堡包门",
        value: ["1", "2", "3", "4", "5"],
        price: [15, 20, 16, 26, 30],
      },
      {
        key: "冰淇淋们",
        value: ["1", "2", "3", "4", "5"],
        price: [15, 20, 16, 26, 30],
      },
      {
        key: "好多鸡块",
        value: ["1", "2", "3", "4", "5"],
        price: [15, 20, 16, 26, 30],
      },
      {
        key: "晚餐",
        value: ["1", "2", "3", "4", "5"],
        price: [15, 20, 16, 26, 30],
      },
      {
        key: "工作日套餐",
        value: ["1", "2", "3", "4", "5"],
        price: [15, 20, 16, 26, 30],
      },
    ],
  }})()`;
app.use(express.static('dist'));
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next();
   });
app.get('/',(req,res)=>{
    // let json = {};
    // res.send(JSON.stringify(json));
    console.log("传输网页");
    let fullpath = path.join(__dirname,'dist','index.html');
    res.sendFile(fullpath);
})
app.get('/getInfo',(req,res)=>{
    console.log("传输商家信息");
    res.send(seller);
})
app.listen(port,()=>{
    console.log(`the server is listening port --${port}`);
})

