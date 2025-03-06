import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue'
import AppAbout from './pages/AppAbout.vue'
import AppContacts from './pages/AppContacts.vue'
import AppRestaurant from './pages/AppRestaurant.vue';
import AppService from './pages/AppService.vue';
import test from './pages/test.vue'
import AppApartment from './pages/AppApartment.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: AppHome
        },
        {
            name: 'appartamenti',
            path: '/appartamenti',
            component: AppAbout
        },
        {
            name: 'apartments-details',
            path: '/appartamenti/:name',
            component: AppApartment
        },
        {
            name: 'restaurants',
            path: '/ristoranti',
            component: AppRestaurant
        },
        {
            name: 'contacts',
            path: '/contatti',
            component: AppContacts
        },
        {
            name: 'attività',
            path: '/attivita',
            component: AppService
        }
    ],
});

export { router };