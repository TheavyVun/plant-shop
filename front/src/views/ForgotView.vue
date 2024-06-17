<template>
  <div>
    <h1>Login page</h1>
    <button @click="login"></button>
  </div>
  <form-forgotpw />
</template>
<script>
import FormForgotPW from "../components/FormForgotPW.vue";

export default {
  components: {
    "form-forgotpw": FormForgotPW,
  },
};
</script>
