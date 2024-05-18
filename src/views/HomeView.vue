<template>
  <div class="mt-4 h-full w-full">
    <div class="m-auto sm:w-[90%] lg:w-[70%]">
      <div
        class="green-house-image m-auto flex h-[500px] w-full flex-col items-center justify-center"
      >
        <h1
          class="text-[40px] text-white"
          style="font-family: Khmer OS Muol Light"
        >
          ផ្ទះបៃតង
        </h1>
        <br />
        <h1 class="text-[40px] text-white">Green House</h1>
      </div>
      <p class="xs:px-3 my-[50px] text-center">
        Trees have been with us throughout our whole lives. They look beautiful,
        and we've probably all enjoyed a lovely walk through a forest. They're
        the background of a favorite memory and that welcome patch of green our
        eyes seek as we gaze out our windows—an activity we're doing a lot these
        days. But their benefits go far beyond that. Trees are like best friends
        or model employees - they give so much and ask little in return.
      </p>
      <p class="xs:px-3 my-[50px] text-center">
        According to nature.org, there are six major benefits of tree; (1) Trees
        eat the greenhouse gases that cause climate change—for breakfast, (2)
        trees boost our mental health while raising our physical health, (3)
        trees clean the air so we can breathe more easily, (4) trees give a home
        to the wildlife we love, (5) trees cool down our life, and could even
        save it, (6) trees filter our water, making our drinking supply cleaner
        and more reliable.
      </p>
      <div class="my-[50px]">
        <h1 class="text-center text-[26px]">Fine Plant You Will Love</h1>
        <div class="m-auto mt-5 w-[80px] border-b-[3px] border-green-600"></div>
      </div>
      <div class="cards">
        <div
          class="xs:w-full p-[0.8em] sm:w-[50%] md:w-[33%] lg:w-[25%]"
          v-for="plant of plants"
          :key="plant"
        >
          <div
            class="my-[10px] flex w-full flex-col items-center justify-center"
          >
            <a href="">
              <img class="h-[180px] w-[180px]" :src="plant?.image" alt="" />
            </a>
            <a
              href=""
              class="mt-3 text-center text-[16px] hover:text-[#ffc249]"
            >
              {{ plant?.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="my-[50px] flex flex-col items-center justify-center">
      <button
        class="rounded border border-green-500 px-[100px] py-1 text-center text-[26px] text-green-600 hover:bg-green-100"
      >
        SEE ALL PLANT
      </button>
      <h1 class="mt-1 text-center text-[26px]">Top Trending Plants</h1>
      <div class="m-auto mt-5 w-[80px] border-b-[3px] border-green-600"></div>
    </div>
    <TopTrendingPlant :latestPlants="latestPlant" />
    <div class="m-auto sm:w-[90%] lg:w-[70%]">
      <div class="shop-by-care-box xs:px-0 w-full px-5 py-[10px]">
        <div class="mb-5 flex flex-col items-center justify-center">
          <h1 class="text-center text-[22px]">Shop By Care</h1>
          <div class="m-auto w-[80px] border-b-[3px] border-green-600"></div>
        </div>
        <div class="cards">
          <div
            class="xs:w-full m-auto p-[0.8em] sm:w-[50%] lg:w-[33%]"
            v-for="item of shopByCare"
            :key="item"
          >
            <a
              href=""
              class="box flex h-[196px] w-full flex-col items-center justify-center hover:bg-[#90ee90] hover:text-white"
            >
              <img class="h-[102px] w-[108px]" :src="item?.image" alt="" />
              <span class="mt-3 text-center text-[18px]">
                {{ item?.name }}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="shop-by-care-box xs:px-0 w-full px-5 py-[10px]">
        <div class="mb-5 flex flex-col items-center justify-center">
          <h1 class="text-center text-[22px]">Shop By Size</h1>
          <div class="m-auto w-[80px] border-b-[3px] border-green-600"></div>
        </div>
        <div class="cards">
          <div
            class="xs:w-full m-auto p-[0.8em] sm:w-[50%] lg:w-[33%]"
            v-for="item of shopBySize"
            :key="item"
          >
            <a
              href=""
              class="box flex h-[196px] w-full flex-col items-center justify-center hover:bg-[#90ee90] hover:text-white"
            >
              <img class="h-[102px] w-[108px]" :src="item?.image" alt="" />
              <span class="mt-3 text-center text-[18px]">
                {{ item?.name }}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="shop-by-care-box xs:px-0 w-full px-5 py-[10px]">
        <div class="mb-5 flex flex-col items-center justify-center">
          <h1 class="text-center text-[22px]">Shop By Light</h1>
          <div class="m-auto w-[80px] border-b-[3px] border-green-600"></div>
        </div>
        <div class="cards">
          <div
            class="xs:w-full m-auto p-[0.8em] sm:w-[50%] lg:w-[33%]"
            v-for="item of shopByLight"
            :key="item"
          >
            <a
              href=""
              class="box flex h-[196px] w-full flex-col items-center justify-center hover:bg-[#90ee90]"
            >
              <img class="h-[102px] w-[108px]" :src="item?.image" alt="" />
              <span class="mt-3 text-center text-[18px]">
                {{ item?.name }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="my-[20px]">
      <h1 class="text-center text-[32px] font-bold">Latest Plant</h1>
      <div class="m-auto w-[80px] border-b-[3px] border-green-600"></div>
    </div>
    <LatestPlant :latestPlants="latestPlant" />
    <div class="my-[20px]">
      <h1 class="text-center text-[32px] font-bold">Gallery</h1>
    </div>
    <div class="xs:px-3 m-auto sm:w-[90%] lg:w-[70%]">
      <div class="cards">
        <div
          class="xs:w-[50%] p-[0.8em] sm:w-[25%] md:w-[33%] lg:w-[25%]"
          style="padding: 0 !important"
          v-for="(item, index) in gallery"
          :key="index"
        >
          <div
            class="flex h-[300px] w-full flex-col items-center justify-center"
          >
            <img
              class="gallery h-full w-full cursor-pointer"
              :src="item.image"
              @click="openPopup(index)"
              alt="Not found"
            />
          </div>
        </div>
      </div>
      <ImagePreview
        :isVisible="isPopupVisible"
        :imageSrc="selectedImage"
        :currentIndex="selectedIndex"
        :totalImages="gallery.length"
        @close="closePopup"
      >
        <template v-slot:buttons>
          <button
            v-if="selectedIndex !== 0"
            @click="prevImage"
            class="prev-btn h-[45px] w-[50px] rounded-md bg-slate-600 p-3"
          >
            <img src="../assets/images/icons/previous.svg" width="18" alt="" />
          </button>
          <button
            v-if="selectedIndex !== gallery.length - 1"
            @click="nextImage"
            class="next-btn h-[45px] w-[50px] rounded-md bg-slate-600 p-3"
          >
            <img src="../assets/images/icons/next.svg" width="18" alt="" />
          </button>
        </template>
      </ImagePreview>
    </div>
    <div class="m-auto sm:w-[90%] lg:w-[70%]">
      <div class="my-[50px]">
        <h1 class="text-center text-[26px]">What our customers say</h1>
      </div>
      <CustomerReview :customers="customers" />
    </div>
    <iframe
      class="h-[350px] w-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.691465513618!2d144.96175371525688!3d-37.811466079756175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d7e62f05a5f%3A0x69f14f0e253266!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1589274753731!5m2!1sen!2sin"
      frameborder="0"
      allowfullscreen
    >
    </iframe>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CustomerReview from "../components/CustomerReview.vue";
import Footer from "../components/Footer.vue";
import ImagePreview from "../components/ImagePreview.vue";
import LatestPlant from "../components/LatestPlant.vue";
import TopTrendingPlant from "../components/TopTrendingPlant.vue";

const gallery = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-09-10_18-51-16?alt=media&token=5fcac061-5e7a-4b34-a408-c4ba1a0ca6f7",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-09-10_18-51-14?alt=media&token=0559766d-4753-435f-8bb8-2a074ffea526",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-10-29_14-33-20?alt=media&token=aef2ef83-dd84-4376-aa0e-db62cc19ebcf",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-10-29_14-33-32?alt=media&token=4dba29ab-426f-40b2-8101-afe0ae875d46",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-09-10_10-11-15?alt=media&token=5f702d77-876f-47a6-ae08-164bb0282360",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-10-29_14-33-30?alt=media&token=092fc09e-1f31-4388-9180-07afe9bba80c",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-10-29_14-33-24?alt=media&token=1daaf93f-cc4c-4305-8e6b-cc2dccb17bbf",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-10-29_14-33-11?alt=media&token=c989f476-005e-4871-9984-2850539ed255",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-09-10_10-11-50?alt=media&token=84195b8e-5ae6-4e2e-a845-dfdb37a87553",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-09-10_10-11-47?alt=media&token=6ab191a2-44d6-4d17-8f6d-91f222d252d2",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-10-29_11-37-22%20(2)?alt=media&token=c0a7fe6f-daf6-4cfc-8d9c-d8e09bda8fef",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-10-29_11-37-18?alt=media&token=44b07538-306c-44f8-b9df-2ba25c5ce607",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-09-10_10-11-14?alt=media&token=185e5c33-a870-4295-b15b-7035ab69a57e",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-10-29_11-37-19?alt=media&token=fdfe278e-d302-4549-8213-5eda884712a0",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-10-29_14-33-14?alt=media&token=ea69d1a8-312f-4192-a421-71ab31984372",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/home%2F20221003%2F20221003194331photo_2021-09-10_10-11-33?alt=media&token=773747df-49c6-4d2c-9f63-634c9939a570",
  },
];

const plants = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/plantType%2F20221010%2F20221010104633Succulents%20Plants?alt=media&token=ad9641bb-a38d-417f-adac-08c249e5e4a0",
    name: "Succulents Plants",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/plantType%2F20221010%2F20221010113812Flowering%20Plants?alt=media&token=bf816531-06d6-4d57-9565-120df818f71d",
    name: "Flowering Plants",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/plantType%2F20221010%2F20221010113954House%20Plants?alt=media&token=feccc8ed-825a-4d3c-a85e-684d39257462",
    name: "House Plants",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/plantType%2F20221010%2F20221010114032Bonsai%20Plants?alt=media&token=94f083ae-868e-4b63-b87e-1b195723b774",
    name: "Bonsai Plants",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/plantType%2F20221010%2F20221010114116Rare%20Plants?alt=media&token=ad3da504-befb-439d-ba4b-2617fe571b66",
    name: "Rare Plants",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/plantType%2F20221010%2F20221010114128Hanging%20Plants?alt=media&token=7a6585d7-1ec0-438a-9df5-98707ee0c44d",
    name: "Hanging Plants",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/plantType%2F20221010%2F20221010115648Fruit%20Plants?alt=media&token=46efe0f5-dc88-4855-ada6-fd82e463a18f",
    name: "Fruit Plants",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/plantLifeStyle%2F20221011%2F20221011092542Air%20Purifying%20Plants?alt=media&token=b6286333-6a3b-4c3a-891d-63d7cc39eb30",
    name: "Air Purifying Plants",
  },
];

const shopByCare = [
  {
    image:
      "https://greenhousecambodia.com/img/photo_2022-10-06%2020.46.52.164b9baf.png",
    name: "Easy",
  },
  {
    image:
      "https://greenhousecambodia.com/img/photo_2022-10-06%2020.46.20.48a4e192.png",
    name: "Moderate",
  },
  {
    image:
      "https://greenhousecambodia.com/img/photo_2022-10-06%2020.46.39.b2eaf922.png",
    name: "Advanced",
  },
];

const shopBySize = [
  {
    image:
      "https://greenhousecambodia.com/img/photo_2022-10-06%2020.45.00.ce36db42.png",
    name: "Small",
  },
  {
    image:
      "https://greenhousecambodia.com/img/photo_2022-10-06%2020.45.21.f1d1989f.png",
    name: "Medium",
  },
  {
    image:
      "https://greenhousecambodia.com/img/photo_2022-10-06%2020.43.13.f01ce746.png",
    name: "Large",
  },
];

const shopByLight = [
  {
    image:
      "https://greenhousecambodia.com/img/photo_2022-10-06%2020.45.36.4e04be72.png",
    name: "Low Light",
  },
  {
    image:
      "https://greenhousecambodia.com/img/photo_2022-10-06%2020.46.04.cfbaee60.png",
    name: "Indirect Light",
  },
  {
    image:
      "https://greenhousecambodia.com/img/photo_2022-10-06%2020.45.50.89273808.png",
    name: "Direct Light",
  },
];

const customers = [
  {
    id: 1,
    name: "Yin Vun",
    first_name: "Vun",
    last_name: "Yin",
    profile: "",
    date: "2 years ago",
    rate: 5,
    comment:
      "I love this place. Nice staff and they are happy to give you some advice. Plenty of choice, flowers, plants, trees, pots, soil etc etc. Most important, they think green 💚.",
  },
  {
    id: 2,
    name: "Orn Sarath",
    first_name: "Sarath",
    last_name: "Orn",
    profile: "",
    date: "4 months ago",
    rate: 5,
    comment: "Highly recommend this large and urban garden center",
  },
  {
    id: 3,
    name: "Vorn Sreymao",
    first_name: "Sreymao",
    last_name: "Vorn",
    profile: "",
    date: "1 year ago",
    rate: 5,
    comment: "Very good services and a lot of products",
  },
  {
    id: 4,
    name: "Vun Theavy",
    first_name: "Theavy",
    last_name: "Vun",
    profile: "",
    date: "6 months ago",
    rate: 5,
    comment:
      "Absolutely beautiful. Good prices and selection. I will definitely go back.",
  },
  {
    id: 5,
    name: "Chhem Lyheang",
    first_name: "Lyheang",
    last_name: "Chhem",
    profile: "",
    date: "2 weeks ago",
    rate: 4,
    comment: "There are a lot plants. Good price and service.",
  },
  {
    id: 6,
    name: "Chai Lyden",
    first_name: "Lyden",
    last_name: "Chai",
    profile: "",
    date: "1 hour ago",
    rate: 2,
    comment: "Emm mg",
  },
];

const latestPlant = [
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
  {
    name: "Test",
    image:
      "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230801%2F20230801085600A084-GG%20(1)?alt=media&token=c7e74c77-8213-49b4-aa71-6393b3aa3ea2",
    from: "5",
    to: "10",
  },
];

const isPopupVisible = ref(false);
const selectedImage = ref("");
const selectedIndex = ref(0);

const openPopup = (index) => {
  selectedIndex.value = index;
  selectedImage.value = gallery[selectedIndex.value].image;
  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;
  selectedImage.value = "";
};

const nextImage = () => {
  selectedIndex.value = (selectedIndex.value + 1) % gallery.length;
  selectedImage.value = gallery[selectedIndex.value].image;
};

const prevImage = () => {
  selectedIndex.value =
    (selectedIndex.value - 1 + gallery.length) % gallery.length;
  selectedImage.value = gallery[selectedIndex.value].image;
};
</script>

<style scoped lang="scss">
.green-house-image {
  background-image: url("https://storage.googleapis.com/production-globat-v1-0-7/957/201957/9CVAqww6/01a7320b59974592b65e311c3cb2c44d");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.cards {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}

.shop-by-care-box {
  box-shadow:
    0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.box {
  box-shadow:
    0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.gallery {
  transition:
    transform 0.2s,
    margin-top 0.2s;
  transform-origin: bottom;
}

.gallery:hover {
  transform: scaleY(1.1);
  margin-top: 20px;
}
</style>
