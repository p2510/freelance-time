<template>
  <div class="shadow-2xl">
    <div class="flex justify-center items-center py-20" :class="color1">
      <div class="p-3 rounded-xl" :class="color2">
        <NuxtImg :src="props.source" class="w-32 h-32" />
      </div>
    </div>
    <div class="p-10 bg-white ">
      <h2 class="leading-relaxed">
        <p class="roboto text-slate-700 text-md font-bold">
          {{ props.title }}
        </p>
        <span class="roboto text-slate-700/60 text-md font-bold"
          >{{ props.subtitle }}</span
        >
      </h2>
      <div class="flex justify-end pt-4">
        <UButton
          color="emerald"
          variant="solid"
          :to="props.link"
          target="_blank"
          >Visualiser</UButton
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  source: String,
  title: String,
  subtitle: String,
  color1: String,
  color2: String,
  link: String,
});
</script>
