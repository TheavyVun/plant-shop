import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlantTypeView from "../views/PlantTypeView.vue";
import PlantByLifeStyle from "../views/PlantBytLifeStyleView.vue";
import PlantGifts from "../views/PlantGiftsView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import PlantByTypeView from "../views/PlantByTypeView.vue";
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
    path: "/plant-type",
    name: "Plant Type",
    component: PlantTypeView,
  },
  {
    path: "/plant-by-life-style",
    name: "Plant By Life Style",
    component: PlantByLifeStyle,
  },
  {
    path: "/plant-gifts",
    name: "Plant Gifts",
    component: PlantGifts,
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
    path: "/plant-by-type/:id",
    name: "Plant By Type",
    component: PlantByTypeView,
  },
  {
    path: "/plant/:id",
    name: "Plant",
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

export default router;
