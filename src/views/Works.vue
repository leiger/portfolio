<template>
  <div class="works">
    <div class="container">
      <transition
        appear
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated hinge"
      >
        <div v-if="pageStatus" class="left">
          <vue-typer
            class="typer"
            :repeat="0"
            text="Works."
            :pre-type-delay="1000"
            :type-delay="120"
          ></vue-typer>
          <div class="details">
            <p>Here includes some of my past works.</p>
            <ul>
              <li>Vmall - Vmall1 & Vmall2</li>
              <li>JoyReserve</li>
              <li>My Blog</li>
              <li>Ruishen Technology</li>
            </ul>
          </div>
        </div>
      </transition>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated bounceOutDown"
      >
        <div v-if="pageStatus" class="right">
          <div class="column1">
            <Work
              class="blog"
              pageStatus="pageStatus"
              :colorInfo="colorInfos[0]"
              :textInfo="textInfos[0]"
              :animateInfo="animateInfos[0]"
              :linkInfo="linkInfos[0]"
            />
            <Work
              class="ruishen"
              pageStatus="pageStatus"
              :colorInfo="colorInfos[1]"
              :textInfo="textInfos[1]"
              :animateInfo="animateInfos[1]"
              :linkInfo="linkInfos[1]"
            ></Work>
          </div>
          <div class="column2">
            <div class="ad">
              <div class="next">Next...</div>
              <div class="title">This Part is Prepared for Your Company!</div>
            </div>
            <div class="row2">
              <Work
                class="joyReserve"
                pageStatus="pageStatus"
                :colorInfo="colorInfos[2]"
                :textInfo="textInfos[2]"
                :animateInfo="animateInfos[2]"
                :linkInfo="linkInfos[2]"
              ></Work>
              <Work
                class="vmall"
                pageStatus="pageStatus"
                :colorInfo="colorInfos[3]"
                :textInfo="textInfos[3]"
                :animateInfo="animateInfos[3]"
                :linkInfo="linkInfos[3]"
              ></Work>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Work from "@/components/Work";
import { VueTyper } from "vue-typer";

export default {
  name: "home",
  data() {
    return {
      pageStatus: true,
      colorInfos: [
        {
          bgColor: "#303030",
          lineColor: "#464646",
          textColor: "#f8f8f8",
          maskColor: "#545960"
        },
        {
          bgColor: "#efeae2",
          lineColor: "#ede4e0",
          textColor: "#47464c",
          maskColor: "#f6c616"
        },
        {
          bgColor: "#303030",
          lineColor: "#464646",
          textColor: "#f8f8f8",
          maskColor: "#414a6b"
        },
        {
          bgColor: "#303030",
          lineColor: "#464646",
          textColor: "#f8f8f8",
          maskColor: "#f0d563"
        }
      ],
      textInfos: [
        {
          id: 4,
          title: "My Blog.",
          type: "personal project",
          detail: "Share to the World."
        },
        {
          id: 3,
          title: "Ruishen Technology.",
          type: "StartUp",
          detail: "The birth of dou9."
        },
        {
          id: 2,
          title: "Vmall.",
          type: "personal project",
          detail: "Open Source, New E-commerce site."
        },
        {
          id: 1,
          title: "JoyReserve.",
          type: "StartUp",
          detail: "A Convenient Reservation System."
        }
      ],
      linkInfos: [
        {
          linkTo: "/blog"
        },
        {
          linkTo: "/ruishen"
        },
        {
          linkTo: "/vmall"
        },
        {
          linkTo: "/joyReserve"
        }
      ],
      animateInfos: [
        {
          enter: "animated fadeInDown",
          leave: "animated fadeOutDownBig"
        },
        {
          enter: "animated fadeInLeft",
          leave: "animated fadeOutDown"
        },
        {
          enter: "animated fadeInUp",
          leave: "animated fadeOutDown"
        },
        {
          enter: "animated fadeInRight",
          leave: "animated fadeOutDown"
        }
      ]
    };
  },
  components: {
    VueTyper,
    Work
  },

  methods: {}
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

.works {
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
      background-color: $works-bg-left-color;
      display: flex;
      align-items: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .right {
      flex: 2;
      background-color: $works-bg-right-color;
      position: relative;
    }
  }
  .typer {
    display: block;
    z-index: 10;
    height: 108px;

    .custom.char {
      color: $works-title-color;
      font-size: 90px;
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
      margin: 0;
      list-style: none;
      li {
        // padding: 5px 0;
      }
    }
  }
}

.right {
  display: flex;

  .column1 {
    flex: 1;
    display: flex;
    flex-direction: column;

    .blog {
      flex: 1;
    }
    .ruishen {
      flex: 1;
    }
  }
  .column2 {
    flex: 3;
    display: flex;
    flex-direction: column;

    .ad {
      flex: 1;
      position: relative;
      font-family: $sub-font;
      color: #47464c;
      background-color: #f7f7f7;
      background-image: linear-gradient(
          hsla(0, 0%, 100%, 0.3) 1px,
          transparent 0
        ),
        linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
      background-size: 10px 10px;

      .next {
        position: absolute;
        top: 30px;
        right: 30px;
      }
      .title {
        position: absolute;
        bottom: 30px;
        left: 30px;
        font-size: 24px;
      }
    }
    .row2 {
      flex: 1;
      display: flex;

      .joyReserve {
        flex: 1;
      }
      .vmall {
        flex: 1;
      }
    }
  }
}
</style>

