<script>
import { store } from '../store';
import OurHistory from '../components/home-page-components/OurHistory.vue';
import BettersService from '../components/home-page-components/BettersService.vue';
import Services from '../components/home-page-components/Services.vue';
import OurYachts from '../components/home-page-components/OurYachts.vue';
import WorldRallly from '../components/home-page-components/WorldRallly.vue';
import Testimonials from '../components/home-page-components/Testimonials.vue';
import Hero from '../components/home-page-components/Hero.vue';
import Blog from '../components/home-page-components/Blog.vue';
import AppUniversalHeader from '../components/AppUniversalHeader.vue';
import HeaderAboutContacts from '../components/HeaderAboutContacts.vue';
import AppSidebar from '../components/AppSidebar.vue';


export default {
    name: "AppHome",

    components: {
        OurHistory,
        BettersService,
        Services,
        OurYachts,
        WorldRallly,
        Testimonials,
        Hero,
        Blog,
        HeaderAboutContacts,
        AppUniversalHeader,
        AppSidebar

    },

    computed: {
        showMenu() {
            // Accedi alla proprietà `showMenu` dal tuo store
            return store.showMenu;
        }
    }
}
</script>

<template>
    <AppUniversalHeader />
    <HeaderAboutContacts />
    <Hero />
    <OurHistory />
    <BettersService />
    <Services />
    <OurYachts />
    <WorldRallly />
    <Blog />
    <!-- <Testimonials /> -->
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as *;
@use 'src/assets/partials/variables' as *;
</style>