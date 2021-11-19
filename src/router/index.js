import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import about from "../views/about.vue";

Vue.use(VueRouter);
const routes = [
  { path: "/", component: index },
  { path: "/about", component: about },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
