<script>
export default {
    name: 'Services',
    data() {
        return {
            services: [
                {
                    icon: '<i class="fa-solid fa-anchor fa-lg"></i>',
                    title: 'Lorem Ipsum',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy.'
                },
                {
                    icon: '<i class="fa-regular fa-user fa-lg"></i>',
                    title: 'Lorem Ipsum',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy.'
                },
                {
                    icon: '<i class="fa-solid fa-car fa-lg"></i>',
                    title: 'Lorem Ipsum',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy.'
                },
                {
                    icon: '<i class="fa-regular fa-star fa-lg"></i>',
                    title: 'Lorem Ipsum',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy.'
                },
                {
                    icon: '<i class="fa-regular fa-thumbs-up fa-lg"></i>',
                    title: 'Lorem Ipsum',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy.'
                },
                {
                    icon: '<i class="fa-solid fa-briefcase fa-lg"></i>',
                    title: 'Lorem Ipsum',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy.'
                }
            ]
        }
    },
    mounted() {
        window.addEventListener('scroll', this.parallaxEffect);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.parallaxEffect);
    },
    methods: {
        parallaxEffect() {
            let scrollPosition = window.pageYOffset;
            let parallax = document.querySelector('.parallax');
            parallax.style.backgroundPositionY = scrollPosition * 0.1 + 'px'; // Regola la velocità del parallasse
        }
    }
}
</script>

<template>
    <section class="">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-12 col-md-6 col-sm-12 text-center">
                    <h2 class="title-section py-3">Lorem Ipsum</h2>
                </div>
                <div class="col-12  my-5" style="background-color: #ffff;">
                    <div class="col-1" style="height: 1px; background-color:#F1E2C5 ;; margin: 0 auto;">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6" v-for="(service, index) in services" :key="index">
                    <div class="service-item mb-5 py-3">
                        <div class="title mb-3 d-flex">
                            <div>
                                <span class="custom-primary-color" v-html="service.icon"></span>
                            </div>
                            <div>
                                <span class="sub-title-l mx-3 py-2" style="color: #222627;">{{ service.title }}</span>
                            </div>
                        </div>
                        <div class="text paragraph-thin py-2">
                            <p>{{ service.text }}</p>
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

.custom-primary-color {
    background-color: $custom-primary-color;
    color: white;
    border-radius: 100%;
    padding: 1rem;
    font-size: 1.5rem;
}

.title-section {
    @include title-section;
    font-size: 2.5rem; /* Impostato per desktop */

    /* Media query per tablet e mobile */
    @media (max-width: 991px) {
        font-size: 2rem; /* Ridurre il font-size per tablet */
    }

    @media (max-width: 576px) {
        font-size: 1.75rem; /* Ridurre ulteriormente per mobile */
    }
}

.sub-title-l {
    @include sub-title-l;
    font-weight: 700;
    font-size: 1.5rem; /* Impostato per desktop */

    /* Media query per tablet e mobile */
    @media (max-width: 991px) {
        font-size: 1.25rem; /* Ridurre il font-size per tablet */
    }

    @media (max-width: 576px) {
        font-size: 1rem; /* Ridurre ulteriormente per mobile */
    }
}

.paragraph-thin {
    @include paragraph-thin;
}

.parallax {
    position: relative;
    background-image: url('https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/bg6.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    height: 100%;
    background-color: #F8F9FE;

    .container {
        position: relative;
        z-index: 2;
    }
}
</style>
