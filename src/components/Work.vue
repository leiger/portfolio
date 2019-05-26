<template>
  <transition
    appear
    :enter-active-class="animateInfo.enter"
    leave-active-class="hinge"
    mode="out-in"
    @after-leave="afterLeave"
  >
    <a v-if="pageStatus" class="workBox" :style="styleBgObject">
      <div class="id" :style="styleTextObject">{{textInfo.id}}</div>
      <div class="mask" :style="styleMaskObject">
        <p>{{textInfo.detail}}</p>
        <i @click.prevent="handleSeeMore" class="more fas fa-arrow-right"></i>
      </div>
      <div class="content" :style="styleTextObject">
        <p class="type">{{textInfo.type}}</p>
        <p class="title">{{textInfo.title}}</p>
      </div>
    </a>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      pageStatus: true,
      styleBgObject: {
        "background-image": `linear-gradient(${
          this.colorInfo.lineColor
        } 1px, transparent 0),
        linear-gradient(90deg, ${this.colorInfo.lineColor} 1px, transparent 0)`,
        "background-size": "10px 10px",
        "background-color": this.colorInfo.bgColor
      },
      styleTextObject: {
        color: this.colorInfo.textColor
      },
      styleMaskObject: {
        'background-color': this.colorInfo.maskColor
      }
    };
  },
  props: ["colorInfo", "imgSrc", "linkInfo", "textInfo", "animateInfo"],
  methods: {
    handleSeeMore() {
      this.pageStatus = false;
    },
    afterLeave() {
      this.$router.push(this.linkInfo.linkTo);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

a {
  position: relative;
  transition: all 0.2s linear;
  overflow: hidden;
  z-index: 10;
  // background-color: $icon-bg-color;
  .id {
    font-family: $rest-font;
    position: absolute;
    right: 30px;
    top: 30px;
  }
  .mask {
    position: absolute;
    left: 0;
    top: 100%;
    height: 100%;
    width: 100%;
    transform: translateY(120%) skewY(20deg);
    transition: all 500ms cubic-bezier(0.65, 0.05, 0.36, 1) 50ms;

    p {
      font-family: $rest-font;
      color: #f7f7f7;
      position: absolute;
      bottom: 30px;
      left: 30px;
    }
  }
  .content {
    position: absolute;
    left: 30px;
    bottom: 30px;
    transition: all 500ms cubic-bezier(0.65, 0.05, 0.36, 1) 50ms;

    .type {
      font-family: $rest-font;
      margin: 10px 0;
      transition: all 500ms cubic-bezier(0.65, 0.05, 0.36, 1) 0;
    }
    .title {
      display: inline-block;
      font-family: $sub-font;
      font-size: 24px;
      font-weight: 900;
      z-index: 10;
      margin: 0;
      transition: all 200ms cubic-bezier(0.65, 0.05, 0.36, 1) 0;
    }
  }

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transform: translate3d(0, -5px, 0);

    .mask {
      top: 0;
      transform: translateY(0%) skewY(0deg);
    }

    .content {
      bottom: 75px;

      .title {
        text-decoration: underline;
      }
      .type {
        color: #aaa;
      }
    }
  }
}
.more {
  position: absolute;
  right: 30px;
  top: 30px;
  color: #f7f7f7;
  transition: all 500ms cubic-bezier(0.65, 0.05, 0.36, 1) 50ms;

  &:hover {
    color: #aaa;
    font-size: 18px;
  }
}
</style>
