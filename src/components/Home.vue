<template>
  <div class="home">
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>全部产品</h2>
          <template v-for="menu in menu_column">
            <h3>{{ menu.menu_name }}</h3>
            <ul>
              <li v-for="type in menu.menu_type">
                <a :href="type.url">{{ type.name }}</a>
                <span class="hot-tag" v-if="type.is_hot == '1'">HOT</span>
              </li>
            </ul>
            <div class="hr" v-if="!menu.last"></div>
          </template>
        </div>
        <div class="index-left-block lastest-news">
          <h2>最新消息</h2>
          <ul>
            <li>
              <a href="#" class="new-item">文化传承</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="index-right">
        <slide-show></slide-show>
        <div class="index-board-list">
          <div class="index-board-item" >
            <div class="index-board-item-inner" >
              <h2>义门陈酒</h2>
              <p>0000</p>
              <div class="index-board-button">
                <a>立即购买</a>
              </div>
            </div>
          </div>
        </div>
        <div class="index-board-list">
          <div class="index-board-item" >
            <div class="index-board-item-inner" >
              <h2>义门陈酒</h2>
              <p>0000</p>
              <div class="index-board-button">
                <a>立即购买</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideShow from '../components/pages/SlideShow'
export default {
  name: 'Home',
  data () {
    return {
        menu_column: []
    }
  },
  methods: {
    getMenuData(){
        this.axios.get("/api/menu").then((response) => {
            console.log(response.data);
            this.menu_column = response.data.data.result;
        }).catch((error)=> {
            console.log(error);
        });
    }
  },
  created() {
      this.getMenuData();
  },
  components: {
      SlideShow
  }
}
</script>

<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }
  .index-right {
    float: left;
    width: 900px;
  }
  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }
  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .index-left-block h2 {
    background: #f4645f;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-board-list {
    overflow: hidden;
  }
  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }
/*  .index-board-car .index-board-item-inner{
    background: url(../assets/images/1.png) no-repeat;
  }
  .index-board-loud .index-board-item-inner{
    background: url(../assets/images/2.png) no-repeat;
  }
  .index-board-earth .index-board-item-inner{
    background: url(../assets/images/3.png) no-repeat;
  }
  .index-board-hill .index-board-item-inner{
    background: url(../assets/images/4.png) no-repeat;
  }*/
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .lastest-news {
    min-height: 512px;
  }
  .hot-tag {
    background: red;
    color: #fff;
  }
  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
