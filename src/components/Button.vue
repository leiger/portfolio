<template>
  <button @click="handleClick" class="btn">
    <i :class="iconName"></i>
  </button>
</template>

<script>
export default {
  props: ["iconName"],
  methods: {
    handleClick() {
      this.$emit("on-click");
    }
  }
};
</script>
2
<style lang="scss">
@import "../assets/variables.scss";

.btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  color: #606266;
  background-color: #fff;
  cursor: pointer;
  outline: none;
  z-index: 20;

  &:hover {
    i {
      font-size: 16px;
    }
  }
  i {
    font-size: 14px;
    transition: all 400ms ease-in-out;
    color: #333;
  }
}
</style>
