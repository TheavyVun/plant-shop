<template>
  <div class="contact">
    <div class="row">
      <h1>Contact Us</h1>
    </div>
    <div class="header-hr">
      <hr />
    </div>
    <br />
    <div class="contact-section">
      <p class="description">
        It is very easy to order products from our shop. You just check our
        product page and send us the plants you want to know the price or you
        want to buy through social media as below.
      </p>
      <div
        class="ml-14 grid grid-cols-12 gap-x-8 overflow-hidden pb-[100px] pt-[100px]"
      >
        <div class="col-span-4 col-start-2">
          <div class="contact-item mb-8 flex items-center">
            <span class="icon mr-4 text-2xl">📍</span>
            <div class="details text-left">
              <h4 class="text-lg text-green-600">Visit Us</h4>
              <p>412 Street 530, Krong Phnom Penh</p>
              <p>Phnom Penh, Cambodia</p>
            </div>
          </div>
          <div class="contact-item mb-8 flex items-center">
            <span class="icon mr-4 text-2xl">📧</span>
            <div class="details text-left">
              <h4 class="text-lg text-green-600">Mail Us</h4>
              <p>info@plantshopcambodia.com</p>
            </div>
          </div>
          <div class="contact-item flex items-center">
            <span class="icon mr-4 text-2xl">📞</span>
            <div class="details text-left">
              <h4 class="text-lg text-green-600">Call Us</h4>
              <p>+85516888488</p>
              <p>+85512801820</p>
            </div>
          </div>
        </div>
        <div class="col-span-7 flex flex-col items-center">
          <img src="../assets/logo.svg" alt="Logo" class="mb-4 max-w-[250px]" />
          <p class="text-xl font-semibold tracking-tight text-black">
            Plant Shop
          </p>
        </div>
      </div>
      <hr />
      <div class="subTitle1 mt-14 pb-[50px]" style="text-align: center">
        <p><strong style="color: rgb(0, 138, 0)">Our shop hour:</strong></p>
        <p><br /></p>
        <p>=&gt; 7:00AM - 6:00PM&nbsp;(Every weekday)</p>
        <p>=&gt; 7:30AM - 6:00PM&nbsp;(Every weekend)</p>
      </div>

      <div class="flex flex-col items-center">
        <img src="../assets/images/about/contact.jpg" alt="" />
      </div>
      <div class="social mt-14 pb-[50px]" style="text-align: center">
        <p class="text-xl font-semibold tracking-tight text-black">
          Connect Us Through Social Media or Visit Our Shop
        </p>

        <p><br /></p>
        <div class="social-icons">
          <a href="#" class="icon-link facebook"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="#" class="icon-link twitter"
            ><i class="fab fa-twitter"></i
          ></a>
          <a href="#" class="icon-link instagram"
            ><i class="fab fa-instagram"></i
          ></a>
          <a href="#" class="icon-link linkedin"
            ><i class="fab fa-linkedin-in"></i
          ></a>
          <a href="#" class="icon-link telegram"
            ><i class="fab fa-telegram"></i
          ></a>
        </div>
        <div class="header-hr">
          <hr />
        </div>
      </div>
    </div>
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
import { ref } from "vue";
import Footer from "../components/Footer.vue";
const message = ref("Contact");
</script>

<style scoped>
.contact {
  padding: 12px;
  margin: 0px 160px 0px 160px;
  margin-bottom: 50px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.row h1 {
  color: #2c3e50;
  display: block;
  font-size: 50px;
  font-weight: bold;
}
.header-hr hr {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  width: 80px;
  height: 3px;
  background-color: green;
}

.contact-section {
  text-align: center;
}

.description {
  font-size: 16px;
  margin-bottom: 20px;
}
.social-icons {
  padding: 10px;
}

.icon-link {
  margin-right: 10px;
  font-size: 24px;
  padding: 10px;
}

.facebook {
  color: #1877f2;
}

.twitter {
  color: #1da1f2;
}

.instagram {
  color: #0077b5;
}

.linkedin {
  color: #0077b5;
}

.telegram {
  color: #0088cc;
}
</style>
