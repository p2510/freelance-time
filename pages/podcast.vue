<template>
  <div class="bg-slate-50 mt-16">
    <h3 class="bg-black text-8xl roboto font-bold text-white text-center">
      Podcast
    </h3>
    <img src="./../assets/img/bg_home1.png" class="w-full h-20" alt="" />
    <section class="grid grid-cols-12 gap-6 max-w-7xl mx-auto py-20 px-20">
     
      <CardPodcast 
      v-for="podcast in  podcasts" :key="podcast.id"
          :source="podcast.source"
          :color1="podcast.color1"
          :color2="podcast.color2"
          :title="podcast.title"
          :subtitle="podcast.subtitle"
          :link="podcast.url"
          class="col-span-full sm:col-span-6 lg:col-span-4"
        />

    </section>

  </div>
</template>
<script setup> 

import {ref} from 'vue'
import { useFirestore } from 'vuefire'
const db = useFirestore()
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
const podcasts = useCollection(collection(db, 'podcast'))

useHead({
  title: "Découvrez nos différents podcasts sur Freelance Time",
  meta: [
    {
      name: "description",
      content: "Retrouvez tous nos podcasts et réécoutez-les directement.",
    },
  ],
});

useSeoMeta({
  title: "Explorez nos podcasts Freelance Time avec les meilleurs freelancers, startuper et animateurs",
  ogTitle: "Freelance Time - Découvrez nos podcasts",
  description: "Plongez dans l'univers des freelancers avec Freelance Time, une série de podcasts captivants organisée par Freeci, la plateforme de freelance ouest-africaine.",
  ogDescription: "Découvrez Freelance Time, une série de podcasts fascinants sur les freelancers, organisée par Freeci, la plateforme de freelance ouest-africaine.",
  ogImage: "https://freelance-time.freeci.ci/_nuxt/assets/img/logo.svg",
});


</script>
