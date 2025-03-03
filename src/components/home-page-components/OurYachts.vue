<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import AppCarousel from '../AppCarousel.vue';
import { store } from '../../store';

export default {
    name: 'OurYachts',
    components: {
        Swiper,
        SwiperSlide,
        AppCarousel
    },
    data() {
        return {
            elements: [
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'express',
                    url: '/images/house.png'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'cruiser',
                    url: '/images/house.png'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'cruiser',
                    url: '/images/house.png'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'flybridges',
                     url: '/images/house.png'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'sedan bridges',
                     url: '/images/house.png'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'tri-deck',
                     url: '/images/house.png'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'megayacths',
                     url: '/images/house.png'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'convertibles',
                     url: '/images/house.png'
                }
            ]
        }
    },
    mounted() {
        store.observeElementsWithFadeIn();
    },
}
</script>




<template>
    <section class="py-5 bg custom-primary-color">
        <div class="container fade-in-element">
            <div class="row">
                <div class="col-12 py-4">
                    <div class="title text-center py-4">
                        <h2 class="title-s mb-3 fw-bold">Momenti di relax e natura</h2>
                        <div class="col-12 my-4" style="background-color:#ffff;">
                            <div class="col-1" style="height: 1px; background-color:#F1E2C5 ; margin:0 auto;"></div>
                        </div>
                    </div>
                </div>
                
                <!-- Usando il componente figlio "AppCarousel" e passando i dati -->
                <AppCarousel :elements="elements" />

                <div class="col-12 text-center py-5">
                    <button class="btn-border-to-white">View All</button>
                </div>
            </div>
        </div>
    </section>
</template>



<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

/* Classi di animazione fade-in */
.fade-in-element {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in-element.fade-in {
    opacity: 1;
    transform: translateY(0);
}

.custom-primary-color {
    background-color: $custom-primary-color;
}

.icon-custom-primary-color {
    color: $custom-primary-color;
    font-size: $custom-title-m ;
}

.yacht-img {
    width: 100%;
    height: auto;
    max-width: 500px;
    max-height: 500px;
    object-fit: cover;
    border-radius: 5px;
}

.img-content {
    position: relative;
    overflow: hidden;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.3s ease;
    }

    .hover-text {
        color: white;
        font-size: 20px;
    }
}

.img-content:hover .overlay {
    opacity: 1;
}

.title-s {
    @include title-s;
}

.btn-border-to-white {
    @include btn-border-to-white;
}
</style>
