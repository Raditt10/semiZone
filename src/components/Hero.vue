<script setup>
import { ChevronRight } from "lucide-vue-next";
</script>

<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
  >
    <!-- Background Wrapper -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div
        class="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center scale-105 animate-[pulse_10s_infinite_alternate]"
      ></div>
      <div
        class="absolute inset-0 bg-linear-to-b from-void-black/20 via-void-black/50 to-void-black"
      ></div>
    </div>

    <!-- Floating Planets/Elements for Parallax feel -->
    <div
      class="absolute top-[15%] left-[10%] w-64 h-64 bg-glowing-purple/20 blur-[100px] animate-pulse"
    ></div>
    <div
      class="absolute bottom-[20%] right-[10%] w-80 h-80 bg-neon-blue/20 blur-[100px] animate-pulse delay-1000"
    ></div>

    <!-- Hero Content -->
    <div class="relative z-10 w-full max-w-2xl px-6">
      <div
        class="glass p-1 md:p-2 rounded-4xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/5"
      >
        <div
          class="bg-black/40 backdrop-blur-2xl rounded-[1.8rem] p-6 md:p-10 border border-white/10 flex flex-col items-center text-center"
        >
          <h1 class="text-4xl md:text-5xl mb-4 leading-tight">
            Semizone <br />
            <span class="text-neon-blue glow-blue">XI RPL 1</span>
          </h1>

          <p
            class="text-base md:text-lg text-starlight/60 max-w-xl mb-10 font-inter"
          >
            Menjelajahi luasnya alam semesta pengetahuan dan persahabatan di
            <span class="text-starlight font-bold">KELAS XI RPL 1</span>. Misi
            kami adalah kehebatan.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="#identity"
              class="group relative px-8 py-4 bg-neon-blue text-void-black font-bold rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] flex items-center gap-2"
            >
              Jelajahi Perjalanan Kami
              <ChevronRight
                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#crew"
              class="px-8 py-4 glass text-starlight font-bold rounded-xl hover:bg-white/20 transition-all border-white/10"
            >
              Temui Para Kru
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes pulse {
  0% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
