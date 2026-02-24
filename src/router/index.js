import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GalleryView from '../views/GalleryView.vue';
import CrewView from '../views/CrewView.vue';
import MilestonesView from '../views/MilestonesView.vue';
import BlogView from '../views/BlogView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
