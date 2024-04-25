<template>
  <nav
    class="flex flex-col sm:flex-row justify-between items-center px-2 py-3 bg-white mx-auto rounded-2xl sm:max-w-2xl md:max-w-4xl"
  >
    <div class="flex items-center">
      <NuxtLink to="/">
        <img src="~/assets/img/logo2.png" alt="" />
      </NuxtLink>
    </div>
    <ul class="flex flex-col sm:flex-row gap-6 mt-4 sm:mt-0">
      <ULink
        to="/podcast"
        active-class="text-blue-800 roboto"
        inactive-class="text-gray-500 roboto dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >
        Podcast
      </ULink>

      <ULink
        to="/prochain"
        active-class="text-blue-800 roboto"
        inactive-class="text-gray-500 roboto dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >
        À venir
      </ULink>

    </ul>
    <UButton
      to="https://www.youtube.com/@Freeci-lt4uq"
      target="_blank"
      size="sm"
      color="blue"
      class="text-white roboto mt-4 sm:mt-0"
      >Notre chaîne</UButton
    >
  </nav>
</template>

<script setup>

</script>

<style scoped>

*{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
