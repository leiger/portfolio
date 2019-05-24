<template>
  <div class="home">
    <div class="container">
      <transition
        appear
        enter-active-class="animated bounceInDown"
        leave-active-class="animated hinge"
      >
        <div v-if="pageStatus" class="left">
          <Intro/>
        </div>
      </transition>
      <transition
        appear
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutDown"
      >
        <div v-if="pageStatus" class="right">
          <div class="texture"></div>
        </div>
      </transition>
    </div>

    <Button @on-click="handleMore" class="more" iconName="fas fa-chevron-down"/>
  </div>
</template>

<script>
import Intro from "@/components/Intro";
import Button from "@/components/Button";

export default {
  name: "home",
  data() {
    return {
      pageStatus: true
    };
  },
  components: {
    Intro,
    Button
  },

  methods: {
    handleMore() {
      this.$store.commit("handleMenuState", false);
      this.pageStatus = false;
      this.$router.push("/works");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.home {
  flex: 1;
  display: flex;
  position: relative;
}
.container {
  width: 100%;
  flex: 1;
  display: flex;
}

.left {
  position: relative;
  width: 50%;
  flex: 1;
  background-color: #414a6b;
  display: flex;
  align-items: center;
}
.right {
  width: 50%;
  flex: 1;
  background-color: #f8f8f8;
  position: relative;
}

.more {
  position: absolute;
  left: 50%;
  bottom: 0;
  margin: -22px;
}
</style>

