<template>
  <div class="works">
    <div class="container">
      <div class="left">
        <div class="leftTop">
          <vue-typer
            class="typer"
            :repeat="0"
            text="Works."
            :pre-type-delay="400"
            :type-delay="120"
          ></vue-typer>
        </div>
        <div class="leftBottom">
          <Work
            class="joyReserve"
            :colorInfo="colorInfos[3]"
            :textInfo="textInfos[3]"
            :animateInfo="animateInfos[3]"
            :linkInfo="linkInfos[3]"
          ></Work>
          <Work
            class="vmall"
            :colorInfo="colorInfos[2]"
            :textInfo="textInfos[2]"
            :animateInfo="animateInfos[2]"
            :linkInfo="linkInfos[2]"
          ></Work>
        </div>
      </div>

      <div class="right">
        <div class="row1">
          <div class="details">
            <p class="wow fadeInRight" data-wow-delay="0.6s">
              <span>A selection of</span>
              <span>my past 4 works.</span>
            </p>
          </div>
        </div>

        <div class="row2">
          <Work
            class="ruishen"
            :colorInfo="colorInfos[1]"
            :textInfo="textInfos[1]"
            :animateInfo="animateInfos[1]"
            :linkInfo="linkInfos[1]"
          ></Work>
          <Work
            class="blog"
            :colorInfo="colorInfos[0]"
            :textInfo="textInfos[0]"
            :animateInfo="animateInfos[0]"
            :linkInfo="linkInfos[0]"
          />
        </div>
      </div>
    </div>
    <router-link to="/about" class="about wow fadeInDown" data-wow-delay="0.5s">
      About Me
      <i class="fas fa-long-arrow-alt-right"></i>
    </router-link>
  </div>
</template>

<script>
import Work from "@/components/Work";
import { VueTyper } from "vue-typer";

export default {
  name: "home",
  data() {
    return {
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
          bgColor: "#efeae2",
          lineColor: "#ede4e0",
          textColor: "#47464c",
          maskColor: "#f0d563"
        }
      ],
      textInfos: [
        {
          id: 4,
          title: "My Portfolio.",
          type: "personal project",
          detail: "Ha ha, it's this one."
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
          linkTo: "/portfolio"
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
          enter: "animated fadeInRight",
          leave: "animated fadeOutDown"
        },
        {
          enter: "animated fadeInDown",
          leave: "animated fadeOutDown"
        },
        {
          enter: "animated fadeInUp",
          leave: "animated fadeOutDown"
        },
        {
          enter: "animated fadeInLeft",
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
    overflow: hidden;

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
      flex: 1;
      background-color: $works-bg-right-color;
      position: relative;
    }
  }

  .about {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 12px;
    color: $works-title-color;
    text-decoration: none;

    i {
      padding-left: 5px;
      padding-top: 2px;
    }
  }
}

.works .left {
  display: flex;
  flex-direction: column;

  .leftTop {
    flex: 2;
    display: flex;
    align-items: center;

    .typer {
      display: block;
      z-index: 10;

      .custom.char {
        color: $works-title-color;
        font-size: 120px;
        font-weight: 900;
        font-family: $main-font;
      }
    }
  }

  .leftBottom {
    flex: 1;
    display: flex;
    width: 100%;

    .joyReserve {
      flex: 1;
    }
    .vmall {
      flex: 1;
    }
  }
}

.works .right {
  display: flex;
  flex-direction: column;

  .row1 {
    flex: 2;
    display: flex;
    align-items: flex-end;

    .details {
      flex: 1;
      padding: 50px;
      color: $works-title-color;
      font-size: 18px;
      text-align: right;

      p {
        margin: 0;

        span {
          display: block;
          font-family: $rest-font;

          &:first-child {
            font-weight: 900;
            font-size: 26px;
          }
        }
      }
    }
  }
  .row2 {
    flex: 1;
    display: flex;

    .blog {
      flex: 1;
    }
    .ruishen {
      flex: 1;
    }
  }
}
</style>

