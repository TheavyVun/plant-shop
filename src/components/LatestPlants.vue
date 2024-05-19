<template>
  <div class="cards">
    <div
      class="xs:w-[50%] p-[0.8em] sm:w-[25%] md:w-[20%] lg:w-[16.66%]"
      v-for="item of latestPlants"
      :key="item"
    >
      <div
        class="relative my-[10px] flex w-full flex-col items-center justify-center"
      >
        <router-link :to="'/plant/' + item.id" @click.native="scrollToTop()">
          <img
            class="h-[90%] w-full transform transition duration-300 hover:scale-110"
            :src="item?.images[0].image"
            alt=""
          />
        </router-link>
        <div
          class="absolute bottom-[30px] flex items-center justify-center rounded-2xl bg-green-500 px-[15px] py-1 text-[18px] text-white"
        >
          {{ "$" + item.from + " - " + "$" + item.to }}
        </div>
        <router-link
          :to="'/plant/' + item.id"
          @click.native="scrollToTop()"
          class="mt-3 text-center text-[16px] hover:text-[#ffc249]"
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
