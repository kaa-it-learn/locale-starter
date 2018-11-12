<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>{{ $t("msg.hello") }}</h2>
    <LocaleSwitcher/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default {
  name: "home",
  components: {
    HelloWorld,
    LocaleSwitcher
  }
};
</script>
