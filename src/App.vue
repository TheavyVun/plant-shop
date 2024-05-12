<template>
  <div v-if="isRouteMatched" class="flex h-full w-full flex-col">
    <NavBar />
    <div class="">
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
