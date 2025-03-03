<script>
import { store } from '../../store';

export default {
    name: 'Hero',
    data() {
        return {
            isVisible: false
        };
    },
    computed: {
        animationClass() {
            return store.visibleComponents.hero 
                ? store.animationClasses.visible 
                : store.animationClasses.hidden;
        }
    },
    mounted() {
        store.showComponentWithDelay('hero');
    }
};
</script>

<template>
    <section class="bg-image">
        <div class="container py-5">
            <div class="row">
                <div class="col-12">
                    <div class="card-content py-5">
                        <div class="text-content" :class="animationClass">
                            <h2 class="title-l"> Soggiorni rilassanti <br>in campagna</h2>
                            <p class="font-custom mb-5">
                                Soggiorna in un'oasi di tranquillità circondata dalla natura,
                                <br>con piscina e servizi esclusivi.
                            </p>
                            <button class="btn-border-to-white">Esplora le nostre offerte</button>
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

.text-content.fade-in {
    opacity: 1; /* Visibile */
    transform: translateY(0); /* Posizione normale */
}

.logo{
    width: 40%;
    height: auto;
}

.bg-image {
    background-image: url('/images/hero.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 85vh;
    display: flex;
    flex-direction: column;

    .title-l {
        @include title-m;
        line-height: 1.5em;
    }

    .custom-sub-title-s {
        @include sub-title-s;
    }

    .btn-border-to-white {
        @include btn-border-to-white;
    }

    .font-custom {
        font-size: $custom-sub-title-m;
        font-weight: 400;
        color: white;
        line-height: 1.4em;
    }

    .custom-nav-link {
        color: #fff;
        text-transform: uppercase;
        font-size: 14.4px;
        padding: 27px 23px 22px;
        font-weight: 600;
    }

    .nav {
        font-size: 13px;
        font-weight: 600;
    }

    .search-input {
        margin-left: 1rem;
        padding: 0.3rem;
        font-size: 14px;
        border-radius: 0.2rem;
        border: 0px;
    }

    button {
        border: none;
        background-color: #ffffff00;
    }
}

/* Media queries */
@media (max-width: 768px) {
    .bg-image {
        .container {
            padding: 1rem;
        }

        .custom-nav-link {
            font-size: 12px;
            padding: 15px 10px;
        }

        .nav {
            justify-content: center;
        }

        .search-input {
            width: 100%;
            margin-top: 0.5rem;
            font-size: 12px;
        }

        button {
            font-size: 16px;
        }
    }
}

@media (max-width: 576px) {
    .bg-image {
        .d-flex {
            flex-direction: column;
            align-items: center;
        }

        .custom-nav-link {
            padding: 10px 5px;
            font-size: 10px;
        }

        .search-input {
            width: 100%;
            font-size: 10px;
        }

        .title-l {
            font-size: 2rem;
        }

        .btn-border-to-white {
            font-size: 0.8rem;
        }

        img {
            max-width: 80%;
            height: auto;
        }
    }
}
</style>

  