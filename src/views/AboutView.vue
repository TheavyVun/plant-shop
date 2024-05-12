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
    <h2>What our customers say</h2>
    <div class="review-cards">
      <div class="review-card">
        <div class="profile-card">
          <div class="profile">
            <img
              src="@/assets/images/about/banner.png"
              alt="Descriptive Text"
            />
          </div>
          <div class="name">
            <p class="reviewer-name">Orn Sarath</p>
            <p class="review-time">1 House Ago</p>
          </div>
        </div>

        <div class="review-rating">
          <span v-for="star in 5" :key="star" class="star">&#9733;</span>
        </div>
        <p class="review-text">A source of plant supply in town</p>
        <div class="google_icon">
          <img src="@/assets/images/about/google.png" alt="Descriptive Text" />
        </div>
      </div>

      <div class="review-card">
        <div class="profile-card">
          <div class="profile">
            <img
              src="@/assets/images/about/banner.png"
              alt="Descriptive Text"
            />
          </div>
          <div class="name">
            <p class="reviewer-name">Orn Sarath</p>
            <p class="review-time">1 House Ago</p>
          </div>
        </div>

        <div class="review-rating">
          <span v-for="star in 5" :key="star" class="star">&#9733;</span>
        </div>
        <p class="review-text">A source of plant supply in town</p>
        <div class="google_icon">
          <img src="@/assets/images/about/google.png" alt="Descriptive Text" />
        </div>
      </div>

      <div class="review-card">
        <div class="profile-card">
          <div class="profile">
            <img
              src="@/assets/images/about/banner.png"
              alt="Descriptive Text"
            />
          </div>
          <div class="name">
            <p class="reviewer-name">Orn Sarath</p>
            <p class="review-time">1 House Ago</p>
          </div>
        </div>

        <div class="review-rating">
          <span v-for="star in 5" :key="star" class="star">&#9733;</span>
        </div>
        <p class="review-text">A source of plant supply in town</p>
        <div class="google_icon">
          <img src="@/assets/images/about/google.png" alt="Descriptive Text" />
        </div>
      </div>

      <div class="review-card">
        <div class="profile-card">
          <div class="profile">
            <img
              src="@/assets/images/about/banner.png"
              alt="Descriptive Text"
            />
          </div>
          <div class="name">
            <p class="reviewer-name">Orn Sarath</p>
            <p class="review-time">1 House Ago</p>
          </div>
        </div>

        <div class="review-rating">
          <span v-for="star in 5" :key="star" class="star">&#9733;</span>
        </div>
        <p class="review-text">A source of plant supply in town</p>
        <div class="google_icon">
          <img src="@/assets/images/about/google.png" alt="Descriptive Text" />
        </div>
      </div>
    </div>
  </div>
  <div class="map_link">
    <iframe
      height="350"
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
import Footer from "../components/Footer.vue";
const message = ref("About");
</script>

<style scoped>
@import "@/assets/styles/about.css";
</style>
