<script>
export default {
    name: 'BetterService'
}
</script>

<template>
    <section class="bg-image">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 py-5">
                    <div class="content mb-5">
                        <div class="text text-center py-5">
                            <h2 class="title-m mb-5">Lorem Ipsum is simply dummy text<br>of the printing and typesetting</h2>
                            <button class="btn-primary-to-white mb-5">More Details</button>
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

.bg-image {
    background-image: url('https://pensarecasa.it/wp-content/uploads/2023/02/Camere-da-letto-camera-da-letto-40-enni-.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;

    .title-m {
        @include title-m;
        line-height: 1.25;
        letter-spacing: 0.2rem;

        /* Impostazioni per dispositivi più piccoli */
        @media (max-width: 991px) {
            font-size: 1.5rem; /* Riduce la dimensione del font su tablet e smartphone */
        }

        @media (max-width: 576px) {
            font-size: 1.25rem; /* Riduce ulteriormente la dimensione sui dispositivi mobili */
        }
    }

    .btn-primary-to-white {
        @include btn-primary-to-white
    }
}
</style>
