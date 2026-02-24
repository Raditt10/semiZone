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
            class="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-neon-blue hover:text-neon-blue transition-all"
          >
            <Instagram class="w-5 h-5" />
          </a>
          <a
            href="#"
            class="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-neon-blue hover:text-neon-blue transition-all"
          >
            <Mail class="w-5 h-5" />
          </a>
          <a
            href="#"
            class="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-neon-blue hover:text-neon-blue transition-all"
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
            Tautan Cepat
          </h4>
          <ul class="space-y-4">
            <li>
              <a
                href="#home"
                class="text-starlight/50 hover:text-neon-blue transition-colors"
                >Kontrol Navigasi</a
              >
            </li>
            <li>
              <a
                href="#gallery"
                class="text-starlight/50 hover:text-neon-blue transition-colors"
                >Arsip Visual</a
              >
            </li>
            <li>
              <a
                href="#blog"
                class="text-starlight/50 hover:text-neon-blue transition-colors"
                >Catatan Misi</a
              >
            </li>
            <li>
              <a
                href="#crew"
                class="text-starlight/50 hover:text-neon-blue transition-colors"
                >Daftar Anggota</a
              >
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
              Sector SMK, Galaxy ID
            </li>
            <li class="flex items-center gap-3">
              <Mail class="w-4 h-4 text-neon-blue" />
              hq@semizone.site
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-starlight/30 text-xs tracking-widest"
    >
      <p>&copy; 2024 PROYEK SEMIZONE. SEMUA SISTEM NORMAL.</p>
      <div class="flex gap-8">
        <a href="#" class="hover:text-neon-blue transition-colors">PROTOKOL</a>
        <a href="#" class="hover:text-neon-blue transition-colors">KEAMANAN</a>
      </div>
    </div>
  </footer>
</template>
