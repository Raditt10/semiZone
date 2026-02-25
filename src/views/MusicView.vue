<script setup>
import { favoriteSongs } from "../data";
import { Music, Play, ExternalLink } from "lucide-vue-next";

const spotifyLogo = "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png";
</script>

<template>
  <div class="pt-32 pb-24 px-6 relative overflow-hidden">
    <!-- Background Accents -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-glowing-purple/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 class="text-xs font-bold tracking-[0.5em] text-neon-blue uppercase mb-4 animate-fade-in">
            Playlist Siswa XI RPL 1
          </h2>
          <h1 class="text-5xl md:text-6xl font-poppins font-bold text-white leading-tight">
            Lagu Fav Warga <span class="bg-clip-text text-transparent bg-linear-to-r from-neon-blue to-white">XI RPL 1</span>
          </h1>
        </div>
        <p class="text-starlight/60 max-w-md text-lg italic border-l-2 border-neon-blue/30 pl-6">
          "Musik adalah bahasa universal yang menghubungkan kita di antara bintang-bintang."
        </p>
      </div>

      <!-- Songs Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        <div 
          v-for="(song, index) in favoriteSongs" 
          :key="song.id"
          class="glass group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,243,255,0.1)] animate-slide-up"
          :style="{ animationDelay: `${index * 80}ms` }"
        >
          <div class="relative aspect-square overflow-hidden">
            <img 
              :src="song.coverImage" 
              :alt="song.songTitle"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-void-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <a 
                :href="song.spotifyUrl" 
                target="_blank"
                class="w-12 h-12 bg-neon-blue rounded-full flex items-center justify-center text-void-black transform scale-50 group-hover:scale-100 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Play class="w-6 h-6 fill-current" />
              </a>
            </div>
            
            <!-- Spotify Floating Badge -->
            <div class="absolute top-2 right-2 bg-void-black/40 backdrop-blur-md p-1.5 rounded-lg border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <img :src="spotifyLogo" alt="Spotify" class="h-3 object-contain" />
            </div>
          </div>

          <div class="p-4">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-6 h-6 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue border border-neon-blue/20">
                <Music class="w-3 h-3" />
              </div>
              <span class="text-xs font-bold tracking-widest text-starlight uppercase truncate">
                {{ song.studentName }}
              </span>
            </div>
            
            <h3 class="text-sm font-bold text-white mb-1 group-hover:text-neon-blue transition-colors truncate">
              {{ song.songTitle }}
            </h3>
            <p class="text-[11px] text-starlight/60 mb-3 font-medium truncate">
              {{ song.artist }}
            </p>

            <a 
              :href="song.spotifyUrl" 
              target="_blank"
              class="inline-flex items-center gap-1.5 text-neon-blue font-bold text-[9px] tracking-widest uppercase group-hover:gap-2.5 transition-all"
            >
              SPOTIFY
              <ExternalLink class="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-slide-up {
  opacity: 0;
  animation: slide-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.animate-fade-in {
  animation: fade-in 1s ease forwards;
}
</style>
