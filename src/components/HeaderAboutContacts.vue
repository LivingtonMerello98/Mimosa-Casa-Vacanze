<script>
export default {
    name: 'HeaderAboutContacts',
    data() {
        return {
            logo: './src/components/about-page-components/logo/mimosa_logo.svg',
            navLinks: [
                {
                    navItem: 'appartamenti',
                    url: '/appartamenti'
                },
                {
                    navItem: 'ristoranti',
                    url: '/ristoranti'
                },
                {
                    navItem: 'servizi',
                    url: ''
                },
                {
                    navItem: 'contacts',
                    url: ''
                }
            ]
        }
    }
}
</script>



<template>
    <section class="bg-header">
        <div class="container py-1">
            <header>
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-4 ">
                    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img :src="logo" alt="logo" class="logo">
                    </a>

                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li v-for="(link, index) in navLinks" :key="index">
                            <!--<router-link></router-link> per la navigazione tra i link-->
                            <router-link v-if="link.url" :to="link.url" class="nav-link mx-1 custom-nav-link">{{
                                link.navItem }}</router-link>
                            <a v-else href="#" class="nav-link px-2 mx-1 custom-nav-link">{{ link.navItem }}</a>
                        </li>
                    </ul>

                    <div class="col-md-3 text-end">
                        <!-- <i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i> -->
                    </div>
                </div>
            </header>
        </div>
        <!-- <div class="col-12 py-3 bg-white">
            <div class="container">
                <div class="d-flex">
                    <div class="text-uppercase nav pr border-right">home</div>
                    <div class="text-uppercase nav pl custom-active">lorem</div>
                </div>
            </div>
        </div> -->
    </section>
</template>



<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

.logo{
    width: 40%;
    height: auto;
}

.bg-header {
    background-color: $custom-secondary-color ;
}

.custom-nav-link {
    color: #fff;
    text-transform: uppercase;
    font-size: 14.4px;
    padding: 27px 23px 22px;
    font-weight: 600;

    &:hover {
        //color: $custom-color-title-section;
        color:#F1E2C5;
    }
}

.bg-white {
    background-color: #e0e0e0;
}

.pr {
    padding-right: 2rem;
    border-right: 2px solid black;
}

.pl {
    padding-left: 2rem;
}

.nav {
    font-size: 13px;
    font-weight: 600;
}

.custom-active {
    color: $custom-primary-color;
}
</style>