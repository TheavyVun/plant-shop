<template>
  <div class="h-auto w-full">
    <div class="m-auto my-[50px] h-auto xs:px-3 sm:w-[90%] lg:w-[70%]">
      <div
        class="my-[50px] w-full justify-between md:flex-col lg:flex"
        style="display: flex; flex-flow: row wrap"
      >
        <div class="xs:w-full sm:w-full md:w-full lg:w-[49%]">
          <img class="h-[500px] w-full" :src="mainImage" alt="Not found" />
          <div
            class="my-[30px] flex w-full items-center justify-center"
            style="display: flex; flex-flow: row wrap"
          >
            <div
              v-for="image in latestPlants[id]?.images"
              :key="image?.image"
              @click="changeMainImage(image?.image)"
              class="cursor-pointer p-[0.5em] sm:h-[25%] sm:w-[25%] md:h-[20%] md:w-[20%] lg:h-[16.66%] lg:w-[16.66%]"
            >
              <img
                :src="image?.image"
                class="h-[80px] w-[85px] rounded-full bg-cover bg-center duration-300 hover:scale-110"
                alt="Not found"
              />
            </div>
          </div>
        </div>
        <div class="flex-col xs:w-full sm:w-full md:w-full lg:w-[49%]">
          <h1 class="text-[34px]">{{ latestPlants[id]?.name }}</h1>
          <div class="my-[30px] w-full">
            <div class="flex items-center text-[18px] text-green-600">
              <div class="mr-2">Code:</div>
              <div>{{ latestPlants[id]?.code }}</div>
            </div>
            <div class="text-[18px] text-green-600">
              {{
                "$" +
                latestPlants[id]?.from +
                " - " +
                "$" +
                latestPlants[id]?.to
              }}
            </div>
          </div>
          <div class="my-[30px] w-full">
            <div class="flex w-full items-center">
              <div class="mr-2 text-[18px]">Care:</div>
              <div
                class=""
                v-for="care in latestPlants[id]?.care"
                :key="care?.name"
                style="display: flex; flex-flow: row wrap"
              >
                <div class="m-1 rounded-3xl bg-green-500 px-3 py-1 text-white">
                  {{ care?.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="my-[30px] w-full">
            <div class="flex w-full items-center">
              <div class="mr-2 text-[18px]">Size:</div>
              <div
                class=""
                v-for="size in latestPlants[id]?.size"
                :key="size?.name"
                style="display: flex; flex-flow: row wrap"
              >
                <div class="m-1 rounded-3xl bg-[#2196f3] px-3 py-1 text-white">
                  {{ size?.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="my-[30px] w-full">
            <div class="flex w-full items-center">
              <div class="mr-2 text-[18px]">Light:</div>
              <div
                class=""
                v-for="light in latestPlants[id]?.light"
                :key="light?.name"
                style="display: flex; flex-flow: row wrap"
              >
                <div class="m-1 rounded-3xl bg-[#009688] px-3 py-1 text-white">
                  {{ light?.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-[50px] mt-[50px] text-[#2c3e50]">
        Cocoa is an industrial crop whose stems and fruits are about the size of
        an elongated apple, whose fruit can be processed into chocolate. As for
        planting, it does not select the soil like durian or other crops. For
        planting, easy to care for, resistant to the surrounding environment.
        And the growing season is up to 60 years after the first day of
        planting, and after three months the harvest will begin to grow the next
        crop.
      </div>
      <div class="my-[50px]">
        <h1 class="text-[#2c3e50]">Benefits:</h1>
        <div class="flex-col">
          <div class="my-[20px] flex-col">
            <h1 class="mb-[20px] text-[#2c3e50]">1. Antioxidant properties:</h1>
            <span class="text-[#2c3e50]">
              Cocoa contains flavonoids, which are natural ingredients in plant
              products. These flavonoids help fight the formation of "free
              radicals" that are harmful to health. High levels of free radicals
              can lead to cell damage and subsequent inflammation. Sources of
              free radicals include normal metabolic processes in the body as
              well as external stressors such as pollution, poor diet and
              smoking.
            </span>
          </div>
          <div class="my-[20px] flex-col">
            <h1 class="mb-[20px] text-[#2c3e50]">
              2. Anti-inflammatory properties:
            </h1>
            <span class="text-[#2c3e50]">
              Flavonoids can be used to help reduce the formation of free
              radicals. However, as we are constantly facing free radicals, it
              is also important to fight the pre-existing damage caused by them.
              Cocoa plays a role in fighting inflammation caused by free radical
              damage. The flavonoids in cocoa stimulate parts of the immune
              system that help capture and destroy cells that are harmful to
              health.
            </span>
          </div>
          <div class="my-[20px] flex-col">
            <h1 class="mb-[20px] text-[#2c3e50]">
              3. Reduce "bad" cholesterol:
            </h1>
            <span class="text-[#2c3e50]">
              The flavonoid theobromine (found in cocoa) has been shown to
              reduce bad LDL cholesterol levels while increasing good HDL
              cholesterol. Elevated levels of LDL cholesterol are associated
              with an increase in heart disease. In addition, people of native
              origin in high-cocoa production and export countries usually have
              lower levels of heart disease. This is thought to be due to their
              high consumption of cocoa.
            </span>
          </div>
          <div class="my-[20px] flex-col">
            <h1 class="mb-[20px] text-[#2c3e50]">
              4. May prevent cognitive decline:
            </h1>
            <span class="text-[#2c3e50]">
              Cocoa powder as well as cocoa beans (and chocolate) contain
              caffeine, which is thought to have a protective effect on the
              nerves when consumed in moderation. Research has shown that
              drinking 2-4 cups of coffee a day can help prevent age-related
              cognitive decline. The mechanism of this is likely to be related
              to inflammation, reducing the properties of caffeine. Possible
              links between caffeine consumption and intestinal microbiota have
              also been established.
            </span>
          </div>
          <div class="my-[20px] flex-col">
            <h1 class="mb-[20px] text-[#2c3e50]">
              5. Can help you sleep better:
            </h1>
            <span class="text-[#2c3e50]">
              Although cocoa contains caffeine, theobromine levels can help
              balance the stimulant properties of caffeine. Cocoa also contains
              tryptophan, an amino acid that can be converted to melatonin, an
              important hormone for sleep.
            </span>
          </div>
          <div class="my-[20px] flex-col">
            <h1 class="mb-[20px] text-[#2c3e50]">
              6. Improved exercise recovery
            </h1>
            <span class="text-[#2c3e50]">
              The caffeine content of cocoa can have a positive effect on
              exercise and rehabilitation. Caffeine acts as a vasodilator by
              stimulating the production of nitric oxide. This increases blood
              flow to the muscles, which can help the muscles work harder during
              exercise and recover faster.
            </span>
          </div>
          <div class="my-[20px] flex-col">
            <h1 class="mb-[20px] text-[#2c3e50]">7. Help heart health:</h1>
            <span class="text-[#2c3e50]">
              The vasodilatory effects of caffeine not only aid in exercise, but
              can also reduce the pressure against the heart. Flavonoids in
              cocoa can help protect and combat damage to the endothelium, the
              lining of the artery wall, which when damaged can lead to heart
              and blood vessel weakness.
            </span>
          </div>
          <div class="my-[20px] flex-col">
            <h1 class="mb-[20px] text-[#2c3e50]">
              8. Contains essential nutrients:
            </h1>
            <span class="text-[#2c3e50]">
              The main micronutrients in cocoa include magnesium, potassium and
              calcium. These three nutrients play an important role in promoting
              muscle contraction, including myocardial infarction. These
              nutrient deficiencies can lead to arrhythmias, as well as common
              symptoms of malnutrition, which can include fatigue, intestinal
              disturbances, and brain haze.
            </span>
          </div>
          <div class="my-[20px] flex-col">
            <h1 class="mb-[20px] text-[#2c3e50]">
              9. May have anti-aging properties:
            </h1>
            <span class="text-[#2c3e50]">
              Foods rich in cocoa and flavonoids can help protect against the
              signs of aging by preventing dehydration of the skin and
              increasing collagen production. Water and collagen are important
              ingredients for maintaining skin tone and elasticity. Loss of
              these substances can lead to dry skin. And old. Consuming cocoa
              can also help reduce the sensitivity to UV light, which damages
              the skin.
            </span>
          </div>
        </div>
      </div>
      <div class="my-[50px]">
        <h1>Grow and Care:</h1>
        <span class="my-[10px] text-[#2c3e50]">
          Sunlight: The cacao tree needs a little sunlight and shade. They need
          direct sunlight at least 3 hours a day.
        </span>
        <span class="my-[10px] text-[#2c3e50]">
          Soil: Cocoa tree grows in soils rich in organic matter and
          well-drained soil.
        </span>
        <span class="my-[10px] text-[#2c3e50]"
          >Water: Cocoa trees need regular watering but are not resistant to
          waterlogged soil. They need about 1 water a week depending on the
          rainfall.
        </span>
        <span class="my-[10px] text-[#2c3e50]"
          >Temperature and humidity: Cocoa trees grow in hot and humid climates
          and need a lot of rain. To grow cocoa trees, you need to choose a
          well-drained, well-lit place and a good soil pH for growing cocoa is
          between 6.0 and 7.0.
        </span>
      </div>
    </div>
    <div class="my-[20px] flex flex-col items-center justify-center">
      <h1 class="mt-1 text-center text-[26px]">Relevant Plant</h1>
      <div class="m-auto mt-5 w-[80px] border-b-[3px] border-green-600"></div>
    </div>
    <LatestPlants :latestPlants="latestPlants" />
    <iframe
      class="mt-[100px] h-[350px] w-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.691465513618!2d144.96175371525688!3d-37.811466079756175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d7e62f05a5f%3A0x69f14f0e253266!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1589274753731!5m2!1sen!2sin"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Footer from "../components/Footer.vue";
import LatestPlants from "../components/LatestPlants.vue";
import { data } from "../data";

const route = useRoute();
const latestPlants = data?.latestPlants;
const id = route.params.id - 1;
const mainImage = ref(latestPlants[id]?.images[0]?.image);
const changeMainImage = (image) => {
  mainImage.value = image;
};
</script>

<style scoped></style>
