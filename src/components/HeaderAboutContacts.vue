<script>
import { store } from '../store';
export default {
    name: 'HeaderAboutContacts',
    data() {
        return {
            logo: '/images/mimosa_logo.svg',
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
                    url: '/contacts'
                }
            ]
        }
    },
    methods:{
    toggleMenu(){
        store.toggleMenu()
    }
  }
}
</script>

<template>
    <section>
        <div class="container py-1">
            <header class="d-flex">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-4 ">
                    <a href="/" class="d-flex align-items-center col-md-3 mb-md-0 text-dark text-decoration-none">
                        <img src="/images/mimosa_logo.svg"
                            alt="" class="logo mb-4">
                    </a>
                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 navigation">
                        <li v-for="(link, index) in navLinks" :key="index">
                            <!--<router-link></router-link> per la navigazione tra i link-->
                            <router-link v-if="link.url" :to="link.url" class="nav-link mx-1 custom-nav-link">{{
                                link.navItem }}</router-link>
                            <a v-else href="#" class="nav-link px-2 mx-1 custom-nav-link">{{ link.navItem }}</a>
                        </li>
                    </ul>
                </div>

                <div class="hamburger-container">
                        <font-awesome-icon @click="toggleMenu()" :icon="['fas', 'bars']" style="color: white;" class="px-3" />
                </div>
            </header>
        </div>
    </section>
</template>



<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

.logo{
    width: 40%;
    height: auto;
}

section {
    background-color: $custom-secondary-color ;
}

.custom-nav-link {
    color: #fff;
    text-transform: uppercase;
    font-size: 14.4px;
    padding: 27px 23px 22px;
    font-weight: 600;

    &:hover {
        color:#F1E2C5;
        text-decoration: underline ;
    }
    &:focus{
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

.hamburger-container{
    display: none;
}

@media only screen and (max-width: 768px) {
   .hamburger-container{
     display: block;
     display:flex;
     align-items: center;
    }

  .navigation {
    display: none;
  }
  .logo{
    width: 30%;
    height: auto;
}
}
</style>