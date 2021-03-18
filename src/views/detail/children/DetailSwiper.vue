<template>
  <div class="detaiswiper">
    <swiper ref="mySwiper" :options="swiperOptions" class="mySwiper">
      <swiper-slide v-for="(item, index) in topImage" :key="index"
        ><img :src="item" alt=""
      /></swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: true,
        // Some Swiper option/callback...
      },
    };
  },
  props: {
    topImage: {
      type: Array,
    },
  },
  mounted() {
    /* 拿到mySwiper，定义首页显示第几张图片 */
    this.$refs.mySwiper.$swiper.slideTo(1, 1000, false);
  },
};
</script>

<style lang="less" scoped>
.mySwiper {
  width: 100%;
  img {
    width: 100%;
    height: 60vh;
  }
}

.swiperItem {
}
</style>