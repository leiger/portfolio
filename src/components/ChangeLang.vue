<template>
  <div class="langBox">
    <span class="en" v-bind:class="{active: enActive}" @click="changeLang('en')">EN.</span>
    <span class="zh" v-bind:class="{active: zhActive}" @click="changeLang('zh')">中文.</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: "en",
      enActive: true,
      zhActive: false
    };
  },
  methods: {
    changeLang(lang) {
      if (lang === "en") {
        this.$i18n.locale = "en";
        this.enActive = true;
        this.zhActive = false;
      } else {
        this.$i18n.locale = "zh";
        this.enActive = false; 
        this.zhActive = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.langBox {
  font-size: 10px;
  color: #ccc;
  span {
    display: inline-block;
    cursor: pointer;
  }
  .en {
    margin-right: 5px;
  }
  .active {
    font-weight: bold;
    color: #333;
  }
}
</style>
