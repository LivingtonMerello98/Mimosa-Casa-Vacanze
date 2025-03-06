<script>
import { store } from '../store';

export default {
    name: 'AppFooterShare',
    props: {
        links: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    data() {
        return {
            logo: '/images/mimosa_logo.svg',
            navLinks: [
                { navItem: 'appartamenti', url: '/appartamenti' },
                { navItem: 'ristoranti', url: '/ristoranti' },
                { navItem: 'attività', url: '/attivita' },
                { navItem: 'contatti', url: '/contacts' }
            ]
        };
    },
    mounted() {
        store.observeElementsWithFadeIn();
    },
};
</script>

<template>
    <footer class="color-share">
        <div class="container py-5 fade-in-element">
            <div class="row mb-5 py-5">
                <!-- Logo e slogan -->
                <div class="col-md-4 col-12 mb-4 mb-md-0 d-flex align-items-center">
                    <div class="logo-slogan">
                        <img :src="logo" alt="Logo Mimosa Casa Vacanze" class="logo mb-4">
                        <p class="fs-5">angolo di paradiso <br>
                            nel cuore dell'Italia</p>
                    </div>
                </div>

                <!-- Link di navigazione -->
                <div class="col-md-4 col-12 mb-4 mb-md-0 ">
                    <div class="row">
                        <div class="col-6">
                            <ul>
                                <li class="mb-3 custom-font-size" v-for="(link, index) in navLinks.slice(0, 2)" :key="index">
                                    <router-link :to="link.url" class="nav-link custom-nav-link">{{ link.navItem }}</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul>
                                <li class="mb-3 custom-font-size" v-for="(link, index) in navLinks.slice(2, 4)" :key="index">
                                    <router-link :to="link.url" class="nav-link custom-nav-link">{{ link.navItem }}</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12 mb-md-0">
                    <div class="social-icon-circle d-flex justify-content-center align-items-center">
                        <a href="https://www.facebook.com" target="_blank">
                            <font-awesome-icon :icon="['fab', 'facebook']" class="icon mx-4"/>
                        </a>
                        <a href="https://www.instagram.com" target="_blank">
                            <font-awesome-icon :icon="['fab', 'instagram']" class="icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Footer bottom -->
        <section class="bt-footer py-3">
            <div class="container fade-in-element">
                <div class="row">
                    <div class="col-md-6 col-12 d-flex justify-content-md-start py-1">
                        <p class="text-white mr-md-2">&copy; Mimosa. Casa Vacanza</p>
                        <p class="text-white mx-2 mr-md-2"> | PARTITA IVA: 03227650540</p>
                        <!-- <p class="text-white mr-md-2"> | Terms of Use</p> -->
                    </div>
                    <div class="col-md-6 col-12 d-flex justify-content-center justify-content-md-end mt-md-0">
                        <a href="#" class="text-light mx-2"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-light mx-2"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-light mx-2"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>


<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as *;
@use 'src/assets/partials/variables' as *;

.icon{
    font-size: 28px;
    color:white;
}

.custom-nav-link {
    color: #fff;
    text-transform: uppercase;
    font-size: 14.4px;
    padding: 27px 23px 22px;
    font-weight: 600;

    &:hover {
        text-decoration: underline ;
    }
    &:focus{
        color:#F1E2C5;
    }
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

.btn-border-to-white {
        @include btn-border-to-white;
}
.logo{
    width: 40%;
    height: auto;
}
.color-share a:hover {
    color: $custom-primary-color;
}

.color-share {
    background-color: $custom-secondary-color;
}

a {
    text-decoration: none;
    color: black;
}

.bt-footer {
    background-color: $custom-tertiary-color;
}

.newsletter input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.btn-primary-to-secondary {
    @include btn-primary-to-secondary;
}

.custom-font-size {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.8em;
    color:white;
}

.form-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.58em;
}

p {
    font-size: 12px;
    text-transform: uppercase;
    line-height: 1.2em;
    color:white
}

/* Media query per tablet e mobile */
@media (max-width: 991px) {
    .logo-slogan p {
        font-size: 14px; /* Ridotto per tablet */
    }

    .custom-font-size {
        font-size: 14px; /* Ridotto per tablet */
    }

    .form-title {
        font-size: 22px; /* Ridotto per tablet */
    }

    .newsletter input {
        width: 100%; /* La casella di input occupa tutto lo spazio disponibile */
        margin-bottom: 10px;
    }

    .btn-primary-to-secondary {
        width: 100%; /* Il bottone occupa tutto lo spazio disponibile */
    }
}

@media (max-width: 576px) {
    .logo-slogan p {
        font-size: 12px; /* Ulteriore riduzione per mobile */
    }

    .custom-font-size {
        font-size: 12px; /* Ulteriore riduzione per mobile */
    }

    .form-title {
        font-size: 20px; /* Ulteriore riduzione per mobile */
    }

    .newsletter input {
        width: 100%; /* La casella di input occupa tutto lo spazio disponibile */
    }

    .btn-primary-to-secondary {
        width: 100%; /* Il bottone occupa tutto lo spazio disponibile */
    }

    /* Disposizione delle colonne in una singola colonna per mobile */
    .col-md-4 {
        max-width: 100%;
    }

    .bt-footer {
        text-align: center;
    }

    @media (max-width: 426px) {
    .logo-slogan {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
    }

    .logo {
        width: 60%; /* Adatta la dimensione dell'immagine */
        margin-bottom: 20px; /* Puoi aggiustare il margine come desideri */
    }

    .logo-slogan p {
        font-size: 14px; /* Puoi anche ridurre ulteriormente la dimensione del testo */
    }
}

}
</style>
