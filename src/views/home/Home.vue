<template>
  <div>
    <NavBar class="navbar">
      <template v-slot:center>购物街</template>
    </NavBar>
    <!-- bscroll的滚动是用transform的translate来进行偏移，
      但是父元素设置了transform，所有子元素的position: fixed都不
      再相对于视口，而是相对于这个transform父元素！这不是什么bug，
      而是规范中规定
    -->
    <TabControl
      class="tab-control"
      :tabItem="tabItem"
      @tabIndexClick="currentIndexInfo"
      ref="tabControl1"
      v-show="isTabFixed"
    ></TabControl>

    <Scroll
      @position="position"
      @pullingUp="loadMore"
      class="scroll"
      ref="scroll"
      :pull-up-load="true"
      :probe-type="3"
    >
      <HomeSwiper
        class="homeSwiper"
        :SwiperImgList="SwiperImgList"
        @swiperImageLoad="SwiperImgLoad"
      ></HomeSwiper>
      <HomeRecommend
        @recommondImgLoad="recommondImgLoad"
        :RecommendImgList="RecommendImgList"
      ></HomeRecommend>
      <FeatureView></FeatureView>
      <TabControl
        ref="tabControl2"
        class="tabControl"
        @tabIndexClick="currentIndexInfo"
        :tabItem="tabItem"
      ></TabControl>
      <Goods class="goods" :goods="this.goods[currentTab].list"></Goods>
    </Scroll>
    <BackTop
      v-show="isShowBackTop"
      @click.native="backtopClick"
      class="gotop"
    ></BackTop>
  </div>
</template>

<script>
import { getHomeMultidate, getHomeGood } from "@/api/home.js";

import NavBar from "../../components/NavBar/Navbar";
import HomeSwiper from "./ChildComponents/HomeSwiper";
import HomeRecommend from "./ChildComponents/HomeRecommend";
import FeatureView from "./ChildComponents/FeatureView";
import TabControl from "../../components/TabControl/TabControl";
import Goods from "../../components/Goods/Goods";
import Scroll from "../../components/Scroll/Scroll";
import BackTop from "../../components/BackTop/BackTop";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    Goods,
    Scroll,
    BackTop,
  },

  data() {
    return {
      SwiperImgList: [],
      RecommendImgList: [],
      tabItem: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentTab: "pop",
      isShowBackTop: 0,
      scroll: null,
      Y: null,
      tabOffsetTop: 0,
      isTabFixed: false,
    };
  },
  methods: {
    _isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag;
    },
    getHomeInfo() {
      getHomeMultidate().then((res) => {
        this.SwiperImgList = res.data.data.banner.list;
        this.RecommendImgList = res.data.data.recommend.list;
      });
    },

    getGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGood(type, page).then((res) => {
        console.log(res);
        this.goods[type].page = page;
        for (let n of res.data.data.list) {
          this.goods[type].list.push(n);
        }
        this.goods[type].page + 1;
        this.$refs.scroll.scroll.finishPullUp();
      });
    },
    /* 获取当前tabcontrol索引对应值 */
    currentIndexInfo(index) {
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      this.$refs.scroll.scrollTo(0, (-this.tabOffsetTop + 46))
      return index === 0
        ? (this.currentTab = "pop")
        : index === 1
        ? (this.currentTab = "new")
        : (this.currentTab = "sell");
      // 保持一致
    },

    /* 监听回到顶部按钮 */
    backtopClick() {
      /* 拿到scroll组件调用scrollTo方法  */
      console.log("bbbb");
      this.$refs.scroll.scrollTo(0, 0);
    },
    /* 获得滚动定位 */
    position(pos) {
      this.isShowBackTop = pos >= 1000;
      this.isTabFixed = pos > this.tabOffsetTop - 47;
    },
    /* 上拉加载更多 */
    loadMore() {
      this.getGoods(this.currentTab);
    },
    /* 防抖函数 */
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    SwiperImgLoad() {
      /* 监听轮播图load，保证offset位置正确，组件里的元素$el, */
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      console.log("监听轮播图load，保证offset位置正确，组件里的元素$el");
    },

    /*  */
    recommondImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
  computed: {},
  created() {
    
    this.getHomeInfo();
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
    
  },

  mounted() {
    /* 防抖函数 */
    const refresh = this.debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
  },
  updated() {},
};
</script>
<style lang="less" scoped>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
}
.homeSwiper {
  margin-top: 44px;
}
.tabControl {
  margin-bottom: 10px;

  position: sticky;
  z-index: 14;
  padding-top: 5px;
  padding-bottom: 8px;
  top: 44px;
  background-color: #fff;
}
.scroll {
  height: calc(100vh - 44px - 49px);
}
.gotop {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 50px;
  margin-right: 20px;
  z-index: 29;
}
.tab-control {
  position: fixed;
  left: 0;
  top: 44px;
  right: 0;
  z-index: 20;

  padding-top: 5px;
  padding-bottom: 13px;
  background-color: #fff;
}
</style>