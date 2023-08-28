import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import QuestionScreen from "../views/QuestionScreen.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/questionscreen",
    name: "QuestionScreen",
    component: QuestionScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
