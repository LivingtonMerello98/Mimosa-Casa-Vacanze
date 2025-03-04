<script>
import { store } from '../../store';
export default {
    name: "AppFeaturedProjects",
    props: {
        elements: {
            type: Array,
            required: true
        },
        paragraph: {
            type: String,
            required: true,
        },
        carouselDescription: {  
            type: Object,  
            required: true
        }
    },
    mounted() {
        store.observeElementsWithFadeIn();
    },
}
</script>

<template>
    <section>
        <div class="container py-5 fade-in-element">
            <h2 class="py-5">{{ carouselDescription.title }}</h2>  <!-- Correzione qui -->
            <div class="col-12  my-4" style="background-color: rgba(0, 0, 0, 0.037);">
                <div class="col-1" style="height: 1px; background-color:#938A77;">
                </div>
            </div>
            <p class="paragraph-thin">{{ carouselDescription.paragraph }}</p>  <!-- Correzione qui -->
            <div class="row py-5">
                <div class="col-lg-4 col-md-6 col-sm-12 py-3 px-3" v-for="element in elements" :key="element.url" >
                    <div class="img-content position-relative">
                        <img :src="element.url" class="yacht-img">
                        <div class="overlay">
                            <div class="text-center">
                                <div v-html="element.icon" class=" icon-custom-primary-color"></div>
                                <div class="hover-text fs-2 fw-bold">{{ element.name }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

.fade-in-element {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in-element.fade-in {
    opacity: 1;
    transform: translateY(0);
}

h2 {
    font-weight: bold;
    font-size: $custom-title-section-size;

    @media (max-width: 768px) { 
        font-size: 1.9rem; 
    }
}

.yacht-img {
    width: 100%;
    height: 250px; /* Altezza ridotta */
    object-fit: cover; /* Mantiene proporzioni senza deformazioni */
    border-radius: 10px; /* Optional: angoli arrotondati */
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
        cursor: pointer;
    }

    .hover-text {
        color: white;
        font-size: 20px;

        @media (max-width: 768px) { 
            font-size: 16px;
        }

        @media (max-width: 576px) { 
            font-size: 14px;
        }
    }
}

.img-content:hover .overlay {
    opacity: 1;
}

.icon-custom-primary-color {
    color: $custom-primary-color;
    font-size: $custom-title-m;

    @media (max-width: 768px) { // Per tablet
        font-size: 18px;
    }

    @media (max-width: 576px) { // Per mobile
        font-size: 16px;
    }
}

.paragraph-thin {
    @include paragraph-thin;
}
</style>
