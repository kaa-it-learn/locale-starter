import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import { i18n, defaultLocale } from "./plugins/i18n";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: `/${defaultLocale}`,
    },
    {
      path: "/:lang",
      component: {
        template: "<router-view></router-view>"
      },
      beforeEnter(to, from, next) {
        console.log(to);
        const lang = to.params.lang;
        console.log(lang);
        if (!["en", "ru"].includes(lang)) return next("en");
        if (i18n.locale !== lang) {
          i18n.locale = lang;
        }
        return next();
      },
      children: [
        {
          path: "",
          component: Home
        },
        {
          path: "about",
          component: About
        }
      ]
    }
  ]
});
