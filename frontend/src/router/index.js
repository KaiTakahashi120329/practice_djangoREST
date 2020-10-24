<<<<<<< HEAD
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
=======
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
>>>>>>> test

Vue.use(VueRouter);

const routes = [
<<<<<<< HEAD
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
=======
    {
        path: "/",
        name: "Home",
        component: Hoem
    },
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
>>>>>>> test
