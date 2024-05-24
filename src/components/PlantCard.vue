<template>
  <div class="flex w-full flex-wrap px-2">
    <div
      class="my-[15px] p-[0.5em] xs:w-[50%] sm:w-[25%] md:w-[20%] lg:w-[16.66%]"
      v-for="item in plants"
      :key="item"
    >
      <div
        class="relative my-[10px] flex w-full flex-col items-center justify-center"
      >
        <router-link :to="'/plant/' + item?.id" @click.native="scrollToTop()">
          <img
            class="h-[90%] w-full transform transition duration-300 ease-in-out hover:scale-[1.12]"
            :src="item?.images[0]?.image"
            alt="Not found"
          />
        </router-link>
        <div
          class="absolute bottom-[25px] flex items-center justify-center rounded-2xl bg-green-500 px-3 py-1 text-[16px] text-white sm:px-[10px]"
        >
          {{ "$" + item?.from + " - " + "$" + item?.to }}
        </div>
        <router-link
          :to="'/plant/' + item?.id"
          @click.native="scrollToTop()"
          class="mt-4 text-wrap text-center text-[16px] hover:text-[#ffc249]"
        >
          {{ item?.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plants: {
      type: Array,
      required: true,
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped lang="scss"></style>
