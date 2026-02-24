<script setup>
import { Telescope, Rocket, Star } from "lucide-vue-next";

const identities = [
  {
    title: "Visi",
    description:
      "Menjadi generasi inovator yang memimpin dalam eksplorasi global dan keunggulan ilmiah.",
    icon: Telescope,
    color: "text-neon-blue",
    bg: "bg-neon-blue/10",
  },
  {
    title: "Misi",
    description:
      "Menumbuhkan rasa ingin tahu, menguasai teknologi canggih, dan membangun komunitas pemikiran kolaboratif bintang.",
    icon: Rocket,
    color: "text-glowing-purple",
    bg: "bg-glowing-purple/10",
  },
  {
    title: "Nilai",
    description:
      "Integritas bagaikan bintang berlian, keberanian menghadapi kehampaan, dan persatuan sebagai rasi bintang yang kuat.",
    icon: Star,
    color: "text-white",
    bg: "bg-white/10",
  },
];
</script>

<template>
  <section id="identity" class="py-24 px-6 relative">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl mb-4">Identitas Kelas Kami</h2>
        <div
          class="w-24 h-1 bg-linear-to-r from-transparent via-neon-blue to-transparent mx-auto"
        ></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="item in identities"
          :key="item.title"
          class="glass-dark p-8 group hover:neon-border transition-all duration-500 hover:-translate-y-2 cursor-pointer"
        >
          <div
            :class="[
              'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110',
              item.bg,
            ]"
          >
            <component
              :is="item.icon"
              :class="['w-8 h-8', item.color]"
            ></component>
          </div>
          <h3
            class="text-2xl mb-4 group-hover:text-neon-blue transition-colors"
          >
            {{ item.title }}
          </h3>
          <p class="text-starlight/60 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
