<template>
  <div class="switch">
    <transition
      mode="out-in"
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
      :duration="800"
    >
      <Button
        :key="menuState"
        @on-click="handleMenu"
        :iconName="menuState? 'fas fa-times': 'fas fa-bars'"
        class="btn"
      ></Button>
    </transition>
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

<style lang="scss" scoped>
@import "../assets/variables.scss";
.btn {
  border-left: 1px solid #eaeaea;
}
</style>
