<template>
  <div class="menu">
    <div class="menuBox">
      <div class="menuItemsBox">
        <div class="title wow slideInDown">Menu</div>
        <ul>
          <li
            class="icon wow slideInRight"
            v-for="(item,index) in menuItems"
            :key="item.name"
            :data-wow-delay="(index * 0.1)+'s'"
          >
            <a
              @click="handleMenuChange(index)"
              :class="{menuItem: item.link === route}"
            >{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="contact">
        <div class="icons wow slideInRight" data-wow-delay="0.1s">
          <a href="Mailto:leiger2017@outlook.com">
            <i class="far fa-envelope"></i>
          </a>
          <a target="_blank" href="https://github.com/leiger">
            <i class="fab fa-github"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/leiger_/">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <p class="phone wow slideInRight" data-wow-delay="0.2s">(+1) 226-977-4697</p>
        <p class="email wow slideInRight" data-wow-delay="0.3s">leiger2017@outlook.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          link: "/",
          name: "Main",
          active: true
        },
        {
          link: "/works",
          name: "Works",
          active: false
        },
        {
          link: "/about",
          name: "About",
          active: false
        }
      ]
    };
  },
  computed: {
    route() {
      return this.$route.path;
    }
  },
  methods: {
    handleMenuChange(index) {
      this.$router.push(this.menuItems[index].link);
      setTimeout(() => {
        this.$store.commit("handleMenuState", false);
      }, 200);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.menu {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 50%;
  background-color: #f8f8f8;
  // background-color: #efeae2;
  // background-image: linear-gradient(#ede4e0 1px, transparent 0),
  //   linear-gradient(90deg, #ede4e0 1px, transparent 0);
  // background-size: 10px 10px;
  display: flex;
  flex-direction: column;

  .menuBox {
    flex: 1;
    display: flex;
    padding: 80px 50px;
  }
  .menuItemsBox {
    flex: 2;
    position: relative;

    .title {
      position: absolute;
      // transform: rotate(-90deg) translateX(-100%);
      writing-mode: vertical-rl;
      text-orientation: upright;
      font-size: 12px;
      left: 0;
      top: 0;
    }
    ul {
      margin: 0;
      padding: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      list-style: none;
    }
  }
  .contact {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}

li {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    position: relative;
    line-height: 1.1;
    font-weight: bold;
    color: #47464c;
    font-size: 30px;
    line-height: 33px;
    text-decoration: none;
    font-family: $sub-font;

    &::before {
      position: absolute;
      content: "";
      width: 110%;
      height: 13px;
      top: 10px;
      left: -5%;
      background-color: rgba(65, 74, 107, 0.6);

      transform-origin: center left;
      transform: scaleX(0);
      transition: all 200ms ease-in-out;
    }

    &:hover {
      &::before {
        transform: scaleX(1);
      }
    }
  }
  .menuItem::before {
    transform: scaleX(1);
  }
}

.contact {
  font-family: $rest-font;
  a {
    color: #aaa;
  }
  .icons {
    padding: 5px 0;
    cursor: pointer;

    i {
      padding-right: 20px;
      transition: all 400ms ease-in-out;
      &:hover {
        color: #47464c;
      }
    }
  }
  p {
    margin: 5px 0;
    font-size: 12px;
  }
}
</style>
