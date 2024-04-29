<template>
  <div v-if="isRouteMatched" class="w-full h-full flex flex-col">
    <NavBar />
    <div class="container m-auto mt-4">
      <router-view></router-view>
    </div>
  </div>
  <PageNotFound v-else />
</template>

<script setup>
import { useRoute } from "vue-router";
import NavBar from "./components/NavBar.vue";
import PageNotFound from "./views/PageNotFound.vue";

const route = useRoute();
const isRouteMatched = () => {
  return route.matched.length > 0;
};
</script>
<style scoped></style>
