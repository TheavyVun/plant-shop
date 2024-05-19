<template>
  <div class="cards">
    <div
      class="p-[0.5em] xs:w-[50%] sm:w-[25%] md:w-[20%] lg:w-[16.66%]"
      v-for="item in latestPlants"
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
          class="absolute bottom-[25px] flex items-center justify-center rounded-2xl bg-green-500 px-[15px] py-1 text-[18px] text-white"
        >
          {{ "$" + item?.from + " - " + "$" + item?.to }}
        </div>
        <router-link
          :to="'/plant/' + item?.id"
          @click.native="scrollToTop()"
          class="mt-4 text-center text-[16px] hover:text-[#ffc249]"
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
    latestPlants: {
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

<style scoped lang="scss">
.cards {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
</style>
