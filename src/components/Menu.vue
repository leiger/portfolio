<template>
  <div class="menu">
    <div class="menuBox">
      <div class="menuItemsBox">
        <ul>
          <li
            class="icon wow slideInRight"
            v-for="(item,index) in menuItems"
            :key="item.name"
            :data-wow-delay="(index * 0.1)+'s'"
          >
            <router-link :class="{menuItem: item.active}" :to="item.link">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="contact">
        <div class="icons wow slideInRight" data-wow-delay="0.1s">
          <i class="far fa-envelope"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-github"></i>
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
  }
  .menuItem::after {
    position: absolute;
    content: "";
    width: 130%;
    height: 15px;
    top: 9px;
    left: -14%;
    background-color: rgba(65, 74, 107, 0.6);
  }
}

.contact {
  font-family: $rest-font;
  color: #aaa;
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
