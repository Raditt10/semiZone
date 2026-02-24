<script setup>
import { ref } from "vue";
import { milestones } from "../data";

const selectedYear = ref("2024");
const years = ["2023", "2024", "2025"];
</script>

<template>
  <section id="milestones" class="py-24 px-6 relative overflow-hidden">
    <!-- Starfield overlay -->
    <div
      class="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"
    ></div>

    <div class="max-w-4xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl mb-6">Pencapaian Kami</h2>

        <div class="flex justify-center gap-4 mb-12">
          <button
            v-for="year in years"
            :key="year"
            @click="selectedYear = year"
            :class="[
              'px-8 py-2 rounded-full border-2 transition-all font-bold',
              selectedYear === year
                ? 'border-neon-blue text-neon-blue bg-neon-blue/10 shadow-[0_0_20px_rgba(0,243,255,0.2)]'
                : 'border-white/10 text-white/40 hover:border-white/30',
            ]"
          >
            {{ year }}
          </button>
        </div>
      </div>

      <!-- Timeline Orbit -->
      <div class="relative pl-8 md:pl-0">
        <!-- Vertical Line (Orbit Path) -->
        <div
          class="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2"
        ></div>

        <div class="space-y-12">
          <div
            v-for="(item, index) in milestones.filter(
              (m) => m.year === selectedYear,
            )"
            :key="item.id"
            :class="[
              'relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0',
              index % 2 === 0 ? 'md:flex-row-reverse' : '',
            ]"
          >
            <!-- Content Card -->
            <div class="w-full md:w-[45%]">
              <div
                class="glass-dark p-8 border-white/5 hover:neon-border transition-all group"
              >
                <span
                  class="text-neon-blue font-bold text-sm tracking-widest uppercase mb-2 block"
                  >{{ item.year }}</span
                >
                <h3
                  class="text-2xl mb-3 group-hover:text-neon-blue transition-colors"
                >
                  {{ item.title }}
                </h3>
                <p class="text-starlight/60">{{ item.description }}</p>
              </div>
            </div>

            <!-- Orbit Node (The Center Circle) -->
            <div
              class="absolute left-0 md:left-1/2 w-8 h-8 md:-translate-x-1/2 flex items-center justify-center z-20"
            >
              <div
                class="w-4 h-4 rounded-full bg-void-black border-2 border-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.8)]"
              ></div>
              <div
                class="absolute inset-0 bg-neon-blue/20 rounded-full animate-ping"
              ></div>
            </div>

            <!-- Ikon on the other side -->
            <div class="hidden md:flex w-[45%] justify-center">
              <span class="text-5xl animate-float">{{ item.icon }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
