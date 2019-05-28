<template>
  <div id="vmall">
    <transition
      appear
      enter-active-class="animated zoomInDown"
      leave-active-class="animated zoomOutUp"
      @afterLeave="handleLeave"
    >
      <div v-if="pageStatus" class="container">
        <div class="left">
          <img width="50" src="../assets/images/vmall.png" alt="Vmall">
          <vue-typer
            class="typer"
            :repeat="0"
            text="Vmall"
            :pre-type-delay="1000"
            :type-delay="120"
          ></vue-typer>
          <div class="type">Open Source, New E-commerce site</div>
          <div class="details">
            <ul>
              <li>
                Type:
                <span>Personal Open Source Project</span>
              </li>
              <li>
                Time:
                <span>Oct 2017 - Present</span>
              </li>
              <li>
                Primary Tech:
                <span>Vue.js, Express, MongoDB</span>
              </li>
              <li>
                Site (old):
                <span>
                  <a>https://vmall1.leiger.tech</a>
                </span>
              </li>
              <li>
                Site (new):
                <span>
                  <a>https://vmall2.leiger.tech</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="right">
          <div class="content">
            <div class="row1">
              <div class="vmall1">
                <h3>Vmall1</h3>
                <ul>
                  <li>Full Stack Project</li>
                  <li>Responsive Design</li>
                  <li>Https support</li>
                  <li>Address Manage</li>
                  <li>Products sort and filter</li>
                  <li>...</li>
                </ul>
              </div>
              <div class="vmall2">
                <h3>Vmall2</h3>
                <ul>
                  <li>Based on Vmall1</li>
                  <li>New Design</li>
                  <li>Restful Api</li>
                  <li>Easily change web Style(based on less)</li>
                  <li>Order Status</li>
                  <li>Admin Manage System (React)</li>
                  <li>Order History</li>
                  <li>More Functions Coming soon!</li>
                </ul>
              </div>
            </div>
            <div class="row2">
              <div class="imgBox wow slideInUp" data-wow-delay="1s"></div>
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
      pageStatus: true
    };
  },
  components: {
    VueTyper
  },
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

#vmall {
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
      display: flex;
      // align-items: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #414a6b;
    }
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

#vmall {
  .type {
    font-family: $rest-font;
    color: #f4d242;
    font-weight: 900;
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
    font-size: 14px;
    font-family: $sub-font;
    font-weight: 400;

    ul {
      padding: 0;
      margin: 20px 0;
      list-style: none;
      li {
        padding: 5px 0;
        color: #ddd;

        span {
          display: inline-block;
          padding-left: 5px;
          color: #f7f7f7;
        }
      }
    }
  }
}
#vmall .right {
  flex: 2;
  // background-color: $home-right-bg-color;
  background: #414a6b;

  position: relative;
  display: flex;

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;

    .row1 {
      flex: 1;
      display: flex;
      .vmall1 {
        flex: 1;
        padding: 50px;
      }
      .vmall2 {
        flex: 2;
        padding: 50px;
      }
      h3 {
        color: #606dab;
        font-size: 16px;
      }
      ul {
        padding: 0;

        li {
          color: #f7f7f7;
          font-size: 14px;
          padding: 5px 0;
        }
      }
    }
    .row2 {
      flex: 1;
      display: flex;
      background-color: #414a6b;
      // background-image: linear-gradient(#ede4e0 1px, transparent 0),
      //   linear-gradient(90deg, #ede4e0 1px, transparent 0);
      // background-size: 10px 10px;
      .imgBox {
        flex: 1;
        background-image: url("../assets/images/vmall/vmall_bg.png");
        background-position: top;
        background-size: cover;
      }
    }
  }
}
</style>

