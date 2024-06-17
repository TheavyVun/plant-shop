<template>
  <div>
    <h1>Login page</h1>
    <button @click="login"></button>
  </div>
  <form-register />
</template>
<script>
import FormRegister from "../components/FormRegister.vue";

export default {
  components: {
    "form-register": FormRegister,
  },
};
</script>
