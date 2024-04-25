<template>
  <div class="bg-slate-50 mt-0">
    <section class="max-w-7xl mx-auto py-12 bg-white rounded-2xl">
      <h3 class="pl-12 text-4xl roboto font-semibold text-slate-600 py-4">
        Derniers épisodes
      </h3>
      <div class="grid grid-cols-12 gap-6 px-12">
        <CardPodcast
          v-for="podcast in podcasts"
          :key="podcast.id"
          :source="podcast.source"
          :color1="podcast.color1"
          :color2="podcast.color2"
          :title="podcast.title"
          :subtitle="podcast.subtitle"
          :link="podcast.url"
          class="col-span-full sm:col-span-6 lg:col-span-4"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useFirestore } from "vuefire";
const db = useFirestore();
import { useCollection } from "vuefire";
import { collection, limit } from "firebase/firestore";
const podcasts = useCollection(collection(db, "podcast"), limit(3));

useHead({
  title: "Freelance Time - Découvrez des podcasts inspirants",
  meta: [
    {
      name: "description",
      content:
        "Plongez dans l'univers des freelancers avec Freelance Time, une série de podcasts organisée par Freeci, la plateforme de freelance ouest-africaine.",
    },
  ],
});

useSeoMeta({
  title:
    "Freelance Time - Explorez nos podcasts avec les meilleurs freelancers, startuper et animateurs",
  ogTitle: "Freelance Time - Découvrez nos podcasts",
  description:
    "Découvrez Freelance Time, une série de podcasts captivants sur les freelancers, organisée par Freeci, la plateforme de freelance ouest-africaine.",
  ogDescription:
    "Plongez dans l'univers des freelancers avec Freelance Time, une série de podcasts organisée par Freeci, la plateforme de freelance ouest-africaine.",
  ogImage: "https://freelance-time.freeci.ci/_nuxt/assets/img/logo.svg",
});
</script>
