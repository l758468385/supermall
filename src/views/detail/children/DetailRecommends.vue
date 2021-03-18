<template>
  <div class="detailRecommend">
    <div class="recommend-item" v-for="(item, index) in goods" :key="index">
      <img :src="item.image" alt="" />
      <div class="goods-info">
        <p>{{ item.title }}</p>
        <span class="price">{{ item.price }}</span>
        <span class="collect"
          ><img @load="recommendImgLoad" src="../../../assets/img/common/shoucang.svg" alt="" />{{
            item.cfav
          }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Array,
    },
  },
  methods: {
    recommendImgLoad() {
      this.$emit('recommendImgLoad')
    }
  },
};
</script>

<style lang="less" scoped>
.detailRecommend {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .recommend-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
    background-color: #fff;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price {
      color: var(--color-high-text);
      margin-right: 20px;
    }
    .collect {
      position: relative;
      img {
        position: absolute;
        left: -15px;
        top: -1px;
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>