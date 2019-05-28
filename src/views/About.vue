<template>
  <div class="about">
    <div class="container">
      <div class="left">
        <div class="leftTop">
          <vue-typer
            class="title"
            :repeat="0"
            text="About."
            :pre-type-delay="1000"
            :type-delay="120"
          ></vue-typer>

          <img class="wow jackInTheBox" data-wow-delay="1s" src="../assets/images/avatar.png" alt>
        </div>
        <div class="leftBottom">
          <div class="desc">
            <p class="wow fadeIn" data-wow-delay="0.3s">
              Hello! I'm Lei Zhang. I'm a full stack developer who is passionate about design, building great user experience, fighting for simplicity over complexity and constantly learning. After learning something new, I will make notes in Evernote, and sometimes put them into
              <a
                @click="toBlog"
              >my blog</a>.
            </p>
            <p class="wow fadeIn" data-wow-delay="0.5s">
              I love open source. That's why I spend so much of my time—including evenings and weekends—on
              <a
                @click="toGithub"
              >GitHub</a>, as an active member of the open source community.
            </p>
            <p class="wow fadeIn" data-wow-delay="0.7s">
              I'm living in London, Ontario now and
              <strong>looking for a job opportunity.</strong> I'm willing to relocate within Ontario. Please feel free to contact me!
            </p>

            <p class="contact">
              <span class="icons wow slideInLeft" data-wow-delay="0.1s">
                <i class="far fa-envelope"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-github"></i>
              </span>
              <span class="phone wow slideInLeft">(+1) 226-977-4697</span>
              <span class="email wow slideInLeft">leiger2017@outlook.com</span>
            </p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="download">
          <span>Download my Resume</span>
          <i class="fas fa-download"></i>
        </div>
        <div class="rightTop">
          <div class="background">
            <div class="education">
              <h3>Education</h3>
              <section
                class="wow fadeInDown"
                :data-wow-delay="0.1*index+'s'"
                v-for="(edu,index) in educations"
                :key="edu.time"
              >
                <div class="circle"></div>
                <div class="time">{{edu.time}}</div>
                <div class="detail">{{edu.detail}}</div>
              </section>
            </div>
            <div class="experience">
              <h3>Experience</h3>
              <section
                class="wow fadeInDown"
                :data-wow-delay="0.1*index+0.2+'s'"
                v-for="(exp,index) in experiences"
                :key="exp.time"
              >
                <div class="circle"></div>
                <div class="time">{{exp.time}}</div>
                <div class="detail">{{exp.detail}}</div>
              </section>
            </div>
          </div>
        </div>

        <div class="rightBottom">
          <div class="skills">
            <div class="icon wow fadeInRight" v-for="icon in icons" :key="icon.name">
              <span class="iconfont" :class="icon.name"></span>
              <span class="title">{{icon.title}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "about",
  data() {
    return {
      educations: [
        {
          time: "Jul 2017 - Aug 2018",
          detail: "M.Eng. Software Engineering - Western University"
        },
        {
          time: "Sep 2013 - Jun 2017",
          detail:
            " B.Eng. Network Engineering - Beijing University of Posts and Telecommunications"
        }
      ],
      experiences: [
        {
          time: "Jun 2016 - Sep 2017",
          detail: "Co-founder - JoyReserve"
        },
        {
          time: "May 2017 - Jun 2017",
          detail: "Intern Developer - BUPT Computer Architecture Center Lab"
        },
        {
          time: "Sep 2015 - May 2016",
          detail: "Co-Founder - Ruisen Technologies"
        }
      ],
      icons: [
        {
          name: "icon-html",
          title: "Html5"
        },
        {
          name: "icon-css",
          title: "Css3"
        },
        {
          name: "icon-javascript",
          title: "JavaScript"
        },
        {
          name: "icon-vuejs",
          title: "Vue"
        },
        {
          name: "icon-react",
          title: "React"
        },
        {
          name: "icon-sass",
          title: "Sass"
        },
        {
          name: "icon-bootstrap",
          title: "Bootstrap"
        },
        {
          name: "icon-nodejs",
          title: "Nodejs"
        },
        {
          name: "icon-git",
          title: "Git"
        },
        {
          name: "icon-mysql",
          title: "Mysql"
        },
        {
          name: "icon-mongodb",
          title: "Mongodb"
        },
        {
          name: "icon-python",
          title: "Python"
        }
      ]
    };
  },
  components: {
    VueTyper
  },
  methods: {
    toBlog() {},
    toGithub() {}
  }
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

.about {
  flex: 1;
  display: flex;
  position: relative;
}
.container {
  width: 100%;
  flex: 1;
  display: flex;
}

.about .container {
  & > .left {
    position: relative;
    width: 50%;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;

    .leftTop {
      width: 100%;
      background-color: #303030;
      background-image: linear-gradient(#464646 1px, transparent 0),
        linear-gradient(90deg, #464646 1px, transparent 0);
      background-size: 10px 10px;
      flex: 1;
      display: flex;
      position: relative;

      .title {
        position: absolute;
        bottom: 0;
        left: 10%;
        margin: 0 0 -48px 0;
        z-index: 10;
        font-size: 80px;
        .custom.char {
          background: linear-gradient(#f7f7f7 50%, #303030 50%);
          color: transparent;
          font-family: $main-font;
          background-clip: text;
          font-weight: 900;
        }
      }
      img {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
      }
    }
    .leftBottom {
      width: 100%;
      flex: 3;
      background-color: #f7f7f7;
      background-image: linear-gradient(
          hsla(0, 0%, 100%, 0.3) 1px,
          transparent 0
        ),
        linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
      background-size: 10px 10px;
      position: relative;

      .desc {
        padding: 10%;

        p {
          margin-bottom: 30px;
          a {
            text-decoration: underline;
            color: #999;

            &:hover {
              color: inherit;
            }
          }
          strong {
            font-weight: bold;
            font-size: 17px;
          }
        }
        .contact {
          font-family: $rest-font;
          margin: 5px 0;
          color: #aaa;
          position: absolute;
          left: 10%;
          bottom: 10%;

          span {
            display: block;
            padding: 5px;
            font-size: 12px;
          }
          i {
            color: #aaa;
            cursor: pointer;
            padding-right: 20px;
            transition: all 400ms ease-in-out;
            &:hover {
              color: #47464c;
            }
            font-size: 16px;
          }
        }
      }
    }
  }

  .right {
    width: 50%;
    flex: 1;
    position: relative;
    flex-direction: column;
    display: flex;
    overflow: hidden;
    background-color: #f7f7f7;
    background-image: linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),
      linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
    background-size: 10px 10px;

    .download {
      position: absolute;
      right: 10%;
      top: 10%;
      color: #464646;
      cursor: pointer;

      &:hover {
        span {
          opacity: 1;
        }
        i {
          color: #303030;
        }
      }
      span {
        opacity: 0;
        font-size: 12px;
        display: inline-block;
        padding-right: 10px;
        transition: all 200ms ease-in-out;
      }
    }

    .rightTop {
      flex: 3;

      .background {
        padding: 10%;

        h3 {
          margin: 0 0 20px;
          display: inline-block;
        }

        .education,
        .experience {
          margin-bottom: 30px;
          section {
            height: 60px;
            border-left: 1px solid #414a6b;
            display: flex;
            align-items: center;

            .circle {
              width: 10px;
              height: 10px;
              background-color: #414a6b;
              border-radius: 50%;
              margin: 0 10px 0 -5px;
            }

            .time {
              font-size: 12px;
              margin-right: 20px;
              width: 120px;
            }

            .detail {
              flex: 1;
            }
          }
        }
      }
    }

    .rightBottom {
      flex: 1;
      position: relative;

      .skills {
        position: absolute;
        right: 10%;
        bottom: 40%;

        .icon {
          display: inline-block;
          width: 16.6%;
          margin-top: 10px;
          text-align: center;

          .iconfont {
            display: block;
            margin-bottom: 5px;
            color: #464646;
          }
          .title {
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>

