import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: [],
  },
  mutations: {
    add_counter(state, payload) {
      console.log(payload);
      payload.count++;
    },
    add_cart(state, payload) {
      payload.checked = false
      state.cartList.push(payload);
    },
  },
  actions: {
    addCart(context, payload) {
      let oldProduct = context.state.cartList.find(
        (item) => item.iid === payload.iid
      );
      console.log(oldProduct);
      // 如果已经有了这个商品，数量+1
      if (oldProduct) {
        console.log(oldProduct);
        context.commit("add_counter", oldProduct);
      } else {
        console.log(payload);
        // 没有就push进去,添加为新商品
        payload.count = 1;
        context.commit("add_cart", payload);
      }
    },
  },
  getters: {
    cartLength(state) {
      return state.cartList.length;
    },
    cartList(state) {
      return state.cartList;
    },
  },
  modules: {},
});
