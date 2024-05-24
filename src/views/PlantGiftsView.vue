<template>
  <div class="h-auto w-full">
    <div class="my-[20px] flex flex-col items-center justify-center">
      <h1 class="mt-1 text-center text-[26px]">Plants Gift</h1>
      <div class="m-auto mt-5 w-[80px] border-b-[3px] border-green-600"></div>
    </div>
    <PlantCard :plants="plants" />
    <iframe
      class="mt-[100px] h-[350px] w-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.691465513618!2d144.96175371525688!3d-37.811466079756175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d7e62f05a5f%3A0x69f14f0e253266!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1589274753731!5m2!1sen!2sin"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Footer from "../components/Footer.vue";
import PlantCard from "../components/PlantCard.vue";
import { data } from "../data";

const route = useRoute();
const plants = data?.plants;
const id = route.params.id - 1;
const plant = ref(data?.plants[id]);

const currentIndex = ref(0);
const mainImage = ref(null);

const updateMainImage = () => {
  if (plant.value && plant.value.images && plant.value.images.length > 0) {
    mainImage.value = plant.value.images[currentIndex.value].image;
  }
};

onMounted(() => {
  updateMainImage();
});

const changeMainImage = (index) => {
  currentIndex.value = index;
  updateMainImage();
};

const nextImage = () => {
  if (currentIndex.value < plant.value.images.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
  updateMainImage();
};

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = plant.value.images.length - 1;
  }
  updateMainImage();
};
</script>

<style scoped></style>
