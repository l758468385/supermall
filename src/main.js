import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueAwesomeSwiper from "vue-awesome-swiper";

// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

/* 加载iconfont */
import "./assets/iconfont/iconfont.css";

Vue.config.productionTip = false;

/* 创建事件总线 */
Vue.prototype.$bus = new Vue()


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
