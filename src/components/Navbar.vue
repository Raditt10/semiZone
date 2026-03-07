<script setup>
// Import Vue composables dan icons
import { ref, watch } from "vue";
import { Rocket, X, Menu } from "lucide-vue-next";
import { useRouter, useRoute } from "vue-router";

// State untuk menu mobile
const isMenuOpen = ref(false);
const router = useRouter();
const route = useRoute();

// Fungsi untuk toggle menu mobile
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = "hidden"; // Disable scroll saat menu terbuka
  } else {
    document.body.style.overflow = "";
  }
};

// Fungsi untuk menutup menu
const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = "";
};

// Watcher untuk menutup menu saat route berubah
watch(
  () => route.path,
  () => {
    closeMenu();
  },
);

// Daftar navigation links
const navLinks = [
  { name: "Beranda", to: "/" },
  { name: "Galeri", to: "/gallery" },
  { name: "Blog", to: "/blog" },
  { name: "Murid", to: "/crew" },
  { name: "Pencapaian", to: "/milestones" },
  { name: "Musik", to: "/music" },
];
</script>

<template>
  <!-- Main Nav Bar -->
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-[60] transition-all duration-300 px-6 py-1.5 translate-y-1.5 mx-4 md:mx-8 rounded-full shadow-2xl glass-dark',
      isMenuOpen ? 'bg-void-black/95 backdrop-blur-2xl' : ''
    ]"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <router-link
        to="/"
        class="flex items-center gap-3 group cursor-pointer relative z-70"
        @click="closeMenu"
      >
        <img
          src="/logo.webp"
          alt="semizone"
          class="h-10 md:h-12 w-auto object-contain transition-all group-hover:scale-110 drop-shadow-blue"
        />
        <span
          class="text-xl font-poppins font-bold bg-clip-text text-transparent bg-linear-to-r from-neon-blue to-white"
        >
          SEMIZONE
        </span>
      </router-link>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-6">
        <router-link
          v-for="link in navLinks"
          :key="link.name"
          :to="link.to"
          class="text-sm font-medium text-starlight/70 hover:text-neon-blue hover:glow-text transition-all select-none outline-none caret-transparent"
          active-class="text-neon-blue glow-text"
        >
          {{ link.name }}
        </router-link>
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        @click="toggleMenu"
        class="md:hidden text-starlight p-2 hover:bg-white/10 rounded-lg transition-colors relative z-70"
      >
        <Menu v-if="!isMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>
  </nav>

  <!-- Mobile Menu Overlay (Outside parent for better fixed positioning) -->
  <Transition
    enter-active-class="transition duration-400 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-50 md:hidden bg-void-black flex flex-col items-center justify-center overflow-y-auto pt-20 pb-8"
    >
      <!-- Background Accents for Mobile Menu (Hidden on mobile to reduce lag) -->
      <div
        class="hidden md:block absolute top-[20%] left-[10%] w-64 h-64 bg-neon-blue/10 blur-[100px] rounded-full pointer-events-none"
      ></div>
      <div
        class="hidden md:block absolute bottom-[20%] right-[10%] w-64 h-64 bg-glowing-purple/10 blur-[100px] rounded-full pointer-events-none"
      ></div>

      <div class="flex flex-col items-center gap-8 relative z-10 w-full px-8">
        <router-link
          v-for="(link, index) in navLinks"
          :key="link.name"
          :to="link.to"
          @click="closeMenu"
          class="text-3xl font-poppins font-bold text-starlight/40 hover:text-neon-blue transition-all relative group w-full text-center nav-link-mobile select-none outline-none caret-transparent"
          active-class="text-neon-blue scale-110 !text-starlight glow-text"
          :style="{ animationDelay: `${index * 100 + 150}ms` }"
        >
          <span class="relative">
            {{ link.name }}
            <span
              class="absolute -bottom-2 left-0 w-0 h-1 bg-neon-blue transition-all group-hover:w-full"
            ></span>
          </span>
        </router-link>
      </div>

      <div
        class="mt-12 flex flex-col items-center gap-6 relative z-10 animate-fade-in shrink-0"
        style="animation-delay: 800ms"
      >
        <div class="flex gap-6">
          <img
            src="/logo.webp"
            alt="semizone"
            class="h-24 w-auto object-contain drop-shadow-[0_0_40px_rgba(0,243,255,0.5)]"
          />
        </div>
        <p class="text-xs text-starlight/30 tracking-[0.3em] uppercase">
          Sector SMK - XI RPL 1
        </p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.nav-link-mobile {
  opacity: 0;
  animation: slide-up 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.animate-fade-in {
  opacity: 0;
  animation: fade-in 1s ease forwards;
}
</style>
