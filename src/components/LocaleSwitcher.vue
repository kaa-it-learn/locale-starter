<template>
  <ul>
    <li v-for="lang in lanuages" :key="lang" @click="changeLang(lang)">{{ lang }}</li>
  </ul>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  data: () => ({ lanuages: ["en", "ru"] }),
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>
