<template>
  <div>
    <Button @on-click="handleMenu" :iconName="menuState? 'fas fa-times': 'fas fa-bars'"></Button>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  components: {
    Button
  },
  computed: {
    menuState() {
      return this.$store.state.menuState;
    }
  },
  methods: {
    handleMenu() {
      if (this.menuState === true) {
        this.$store.commit("handleMenuState", false);
      } else {
        this.$store.commit("handleMenuState", true);
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/variables.scss";
</style>
