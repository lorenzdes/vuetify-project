import { createRouter, createWebHistory } from 'vue-router';
import FormRegistration from '@/pages/FormRegistration.vue';
import Home from '@/pages/index.vue';
import GraphDashboard from '@/pages/GraphDashboard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/form-registration',
    name: 'FormRegistration',
    component: FormRegistration,
  },
  {
    path: '/graph-dashboard',
    name: 'GraphDashboard',
    component: GraphDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
