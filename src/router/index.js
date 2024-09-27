import {createRouter, createWebHistory} from 'vue-router'
import DefaultLayout from '@/layout/DefaultLayout.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/Main.vue'),

		},
		{
			path: '/new',
			name: 'new',
			component: () => import('../views/New.vue'),

		},
		{
			path: '/best',
			name: 'best',
			component: () => import('../views/Best.vue')
		},
		{
			path: '/evaluate',
			name: 'evaluate',
			component: () => import('../views/Evaluate.vue')
		},
		{
			path: '/game/:id',
			name: 'detail',
			component: () => import('../views/Detail.vue')
		}
	]
})

export default router
