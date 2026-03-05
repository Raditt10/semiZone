<script setup>
import { AlertCircle, X, ExternalLink } from 'lucide-vue-next';

defineProps({
  show: Boolean,
  title: {
    type: String,
    default: 'Perhatian'
  },
  message: {
    type: String,
    required: true
  },
  spotifyUrl: {
    type: String,
    default: ''
  }
});

defineEmits(['close']);
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-void-black/80 backdrop-blur-sm">
      <div 
        class="relative w-full max-w-md glass-dark p-6 md:p-8 rounded-2xl shadow-[0_0_40px_rgba(0,243,255,0.15)] border border-neon-blue/30 overflow-hidden"
        @click.stop
      >
        <div class="absolute inset-0 z-0 pointer-events-none">
        <div class="hidden md:block absolute -top-20 -right-20 w-40 h-40 bg-neon-blue/20 blur-[50px] rounded-full"></div>
        <div class="hidden md:block absolute -bottom-20 -left-20 w-40 h-40 bg-glowing-purple/20 blur-[50px] rounded-full"></div>
      </div>  
        <div class="relative z-10">
          <!-- Close button -->
          <button 
            @click="$emit('close')"
            class="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-starlight/60 hover:text-white transition-colors"
          >
            <X class="w-4 h-4" />
          </button>

          <!-- Content -->
          <div class="flex flex-col items-center text-center mt-2">
            <div class="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center mb-6 border border-neon-blue/20 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
              <AlertCircle class="w-8 h-8 text-neon-blue" />
            </div>
            
            <h3 class="text-xl font-bold text-white mb-3 font-poppins">{{ title }}</h3>
            
            <p class="text-sm md:text-base text-starlight/70 mb-8 font-inter">
              {{ message }}
            </p>
            
            <div class="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <button 
                @click="$emit('close')"
                class="px-6 py-2.5 rounded-xl font-bold text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors w-full sm:w-auto"
              >
                Tutup
              </button>
              
              <a 
                v-if="spotifyUrl"
                :href="spotifyUrl"
                target="_blank"
                class="px-6 py-2.5 rounded-xl font-bold text-sm bg-neon-blue text-void-black hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Buka di Spotify
                <ExternalLink class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active > div {
  animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.fade-leave-active > div {
  animation: slide-down 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slide-down {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
}
</style>
