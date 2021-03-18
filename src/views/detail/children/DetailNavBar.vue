<template>
  <div>
    <NavBar>
      <template v-slot:left>
        <img
          @click="backClick"
          src="../../../assets/img/common/back.png"
          alt=""
        />
      </template>
      <template v-slot:center>
        <ul class="center">
          <li
            :class="{ active: currentIndex === index }"
            @click="titleClick(index)"
            class="titleItem"
            v-for="(item, index) in titles"
            :key="index"
            
          >
            {{ item }}
          </li>
        </ul>
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "../../../components/NavBar/Navbar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
      // val: null,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('currentIndex',this.currentIndex)
    },
    backClick() {
      // this.val = null;
      console.log("asdasdasd");
      this.$router.back();
    },
   
  },
  computed: {
    isActive() {
      return this.currentIndex;
    },
  },
};
</script>

<style lang="less" scoped>
.detaiNavBar {
}

img {
  width: 18px;

  /* 图片在div居中显示 */
  vertical-align: middle;
}

.center {
  list-style: none;
  display: flex;
  .titleItem {
    flex: 1;
  }
}
.active {
  color: red;
}
</style>