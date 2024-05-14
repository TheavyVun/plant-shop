<template>
  <div class="about-section">
    <h1>About</h1>
    <h2>Our Vision</h2>
    <p class="p">
      <span class="title">Green House</span> envisions everywhere in Cambodia is
      green beautifully, productively, and healthily.
    </p>
    <div class="image-container">
      <img src="@/assets/images/about/banner2.jpg" alt="Descriptive Text" />
    </div>
    <p class="p">
      <span class="title">Green House - ផ្ទះបៃតង</span> supplies various plant
      products such as fruit plants, indoor plants, flowers, vegetable seeds,
      pots, soils, fertilizers, planting and garden supplies, etc. The products
      are collected locally from farmers for resell. In addition, there are some
      products which are rare or innovatively interbreed for high productivity
      and resiliency are imported from neighboring countries.
    </p>
    <p class="p">
      Though we have big ambition, we start our mission from small activities.
      One of our impactful activity is to educate people in both rural and
      urban, especially kids about plants and their benefits to their daily
      lives and environment. We also documents all related information related
      plants. A long side with education, our main and active role is to supply
      varieties of plants and planting materials. We have been working hard to
      ensure that all local plant, imported, and rare plants can be found in our
      shop. Our customers can just visit our shop and pick what they want.
    </p>
    <p class="p">
      The third and forth services of our shop are providing consultation about
      plantation in small and big scale and providing garden and landscaping
      services. These two services are still in progress of development and will
      be ready to serve our customers soon.
    </p>
    <div class="image-container">
      <img src="@/assets/images/about/banner3.jpg" alt="Descriptive Text" />
    </div>
    <h2>Our Mission</h2>
    <p class="p">
      Local plant shop based in city that promotes green living and environment
      through enhancing culture of plantation and supplying all relevant
      products and services.
    </p>
    <div class="image-container">
      <img src="@/assets/images/about/img1.jpg" alt="Descriptive Text" />
    </div>
    <h3 class="video">Video</h3>
    <div class="video_youtube">
      <iframe
        height="350"
        src="https://www.youtube.com/embed/wZMIDnCbecc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
    <div class="m-auto">
      <div class="my-[50px]">
        <div class="text-center text-[26px]">What our customers say</div>
      </div>
    </div>
    <CustomerReview :customers="customers" />
  </div>
  <div class="map_link">
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
import CustomerReview from "../components/CustomerReview.vue";
import Footer from "../components/Footer.vue";
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
      "I love this place. Nice staff and they are happy to give you some advice. Plenty of choice, flowers, plants, trees, pots, soil etc etc. Most important, they think green 💚. Disappointing, such a nice place but now..... I go somewhere else, staff not helpful, pots all damaged and the prices......they wanted $14 for a small bag of soil. 😢",
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
</script>

<style scoped>
.about-section {
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  width: 70%;
}

.about-section h1 {
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 2.5rem;
}

.about-section h2 {
  margin-bottom: 1rem;
  color: #00a244;
  font-size: 1.5rem;
  font-weight: bold;
}

.about-section p {
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
}

.about-section .p {
  margin-bottom: 2rem;
}

.image-container {
  width: 70%;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-bottom: 2rem;
}

.about-section .title {
  color: #00a244;
  font-weight: bold;
}

.about-section .video {
  display: flex;
  justify-content: start;
  font-weight: bold;
  font-size: 1.6rem;
}

.about-section .video_youtube iframe {
  width: 100%;
  margin-bottom: 2rem;
}
</style>
