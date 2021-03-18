<template>
  <div>
    <ul class="TabControl">
      <li
        class="TabControlItem"
        :class="{ active: currentIndex === index }"
        @click="tabControlClick(index)"
        v-for="(item, index) in tabItem"
        :key="index"
      >
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tabItem: {
      type: Array,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    tabControlClick(index) {
      this.currentIndex = index;
      this.$emit('tabIndexClick',this.currentIndex)
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.TabControl {
  display: flex;
  list-style: none;
  justify-content: space-around;
  font-size: 16px;
  text-align: center;
  .TabControlItem {
    flex: 1;

    
  }
}
.active {
  color: #ff8198;

  span {
    border-bottom: 2px #ff8198 solid;
    padding: 0 10px 5px 10px;
  }
}
</style>