import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/care-providers",
    name: "Care Providers",
    component: () =>
      import(
        /* webpackChunkName: "Care Providers" */ "../views/care-providers.vue"
      )
  },
  {
    path: "/care-workers",
    name: "Care Workers",
    component: () =>
      import(/* webpackChunkName: "Care Workers" */ "../views/care-workers.vue")
  },
  {
    path: "/nurses",
    name: "Nurses",
    component: () =>
      import(/* webpackChunkName: "Nurses" */ "../views/nurses.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
