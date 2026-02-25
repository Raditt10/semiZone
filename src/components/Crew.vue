<script setup>
import { Mail, ShieldCheck } from "lucide-vue-next";
import { students } from "../data";

const guru = students.find((s) => s.type === "leader");
const members = students.filter((s) => s.type !== "leader");
</script>

<template>
  <section id="crew" class="py-24 px-6 bg-void-black relative">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl mb-4">Kenali Para Murid XI RPL 1</h2>
        <p class="text-starlight/60">
          Para murid yang membawa semangat dan kehebatan di kelas XI RPL 1
        </p>
      </div>

      <!-- Guru Highlight -->
      <div v-if="guru" class="mb-16">
        <div
          class="glass max-w-4xl mx-auto overflow-hidden border-neon-blue/30 shadow-[0_0_50px_rgba(0,243,255,0.1)]"
        >
          <div class="flex flex-col md:flex-row">
            <div
              class="md:w-1/3 bg-neon-blue/10 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-white/10"
            >
              <div class="relative">
                <img
                  :src="guru.avatar"
                  :alt="guru.name"
                  class="w-48 h-48 rounded-full border-4 border-neon-blue shadow-[0_0_30px_rgba(0,243,255,0.3)] bg-void-black"
                />
              </div>
            </div>
            <div class="md:w-2/3 p-8 md:p-12">
              <span
                class="text-neon-blue text-sm font-bold tracking-[0.2em] uppercase mb-2 block"
                >Guru Tercinta Kami</span
              >
              <h3 class="text-4xl mb-4">{{ guru.name }}</h3>
              <p class="text-xs text-starlight/40 mb-6 font-poppins">
                {{ guru.idNumber }}
              </p>
              <blockquote
                class="text-xl italic text-starlight/80 mb-8 border-l-4 border-neon-blue pl-6"
              >
                "{{ guru.quote }}"
              </blockquote>
              <a
                :href="'mailto:' + guru.contact"
                class="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all font-bold"
              >
                <Mail class="w-5 h-5" />
                Contact Guru
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid for other members -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="student in members"
          :key="student.id"
          class="glass-dark p-6 group hover:-translate-y-2.5 transition-all duration-500 hover:neon-border flex flex-col items-center text-center relative overflow-hidden"
        >
          <!-- Sci-fi background elements -->
          <div
            class="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-white/20 to-transparent"
          ></div>

          <div class="mb-6 relative">
            <div
              class="absolute inset-0 bg-neon-blue/20 rounded-full blur-xl group-hover:bg-neon-blue/40 transition-all"
            ></div>
            <img
              :src="student.avatar"
              :alt="student.name"
              class="w-24 h-24 rounded-full border-2 border-white/10 relative z-10 bg-void-black group-hover:border-neon-blue/50 transition-all"
            />
          </div>

          <span
            class="text-[10px] text-starlight/40 font-poppins tracking-widest uppercase mb-1"
            >{{ student.idNumber }}</span
          >
          <h4
            class="text-lg font-bold mb-1 group-hover:text-neon-blue transition-colors"
          >
            {{ student.name }}
          </h4>
          <span class="text-sm text-neon-blue/70 mb-4 block">{{
            student.role
          }}</span>

          <p class="text-xs text-starlight/50 leading-relaxed line-clamp-2">
            "{{ student.quote }}"
          </p>

          <div
            class="mt-6 pt-4 border-t border-white/5 w-full flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all"
          >
            <button
              class="text-starlight/40 hover:text-neon-blue transition-colors"
            >
              <Mail class="w-4 h-4" />
            </button>
            <button
              class="text-starlight/40 hover:text-neon-blue transition-colors"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
