<template>
  <div>
    <ul class="recommend">
      <li
        v-for="(item, index) in RecommendImgList"
        :key="index"
        class="recommendItem"
      >
        <div>
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imgLoad"/>
            <div class="title">
              <span >{{ item.title }}</span>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    RecommendImgList: {
      type: Array,
    },
  },
  data() {
    return {
      a: [1, 23, 4, 5],
    };
  },

  methods: {
    imgLoad () {
      this.$emit('recommondImgLoad')
    }
  },
};
</script>
<style lang="less" scoped>
.recommend {
  list-style: none;
  display: flex;
  width: 100%;
  font-size: 14px;
  
  text-align: center;
  padding: 10px 10px;
  border-bottom: 5px #eeedef solid;
  img{
    width: 80%;
  }
  .recommendItem {
    flex: 1;
    width: 25%;
    .title{
      padding-top: 10px;
    }
  }
}
</style>
