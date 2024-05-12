import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlantType from "../views/PlantTypeView.vue";
import PlantByLifeStyle from "../views/PlantBytLifeStyleView.vue";
import PlantGifts from "../views/PlantGiftsView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import PageNotFound from "../views/PageNotFound.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    // meta: { requiresAuth: true },
  },
  {
    path: "/plant-type",
    component: PlantType,
  },
  {
    path: "/plant-by-life-style",
    component: PlantByLifeStyle,
  },
  {
    path: "/plant-gifts",
    component: PlantGifts,
  },
  {
    path: "/about",
    component: AboutView,
  },
  {
    path: "/contact",
    component: ContactView,
  },
  { path: "/login", component: Login },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!auth.isAuthenticated()) {
//       next("/login");
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
