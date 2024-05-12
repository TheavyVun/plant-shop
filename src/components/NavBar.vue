<template>
  <div
    class="bg-write flex w-full flex-wrap items-center justify-between py-4 sm:px-[20px] lg:px-[30px]"
  >
    <div class="mr-6 flex flex-shrink-0 items-center" to="/">
      <img class="mr-4 h-8 w-8 fill-current" src="../assets/logo.svg" alt="" />
      <span class="text-xl font-semibold tracking-tight text-black">
        Plant Shop
      </span>
    </div>
    <div class="block w-full sm:my-4 lg:my-0 lg:flex lg:w-auto lg:items-center">
      <div class="relative lg:mb-0">
        <input
          type="text"
          id="search-navbar"
          class="m-auto rounded-2xl border-none bg-[#e2e2e2] px-4 py-2 text-sm text-[#7F7D7D] outline-none sm:w-full lg:w-[500px]"
          placeholder="Search..."
        />
        <div
          class="pointer-events-none absolute right-4 top-3 flex items-center"
        >
          <svg
            class="h-4 w-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="flex-end flex w-full items-center lg:w-auto">
      <button>
        <img
          src="../assets/images/icons/heart.svg"
          class="mx-1"
          width="25"
          height="25"
          alt=""
        />
      </button>
      <button>
        <img
          src="../assets/images/icons/bag.svg"
          class="mx-1"
          width="25"
          height="25"
          alt=""
        />
      </button>
      <button>
        <img
          src="../assets/images/icons/user.svg"
          class="mx-1"
          width="25"
          height="25"
          alt=""
        />
      </button>
      <button to="/login" class="ml-1 text-[18px]">Log In</button>
    </div>
  </div>
  <nav
    class="bg-write z-index-1000 sticky top-0 flex h-[54px] w-full flex-wrap items-center bg-[#004524] sm:px-[20px] lg:px-[13px]"
  >
    <div class="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
      <div class="h-full text-sm sm:mb-4 lg:mb-0 lg:flex-grow">
        <router-link
          to="/"
          :class="{ 'active-nav-link': $route.path === '/' }"
          class="mt-4 block font-semibold text-white hover:text-gray-300 sm:px-0 lg:mt-0 lg:inline-block lg:px-5"
        >
          Home
        </router-link>
        <router-link
          to="/plant-type"
          :class="{ 'active-nav-link': $route.path === '/plant-type' }"
          class="mt-4 block h-full font-semibold text-white hover:text-gray-300 sm:px-0 lg:mt-0 lg:inline-block lg:px-5"
        >
          Plant Type
        </router-link>
        <router-link
          to="/plant-by-life-style"
          :class="{
            'active-nav-link': $route.path === '/plant-by-life-style',
          }"
          class="mt-4 block h-full font-semibold text-white hover:text-gray-300 sm:px-0 lg:mt-0 lg:inline-block lg:px-5"
        >
          Plant By Life Style
        </router-link>
        <router-link
          to="/plant-gifts"
          :class="{ 'active-nav-link': $route.path === '/plant-gifts' }"
          class="mt-4 block h-full font-semibold text-white hover:text-gray-300 sm:px-0 lg:mt-0 lg:inline-block lg:px-5"
        >
          Plant Gifts
        </router-link>
        <router-link
          to="/about"
          :class="{ 'active-nav-link': $route.path === '/about' }"
          class="mt-4 block h-full font-semibold text-white hover:text-gray-300 sm:px-0 lg:mt-0 lg:inline-block lg:px-5"
        >
          About
        </router-link>
        <router-link
          to="/contact"
          :class="{ 'active-nav-link': $route.path === '/contact' }"
          class="mt-4 block h-full font-semibold text-white hover:text-gray-300 sm:px-0 lg:mt-0 lg:inline-block lg:px-5"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
<style scoped>
.active-nav-link {
  @apply border-b-2 border-white;
}
</style>
