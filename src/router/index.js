import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlantTypeView from "../views/PlantTypeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import PlantDetailsView from "../views/PlantDetailsView.vue";
import AllPlantsView from "../views/AllPlantsView.vue";
import PageNotFound from "../views/PageNotFound.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/plant/:type",
    name: "Plant",
    component: PlantTypeView,
  },
  {
    path: "/plant-detail/:id",
    name: "Plant-detail",
    component: PlantDetailsView,
  },
  {
    path: "/all-plants",
    name: "All Plants",
    component: AllPlantsView,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global Guard Example
router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !isAuthenticated()) next({ name: "login" });
  else next();
});

function isAuthenticated() {
  // Implement your authentication logic here
  return true;
}

export default router;
