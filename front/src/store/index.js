// src/store/index.js
import { createStore } from "vuex";

const store = createStore({
  state: {
    cartItems: [],
  },
  mutations: {
    addToCart(state, item) {
      state.cartItems.push(item);
    },

    removeFromCart(state, index) {
      state.cartItems.splice(index, 1);
    },

    increaseQuantity(state, index) {
      state.cartItems[index].quantity++;
    },

    decreaseQuantity(state, index) {
      if (state.cartItems[index].quantity > 1) {
        state.cartItems[index].quantity--;
      }
    },
  },
  actions: {
    addItemToCart({ commit, state }, item) {
      const index = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id,
      );
      if (index !== -1) {
        commit("increaseQuantity", index);
      } else {
        commit("addToCart", item);
      }
    },

    removeItemFromCart({ commit }, index) {
      commit("removeFromCart", index);
    },
  },
  getters: {
    cartItems: (state) => state.cartItems,

    subtotal: (state) => {
      return state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
    },

    tax: (state, getters) => {
      return (getters.subtotal * 10) / 100;
    },

    total: (state, getters) => {
      return getters.subtotal + getters.tax;
    },
  },
});

export default store;
