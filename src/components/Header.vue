<template>
  <header>
    <Logo/>
  </header>
</template>

<script>
import Logo from "./Logo";
export default {
  data() {
    return {};
  },
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

header {
  height: $header-height;
  z-index: 10;
}

</style>
