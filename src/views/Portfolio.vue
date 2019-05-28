<template>
  <div id="portfolio">
    <transition
      appear
      enter-active-class="animated zoomInDown"
      leave-active-class="animated fadeOut"
      @afterLeave="handleLeave"
    >
      <div v-if="pageStatus" class="container">
        <div class="left">
          <div class="content">
            <vue-typer
              class="typer"
              :repeat="0"
              text="portfolio"
              :pre-type-delay="1000"
              :type-delay="120"
            ></vue-typer>
            <div class="type wow fadeIn" data-wow-delay="1.0s">Ha ha, just this one.</div>
            <ul class="wow fadeIn" data-wow-delay="1.2s">
              <li>User experience is the most important thing!</li>
              <li>Still working for responsive</li>
              <li>Thank for enjoying the journey of my portfolio!</li>
            </ul>
          </div>
        </div>

        <div class="right">
          <div class="content">
            <div class="colors">
              <h3>Color</h3>
              <div class="colorBox">
                <span
                  class="wow fadeInRight"
                  :data-wow-delay="index*0.1+0.5+'s'"
                  :key="color"
                  v-for="(color,index) in colors"
                  :style="{backgroundColor: color}"
                ></span>
              </div>
              <div class="details">
                <h3>Background Square(by css)</h3>
                <img class="wow fadeInRight" data-wow-delay="0.8s" src="../assets/images/portfolio/bg_texture1.png" alt="bg_texture">
                <img class="wow fadeInRight" data-wow-delay="0.9s" src="../assets/images/portfolio/bg_texture2.png" alt="bg_texture">
                <img class="wow fadeInRight" data-wow-delay="1s" src="../assets/images/portfolio/bg_texture3.png" alt="bg_texture">
              </div>
              <div class="animation">
                <h3>Animation</h3>
                <img class="wow fadeInRight" data-wow-delay="1.1s" src="../assets/images/portfolio/animation1.png" alt="animation">
                <img class="wow fadeInRight" data-wow-delay="1.2s" src="../assets/images/portfolio/animation2.png" alt="animation">
                <img class="wow fadeInRight" data-wow-delay="1.3s" src="../assets/images/portfolio/animation3.png" alt="animation">
              </div>
            </div>
          </div>
        </div>
        <a class="back" @click="handleBack">
          <i class="fas fa-times"></i>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  data() {
    return {
      pageStatus: true,
      colors: ["#f7f7f7", "#303030", "#efeae2", "#414a6b"]
    };
  },
  components: {
    VueTyper
  },
  computed: {},
  methods: {
    handleBack() {
      this.pageStatus = false;
    },
    handleLeave() {
      this.$router.push("/works");
    }
  }
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

#portfolio {
  flex: 1;
  display: flex;
  position: relative;

  .container {
    position: relative;
    width: 100%;
    flex: 1;
    display: flex;
    background-color: #545960;
    overflow: hidden;

    & > .left {
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
    .back {
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
      height: 40px;
      border-left: 2px solid #f7f7f7;
      border-bottom: 2px solid #f7f7f7;
      // border-radius: 20px;
      text-align: center;

      i {
        color: #f7f7f7;
        font-size: 18px;
        line-height: 40px;
      }
    }
  }
}

#portfolio {
  .left .content {
    .type {
      font-family: $rest-font;
      color: #141414;
      font-weight: 900;
      font-size: 24px;
    }
    .typer {
      display: block;
      z-index: 10;
      height: 120px;
      width: 400px;

      .custom.char {
        color: #f7f7f7;
        font-size: 80px;
        font-weight: 900;
        font-family: $main-font;
      }
    }
    ul {
      padding: 0;
      li {
        color: #f7f7f7;
        padding-bottom: 10px;
        font-size: 14px;
      }
    }
  }
}
#portfolio .right {
  flex: 1;
  position: relative;
  display: flex;

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      color: #808893;
    }

    .colors {
      span {
        display: inline-block;
        width: 50px;
        height: 50px;
        margin-right: 20px;
      }
    }
    .details {
      img {
        width: 150px;
        margin-right: 20px;
      }
    }
    .animation {
      img {
        width: 100px;
        margin-right: 20px;
      }
    }
  }
}
</style>

