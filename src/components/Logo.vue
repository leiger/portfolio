<template>
  <router-link to="/">
    <h1>
      <span>LEI</span>
      <span>ZHANG</span>
    </h1>
  </router-link>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

h1 {
  margin: 0;
  padding: $header-height/4 0;
  width: $header-height;
  height: $header-height/2;
  display: inline-block;
  background-color: #000;

  span {
    display: block;
    margin-left: 5px;
    font-size: 18px;
    color: #fff;
  }
}
</style>
