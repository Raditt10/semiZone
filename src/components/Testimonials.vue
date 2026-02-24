<script setup>
import { Quote } from "lucide-vue-next";
import { testimonials } from "../data";
</script>

<template>
  <section id="testimonials" class="py-24 px-6 bg-deep-blue/10">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl mb-4">Suara Siswa</h2>
        <p class="text-starlight/60">Siaran dari seluruh rasi bintang.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="item in testimonials"
          :key="item.id"
          class="glass p-8 relative flex flex-col items-center text-center border-white/5"
        >
          <Quote class="w-10 h-10 text-neon-blue/20 absolute top-6 left-6" />

          <div class="mb-6">
            <img
              :src="item.avatar"
              :alt="item.name"
              class="w-20 h-20 rounded-full border-2 border-neon-blue/30"
            />
          </div>

          <p class="text-lg italic text-starlight/80 mb-6 relative z-10">
            "{{ item.content }}"
          </p>

          <h4
            class="text-neon-blue font-bold tracking-widest uppercase text-sm"
          >
            - {{ item.name }} -
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>
