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
