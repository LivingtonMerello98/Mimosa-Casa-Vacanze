<script>
import { store } from '../../store'; 
export default {
    name: 'BetterService',
    mounted() {
        // Avvia l'osservazione dell'elemento quando il componente viene montato
        store.observeElementsWithFadeIn();
    }
}
</script>

<template>
    <section class="bg-image">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 py-5 fade-in-element">
                    <div class="content mb-5">
                        <div class="text text-center py-5">
                            <h2 class="title-m mb-5">Camere accoglienti per <br>un soggiorno indimenticabile</h2>
                        <router-link to="/attivita">
                            <button class="btn-primary-to-white">Attività</button>
                        </router-link>
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

.bg-image {
    background-image: url('/images/better-service.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;

    .title-m {
        @include title-m;
        line-height: 1.25;
        letter-spacing: 0.2rem;

        /* Impostazioni per dispositivi più piccoli */
        @media (max-width: 991px) {
            font-size: 1.9rem; /* Riduce la dimensione del font su tablet e smartphone */
        }

        @media (max-width: 576px) {
            font-size: 1.9rem; /* Riduce ulteriormente la dimensione sui dispositivi mobili */
        }
    }

    .btn-primary-to-white {
        @include btn-primary-to-white
    }
}
</style>
