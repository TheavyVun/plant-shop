<template>
  <div class="lg:px-[33px]">
    <div class="my-2">
      {{ message }}
    </div>
    <button
      class="rounded bg-green-500 p-2 text-white hover:bg-green-600"
      @click="goBack"
    >
      Back
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const message = ref("Plant details");
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>

<style scoped></style>
