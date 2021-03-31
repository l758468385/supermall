<template>
  <div class="bottom">
    <div class="checkContent">
      <div class="checkWraper" @click="checkAllClick">
        <img
          class="select_btn"
          :class="{ isSelectAll: isSelectAll }"
          src="../../../assets/img/common/勾选中.svg"
          alt=""
        />
      </div>
      <div>
        <span>全选</span>
      </div>
    </div>

    <div class="resultContent">
      <div class="result">
        <span class="totalPrice"> 合计：{{ totalPrice }} </span>
      </div>
      <div class="goResult">
        <span>结算({{ goResult }})</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.checked != false;
        })
        .reduce((pre, cur) => {
          return cur.price * cur.count + pre;
        }, 0).toFixed(2);
    },
    /* 判断是是否全选 */
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return (
        this.cartList.filter((item) => item.checked != false).length ===
        this.cartList.length
      );
    },
    /* 计算件数 */
    goResult() {
      return this.cartList
        .filter((item) => (item.checked != false))
        .reduce((pre, cur) => {
          return cur.count + pre;
        }, 0);
    },
  },
  methods: {
    checkAllClick() {
      var selectRes = this.cartList.filter((item) => item.checked === true)
        .length;
      if (selectRes === this.cartList.length) {
        this.cartList.forEach((element) => {
          console.log("q");
          element.checked = false;
        });
        return null;
      }
      this.cartList.forEach((element) => {
        console.log("全选");
        return (element.checked = true);
      });
    },
  },
};
</script>
<style lang="less" scoped>
.bottom {
  width: 100%;
  position: fixed;
  bottom: 49px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  background-clip: padding-box;
}
.checkContent {
  color: #262626;
  display: flex;
  width: 70px;
  padding-left: 10px;
  justify-items: center;
  align-items: center;
}
.resultContent {
  flex: 1;
  display: flex;
  line-height: 49px;
  .result {
    width: 40%;
    text-align: end;
    padding-right: 10px;
    color: #262626;
  }
  .goResult {
    width: 60%;
    // background-color: red;
    line-height: 49px;
    text-align: center;
    span {
      border-radius: 20px;
      border: red 1px solid;
      padding: 10px 45px;
      background-color: #f2270c;
      color: #ffffff;
    }
  }
}
.checkWraper {
  padding-right: 5px;
}
.select_btn {
  //
  width: 20px;
  height: 20px;
  // background-color: #ff8198;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #8c8c8c;
}
.checked {
  background-color: #ff8198;
  border: none;
}
.isSelectAll {
  background-color: #ffaaba;
  border: none;
}
.totalPrice{
  font-weight: bold;
}
</style>