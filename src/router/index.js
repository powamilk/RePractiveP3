import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditForm from '@/components/EditForm.vue'
import AddForm from '@/views/AddForm.vue'
import DetailForm from '@/views/DetailForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'add',
      component: AddForm
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailForm
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditForm
    }
  ]
})

export default router
