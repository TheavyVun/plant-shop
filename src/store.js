import { reactive } from "vue";

export const store = reactive({
  cartItems: 0,
  addToCart() {
    this.cartItems++;
  },
  removeFromCart() {
    if (this.cartItems > 0) {
      this.cartItems--;
    }
  },
});
