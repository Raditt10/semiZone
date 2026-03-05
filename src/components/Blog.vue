<script setup>
import { ref, computed } from "vue";
import { Calendar, Tag } from "lucide-vue-next";
import { blogPosts } from "../data";

const activeFilter = ref("Semua");
const filterOptions = ["Semua", "Pengumuman", "Kegiatan"];

const filteredPosts = computed(() => {
  if (activeFilter.value === "Semua") return blogPosts;
  return blogPosts.filter((post) => post.tag === activeFilter.value);
});
</script>

<template> 
  <section id="blog" class="py-24 px-6 relative overflow-hidden">
    <!-- bg -->
    <div
      class="hidden md:block absolute -top-24 -left-24 w-96 h-96 bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div
        class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
      >
        <div>
          <h2 class="text-3xl md:text-5xl mb-4">Blog Kelas</h2>
          <p class="text-starlight/60">Catatan perjalanan antarbintang kami.</p>
        </div>

        <div class="flex gap-2 p-1 glass-dark rounded-xl">
          <button
            v-for="opt in filterOptions"
            :key="opt"
            @click="activeFilter = opt"
            :class="[
              'px-5 py-2 rounded-lg text-sm transition-all',
              activeFilter === opt
                ? 'bg-white/10 text-white shadow-lg'
                : 'text-starlight/50 hover:text-starlight',
            ]"
          >
            {{ opt }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article
          v-for="post in filteredPosts"
          :key="post.id"
          class="glass group hover:bg-white/15 transition-all duration-500 overflow-hidden flex flex-col md:flex-row border-white/5"
        >
          <div class="md:w-2/5 overflow-hidden">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div class="p-8 md:w-3/5">
            <div class="flex items-center gap-3 mb-4">
              <span
                class="px-3 py-1 bg-neon-blue/20 text-neon-blue text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1"
              >
                <Tag class="w-2.5 h-2.5" />
                {{ post.tag }}
              </span>
              <span class="text-xs text-starlight/40 flex items-center gap-1">
                <Calendar class="w-3 h-3" />
                {{ post.date }}
              </span>
            </div>
            <h3
              class="text-2xl mb-4 group-hover:text-neon-blue transition-colors line-clamp-2"
            >
              {{ post.title }}
            </h3>
            <p class="text-starlight/60 text-sm mb-6 line-clamp-3">
              {{ post.excerpt }}
            </p>
            <button
              class="text-neon-blue font-bold text-sm tracking-widest uppercase flex items-center gap-2 group/btn"
            >
              Baca Catatan Misi
              <span
                class="w-8 h-px bg-neon-blue group-hover/btn:w-12 transition-all"
              ></span>
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
