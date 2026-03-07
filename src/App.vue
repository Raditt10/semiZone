<script setup>
// Komponen navigasi dan footer
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
// Akses router untuk navigasi
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div
    class="min-h-screen bg-void-black selection:bg-neon-blue selection:text-void-black"
  >
    <Navbar />

    <main class="relative z-10">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

      <!-- CTA -->
      <section class="py-16 md:py-24 px-4 md:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="glass px-6 py-10 md:p-12 rounded-3xl relative overflow-hidden group">
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 blur-3xl -translate-x-1/2 -translate-y-1/2"
            ></div>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Bergabunglah dengan Petualangan Kami!
            </h2>
            <p class="text-starlight/60 mb-8 md:mb-10 text-base md:text-lg">
              Jadilah bagian dari perjalanan luar biasa di kelas XI RPL 1. Bersama
              kita akan menjelajahi dunia pengetahuan, kreativitas, dan
              persahabatan yang tak terbatas.
            </p>
            <button
              class="bg-neon-blue text-void-black px-8 py-3 md:px-10 md:py-4 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all inline-flex items-center justify-center mx-auto text-center"
              @click="router.push('/gallery')"
            >
              Lihat Perjalanan Kami
            </button>
          </div>
        </div>
      </section>
    </main>

    <Footer />

    <!-- Ambient background effects -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        class="hidden md:block absolute top-[-10%] left-[-10%] w-125 h-125 bg-neon-blue/5 blur-[120px] rounded-full animate-pulse"
      ></div>
      <div
        class="hidden md:block absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-glowing-purple/5 blur-[120px] rounded-full animate-pulse delay-700"
      ></div>
    </div>
  </div>
</template>

<style>
/* Global smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Custom Scrollbar for Sci-Fi feel */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #020617;
}
::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #00f3ff;
}
</style>
