<script>
export default {
    name: 'AppFooterShare',
    props: {
        links: {
            type: Array,
            required: true,
            default: () => []
        }
    },
};
</script>

<template>
    <footer class="color-share">
        <div class="container py-5">
            <div class="row mb-5 py-5">
                <!-- Logo e slogan -->
                <div class="col-md-4 col-12 mb-4 mb-md-0 d-flex align-items-center">
                    <div class="logo-slogan">
                        <img src="./about-page-components/logo/mimosa_logo.svg"
                            alt="" class="logo mb-4">
                        <p class="fs-">Lorem Ipsum is simply dummy <br> sailing across the seas…</p>
                    </div>
                </div>

                <!-- Link di navigazione -->
                <div class="col-md-4 col-12 mb-4 mb-md-0">
                    <div class="row">
                        <div class="col-6">
                            <ul>
                                <li class="mb-3 custom-font-size" v-for="(link, index) in links.slice(0, 2)" :key="index" :href="link.url">
                                    {{ link.label }}
                                </li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul>
                                <li class="mb-3 custom-font-size" v-for="(link, index) in links.slice(2, 6)" :key="index" :href="link.url">
                                    {{ link.label }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Iscrizione alla newsletter -->
                <div class="col-md-4 col-12 text-md-left newsletter">
                    <!-- <h2 class="form-title mb-3">Newsletter</h2>
                    <form class="form-inline">
                        <div class="form-group mb-0 d-flex">
                            <input type="email" v-model="email" class="form-control" placeholder="Enter your e-mail" required>
                            <button type="submit" class="btn-primary-to-secondary fw-bold">Subscribe</button>
                        </div>
                    </form> -->
                </div>
            </div>
        </div>
        
        <!-- Footer bottom -->
        <section class="bt-footer py-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-12 d-flex justify-content-md-start py-1">
                        <p class="text-white mr-md-2 ">&copy; Mimosa. Casa Vacanza </p>
                        <p class="text-white mx-2 mr-md-2"> | Privacy Policy</p>
                        <p class="text-white mr-md-2"> | Terms of Use</p>
                    </div>
                    <div class="col-md-6 col-12 d-flex justify-content-center justify-content-md-end mt-md-0">
                        <a href="#" class="text-light mx-2"><i class="fa-brands fa-facebook"></i></a>
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
}
</style>
