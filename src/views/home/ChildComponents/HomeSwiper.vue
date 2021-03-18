<template>
  <div>
    <swiper :options="swiperOption" class="swiper" ref="mySwiper">
      <swiper-slide v-for="(item, index) in SwiperImgList" :key="index"
        ><img @load="imgageLoad" :src="item.image" alt=""
      /></swiper-slide>
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
  EffectFade,
  EffectCube,
} from "swiper";
SwiperCore.use([
  Navigation,
  Scrollbar,
  EffectCube,
  Pagination,

  EffectFade,
  A11y,
  Autoplay,
]);
// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";

import "swiper/components/scrollbar/scrollbar.min.css";
import "swiper/components/effect-cube/effect-cube.less";
import "swiper/components/effect-fade/effect-fade.less";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    SwiperImgList: {
      type: Array,
    },
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: true,
      },
      isLoad:false
    };
  },
  methods: {
    imgageLoad() {
      // if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        console.log('swiperimgload');
        this.isLoad = true;
      // }
    },
  },
  mounted() {
    /* 拿到mySwiper，定义首页显示第几张图片 */
    this.$refs.mySwiper.$swiper.slideTo(1, 1000, false);
  },
};
</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  /* 单独设置swiper圆点分页器颜色 */
  --swiper-pagination-color: #ffffff;
  img {
    width: 100%;
  }
}
</style>