<script setup>
import { ref, computed } from "vue";
import { gallery } from "../data";

const activeCategory = ref("Semua");
const categories = ["Semua", "Kelas", "Acara", "Perjalanan"];

const filteredGallery = computed(() => {
  if (activeCategory.value === "Semua") return gallery;
  return gallery.filter((item) => item.category === activeCategory.value);
});
</script>

<template>
  <section id="gallery" class="py-24 px-6 bg-deep-blue/20">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl mb-6">Kenangan Kami</h2>

        <!-- Filter Pills -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-6 py-2 rounded-full border transition-all duration-300',
              activeCategory === cat
                ? 'bg-neon-blue border-neon-blue text-void-black font-bold shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                : 'border-white/20 text-starlight hover:border-neon-blue/50',
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TransitionGroup name="list" tag="div" class="contents">
          <div
            v-for="item in filteredGallery"
            :key="item.id"
            class="group relative overflow-hidden rounded-2xl glass-dark border-white/5 cursor-pointer"
          >
            <div class="aspect-4/3 overflow-hidden">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-linear-to-t from-void-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
            >
              <span
                class="text-xs text-neon-blue font-bold tracking-widest uppercase mb-1"
                >{{ item.category }}</span
              >
              <h4 class="text-xl text-white">{{ item.title }}</h4>
            </div>

            <!-- Frame/Scanner Garnish -->
            <div
              class="absolute inset-0 border border-neon-blue/0 group-hover:border-neon-blue/40 transition-colors pointer-events-none rounded-2xl m-2"
            ></div>
            <div
              class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <div class="w-8 h-px bg-neon-blue"></div>
              <div class="h-8 w-px bg-neon-blue absolute top-0 right-0"></div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
