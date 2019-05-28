<template>
  <div id="ruishen">
    <transition
      appear
      enter-active-class="animated zoomInDown"
      leave-active-class="animated zoomOutUp"
      @afterLeave="handleLeave"
    >
      <div v-if="pageStatus" class="container">
        <div class="left">
          <img
            class="wow bounceIn"
            data-wow-delay="1s"
            width="50"
            src="../assets/images/doujiu/doujiu.jpg"
            alt="Ruishen"
          >
          <vue-typer
            class="typer"
            :repeat="0"
            text="Ruishen Techonology"
            :pre-type-delay="1000"
            :type-delay="120"
          ></vue-typer>
          <div class="type">Open Source, New E-commerce site</div>
          <div class="details">
            <ul>
              <li>
                Position:
                <span>Co-founder</span>
              </li>
              <li>
                Time:
                <span>Sep 2015 - May 2016</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="right">
          <div class="content">
            <div class="desc"></div>
            <div class="carouselBox">
              <div class="carousel wow fadeIn" data-wow-delay="0.6s">
                <div class="imgBox">
                  <transition
                    appear
                    :enter-active-class="getEnterClass"
                    :leave-active-class="getLeaveClass"
                    mode="out-in"
                    :duration="800"
                  >
                    <img :key="currentNum" :src="products[currentNum-1]" alt>
                  </transition>
                </div>
                <div class="sideBox">
                  <div class="arrows">
                    <span @click.stop="handleLeft" class="circle">
                      <i class="fas fa-chevron-up"></i>
                    </span>
                    <span @click.stop="handleRight" class="circle">
                      <i class="fas fa-chevron-down"></i>
                    </span>
                  </div>
                  <div class="num">
                    <span>{{currentNum}}</span>
                    <span>in</span>
                    <span>{{totalNum}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="back" @click="handleBack">
          <i class="fas fa-times"></i>
        </a>
        <img class="img1 wow rotateIn" data-wow-delay="1s" :src="images[0]" alt="doujiu">
        <img class="img2 wow bounceInLeft" data-wow-delay="1.2s" :src="images[1]" alt="doujiu">
        <img class="img3 wow rotateIn" data-wow-delay="1.4s" :src="images[2]" alt="doujiu">
        <img class="img4 wow bounceInRight" data-wow-delay="1.6s" :src="images[3]" alt="doujiu">
      </div>
    </transition>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
import img1 from "../assets/images/doujiu/1.png";
import img2 from "../assets/images/doujiu/2.png";
import img3 from "../assets/images/doujiu/3.png";
import img4 from "../assets/images/doujiu/4.png";

import product1 from "../assets/images/doujiu/1.jpg";
import product2 from "../assets/images/doujiu/2.jpg";
import product3 from "../assets/images/doujiu/3.jpg";
import product4 from "../assets/images/doujiu/4.jpg";
import product5 from "../assets/images/doujiu/5.jpg";

export default {
  data() {
    return {
      images: [img1, img2, img3, img4],
      products: [product1, product2, product3, product4, product5],
      currentNum: 1,
      totalNum: 5,
      pageStatus: true,
      direction: "left"
    };
  },
  components: {
    VueTyper
  },
  computed: {
    getEnterClass() {
      if (this.direction === "left") return "animated fadeInDown";
      return "animated fadeInUp";
    },
    getLeaveClass() {
      if (this.direction === "left") return "animated fadeOutDown";
      return "animated fadeOutUp";
    }
  },
  methods: {
    handleLeft() {
      this.direction = "left";
      if (this.currentNum - 1 <= 0) this.currentNum = this.totalNum;
      else this.currentNum = this.currentNum - 1;
    },
    handleRight() {
      this.direction = "right";
      if (this.currentNum + 1 > this.totalNum) this.currentNum = 1;
      else this.currentNum = this.currentNum + 1;
    },
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

#ruishen {
  flex: 1;
  display: flex;
  position: relative;

  .container {
    position: relative;
    width: 100%;
    flex: 1;
    display: flex;
    background-color: #f6c616;
    overflow: hidden;

    & > .left {
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .img1 {
      width: 50px;
      position: absolute;
      right: 60px;
      bottom: 0;
    }
    .img2 {
      width: 50px;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .img3 {
      width: 50px;
      position: absolute;
      left: 50%;
      top: 0;
      margin-left: -35px;
      margin-top: -20px;
      transform: rotate(180deg);
    }
    .img4 {
      width: 50px;
      position: absolute;
      right: 0;
      bottom: 0;
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

#ruishen {
  .type {
    font-family: $rest-font;
    color: #141414;
    font-weight: 900;
  }
  img {
    width: 80px;
    padding: 10px;
  }
  .typer {
    display: block;
    z-index: 10;
    height: 70px;
    line-height: 70px;

    .custom.char {
      color: #f7f7f7;
      font-size: 40px;
      font-weight: 900;
      font-family: $main-font;
    }
  }
  .details {
    color: $works-title-color;
    font-size: 14px;
    font-family: $sub-font;
    font-weight: 400;

    ul {
      padding: 0;
      margin: 20px 0;
      list-style: none;
      li {
        padding: 5px 0;

        span {
          display: inline-block;
          padding-left: 5px;
        }
      }
    }
  }
}
#ruishen .right {
  flex: 2;
  position: relative;
  display: flex;

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;

    .desc {
      flex: 1;
    }
    .carouselBox {
      flex: 1;
      display: flex;

      .carousel {
        display: flex;
        flex: 1;
        position: relative;
        height: 90%;
        font-size: 0;
        overflow: hidden;

        .imgBox {
          height: 100%;
          position: absolute;
          left: 10%;
          top: 0;

          img {
            height: 100%;
            width: auto;
            padding: 0;
          }
        }
      }
    }
  }

  .sideBox {
    position: absolute;
    left: 5%;
    bottom: 10px;
    margin-left: -10px;

    .arrows {
      margin-bottom: 10px;
      .circle {
        display: block;
        text-align: center;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background-color: #303030;
        color: #fff;
        cursor: pointer;
        font-size: 0;
        margin-bottom: 5px;

        i {
          display: inline-block;
          font-size: 10px;
          margin-top: 5px;
        }
      }
    }
    .num {
      width: 20px;
      font-size: 10px;
      text-align: center;
      span {
        display: block;
      }
    }
  }
}
</style>

