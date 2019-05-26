<template>
  <router-link to="/">
    <h1>
      <span class="name">Lei</span>
      <span class="mask">Hi</span>
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
a {
  width: $header-height;
  height: $header-height;
}
h1 {
  margin: 0;
  // padding: $header-height/4 0;
  width: $header-height;
  height: $header-height;
  position: relative;
  // background-color: #303030;
  background-color: #303030;
  background-image: linear-gradient(#464646 1px, transparent 0),
    linear-gradient(90deg, #464646 1px, transparent 0);
  background-size: 38px 38px;
  overflow: hidden;

  &:hover {
    .name {
      bottom: 200%;
    }
    .mask {
      left: 50%;
    }
  }

  span {
    font-family: $rest-font;
    display: block;
    margin-left: 10px;
    font-size: 22px;
    color: #f7f7f7;
  }
}
.name {
  right: 50%;
  position: absolute;
  bottom: 50%;
  margin: -14px;
  transition: all 400ms ease-in-out;
}
.mask {
  left: 200%;
  position: absolute;
  top: 50%;
  margin: -10px;
  transition: all 400ms ease-in-out;
}
</style>
