// Import Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Import semua halaman/views
import HomeView from '../views/HomeView.vue';
import GalleryView from '../views/GalleryView.vue';
import CrewView from '../views/CrewView.vue';
import MilestonesView from '../views/MilestonesView.vue';
import BlogView from '../views/BlogView.vue';
import MusicView from '../views/MusicView.vue';

// Konfigurasi router dengan semua route aplikasi
const router = createRouter({
  history: createWebHistory(), // Menggunakan HTML5 History API
  routes: [ // Daftar semua route/halaman
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/crew',
      name: 'crew',
      component: CrewView
    },
    {
      path: '/milestones',
      name: 'milestones',
      component: MilestonesView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/music',
      name: 'music',
      component: MusicView
    }
  ],
  // Kontrol perilaku scroll saat navigasi
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Jika ada saved position, kembali ke posisi sebelumnya
      return savedPosition;
    } else {
      // Jika tidak, scroll ke atas halaman
      return { top: 0 };
    }
  }
});

export default router;
