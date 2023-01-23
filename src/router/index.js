import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from '../stores/auth';

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      auth: true,
    },
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { recoveryToken } = useAuthStore();
  if (to.meta.auth) {
    if (localStorage.token) {
      recoveryToken();
      next();
    } else {
      next({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
