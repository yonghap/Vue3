import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layout/DefaultLayout.vue'
import fullLayout from '@/layout/fullLayout.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/Main.vue'),
		},
		{
			path: '/place/:id',
			name: 'place',
			component: () => import('../views/Detail.vue'),
			meta : {
				layout : fullLayout
			}
		}
	]
})

export default router
