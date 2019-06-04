<template>
  <div id="vmall">
    <transition
      appear
      enter-active-class="animated zoomInDown"
      leave-active-class="animated fadeOut"
      @afterLeave="handleLeave"
    >
      <div v-if="pageStatus" class="container">
        <div class="left">
          <div class="content">
            <!-- <img width="50" src="../assets/images/vmall.png" alt="Vmall"> -->
            <vue-typer
              class="typer"
              :repeat="0"
              :text="$t('works.vmall.name')"
              :pre-type-delay="1000"
              :type-delay="120"
            ></vue-typer>
            <div class="type wow fadeIn" data-wow-delay="0.6s">{{$t('works.vmall.desc')}}</div>
            <div class="details wow fadeIn" data-wow-delay="0.8s">
              <ul>
                <li>
                  {{$t('works.vmall.type')}}:
                  <span>{{$t('works.vmall.type_desc')}}</span>
                </li>
                <li>
                  {{$t('works.vmall.time')}}:
                  <span>{{$t('works.vmall.time_desc')}}</span>
                </li>
                <li>
                  {{$t('works.vmall.primary_tech')}}:
                  <span>Vue.js, Express, MongoDB</span>
                </li>
                <li>
                  {{$t('works.vmall.site_new')}}:
                  <span>
                    <a target="_blank" href="https://vmall.leiger.tech">https://vmall.leiger.tech</a>
                  </span>
                </li>
                <li>
                  {{$t('works.vmall.site_old')}}:
                  <span>
                    <a target="_blank" href="https://vmall1.leiger.tech">https://vmall1.leiger.tech</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="content">
            <div class="row1">
              <div class="vmall1 wow fadeIn" data-wow-delay="1s">
                <h3>Vmall1</h3>
                <ul>
                  <li v-for="item in $t('works.vmall.vmall1')" :key="item">{{item}}</li>
                </ul>
              </div>
              <div class="vmall2 wow fadeIn" data-wow-delay="1.2s">
                <h3>Vmall2</h3>
                <ul>
                  <li v-for="item in $t('works.vmall.vmall2')" :key="item">{{item}}</li>
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
  .left .content {
    margin-bottom: 50px;
    .type {
      font-family: $rest-font;
      color: #f4d242;
      font-weight: 900;
      font-size: 24px;
    }
    img {
    }
    .typer {
      display: block;
      z-index: 10;
      height: 120px;

      .custom.char {
        color: #f7f7f7;
        font-size: 80px;
        font-weight: 900;
        font-family: $main-font;
      }
    }
    .details {
      margin-top: 50px;
      font-size: 14px;
      font-family: $sub-font;
      font-weight: 400;

      ul {
        padding: 0;
        margin: 20px 0;
        list-style: none;
        li {
          padding: 5px 0;
          color: #606dab;

          span {
            display: inline-block;
            padding-left: 5px;
            color: #f7f7f7;

            a {
              text-decoration: underline;
              color: #f7f7f7;
            }
          }
        }
      }
    }
  }
}
#vmall .right {
  flex: 1;
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

