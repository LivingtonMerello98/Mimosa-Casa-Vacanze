<script>
import { store } from '../store';

export default{
    data(){
        return{
            name: 'AppSiderbar',
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
    },
    methods:{
        toggleMenu(){
        store.toggleMenu()
        }
    }
}
</script>

<template>
    <div class="sidebar d-flex
    flex-column">
        <div>
            <font-awesome-icon @click="toggleMenu()" :icon="['fas', 'close']" style="color: white;" class="px-3 py-3" />
        </div>
        
        <div class="col-md-12 px-3">

            <ul class="nav d-flex flex-column"  @click="toggleMenu()" >
                <li v-for="(link, index) in navLinks" :key="index">
                    <!--<router-link></router-link> per la navigazione tra i link-->
                    <router-link v-if="link.url" :to="link.url" class="nav-link mx-1 custom-nav-link">{{
                        link.navItem }}</router-link>
                    <a v-else href="#" class="nav-link px-2 mx-1 custom-nav-link">{{ link.navItem }}</a>
                </li>
            </ul>

            <hr class="text-white">

            <a href=""  class="text-white">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a href=""  class="text-white">
              <font-awesome-icon :icon="['fab', 'twitter']" class="mx-4" />
            </a>
            <a href=""  class="text-white">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>

        </div>


    </div>
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as *;
@use 'src/assets/partials/variables' as *;

.sidebar{
    background-color: $custom-tertiary-color;
    position: fixed;
    height: 100vh;
    width: 300px;
    right: 0;
    z-index: 999;
}

ul {
    li {
        a {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease, background-color 0.3s ease;

            &:hover {
                color: white; 
                background-color: rgba(255, 255, 255, 0.1);
                text-decoration: none; 
            }

            &:focus {
                outline: none;  
                color: white;  
                background-color: rgba(255, 255, 255, 0.3);  
                text-decoration: none;  
            }
        }
    }
}


.social-icon {
    width: 30px;
    margin-right: 20px;
}


@media only screen and (max-width: 768px) {
  .laptop-tablet-smartphone {
    display: none;
  }
  .tablet {
    display: block;
  }
  .mobile {
    display: none;
  }
}

@media only screen and (max-width: 375px) {
  .laptop-tablet-smartphone {
    display: none;
  }
  .tablet {
    display: none;
  }
  .mobile {
    display: block;
  }
}

</style>