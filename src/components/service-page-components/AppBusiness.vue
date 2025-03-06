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
                        Vivi l'emozione di un'escursione a cavallo immerso nella natura incontaminata, tra sentieri panoramici e paesaggi suggestivi.
                    </p>
                    <p class="paragraph-thin mb-5">
                        A pochi minuti da <strong>Montefalco</strong>, potrai esplorare il territorio in sella, attraversando vigneti, boschi e colline, vivendo un’esperienza unica nel cuore dell'Umbria. Un’occasione perfetta per connettersi con la natura e scoprire la bellezza autentica del luogo, magari brindando con un calice di <strong>Sagrantino di Montefalco</strong> dopo la tua avventura.
                    </p>
                </div>
            </div>
            <div class="col-md-6 col-12 img-container fade-in-element d-flex justify-content-center align-items-center">
                <img src="/images/gita-a-cavallo.png" class="img-fluid img-attivita" alt="Agriturismo">
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container py-5 fade-in-element">
        <div class="row justify-content-center">
            <div class="col-md-6 col-12 img-container fade-in-element d-flex justify-content-center align-items-center">
                <img src="/images/gita-in-fattoria.png" class="img-fluid img-attivita" alt="Agriturismo">
            </div>
            <div class="col-md-6 py-5">
                <div>
                    <h2 class="costum-font-size fw-bold">Escursione in fattoria.</h2>
                    <div class="col-12 d-flex my-5" style="background-color: #ffff;">
                        <div class="col-2" style="height: 1px; background-color:#191B1C ;"></div>
                    </div>
                    <p class="paragraph-bold mb-5">
                        Un’esperienza immersiva per scoprire la vita in fattoria, tra animali, natura e antiche tradizioni contadine.
                    </p>
                    <p class="paragraph-thin mb-5">
                        A pochi minuti da <strong>Montefalco</strong>, potrai avvicinarti alla cultura rurale umbra, partecipando ad attività autentiche come la mungitura, la raccolta dei prodotti della terra e la degustazione di formaggi e olio extravergine. Un’occasione unica per vivere la campagna e assaporare il meglio della tradizione locale, accompagnata da un calice di <strong>Sagrantino di Montefalco</strong>.
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
                        Ammira l'Umbria da una prospettiva unica con un esclusivo tour in elicottero sopra colline, vigneti e borghi medievali.
                    </p>
                    <p class="paragraph-thin mb-5">
                        Decolla a pochi minuti da <strong>Montefalco</strong> e lasciati affascinare dai panorami mozzafiato della regione. Sorvola le distese di vigneti del <strong>Sagrantino di Montefalco</strong>, le antiche città storiche e le meraviglie naturali dell’Umbria, vivendo un'esperienza indimenticabile all’insegna del lusso e dell’avventura.
                    </p>
                </div>
            </div>
            <div class="col-md-6 col-12 img-container fade-in-element d-flex justify-content-center align-items-center">
                <img src="/images/gita-elicottero.png" class="img-fluid img-attivita" alt="Agriturismo">
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container py-5 fade-in-element">
        <div class="row justify-content-center">
            <div class="col-md-6 col-12 img-container fade-in-element d-flex justify-content-center align-items-center">
                <img src="/images/degustazione.png" class="img-fluid img-attivita" alt="Agriturismo">
            </div>
            <div class="col-md-6 py-5">
                <div>
                    <h2 class="costum-font-size fw-bold">Visita e Degustazione a Montefalco</h2>
                    <div class="col-12 d-flex my-5" style="background-color: #ffff;">
                        <div class="col-2" style="height: 1px; background-color:#191B1C ;"></div>
                    </div>
                    <p class="paragraph-bold mb-5">
                        Scopri Montefalco attraverso un viaggio tra le sue cantine, degustando vini pregiati e prodotti tipici della tradizione umbra.
                    </p>
                    <p class="paragraph-thin mb-5">
                        A pochi minuti da <strong>Montefalco</strong>, potrai esplorare le rinomate cantine della zona, immergendoti nei sapori autentici del <strong>Sagrantino di Montefalco</strong>. Un'esperienza unica tra vigneti e degustazioni guidate, perfetta per gli amanti del buon vino e della cultura enogastronomica locale.
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