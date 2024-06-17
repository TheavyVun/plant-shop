import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/main.scss";
import store from "./store/index.js";
// import store from './state'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
