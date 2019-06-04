<template>
  <div id="joyReserve">
    <transition
      appear
      enter-active-class="animated zoomInLeft"
      leave-active-class="animated fadeOut"
      @afterLeave="handleLeave"
    >
      <div v-if="pageStatus" class="container">
        <div class="left">
          <div class="content">
            <vue-typer
              class="typer"
              :repeat="0"
              :text="$t('works.joyReserve.name')"
              :pre-type-delay="1000"
              :type-delay="120"
            ></vue-typer>
            <div class="type wow fadeIn" data-wow-delay="1.0s">{{$t('works.joyReserve.desc')}}</div>
            <div class="details wow fadeIn" data-wow-delay="1.2s">
              <ul>
                <li>
                  <span>{{$t('works.joyReserve.position')}}:</span>
                  <span>{{$t('works.joyReserve.position_desc')}}</span>
                </li>
                <li>
                  <span>{{$t('works.joyReserve.time')}}:</span>
                  <span>Jun 2016 - Sep 2017</span>
                </li>
                <li>
                  <span>{{$t('works.joyReserve.website')}}:</span>
                  <span>
                    <a target="_blank" href="https://www.joyreserve.com">https://www.joyreserve.com</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="col1">
            <div class="row1">
              <div class="desc1 wow fadeIn" data-wow-delay="1.4s">
                <h3>{{$t('works.joyReserve.details.title')}}</h3>
                <ul>
                  <li v-for="item in $t('works.joyReserve.details.desc')" :key="item">{{item}}</li>
                </ul>
              </div>
            </div>

            <div class="carouselBox">
              <div class="carousel1 wow fadeIn" data-wow-delay="1.6s">
                <div class="imgBox">
                  <transition
                    appear
                    :enter-active-class="getEnterClass1"
                    :leave-active-class="getLeaveClass1"
                    mode="out-in"
                    :duration="800"
                  >
                    <img :key="currentNum1" :src="images1[currentNum1-1]" alt>
                  </transition>
                </div>
                <div class="sideBox">
                  <div class="arrows">
                    <span @click.stop="handleUp" class="circle">
                      <i class="fas fa-chevron-up"></i>
                    </span>
                    <span @click.stop="handleDown" class="circle">
                      <i class="fas fa-chevron-down"></i>
                    </span>
                  </div>
                  <div class="num">
                    <span>{{currentNum1}}</span>
                    <span>in</span>
                    <span>{{totalNum1}}</span>
                  </div>
                </div>
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
import img1_1 from "../assets/images/joyreserve/1.png";
import img1_2 from "../assets/images/joyreserve/2.png";
import img1_3 from "../assets/images/joyreserve/3.png";
import img1_4 from "../assets/images/joyreserve/4.png";
import img1_5 from "../assets/images/joyreserve/5.png";
import img1_6 from "../assets/images/joyreserve/6.png";
import img1_7 from "../assets/images/joyreserve/7.png";
import img1_8 from "../assets/images/joyreserve/8.png";
import img1_9 from "../assets/images/joyreserve/9.png";
import img1_10 from "../assets/images/joyreserve/10.png";

export default {
  data() {
    return {
      currentNum1: 1,
      totalNum1: 10,
      images1: [
        img1_1,
        img1_2,
        img1_3,
        img1_4,
        img1_5,
        img1_6,
        img1_7,
        img1_8,
        img1_9,
        img1_10
      ],
      currentNum2: 1,
      direction1: "up",
      pageStatus: true
    };
  },
  computed: {
    getEnterClass1() {
      if (this.direction1 === "up") return "animated fadeInDown";
      return "animated fadeInUp";
    },
    getLeaveClass1() {
      if (this.direction1 === "up") return "animated fadeOutDown";
      return "animated fadeOutUp";
    }
  },
  components: {
    VueTyper
  },
  methods: {
    handleUp() {
      this.direction1 = "up";
      if (this.currentNum1 - 1 <= 0) this.currentNum1 = this.totalNum1;
      else this.currentNum1 = this.currentNum1 - 1;
    },
    handleDown() {
      this.direction1 = "down";
      if (this.currentNum1 + 1 > this.totalNum1) this.currentNum1 = 1;
      else this.currentNum1 = this.currentNum1 + 1;
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

#joyReserve {
  flex: 1;
  display: flex;
  position: relative;

  .container {
    width: 100%;
    flex: 1;
    display: flex;

    & > .left {
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-color: #f0d563;
    }
  }

  .back {
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 40px;
    // border-radius: 20px;
    text-align: center;

    i {
      color: #f7f7f7;
      font-size: 18px;
      line-height: 40px;
    }
  }
}

#joyReserve .left {
  .content {
    .type {
      font-family: $rest-font;
      color: #f7f7f7;
      font-weight: bold;
      font-size: 24px;
    }
    .typer {
      display: block;
      z-index: 10;
      height: 120px;
      width: 400px;

      .custom.char {
        color: #383a61;
        font-size: 70px;
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
          font-size: 14px;

          span {
            display: inline-block;
            padding-left: 5px;

            &:first-child {
              color: #cbae37;
            }

            a {
              text-decoration: underline;
              color: #383a61;
            }
          }
        }
      }
    }
  }
}
#joyReserve .right {
  flex: 1;
  // background-color: $home-right-bg-color;
  position: relative;
  display: flex;
  .col1 {
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: #f0d563;
    // background-image: linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),
    //   linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
    // background-size: 10px 10px;

    .row1 {
      flex: 1;
    }

    .carouselBox {
      flex: 2;
      position: relative;
      display: flex;

      .carousel1 {
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
          width: auto;

          img {
            height: 100%;
          }
        }
      }
    }
  }
  .col2 {
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: #f0d563;
    // background-image: linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),
    //   linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
    // background-size: 10px 10px;

    .carouselBox {
      flex: 2;
      display: flex;
      position: relative;

      .carousel2 {
        position: absolute;
        left: 10%;
        top: 10%;
        height: 90%;
        overflow: hidden;

        img {
          height: 100%;
        }
      }
    }
    .desc2 {
      flex: 1;
    }
  }

  .desc1,
  .desc2 {
    h3 {
      margin: 10% 10% 20px;
      font-size: 16px;
      color: #cbae37;
      font-weight: 700;
    }
    ul {
      margin-left: 10%;
      padding-left: 0;

      li {
        padding: 0 0 5px;
        color: #383a61;
        font-size: 14px;
      }
    }
    a {
      position: absolute;
      right: 10%;
      bottom: 10%;
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

