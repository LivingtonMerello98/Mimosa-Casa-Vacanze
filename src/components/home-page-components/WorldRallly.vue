<script>
export default {
    name: 'WorldRally'
}
</script>

<template>
    <section class="bg-image">
        <div class="container py-5">
            <div class="row">
                <div class="col-8 py-5">
                    <div class="content py-5">
                        <h2 class="title-xl  mb-3">Un angolo di paradiso nella natura</h2>
                        <h3 class="title-thin-m mb-3">Immerso nella serenità della campagna toscana.</h3> 
                        <p class="paragraph-white mb-5">Immergiti nella bellezza della campagna toscana. La nostra oasi di tranquillità è il luogo perfetto per rilassarti, riscoprire il contatto con la natura e goderti la serenità che solo la Toscana sa offrire</p>
                        <button class="btn-primary-to-secondary">lorem ipsum</button>
                    </div>
                </div>
                <div class="col-4 col-sm-4 col-md-4 col-lg-none"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

.bg-image {
    background-image: url('/images/nature.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;

    .title-xl {
        @include title-xl;
        font-size: 3rem; /* Impostato per desktop */
    }

    .title-thin-m {
        @include title-thin-m;
        font-size: 2rem; /* Impostato per desktop */
    }

    .paragraph-white {
        @include paragraph-white;
        font-size: 1.2rem; /* Impostato per desktop */
    }

    .btn-primary-to-secondary {
        @include btn-primary-to-secondary;
    }

    /* Media query per dispositivi tablet (max-width: 991px) */
    @media (max-width: 991px) {
        .title-xl {
            font-size: 2.5rem; /* Ridotto per tablet */
        }

        .title-thin-m {
            font-size: 1.75rem; /* Ridotto per tablet */
        }

        .paragraph-white {
            font-size: 1.5rem; /* Ridotto per tablet */
        }
    }

    /* Media query per dispositivi mobili (max-width: 576px) */
    @media (max-width: 576px) {
        .title-xl {
            font-size: 2rem; /* Ulteriore riduzione per dispositivi mobili */
        }

        .title-thin-m {
            font-size: 1.5rem; /* Ulteriore riduzione per dispositivi mobili */
        }

        .paragraph-white {
            font-size: 1rem; /* Ulteriore riduzione per dispositivi mobili */
        }
    }
}
</style>
