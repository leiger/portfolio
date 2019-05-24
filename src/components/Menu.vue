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
      <div class="menuTitle">Menu</div>
    </div>
    <Contacts></Contacts>
  </div>
</template>

<script>
import Contacts from "./Contacts";

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
          name: "works",
          active: false
        },
        {
          link: "/about",
          name: "about",
          active: false
        }
      ]
    };
  },
  components: {
    Contacts
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
  background-color: $menu-color;
  display: flex;
  flex-direction: column;

  .menuBox {
    flex: 1;
    display: flex;
  }
  .menuItemsBox {
    padding: 50px;
    flex: 1;

    ul {
      margin: 0;
      padding: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      list-style: none;
    }
  }
  .menuTitle {
    width: $menu-title-height;
    background-color: $menu-title-bg-color;
    writing-mode: vertical-rl;
    text-align: center;
    line-height: $menu-title-height;
    color: $menu-title-color;
    font-size: 40px;
    font-weight: 600;
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
    color: #f8f8f8;
    font-size: 30px;
    line-height: 33px;
    text-decoration: none;
  }
  .menuItem::after {
    position: absolute;
    content: "";
    width: 120%;
    height: 15px;
    top: 9px;
    left: -10%;
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>
