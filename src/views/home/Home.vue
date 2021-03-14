<template>
  <div>
    <HomeSwiper :SwiperImgList="SwiperImgList"></HomeSwiper>
    <HomeRecommend :RecommendImgList="RecommendImgList"></HomeRecommend>
  </div>
</template>

<script>
import { getHomeMultidate } from "@/api/home.js";
import HomeSwiper from "./ChildComponents/HomeSwiper";
import HomeRecommend from "./ChildComponents/HomeRecommend";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommend,
  },

  data() {
    return {
      SwiperImgList: [],
      RecommendImgList: [],
    };
  },
  methods: {
    getHomeInfo() {
      getHomeMultidate().then((res) => {
        this.SwiperImgList = res.data.data.banner.list;
        this.RecommendImgList = res.data.data.recommend.list;
      });
    },
  },
  created() {
    this.getHomeInfo();
  },
  computed: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
</style>