<template>
  <div class="intro">
    <vue-typer class="typer" :repeat="0" :text="text1" :pre-type-delay="1000" :type-delay="120"></vue-typer>
    <vue-typer
      class="typer"
      :repeat="0"
      :text="text2"
      :pre-type-delay="3500"
      :type-delay="120"
      line-wrap="break-word"
    ></vue-typer>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  data() {
    return {
      text1: "Hello, I'm Lei.",
      text2: "I'm a Full Stack \nDeveloper."
    };
  },
  components: {
    VueTyper,
  }
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

.intro {
  position: absolute;
  left: $header-height*1.5;

  .typer {
    display: block;
    margin: 0 0 15px;

    .custom.char {
      color: $main-font-color;
      font-family: $rest-font;
      // text-decoration: underline #000 dotted;
      font-size: 60px;
      font-weight: bold;
      // text-shadow: 4px -4px 5px rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
