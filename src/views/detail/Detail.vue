<template>
  <div class="detail">
    <DetailNavBar
      @currentIndex="TabCurrentIndex"
      ref="detailnavbar"
      class="detail-nav"
    ></DetailNavBar>
    <Scroll @position="getPosition" class="contnet" ref="scroll">
      <DetailSwiper :topImage="topImage"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo
        ref="goodsInfo"
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></DetailGoodsInfo>
      <DetailParamInfo :param-info="paramInfo" ref="params"></DetailParamInfo>
      <DetailRecommends
        @recommendImgLoad="recommendImgLoad"
        :goods="recommends"
        ref="recommend"
      ></DetailRecommends>
    </Scroll>
    <DetailBottomBar @addCart="addCart" @buyNow="buyNow"></DetailBottomBar>
  </div>
</template>

<script>
import DetailNavBar from "./children/DetailNavBar";
import DetailSwiper from "./children/DetailSwiper";
import DetailBaseInfo from "./children/DetailBaseInfo";
import DetailShopInfo from "./children/DetailShopInfo";
import DetailGoodsInfo from "./children/DetailGoodsInfo";
import DetailParamInfo from "./children/DetailParamInfo";
import Scroll from "@/components/Scroll/Scroll";
import DetailRecommends from "./children/DetailRecommends";
import DetailBottomBar from "./children/DetailBottomBar";
import {
  getDetail,
  getRecommend,
  Goods,
  shop,
  GoodsParam,
} from "../../api/detail";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    // 第二栏
    DetailBaseInfo,
    // 店铺信息
    DetailShopInfo,

    DetailGoodsInfo,
    // 参数组件
    DetailParamInfo,
    Scroll,
    DetailRecommends,
    //底部栏
    DetailBottomBar,
  },
  data() {
    return {
      iid: null,
      /* 顶部展示图片 */
      topImage: [],
      // 三种数据
      goods: {},
      // 商家信息
      shop: {},
      // 商品详细信息
      detailInfo: {},
      // 参数信息
      paramInfo: {},
      themeTopYs: [],
      recommends: [],

      /* 创建接收防抖函数的函数 */
      getTopY: null,
      getGoodsInfoImgLoad: null,
      getRecommendImgLoad: null,

      currentIndex: 0,
    };
  },
  methods: {
    getDetaiInfo() {
      getDetail(this.iid).then((res) => {
        const { result } = res.data;
        this.topImage = result.itemInfo.topImages;
        this.goods = new Goods(
          result.itemInfo,
          result.columns,
          result.shopInfo.services
        );
        this.shop = new shop(result.shopInfo);
        this.detailInfo = result.detailInfo;
        this.paramInfo = new GoodsParam(
          result.itemParams.info,
          result.itemParams.rule
        );
      });
    },
    /* 获取推荐数据 */
    getRecommendInfo() {
      getRecommend().then((res) => {
        const result = res.data.data.list;
        this.recommends = result;
        // const recommends =[]
        // for (const n of result) {
        //   recommends.push(n.image)
        // }
        // this.recommends = recommends
      });
    },
    /* 商品信息加载 */
    imageLoad() {
      // console.log("突变刷新");
      this.getGoodsInfoImgLoad();
      this.getTopY();
      //根据导航栏定位到指定位置 （有bug未完成。。。。。。。。）
      // this.themeTopYs = [];
      // this.themeTopYs.push(0);
      // this.$refs.params &&
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      // this.$refs.comment &&
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      // this.$refs.recommend &&
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // this.themeTopYs.push(Number.MAX_VALUE);
      // console.log(this.themeTopYs);
    },
    /* 推荐图片加载 */
    recommendImgLoad() {
      this.getRecommendImgLoad();
    },
    /* 获取滚动定位 */
    getPosition(pos) {
      // if (pos >= this.themeTopYs[0] && pos < this.themeTopYs[1]) {
      //   this.$refs.scroll.scrollTo(0);
      // }

      if (pos >= 0 && pos < this.themeTopYs[1]) {
        this.$refs.detailnavbar.currentIndex = 0;
      } else if (pos >= this.themeTopYs[1] && pos < this.themeTopYs[2]) {
        this.$refs.detailnavbar.currentIndex = 1;
      } else {
        this.$refs.detailnavbar.currentIndex = 3;
      }
    },
    TabCurrentIndex(index) {
      this.currentIndex = index;
      console.log(index);
      if (this.currentIndex === 0) {
        this.$refs.scroll.scrollTo(0, this.themeTopYs[0]);
      } else if (this.currentIndex === 1) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[1]);
      } else {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[2]);
      }
    },
    // 加入购物车
    addCart() {
      // 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // 放入到购物车中
      if (product.iid) {
        this.$store.dispatch("addCart", product).then((res) => {
          this.$toast.show(res, 1500);
        });
      } else {
        this.$toast.show("添加失败请刷新重试", 1500);
      }
    },
    /* 防抖函数 */
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetaiInfo();

    this.getRecommendInfo();
    /* 获取offset 使用防抖操作 */
    this.getTopY = this.debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.$refs.params &&
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.$refs.comment &&
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.$refs.recommend &&
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.themeTopYs);
    }, 500);
    this.getRecommendImgLoad = this.debounce(function () {
      console.log("--- 推荐图片刷新 ---");
      this.$refs.scroll.refresh();
    }, 500);
    this.getGoodsInfoImgLoad = this.debounce(function () {
      console.log("--- 商品信息图片刷新 ---");
      this.$refs.scroll.refresh();
    }, 500);
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.detail {
  position: relative;
  z-index: 13;
  background-color: #fff;
  height: 100vh;
}
.contnet {
  // height: calc(100%-44px);
  // position: absolute;

  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>