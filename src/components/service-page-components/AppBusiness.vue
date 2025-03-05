<script>
import { store } from '../../store';
export default {
    name: 'AppBusiness',
    mounted() {
        // Avvia l'osservazione dell'elemento quando il componente viene montato
        store.observeElementsWithFadeIn();
    }
}
</script>

<template>

<section>
    <div class="container py-5 fade-in-element">
        <div class="row justify-content-center">
            <div class="col-md-6 py-5">
                <div>
                    <h2 class="costum-font-size fw-bold">Maneggio e Passeggiate a Cavallo.</h2>
                    <div class="col-12 d-flex my-5" style="background-color: #ffff;">
                        <div class="col-2" style="height: 1px; background-color:#F1E2C5 ;"></div>
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
                </div>
            </div>
            <div class="col-md-6 col-12 img-container fade-in-element d-flex justify-content-center align-items-center">
                <img src="https://incrociata.it/wp-content/uploads/2019/10/incrociata-840x560.jpg" class="img-fluid img-attivita" alt="Agriturismo">
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container py-5 fade-in-element">
        <div class="row justify-content-center">
            <div class="col-md-6 col-12 img-container fade-in-element d-flex justify-content-center align-items-center">
                <img src="https://incrociata.it/wp-content/uploads/2019/10/incrociata-840x560.jpg" class="img-fluid img-attivita" alt="Agriturismo">
            </div>
            <div class="col-md-6 py-5">
                <div>
                    <h2 class="costum-font-size fw-bold">Escursione in fattoria.</h2>
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
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container py-5 fade-in-element">
        <div class="row justify-content-center">
            <div class="col-md-6 py-5">
                <div>
                    <h2 class="costum-font-size fw-bold">Tour in Elicottero.</h2>
                    <div class="col-12 d-flex my-5" style="background-color: #ffff;">
                        <div class="col-2" style="height: 1px; background-color:#F1E2C5 ;"></div>
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
                </div>
            </div>
            <div class="col-md-6 col-12 img-container fade-in-element d-flex justify-content-center align-items-center">
                <img src="https://incrociata.it/wp-content/uploads/2019/10/incrociata-840x560.jpg" class="img-fluid img-attivita" alt="Agriturismo">
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container py-5 fade-in-element">
        <div class="row justify-content-center">
            <div class="col-md-6 col-12 img-container fade-in-element d-flex justify-content-center align-items-center">
                <img src="https://incrociata.it/wp-content/uploads/2019/10/incrociata-840x560.jpg" class="img-fluid img-attivita" alt="Agriturismo">
            </div>
            <div class="col-md-6 py-5">
                <div>
                    <h2 class="costum-font-size fw-bold">Visita e Degustazione a Montefalco</h2>
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
                </div>
            </div>
        </div>
    </div>
</section>

</template>
<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

section:nth-child(odd) {
    background-color: white; /* Colore di sfondo per le sezioni dispari */   
}

section:nth-child(even) {
 
    background-color: $custom-secondary-color; /* Colore di sfondo per le sezioni pari */
    color: white;
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

.img-container {
    display: flex;
   // justify-content: center; /* Centra orizzontalmente */
    align-items: center; /* Centra verticalmente */
}

.img-attivita{
    width: 70%;
    border-radius:20px; 
}
</style>