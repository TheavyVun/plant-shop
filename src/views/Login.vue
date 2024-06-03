<template>
  <div>
    <h1>Login page</h1>
    <button @click="login"></button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axiosInstance from "@/plugins/axios";

const router = useRouter();
const login = () => {
  router.push("/app");
};

// Declare a reactive reference for items
const items = ref([]);

// Define the fetchData function
const fetchData = async () => {
  try {
    const response = await axiosInstance.get("/path/to/resource"); // Replace with your API endpoint
    items.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Fetch data when the component is mounted
onMounted(() => {
  fetchData();
});
</script>

<style scoped></style>
