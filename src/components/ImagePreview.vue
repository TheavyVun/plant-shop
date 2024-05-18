<template>
  <div v-if="isVisible" class="popup-overlay" @click="closePopup">
    <div class="popup-content" @click.stop>
      <button class="close-btn h-[45px] w-[50px]" @click="$emit('close')">
        <img src="../assets/images/icons/close.svg" alt="" />
      </button>
      <img :src="imageSrc" alt="Popup Image" />
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    currentIndex: {
      type: Number,
      required: true,
    },
    totalImages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #030303d0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup-content {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 50%;
  height: 50%;
  overflow: none;
}

.popup-content img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

button {
  margin-top: 10px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.prev-btn {
  position: absolute;
  left: 15px;
  bottom: 50%;
  transform: translateY(50%);
}

.next-btn {
  position: absolute;
  right: 15px;
  bottom: 50%;
  transform: translateY(50%);
}
</style>
