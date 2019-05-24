<template>
  <div class="contacts">
    <div class="links">
      <a class="icon wow slideInRight" data-wow-delay="0.2s">
        <i class="far fa-envelope"></i>
      </a>
      <a class="icon wow slideInRight" data-wow-delay="0.3s">
        <i class="fab fa-github"></i>
      </a>
      <a class="icon wow slideInRight" data-wow-delay="0.4s">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
    <div class="title">
      <div class="content">
        <i class="fas fa-wave-square"></i>
        Contact Me
      </div>
      <div class="cross"></div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.contacts {
  display: flex;
  width: 100%;
  height: $links-height;
}
.links {
  flex: 1;
  display: flex;
  .icon {
    flex: 1;
    text-align: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s linear;
    background-color: $icon-bg-color;
    &:hover {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      transform: translate3d(0, -5px, 0);
    }

    i {
      cursor: pointer;
      font-size: 20px;
      line-height: $links-height;
      color: #f8f8f8;
    }
  }
}
.title {
  flex: 1;
  background-color: $phone-bg-color;
  line-height: $links-height;
  color: #2a2d3e;
  display: flex;

  .content {
    flex: 1;
    text-align: center;
    font-size: 20px;
    font-weight: 600;

    i {
      margin-right: 10px;
    }
  }
  .cross {
    width: $menu-title-height;
    background-color: $menu-mix-color;
  }
}
</style>
