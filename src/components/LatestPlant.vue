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
        <a href="">
          <img class="h-[90%] w-full" :src="item?.image" alt="" />
        </a>
        <div
          class="absolute bottom-[30px] flex items-center justify-center rounded-2xl bg-green-500 px-[15px] py-1 text-[18px] text-white"
        >
          {{ "$" + item.from + " - " + "$" + item.to }}
        </div>
        <a href="" class="mt-3 text-center text-[16px] hover:text-[#ffc249]">
          {{ item?.name }}
        </a>
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
};
</script>

<style scoped lang="scss">
.cards {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
</style>
