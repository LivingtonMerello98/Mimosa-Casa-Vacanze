import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue'
import AppAbout from './pages/AppAbout.vue'
import AppContacts from './pages/AppContacts.vue'
import AppRestaurant from './pages/AppRestaurant.vue';
import AppService from './pages/AppService.vue';
import test from './pages/test.vue'




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
            name: 'restaurants',
            path: '/ristoranti',
            component: AppRestaurant
        },
        {
            name: 'contacts',
            path: '/contacts',
            component: AppContacts
        },
        {
            name: 'attività',
            path: '/attivita',
            component: AppService
        },
        {
            //file per testing
            name: 'test',
            path: '/test',
            component: test
        }

    ],
});

export { router };