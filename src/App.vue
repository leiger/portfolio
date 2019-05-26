<template>
  <div id="app">
    <Header class="header"/>
    <div class="container">
      <router-view/>
      <transition
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutRight"
      >
        <Menu class="menu" v-if="menuState"/>
      </transition>
      <MenuSwitch class="menuSwitch"/>
    </div>
    <footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu";
import MenuSwitch from "@/components/MenuSwitch";
import wow from "wow.js";

new wow().init();
export default {
  components: {
    Header,
    Menu,
    MenuSwitch
  },
  computed: {
    menuState() {
      return this.$store.state.menuState;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables.scss";

#app {
  padding: 0 $header-height/2;
  min-width: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.header {
  position: relative;
  left: -$header-height/2;
  top: 0;
}
.container {
  position: relative;
  flex: 1;
  display: flex;
  margin-top: -$header-height/2;

  .menu {
    position: absolute;
    top: 0;
    right: 0;
  }

  .menuSwitch {
    position: absolute;
    right: -22px;
    top: 25%;
    margin: -22px 0 0 0;
  }
}

footer {
  width: 100%;
  height: $header-height/2;
}
</style>
