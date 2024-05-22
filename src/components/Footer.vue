<template>
  <div class="mt-1 w-full">
    <div class="footer-content box-content w-full md:h-auto lg:h-[450px]">
      <div
        class="dark-2 flex h-full w-full flex-wrap justify-between py-8 xs:px-3 sm:flex-col sm:px-[5%] md:w-full lg:px-[10%]"
      >
        <div class="card-item sm:mb-[20px] md:w-full lg:mb-0 lg:w-[25%]">
          <div class="h-full w-full">
            <h1 class="mb-3 text-xl font-semibold tracking-tight text-white">
              Follow Us On Facebook
            </h1>
            <div
              class="w-[100%] cursor-pointer rounded-xl bg-[#d3d3d35a] lg:h-[88%]"
            ></div>
          </div>
        </div>
        <div class="card-item sm:mb-[20px] md:w-full lg:mb-0 lg:w-[50%]">
          <div class="h-full">
            <h1 class="mb-3 text-xl font-semibold tracking-tight text-white">
              Contact Us
            </h1>
            <div>
              <div class="flex items-center">
                <img
                  src="../assets/images/icons/address.svg"
                  width="30"
                  height="30"
                  alt="Not found"
                />
                <div class="ml-4 text-[14px] text-white">412 Street 530,</div>
              </div>
              <div class="flex items-center">
                <div></div>
                <div class="ml-11 text-[14px] text-white">
                  Chamkar Samrong 2, Chamkar Samrong commune,
                </div>
              </div>
              <div class="my-2 flex items-center">
                <div></div>
                <div class="ml-11 text-[14px] text-white">
                  Battambang municipal, Battambang province, Cambodia
                </div>
              </div>
              <div class="my-2 flex items-center">
                <img
                  src="../assets/images/icons/phone.svg"
                  width="30"
                  height="30"
                  alt="Not found"
                />
                <div class="ml-4 text-[14px] text-white">+855 16 888 488</div>
              </div>
              <div class="my-2 flex items-center">
                <img
                  src="../assets/images/icons/mail.svg"
                  width="30"
                  height="30"
                  alt="Not found"
                />
                <div class="ml-4 text-[14px] text-white">
                  info@greenhousecambodia.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-item sm:mb-[20px] md:w-full lg:mb-0 lg:w-[25%]">
          <div class="h-full w-full">
            <h1
              class="mb-3 text-center text-xl font-semibold tracking-tight text-white"
            >
              Site Map
            </h1>
            <div class="flex h-full w-full flex-col">
              <router-link
                to="/"
                @click.native="scrollToTop()"
                :class="{ 'active-nav-link': $route.path === '/' }"
                class="nav-link flex h-[45px] items-center justify-center rounded text-[14px] font-semibold text-white"
              >
                Home
              </router-link>
              <router-link
                to="/all-plants"
                @click.native="scrollToTop()"
                :class="{ 'active-nav-link': $route.path === '/all-plants' }"
                class="nav-link flex h-[45px] items-center justify-center rounded text-[14px] font-semibold text-white"
              >
                All Plant
              </router-link>
              <router-link
                to="/about"
                @click.native="scrollToTop()"
                :class="{ 'active-nav-link': $route.path === '/about' }"
                class="nav-link flex h-[45px] items-center justify-center rounded text-[14px] font-semibold text-white"
              >
                About
              </router-link>
              <router-link
                to="/contact"
                @click.native="scrollToTop()"
                :class="{ 'active-nav-link': $route.path === '/contact' }"
                class="nav-link flex h-[45px] items-center justify-center rounded text-[14px] font-semibold text-white"
              >
                Contact
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex h-[56px] items-center justify-center bg-[#808080] text-[.875rem] text-white"
    >
      2024 -
      <strong class="flex items-center">
        <div class="mx-1 text-[24px]">©</div>
        Plant Shop
      </strong>
    </div>
  </div>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
</script>

<style scoped lang="scss">
.footer-content {
  background-image: url("https://gradinabotanica.ubbcluj.ro/wp-content/uploads/2020/09/complexul-de-sere-scaled.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .dark-2 {
    background-color: rgba(0, 128, 0, 0.7);
    border-color: rgba(0, 128, 0, 0.7);
  }

  .card-item {
    display: flex;
    width: 100%;
  }

  @media all and (min-width: 37.5em) {
    .card-item {
      width: calc(100% / 12 * 6);
    }
  }

  @media all and (min-width: 56.25em) {
    .card-item {
      width: calc(100% / 12 * 3);
    }
  }
}

.active-nav-link {
  background-color: rgba(255, 255, 255, 0.313);
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.187);
}
</style>
