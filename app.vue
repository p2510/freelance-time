<template>
  <div
    class="relative py-4"
    :class="
      $router.currentRoute.value.path == '/' ? 'bg-transparent' : 'bg-black'
    "
  >
    <Nav class="sticky top-0 z-50" />
    <div v-if="$router.currentRoute.value.path == '/'" class="relative">
      <video autoplay muted loop id="myVideo">
        <source src="./assets/video/background-video.mp4" type="video/mp4" />
      </video>
      <main class="container absolute top-1/2">
        <p class=" text-6xl roboto font-bold text-white bg-blue-900 p-4 rounded-md shadow-lg">Alors on parle😄🎤 </p>
        <section class="animation ml-2">
          <div class="first font-semibold text-5xl bg-slate-800"><div class="px-2 ">Freelance </div></div>
          <div class="second font-semibold text-5xl bg-orange-800"><div class="px-2 ">Startup</div></div>
          <div class="third font-semibold text-5xl bg-blue-900"><div class="px-2 ">Projet</div></div>
        </section>
      </main>
    </div>

    <slot></slot>
    <NuxtPage />
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:700");


.container {
  color: #e5e5e5;
  font-size: 2.26rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
}

.animation {
  height: 50px;
  overflow: hidden;
}

.animation > div > div {
  height:2.81rem;
  margin-bottom: 2.81rem;
  display: inline-block;
}

.animation div:first-child {
  animation: text-animation 8s infinite;
}




@keyframes text-animation {
  0% {
    margin-top: 0;
  }
  10% {
    margin-top: 0;
  }
  20% {
    margin-top: -5.62rem;
  }
  30% {
    margin-top: -5.62rem;
  }
  40% {
    margin-top: -11.24rem;
  }
  60% {
    margin-top: -11.24rem;
  }
  70% {
    margin-top: -5.62rem;
  }
  80% {
    margin-top: -5.62rem;
  }
  90% {
    margin-top: 0;
  }
  100% {
    margin-top: 0;
  }
}
</style>
