<template>
  <div class="h-auto w-full">
    <div class="m-auto my-[50px] h-auto xs:px-3 sm:w-[90%] lg:w-[70%]">
      <div
        class="my-[50px] flex h-auto w-full flex-wrap justify-between xs:px-3 md:px-3 lg:px-0"
      >
        <div class="xs:w-full sm:w-full md:w-full xl:w-[49%]">
          <div class="relative">
            <img
              v-if="mainImage"
              :src="mainImage"
              alt="Not found"
              class="h-[506.5px] w-full rounded-xl"
            />
            <button
              v-if="mainImage"
              @click="prevImage"
              :disabled="currentIndex === 0"
              :class="{
                'hover:bg-[rgba(17,17,17,0.5)]': currentIndex === 0,
              }"
              class="absolute left-[10px] top-1/2 h-[30px] w-[30px] -translate-y-1/2 transform rounded-full bg-[rgba(17,17,17,0.5)] p-2 text-white shadow-md hover:bg-[rgba(17,17,17)] hover:shadow-lg"
            >
              <img
                src="../assets/images/icons/previous.svg"
                width="20"
                alt="Not found"
              />
            </button>
            <button
              v-if="mainImage"
              @click="nextImage"
              :disabled="currentIndex === plant.images.length - 1"
              :class="{
                'hover:bg-[rgba(17,17,17,0.5)]':
                  currentIndex === plant.images.length - 1,
              }"
              class="absolute right-[10px] top-1/2 h-[30px] w-[30px] -translate-y-1/2 transform rounded-full bg-[rgba(17,17,17,0.5)] p-2 text-white shadow-md hover:bg-[rgba(17,17,17)] hover:shadow-lg"
            >
              <img
                src="../assets/images/icons/next.svg"
                width="20"
                alt="Not found"
              />
            </button>
          </div>
          <div
            class="my-[30px] flex w-full flex-wrap items-center justify-center"
          >
            <div
              v-for="(image, index) in plant?.images"
              :key="image?.image"
              @click="changeMainImage(index)"
              class="cursor-pointer p-[0.5em] sm:h-[25%] sm:w-[25%] md:h-[20%] md:w-[20%] lg:h-[16.66%] lg:w-[16.66%]"
            >
              <img
                :src="image?.image"
                :class="{ 'border-2 border-blue-500': currentIndex === index }"
                class="h-[65px] w-[65px] rounded-full bg-cover bg-center object-cover duration-300 hover:scale-110"
                alt="Not found"
              />
            </div>
          </div>
        </div>
        <div
          class="h-fit flex-col rounded-xl bg-[#e9e9e9b5] p-6 xs:w-full sm:w-full md:w-full xl:w-[49%]"
        >
          <h1 class="text-[32px] font-bold">
            {{ plant?.name }}
          </h1>
          <div class="my-[18px] border-b border-[#c3c3c3]"></div>
          <div class="my-[18px] w-full">
            <div class="flex items-center">
              <div class="mr-2 text-[16px]">Code:</div>
              <div class="text-[16px] text-green-500">{{ plant?.code }}</div>
            </div>
            <div class="my-[18px] flex items-center">
              <div class="mr-2 text-[16px]">Price:</div>
              <div class="text-[16px] text-green-500">
                {{ "$" + plant?.from + " - " + "$" + plant?.to }}
              </div>
            </div>
          </div>
          <div class="my-[18px] border-b border-[#c3c3c3]"></div>
          <div class="my-[18px] w-full">
            <div class="flex w-full flex-wrap items-center">
              <div class="mr-2 text-[16px]">Care:</div>
              <div
                class="flex flex-wrap"
                v-for="care in plant?.care"
                :key="care?.name"
              >
                <div
                  class="m-1 rounded-full bg-green-500 px-3 py-1 text-[15px] text-white"
                >
                  {{ care?.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="my-[18px] w-full">
            <div class="flex w-full flex-wrap items-center">
              <div class="mr-2 text-[16px]">Size:</div>
              <div
                class="flex flex-wrap"
                v-for="size in plant?.size"
                :key="size?.name"
              >
                <div
                  class="m-1 rounded-full bg-[#2196f3] px-3 py-1 text-[15px] text-white"
                >
                  {{ size?.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="my-[18px] w-full">
            <div class="flex w-full flex-wrap items-center">
              <div class="mr-2 text-[16px]">Light:</div>
              <div
                class="flex flex-wrap"
                v-for="light in plant?.light"
                :key="light?.name"
              >
                <div
                  class="m-1 rounded-full bg-[#009688] px-3 py-1 text-[15px] text-white"
                >
                  {{ light?.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="my-[18px] border-b border-[#c3c3c3]"></div>
          <div class="my-[18px] text-[16px]">Shopping Cart</div>
          <div class="flex w-full items-center justify-between">
            <button
              class="w-[49%] rounded-full bg-green-500 py-2 text-white hover:bg-green-600"
            >
              Start Order
            </button>
            <button
              class="w-[49%] rounded-full bg-[#2196f3] py-2 text-white hover:bg-[#4485ba]"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div class="mb-[50px] mt-[50px] xs:px-3 md:px-3 lg:px-0">
        {{ plant?.description }}
      </div>
      <div class="my-[50px]">
        <h1 class="">Benefits:</h1>
        <div
          class="flex-col"
          v-for="(item, index) in plant?.benefit"
          :key="item"
        >
          <div class="my-[20px] flex-col xs:px-3 md:px-3 lg:px-0">
            <h1 class="mb-[20px]">
              {{ index + 1 + "." }} {{ item?.title + ":" }}
            </h1>
            <span class="">
              {{ item?.description }}
            </span>
          </div>
        </div>
      </div>
      <div class="my-[50px] xs:px-3 md:px-3 lg:px-0">
        <h1>Grow and Care:</h1>
        <div v-for="item of plant?.grow_and_care" :key="item">
          <div class="my-[10px]">
            {{ item?.title + ":" }} {{ item?.description }}
          </div>
        </div>
      </div>
    </div>
    <div class="my-[20px] flex flex-col items-center justify-center">
      <h1 class="mt-1 text-center text-[26px]">Relevant Plant</h1>
      <div class="m-auto mt-5 w-[80px] border-b-[3px] border-green-600"></div>
    </div>
    <PlantCard :plants="plants" @plant-click="handlePlantClick" />
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
const plant = ref(null);

const currentIndex = ref(0);
const mainImage = ref(null);

const updateMainImage = () => {
  if (plant.value && plant.value.images && plant.value.images.length > 0) {
    mainImage.value = plant.value.images[currentIndex.value].image;
  }
};

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

const handlePlantClick = (clickedPlant) => {
  plant.value = clickedPlant;
  currentIndex.value = 0;
  updateMainImage();
};

onMounted(() => {
  const id = route.params.id - 1;
  plant.value = plants[id];
  updateMainImage();
});
</script>

<style scoped></style>
