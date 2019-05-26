<template>
  <div class="home">
    <div class="container">
      <transition
        appear
        enter-active-class="animated bounceInDown"
        leave-active-class="animated bounceOutLeft"
      >
        <div v-if="pageStatus" class="left">
          <Intro/>
        </div>
      </transition>
      <transition
        appear
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutRight"
      >
        <div v-if="pageStatus" class="right">
          <div class="texture"></div>
        </div>
      </transition>
    </div>
    <transition
      appear
      enter-active-class="animated rotateIn"
      leave-active-class="animated rotateOut"
    >
      <div class="more" v-if="pageStatus">
        <Button @on-click="handleMore" iconName="fas fa-chevron-down"/>
      </div>
    </transition>
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
      setTimeout(() => {
        this.$router.push("/works");
      }, 1000);
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
  background-color: $home-left-bg-color;
  display: flex;
  align-items: center;
}
.right {
  width: 50%;
  flex: 1;
  background-color: #f7f7f7;
  background-image: linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),
    linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
  background-size: 10px 10px;
  position: relative;
}

.more {
  position: absolute;
  left: 50%;
  bottom: 0;
  margin: -22px;
}
</style>

