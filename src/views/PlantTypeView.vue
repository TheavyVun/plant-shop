<template>
  <div>{{ message }}</div>
  <div id="app">
    <h1>Succulent Plants</h1>
    <div class="search">
      <input type="text"  class="w-100 p-2" placeholder="search">
    </div>
    <div class="search-sort m-2" >
      <select v-model="sortBy" class="search-item d-flex p-2">
        <button><option value="name">Name</option></button>
        
        <option value="price">Price</option>
        <option value="careLevel">Care Level</option>
        <option value="size">Size</option>
      </select>
      <!-- <button @click="sortPlants">Sort</button> -->
    </div>
    <div class="grid grid-cols-6 gap-2 d-flex">
      <div class="main_plant_list" v-for="plant of plants" :key="plant" :post="plant">
        <ul class="plant-list">
          <li >
          <img class=" w-50 h-25 m-auto" :src="plant.image">
          <p class=" w-20 m-auto border-2 p-1 rounded-lg bg-green-400">{{plant.price}}</p>
          <p>{{plant.name}}</p>
        </li>
      </ul>
      </div>

    </div>
    <Footer />
  </div>
</template>
  
<script>
import { ref } from "vue";
import Footer from "../components/Footer.vue";
const message = ref("Plant Type");
export default {
  data() {
    return {
      searchTerm: "",
      sortBy: "name",
      plants: [
        { name: "Jade Plant", price: 12.99, image: "https://purepng.com/public/uploads/large/purepng.com-plantnatureplant-961524678664sj8de.png"},
        { name: "Jade Plant", price: 12.99, image: "https://i.pinimg.com/736x/ee/99/b8/ee99b8cb977d89dc3eab724804062b3a.jpg" },
        { name: "Jade Plant", price: 12.99, image: "https://i.pinimg.com/736x/ee/99/b8/ee99b8cb977d89dc3eab724804062b3a.jpg" },
        { name: "Jade Plant", price: 12.99, image: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-succulent-plant-RJEJGA0-600.jpg" },
        { name: "Jade Plant", price: 12.99, image: "https://img.freepik.com/premium-psd/pot-plant-png_656104-534.jpg" },
        { name: "Jade Plant", price: 12.99, image: "https://img.freepik.com/premium-psd/pot-plant-png_656104-534.jpg" },
        { name: "Jade Plant", price: 12.99, image: "https://img.freepik.com/premium-psd/pot-plant-png_656104-534.jpg" },
        { name: "Jade Plant", price: 12.99, image: "https://img.freepik.com/premium-psd/pot-plant-png_656104-534.jpg" },
        { name: "Jade Plant", price: 12.99, image: "https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-abstract-leaves-potted-plant-png-image_10142406.png" },
        { name: "Jade Plant", price: 12.99, image: "https://img.freepik.com/premium-psd/pot-plant-png_656104-534.jpg" },
        { name: "Jade Plant", price: 12.99, image: "https://cdn.shopify.com/s/files/1/0172/1463/6096/products/wall-hanging-plant-pot-cover-woven-hanging-plant-pots-with-waterproof-interior-plastic-coating-set-2-23608317378713_2500x.jpg?v=1662365898" },
        { name: "Jade Plant", price: 12.99, image: "https://i5.walmartimages.com/asr/f915372c-be15-44f5-8189-b2b8c2ee24c6.b8439c638e9e16c6eaa28f4306e034c6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" },
        { name: "Jade Plant", price: 12.99, image: "https://i0.wp.com/creativegarden.in/wp-content/uploads/2020/11/Chlorophytum-Spider-Plant.jpg?fit=1000%2C1000&ssl=1" },
        { name: "Jade Plant", price: 12.99, image: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-succulent-plant-RJEJGA0-600.jpg" },
        { name: "Jade Plant", price: 12.99, image: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcC00Mzgta3dhbi0wMi5wbmc.png" },
        { name: "Jade Plant", price: 12.99, image: "https://png.pngtree.com/png-vector/20201216/ourmid/pngtree-white-pottery-potted-watercress-green-potted-plant-png-image_2562995.jpg" },
        { name: "Jade Plant", price: 12.99, image: "https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-0M3OKRF-600.jpg" },
      ],
    };
  },
  computed: {
    filteredPlants() {
      const searchTermLower = this.searchTerm.toLowerCase();
      return this.plants.filter((plant) => {
        const plantNameLower = plant.name.toLowerCase();
        return plantNameLower.includes(searchTermLower);
      });
    },
  },
  methods: {
    sortPlants() {
      this.filteredPlants.sort((a, b) => {
        const sortValueA = a[this.sortBy];
        const sortValueB = b[this.sortBy];
        if (sortValueA < sortValueB) {
          return -1;
        } else if (sortValueA > sortValueB) {
          return 1;
        } else {
          return 0;
        }
      });
    },
  },
};
</script>
  
<style scoped>
#app {
  font-family: sans-serif;
  text-align: center;
  display: block;
}

h1{
  font-size: 40px;
  text-decoration: underline;
}

.search, .search-item{
  width: 50%;
  margin: auto;
  /* border: 1px solid black; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: none;
}

.search-sort {
  display: block;
  justify-content: space-evenly;
  margin-bottom: 10px;
}

.main_plants{
  width: 100%;
    padding: 30px;
    height: 80vh;
    /* overflow: auto; */
    display: grid;
    grid-template-columns: repeat(6, 1fr);
}

.plant-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.plant-list li {
  margin: 10px;
  padding: 10px;
  /* border: 1px solid #ddd; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

}
.cards {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
.latest-plant {
  display: flex;
  width: 100%;
  padding: 0.8em;
}
@media all and (min-width: 20em) {
  .latest-plant {
    width: calc(100% / 12 * 6);
  }
}

@media all and (min-width: 37.5em) {
  .latest-plant {
    width: calc(100% / 12 * 4);
  }
}
@media all and (min-width: 56.25em) {
  .latest-plant {
    width: calc(100% / 12 * 2);
  }
}
</style>
  
