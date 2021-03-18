<template>
  <div class="gooditem">
    <div><img :src="gooditem.show.img" alt="" @load="imgLoad" @click="goodsClick()"/></div>

    <div class="goods-info" >
      <p>{{ gooditem.title }}</p>
      <span class="price">{{ gooditem.price }}</span>
      <span class="collect"
        ><img src="../../../assets/img/common/shoucang.svg" alt="" />{{
          gooditem.cfav
        }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gooditem: {
      type: Object,
    },
  },
  methods: {
    imgLoad() {
       this.$bus.$emit('imgLoad')
    },
    goodsClick() {
      console.log(this.gooditem.iid);
      this.$router.push(`/detail/${this.gooditem.iid}`)
    }
  },
};
</script>

<style lang="less" scoped>
.gooditem {
  width: 48%;
  position: relative;
  border-radius: 20px;
  padding-bottom: 40px;
  img {
    width: 100%;
    border-radius: 5px;
  }
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  
  position: relative;
  img {
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    
  }
}

</style>