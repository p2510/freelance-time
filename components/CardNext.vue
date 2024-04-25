<template>
  <div class="shadow-2xl">

    <div class="p-10 bg-white">
      <h2 class="leading-relaxed">
        <p class="roboto text-slate-700 text-md font-bold">
          <span class="underline underline-offset-4">Thème</span> :
          <span>
            {{ props.title }}</span
          >
        </p>
        <span class="roboto text-slate-700/60 text-md font-bold"
          ><i class="not-italic text-sm">Date de diffusion : </i>
          <i class="not-italic text-sm"> {{props.date}}</i></span
        >
      </h2>
      <div class="flex justify-end pt-4">
        <UButton color="blue" variant="solid" :to="props.link" target="_blank"
          >M'inscire</UButton
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  date: String,
  link: String,
});
</script>
