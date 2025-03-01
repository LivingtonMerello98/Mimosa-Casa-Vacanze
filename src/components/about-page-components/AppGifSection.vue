<script>
export default {
    name: "AppGifSection"

}
</script>

<template>
    <section class="showcase">
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-6 texts-and-button">
                        <p class="mb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        </p>
                        <button class="btn-primary-to-white mb-5">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

.btn-primary-to-white {
    @include btn-primary-to-white;
}

.showcase {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('/images/appartament.png');
    background-repeat: no-repeat;
    background-size: cover;

    // video {
    //     position: absolute;
    //     top: 100;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     object-fit: fill;
    // }
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
            font-size: 1.8rem;
        }
    }

    @media (max-width: 992px) {
        padding-top: 80px;

        p {
            font-size: 1.5rem;
        }

        .btn-primary-to-white {
            font-size: 1rem;
            padding: 0.5rem 1rem;
        }
    }

    /* Imposta .col-6 su larghezza intera a 768px o meno */
    @media (max-width: 768px) {
        .col-6 {
            flex: 0 0 100%;
            max-width: 100%;
        }

        p {
            font-size: 1.2rem;
        }

        .btn-primary-to-white {
            font-size: 0.9rem;
            padding: 0.4rem 0.8rem;
        }
    }

    @media (max-width: 576px) {
        padding-top: 50px;

        p {
            font-size: 1rem;
        }

        .btn-primary-to-white {
            font-size: 0.8rem;
            padding: 0.3rem 0.6rem;
        }
    }
}
</style>