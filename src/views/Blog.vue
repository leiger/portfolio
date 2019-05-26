<template>
  <div id="blog">
    <div class="container">
      <transition
        appear
        enter-active-class="animated bounceInDown"
        leave-active-class="animated hinge"
      >
        <div class="left">
          <img
            class="wow bounceIn"
            data-wow-delay="1s"
            width="50"
            src="../assets/images/blog.png"
            alt="Blog"
          >
          <vue-typer
            class="typer"
            :repeat="0"
            text="Leiger's Blog"
            :pre-type-delay="1000"
            :type-delay="120"
          ></vue-typer>
          <div class="type">Share to the World.</div>
          <div class="details">
            <ul>
              <li>
                Position:
                <span>Co-founder</span>
              </li>
              <li>
                Time:
                <span>Jun 2016 - Sep 2017</span>
              </li>
              <li>
                Website:
                <span>
                  <a>https://joyreserve.com</a>
                </span>
              </li>
            </ul>
            <div class="links">
              <i class="far fa-play-circle"></i>
            </div>
          </div>
        </div>
      </transition>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated bounceOutDown"
      >
        <div class="right">
          <div class="content">
            <div class="row">
              <div class="col situation">
                <span class="step">1. Situation</span>
                <p>The story happened at</p>
              </div>
              <div class="col task">
                <span class="step">2. Task</span>
                <!-- <p>The story happened at</p> -->
              </div>
            </div>
            <div class="row">
              <div class="col action">
                <span class="step">3. Action</span>
                <!-- <p>The story happened at</p> -->
              </div>
              <div class="col result">
                <span class="step">4. Result</span>
                <!-- <p>The story happened at</p> -->
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  data() {
    return {
      steps: [
        {
          shortName: "S",
          name: "Situation"
        },
        {
          shortName: "T",
          name: "Task"
        },
        {
          shortName: "A",
          name: "Action"
        },
        {
          shortName: "R",
          name: "Result"
        }
      ]
    };
  },
  components: {
    VueTyper
  }
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

#blog {
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
      align-items: center;
      justify-content: center;
      background-color: #545960;
    }
  }
}

#blog {
  .type {
    font-family: $rest-font;
    color: #f7f7f7;
  }
  img {
    padding: 10px;
  }
  .typer {
    display: block;
    z-index: 10;
    height: 70px;

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
#blog .right {
  flex: 3;
  // background-color: $home-right-bg-color;
  background: #f7f7f7;
  background-image: linear-gradient(white 2px, transparent 0),
    linear-gradient(90deg, white 2px, transparent 0),
    linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),
    linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
  background-size: 50% 50%, 50% 50%, 15px 15px, 15px 15px;
  position: relative;
  display: flex;

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}

#blog .row {
  flex: 1;
  display: flex;
  width: 100%;

  .col {
    flex: 1;
    width: 100%;
    position: relative;

    .step {
      position: absolute;
      right: 30px;
      top: 30px;
      font-size: 16px;
      color: #aaa;
    }
  }
}

.situation {
  // background-color: #f6c616;
}
</style>

