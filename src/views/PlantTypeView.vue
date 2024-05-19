<template>
  <div class="lg:px-[33px]">
    <div class="my-[20px]">
      <h1 class="text-center text-[32px] font-bold text-black">
        {{
          itemId == 1
            ? "Succulents Plants"
            : itemId == 2
              ? "Flowering Plants"
              : itemId == 3
                ? "House Plants"
                : itemId == 4
                  ? "Bonsai Plants"
                  : itemId == 5
                    ? "Rare Plants"
                    : itemId == 6
                      ? "Hanging Plants"
                      : itemId == 7
                        ? "Fruit Plants"
                        : itemId == 8
                          ? "Air Purifying Plants"
                          : "Unknown Plant Type"
        }}
      </h1>
      <div class="m-auto w-[80px] border-b-[3px] border-green-600"></div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const itemId = route.params.id;
    return {
      itemId,
    };
  },
};
</script>

<style scoped></style>
