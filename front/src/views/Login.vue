<!-- <template>
  <div>
    <h1>Login page</h1>
    <button @click="login"></button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const login = () => {
  router.push("/app");
};
</script>

<style scoped></style> -->
<template>
  <div>
    <h1>Login page</h1>
    <button @click="login"></button>
  </div>
  <form-login />
</template>
<script>
import FormLogin from "../components/FormLogin.vue";

export default {
  components: {
    "form-login": FormLogin,
  },
};
</script>
