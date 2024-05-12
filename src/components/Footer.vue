<template>
  <div class="bottom-0 mt-1 w-full">
    <div class="footer-content box-content h-[400px] w-full">
      <div class="dark-2 flex h-full w-full justify-between px-[10%] py-4">
        <div class="h-full w-[20%]">
          <h1 class="mb-3 text-xl font-semibold tracking-tight text-white">
            Follow Us On Facebook
          </h1>
          <div class="h-[88%] w-[100%] bg-black">hi</div>
        </div>
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
                alt=""
              />
              <div class="ml-4 text-[15px] text-white">412 Street 530,</div>
            </div>
            <div class="flex items-center">
              <div></div>
              <div class="ml-11 text-[15px] text-white">
                Chamkar Samrong 2, Chamkar Samrong commune,
              </div>
            </div>
            <div class="my-2 flex items-center">
              <div></div>
              <div class="ml-11 text-[15px] text-white">
                Battambang municipal, Battambang province, Cambodia
              </div>
            </div>
            <div class="my-2 flex items-center">
              <img
                src="../assets/images/icons/phone.svg"
                width="30"
                height="30"
                alt=""
              />
              <div class="ml-4 text-[15px] text-white">+855 16 888 488</div>
            </div>
            <div class="my-2 flex items-center">
              <img
                src="../assets/images/icons/mail.svg"
                width="30"
                height="30"
                alt=""
              />
              <div class="ml-4 text-[15px] text-white">
                info@greenhousecambodia.com
              </div>
            </div>
          </div>
        </div>
        <div class="h-full w-[20%]">
          <h1
            class="mb-3 text-center text-xl font-semibold tracking-tight text-white"
          >
            Site Map
          </h1>
          <div class="flex h-full w-full flex-col">
            <router-link
              to="/"
              :class="{ 'active-nav-link': $route.path === '/' }"
              class="nav-link flex h-[45px] items-center justify-center rounded text-[15px] font-semibold text-white"
            >
              Home
            </router-link>
            <router-link
              to="/all-plant"
              class="nav-link flex h-[45px] items-center justify-center rounded text-[15px] font-semibold text-white"
            >
              All Plant
            </router-link>
            <router-link
              to="/about"
              :class="{ 'active-nav-link': $route.path === '/about' }"
              class="nav-link flex h-[45px] items-center justify-center rounded text-[15px] font-semibold text-white"
            >
              About
            </router-link>
            <router-link
              to="/contact"
              :class="{ 'active-nav-link': $route.path === '/contact' }"
              class="nav-link flex h-[45px] items-center justify-center rounded text-[15px] font-semibold text-white"
            >
              Contact
            </router-link>
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

<script></script>
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
}
.active-nav-link {
  background-color: rgba(255, 255, 255, 0.313);
}
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.187);
}
</style>
