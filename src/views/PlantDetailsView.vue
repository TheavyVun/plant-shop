<template>
  <div class="h-auto w-full">
    <div class="m-auto my-[50px] h-auto sm:w-[90%] lg:w-[70%]">
      <div class="my-[50px] flex w-full justify-between">
        <div class="left w-[650px]">
          <img class="h-[650px] w-[650px]" :src="mainImage" alt="" />
          <div class="my-[30px] flex w-full items-center justify-around">
            <div
              v-for="image in latestPlants[0]?.images"
              :key="image?.image"
              @click="changeMainImage(image?.image)"
              class="cursor-pointer"
            >
              <img
                class="h-[100px] w-[100px] transform rounded-full bg-cover bg-center transition duration-300 hover:scale-110"
                :src="image?.image"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="right w-[42%] flex-col">
          <h1 class="text-[34px]">{{ latestPlants[0]?.name }}</h1>
          <div class="my-[30px] w-full">
            <div class="flex items-center text-[22px] text-green-600">
              <div class="mr-2">Code:</div>
              <div>{{ latestPlants[0]?.code }}</div>
            </div>
            <div class="text-[22px] text-green-600">
              {{
                "$" + latestPlants[0]?.from + " - " + "$" + latestPlants[0]?.to
              }}
            </div>
          </div>
          <div class="my-[30px] w-full">
            <div class="flex w-full items-center">
              <div class="mr-2 text-[22px]">Care:</div>
              <div
                class=""
                v-for="care in latestPlants[0]?.care"
                :key="care.name"
              >
                <div class="m-1 rounded-3xl bg-green-500 px-3 py-1 text-white">
                  {{ care.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="my-[30px] w-full">
            <div class="flex w-full items-center">
              <div class="mr-2 text-[22px]">Size:</div>
              <div
                class=""
                v-for="size in latestPlants[0]?.size"
                :key="size.name"
              >
                <div class="m-1 rounded-3xl bg-[#2196f3] px-3 py-1 text-white">
                  {{ size.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="my-[30px] w-full">
            <div class="flex w-full items-center">
              <div class="mr-2 text-[22px]">Light:</div>
              <div
                class=""
                v-for="light in latestPlants[0]?.light"
                :key="light.name"
              >
                <div class="m-1 rounded-3xl bg-[#009688] px-3 py-1 text-white">
                  {{ light.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-[80px] mt-[50px] text-[#2c3e50]">
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
      <div class="my-[80px]">
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
import Footer from "../components/Footer.vue";
import LatestPlants from "../components/LatestPlants.vue";

const latestPlants = [
  {
    id: 1,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 2,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 3,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 4,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 5,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 6,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 7,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 8,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 9,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 10,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 11,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 12,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 13,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 14,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 15,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 16,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 17,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 18,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 19,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 20,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 21,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 22,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 23,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 24,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 25,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 26,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 27,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 28,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 29,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 30,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 31,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 32,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 33,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 34,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 35,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 36,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 37,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 38,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 39,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
  {
    id: 40,
    name: "Cacao Tree",
    code: "A109",
    images: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103132A109-GG%20(1)?alt=media&token=f55e8336-3f9f-485f-9e73-bf8e94ae4170",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20230728%2F20230728103125A109-AA%20(3)?alt=media&token=db8ed205-4270-44e1-9342-9eb20f1b8385",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082703AA%20(9)?alt=media&token=73820495-e678-450e-9d71-b03182929d1c",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082654AA%20(8)?alt=media&token=0b8a9757-f150-4d2a-94d5-a7839bcb7a47",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082640AA%20(11)?alt=media&token=6317b76a-b61e-4d60-9332-9ea88fde77b8",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/greenhouse-6f31c.appspot.com/o/product%2F20220929%2F20220929082625AA%20(10)?alt=media&token=d2a64c80-f8ad-45f0-962e-90e714f663c7",
      },
    ],
    from: "5",
    to: "10",
    care: [{ name: "Moderate" }, { name: "Advance" }, { name: "Moderate" }],
    size: [{ name: "Small" }, { name: "Medium" }],
    light: [
      { name: "Direct" },
      { name: "Direct Light" },
      { name: "Indirect Light" },
    ],
  },
];

const mainImage = ref(latestPlants[0]?.images[0]?.image);
const changeMainImage = (image) => {
  mainImage.value = image;
};
</script>

<style scoped></style>
