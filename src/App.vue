<template>
  <div class="w-full h-full flex flex-col">
    <NavBar />
    <div class="container m-auto mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style scoped></style>
