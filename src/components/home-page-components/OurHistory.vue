<script>
import { store } from '../../store'; 
export default {
    name: 'OurHistory',
    mounted() {
        // Avvia l'osservazione dell'elemento quando il componente viene montato
        store.observeElementsWithFadeIn();
    }
};
</script>

<template>
    <section>
        <div class="container py-5">
            <div class="row">

                <div class="col-md-6 col-12 img-container fade-in-element">
                    <img src="/images/ourHistory.png" class="img-fluid img-agriturismo" alt="Agriturismo">
                </div>

                <div class="col-md-12 col-sm-12 col-lg-6 py-5">
                    <div class="text col-12 text-lg-start fade-in-element"> <!-- Classi aggiunte per centrare solo su mobile/tablet -->
                        <h1 class="title-section mb-2">Vivi la nostra storia</h1>
                        <!-- hr provvisorio -->
                        <div class="col-12 d-flex my-5" style="background-color: #ffff;">
                            <div class="col-2" style="height: 1px; background-color:#191B1C ;"></div>
                        </div>
                        <p class="paragraph-bold mb-5">
                            Nel cuore verde dell'Italia, la nostra casa vacanze ti offre un'esperienza autentica, dove la bellezza
                            della natura e la ricchezza delle tradizioni locali si fondono perfettamente.
                        </p>
                        <p class="paragraph-thin mb-5">
                            Situata a pochi minuti
                            da <strong>Montefalco</strong>, uno dei gioielli dell'Umbria, la nostra struttura è il punto di partenza ideale per
                            esplorare la regione, famosa per i suoi paesaggi mozzafiato e per la produzione del celebre
                            <strong>Sagrantino di Montefalco</strong>.
                        </p>
                        <p class="paragraph-thin mb-5">
                            Passeggia tra le vigne, visita le cantine e lasciati conquistare dai
                            sapori e dai profumi che solo questa terra sa offrire. Ogni angolo della nostra casa ti farà sentire
                            parte di una storia secolare, dove il relax e la cultura si incontrano in un mix perfetto.
                        </p>
                        <button class="btn-secondary">Attività</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

.img-container {
    display: flex;
   // justify-content: center; /* Centra orizzontalmente */
    align-items: center; /* Centra verticalmente */
}

.img-agriturismo {
    width: 85%;
    border-radius:20px; 
}


section {
    background-color: white;
}

.title-section {
    @include title-section;
}

.btn-secondary {
    @include btn-secondary;
}

.paragraph-bold {
    @include paragraph-bold;
}

.paragraph-thin {
    @include paragraph-thin;
}

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

/* Media query per tablet e mobile */
@media (max-width: 768px) {
    .img-container {
        display: none;
    }
}

@media (max-width: 991px) {
    .text-center {
        text-align: center;
    }
    p {
        font-size: 16px;
    }
    .img-container {
        display: none;
    }
}
</style>
