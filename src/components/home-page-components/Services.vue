<script>
import { faAnchor, faCar, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faUser, faStar, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { store } from '../../store'; 
export default {
    name: 'Services',
    data() {
        return {
            services: [
                { icon: faAnchor, 
                   title: 'Maneggio', 
                   text: 'Respira l’aria fresca della campagna e lasciati guidare in un’esperienza a cavallo tra sentieri panoramici e colline toscane. Che tu sia principiante o esperto, il nostro maneggio offre passeggiate adatte a tutti, per un contatto autentico con la natura.' },
                { icon: faUser, 
                   title: 'Cantine di Montefalco', 
                   text: 'Scopri il cuore enologico dell’Umbria con una visita alle prestigiose cantine di Montefalco. Degustazioni guidate, vigneti secolari e il pregiato Sagrantino ti aspettano per un’esperienza sensoriale indimenticabile.' },
                { icon: faCar, 
                   title: 'Tour in Elicottero', 
                   text: 'Vivi un’avventura straordinaria con un volo in elicottero sopra le meravigliose colline toscane. Ammira borghi medievali, vigneti e paesaggi mozzafiato da una prospettiva unica ed esclusiva.' },
                { icon: faStar, 
                   title: 'Escursione in Fattoria', 
                   text: 'Immergiti nella vita di campagna con una giornata in fattoria. Partecipa alla cura degli animali, scopri i segreti della produzione locale e gusta prodotti genuini a km 0. Perfetto per famiglie e per chi ama la natura.' },
            ]
        }
    },
    mounted() {
        store.observeElementsWithFadeIn();
        //  window.addEventListener('scroll', this.parallaxEffect);
    },
    methods: {
    }
}
</script>

<template>
    <section>
        <div class="container py-5 fade-in-element">
            <div class="row">
                <div class="col-lg-12 col-md-6 col-sm-12 text-center">
                    <h2 class="title-section py-3">Esperienze Uniche</h2>
                </div>
                <div class="col-12 my-5" style="background-color: #ffff;">
                    <div class="col-1" style="height: 1px; background-color:#191B1C; margin: 0 auto;"></div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-12" v-for="(service, index) in services" :key="index">
                    <div class="service-item mb-5 py-3">
                        <div class="title mb-3 d-flex">
                            <div>
                                <font-awesome-icon :icon="service.icon" class="custom-primary-color fa-lg" />
                            </div>
                            <div>
                                <span class="sub-title-l mx-3 py-2" style="color: #222627;">{{ service.title }}</span>
                            </div>
                        </div>
                        <div class="text paragraph-thin py-2">
                            <p>{{ service.text }}</p>
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

.custom-primary-color {
    background-color: $custom-primary-color;
    color: white;
    border-radius: 100%;
    padding: 1rem;
    font-size: 1.5rem;
}

.title-section {
    @include title-section;
    font-size: 2.5rem; /* Impostato per desktop */

    /* Media query per tablet e mobile */
    @media (max-width: 991px) {
        font-size: 2rem; /* Ridurre il font-size per tablet */
    }

    @media (max-width: 576px) {
        font-size: 1.75rem; /* Ridurre ulteriormente per mobile */
    }
}

.sub-title-l {
    @include sub-title-l;
    font-weight: 700;
    font-size: 1.5rem; /* Impostato per desktop */

    /* Media query per tablet e mobile */
    @media (max-width: 991px) {
        font-size: 1.9rem;; /* Ridurre il font-size per tablet */
    }

    @media (max-width: 576px) {
        font-size: 1.5rem; /* Ridurre ulteriormente per mobile */
    }
}

.paragraph-thin {
    @include paragraph-thin;
}

.parallax {
    position: relative;
    background-image: url('https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/bg6.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    height: 100%;
    background-color: #F8F9FE;

    .container {
        position: relative;
        z-index: 2;
    }
}
</style>
