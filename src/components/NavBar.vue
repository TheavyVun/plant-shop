<template>
  <!-- <nav
    class="flex items-center justify-between flex-wrap bg-write p-4 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-md"
  ></nav> -->
  <nav
    class="flex items-center justify-between flex-wrap bg-write py-4 px-[30px] dark:bg-gray-900 w-full start-0 border-b border-gray-200 dark:border-gray-600 shadow-md"
  >
    <router-link class="flex items-center flex-shrink-0 mr-6" to="/">
      <img class="fill-current h-8 w-8 mr-4" src="../assets/logo.svg" alt="" />
      <span class="font-semibold text-xl tracking-tight text-white">
        Plant Shop
      </span>
    </router-link>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link
          to="/"
          class="block text-white mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-green-900 hover:font-bold px-5"
        >
          Home
        </router-link>
        <router-link
          to="/about"
          class="block text-white mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-green-900 hover:font-bold px-5"
        >
          About
        </router-link>
        <router-link
          to="/contact"
          class="block text-white mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-green-900 hover:font-bold px-5"
        >
          Contact
        </router-link>
      </div>
      <div class="relative mr-4">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
        <input
          type="text"
          id="search-navbar"
          class="block w-full p-2 ps-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
      </div>
      <div>
        <img
          class="w-10 h-10 rounded-full"
          src="https://i.pinimg.com/564x/8f/10/c4/8f10c443a279d4c75f5b4d035fece5d5.jpg"
          alt="Rounded avatar"
        />
      </div>
    </div>
  </nav>
</template>

<script setup></script>
<style scoped></style>
