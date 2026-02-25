<script setup>
import { Instagram, Globe, Mail, MapPin } from "lucide-vue-next";
</script>

<template>
  <footer
    class="py-16 px-6 border-t border-neon-blue/20 bg-void-black relative"
  >
    <!-- Glow Garnish -->
    <div
      class="absolute bottom-0 right-0 w-64 h-64 bg-neon-blue/5 blur-[100px] rounded-full pointer-events-none"
    ></div>

    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12"
    >
      <div class="md:w-1/3">
        <div
          class="flex items-center gap-2 mb-6 text-2xl font-poppins font-bold bg-clip-text text-transparent bg-linear-to-r from-neon-blue to-white"
        >
          SEMIZONE
        </div>
        <p class="text-starlight/50 leading-relaxed mb-8">
          Sebuah kelas yang didedikasikan untuk mengejar keunggulan dan
          eksplorasi hal-hal yang tidak diketahui. Terikat oleh persahabatan,
          didorong oleh rasa ingin tahu.
        </p>
        <div class="flex gap-4">
          <a
            href="#"
            class="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-neon-blue hover:text-neon-blue transition-all select-none outline-none caret-transparent"
          >
            <Instagram class="w-5 h-5" />
          </a>
          <a
            href="#"
            class="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-neon-blue hover:text-neon-blue transition-all select-none outline-none caret-transparent"
          >
            <Mail class="w-5 h-5" />
          </a>
          <a
            href="#"
            class="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-neon-blue hover:text-neon-blue transition-all select-none outline-none caret-transparent"
          >
            <Globe class="w-5 h-5" />
          </a>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-2 gap-12 md:w-1/2">
        <div>
          <h4
            class="text-white font-bold mb-6 tracking-widest uppercase text-sm"
          >
            Tautan
          </h4>
          <ul class="space-y-4">
            <li>
              <router-link
                to="/"
                class="text-starlight/50 hover:text-neon-blue transition-colors select-none outline-none caret-transparent"
              >Beranda</router-link>
            </li>
            <li>
              <router-link
                to="/gallery"
                class="text-starlight/50 hover:text-neon-blue transition-colors select-none outline-none caret-transparent"
              >Galeri</router-link>
            </li>
            <li>
              <router-link
                to="/blog"
                class="text-starlight/50 hover:text-neon-blue transition-colors select-none outline-none caret-transparent"
              >Blog</router-link>
            </li>
            <li>
              <router-link
                to="/crew"
                class="text-starlight/50 hover:text-neon-blue transition-colors select-none outline-none caret-transparent"
              >Daftar Murid</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4
            class="text-white font-bold mb-6 tracking-widest uppercase text-sm"
          >
            Koordinat
          </h4>
          <ul class="space-y-4 text-starlight/50">
            <li class="flex items-center gap-3">
              <MapPin class="w-4 h-4 text-neon-blue" />
                 Jl. Soekarno-Hatta KM. 10, Kota Bandung, Jawa Barat
            </li>
            <li class="flex items-center gap-3">
              <Mail class="w-4 h-4 text-neon-blue" />
               xirpl1@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-starlight/30 text-xs tracking-widest"
    >
      <p>&copy; 2026 SEMIZONE. All Rights Reserved.</p>
      <div class="flex gap-8">
        <a href="#" class="hover:text-neon-blue transition-colors select-none outline-none caret-transparent">PRIVASI</a>
        <a href="#" class="hover:text-neon-blue transition-colors select-none outline-none caret-transparent">KETENTUAN</a>
      </div>
    </div>
  </footer>
</template>
