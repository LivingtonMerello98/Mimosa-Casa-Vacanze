<script>
import { store } from '../../store';

export default {
    name: "AppGifSection",
    data() {
        return {
            textContent: "text-content"
        };
    },
    props: {
        text: {
            type: String,
            required: true
        },
        backgroundImage: {
            type: String,  // Tipo String per l'URL dell'immagine
            required: true
        }
    },
    computed: {
        animationClass() {
            console.log("[DEBUG] Computed: store.visibleComponents.appgifsection =", store.visibleComponents.appgifsection);
            return store.visibleComponents.appgifsection 
                ? store.animationClasses.visible 
                : store.animationClasses.hidden;
        }
    },
    mounted() {
        store.showComponentWithDelay('appgifsection'); 
    },
    methods: {
        // Funzione che fa scorrere la pagina verso il basso
        scrollDown() {
            window.scrollBy({
                top: window.innerHeight,  // Spostamento verso il basso di una finestra
                behavior: 'smooth'  // Scroll fluido
            });
        }
    }
};
</script>

<template>
    <section class="showcase" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
        <div>
            <div v-if="text">
                <div class="container" :class="[textContent, animationClass]">
                    <div class="row">
                        <div class="col-8 texts-and-button">
                            <p class="mb-5">
                                {{ text }}
                            </p>
                            <!-- Aggiungi il click handler al pulsante -->
                            <button class="btn-primary-to-white mb-5" @click="scrollDown">Scopri di più</button>
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

.text-content {
    opacity: 0; /* Inizialmente nascosto */
    transform: translateY(20px); /* Leggera traslazione verso il basso */
    transition: opacity 1s ease-out, transform 1s ease-out; /* Transizione fluida */
}

.text-content.opacity-100 {
    opacity: 1; /* Visibile */
    transform: translateY(0); /* Posizione normale */
}


.btn-primary-to-white {
    @include btn-primary-to-white;
}

.showcase {
    position: relative;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;  /* Lasciamo la proprietà size generica */
}

.texts-and-button {
    position: relative;
    z-index: 10;
    padding-top: 150px;

    p {
        font-size: 48px;
        font-weight: 300;
        line-height: 1.2em;
        color: white;
    }

    @media (max-width: 1200px) {
        padding-top: 100px;

        p {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 992px) {
        padding-top: 80px;

        p {
            font-size: 1.5rem;
        }

        .btn-primary-to-white {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 576px) {
        padding-top: 50px;

        .btn-primary-to-white {
            font-size: 1.2rem;
        }
    }
}
</style>
