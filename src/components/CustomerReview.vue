<template>
  <div class="w-full">
    <div class="cards my-[50px]">
      <div
        class="card-item rounded-3xl"
        v-for="customer in customers"
        :key="customer.id"
      >
        <div class="w-[300px] p-3">
          <div class="flex">
            <div
              class="mr-3 flex h-[50px] w-[50px] items-center justify-center rounded-full text-[20px] font-bold text-white"
              :style="{ backgroundColor: getRandomColor(customer.id) }"
            >
              {{ customer.first_name[0] }}
            </div>
            <div class="name">
              <p class="reviewer-name">{{ customer.name }}</p>
              <p class="text-left text-[12px] text-gray-300">
                {{ customer.date }}
              </p>
            </div>
          </div>
          <div class="review-rating">
            <span v-for="star in customer.rate" :key="star" class="star">
              &#9733;
            </span>
          </div>
          <p class="review-text text-wrap">
            <span v-if="isTextExpanded(customer.id)">{{
              customer.comment
            }}</span>
            <span v-else>{{ truncatedComment(customer.comment) }}</span>
            <template v-if="isLongComment(customer.comment)">
              <span
                class="cursor-pointer text-blue-500"
                @click="toggleTextExpansion(customer.id)"
              >
                {{ isTextExpanded(customer.id) ? "See less" : "See more" }}
              </span>
            </template>
          </p>
          <div class="mt-2 w-[30%]">
            <img
              src="@/assets/images/about/google.png"
              alt="Descriptive Text"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    customers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      expandedComments: [],
      colorMap: {},
    };
  },
  methods: {
    isLongComment(comment) {
      return comment.split(" ").length > 100;
    },
    truncatedComment(comment) {
      const words = comment.split(" ");
      return words.slice(0, 100).join(" ") + (words.length > 100 ? "..." : "");
    },
    toggleTextExpansion(customerId) {
      const index = this.expandedComments.indexOf(customerId);
      if (index > -1) {
        this.expandedComments.splice(index, 1);
      } else {
        this.expandedComments.push(customerId);
      }
    },
    isTextExpanded(customerId) {
      return this.expandedComments.includes(customerId);
    },
    getRandomColor(customerId) {
      if (!this.colorMap[customerId]) {
        let randomColor;
        do {
          randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        } while (this.isColorTooLight(randomColor));
        this.colorMap[customerId] = randomColor;
      }
      return this.colorMap[customerId];
    },
    isColorTooLight(color) {
      const rgb = parseInt(color.substring(1), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 200;
    },
  },
};
</script>
<style scoped>
.cards {
  width: 100%;
  padding-bottom: 15px;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.card-item {
  height: fit-content !important;
  margin: 10px;
  display: inline-block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  vertical-align: top;
}

.reviewer-name {
  font-size: 1.1em;
  text-align: left;
  font-weight: bold;
}

.review-rating {
  color: #ffc107;
  font-size: 1.2em;
  text-align: left;
}

.review-text {
  font-size: 1em;
  color: #555;
  line-height: 1.4;
  text-align: left;
}
</style>
