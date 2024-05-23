<template>
  <div v-if="isRouteMatched" class="flex h-full w-full flex-col">
    <Navigation />
    <div>
      <router-view></router-view>
    </div>
  </div>
  <PageNotFound v-else />
</template>

<script setup>
import { useRoute } from "vue-router";
import Navigation from "./components/Navigation.vue";
import PageNotFound from "./views/PageNotFound.vue";

const route = useRoute();
const isRouteMatched = () => {
  return route.matched.length > 0;
};
</script>

<style scoped></style>
