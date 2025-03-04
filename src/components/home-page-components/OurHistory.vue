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
                    <img src="https://incrociata.it/wp-content/uploads/2019/10/incrociata-840x560.jpg" class="img-fluid img-agriturismo" alt="Agriturismo">
                </div>

                <div class="col-md-12 col-sm-12 col-lg-6 py-5">
                    <div class="text col-12 text-lg-start fade-in-element"> <!-- Classi aggiunte per centrare solo su mobile/tablet -->
                        <h1 class="title-section mb-2">Vivi la nostra storia</h1>
                        <!-- hr provvisorio -->
                        <div class="col-12 d-flex my-5" style="background-color: #ffff;">
                            <div class="col-2" style="height: 1px; background-color:#191B1C ;"></div>
                        </div>
                        <p class="paragraph-bold mb-5">
                            Mimosa Casa Vacanze nasce dal sogno di creare un angolo di paradiso immerso nella splendida campagna toscana.
                        </p>
                        <p class="paragraph-thin mb-5">
                            La nostra passione per la natura, la tradizione e l’ospitalità ci ha spinto a trasformare un’antica casa di campagna in un accogliente rifugio dove ogni ospite può sentirsi come a casa.
                        </p>
                        <p class="paragraph-thin mb-5">
                            Situato tra colline verdi, vigneti e oliveti, il nostro agriturismo è il luogo ideale per chi cerca una pausa dalla frenesia della vita quotidiana, senza rinunciare ai comfort moderni.
                        </p>
                        <button class="btn-secondary">Read more</button>
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
