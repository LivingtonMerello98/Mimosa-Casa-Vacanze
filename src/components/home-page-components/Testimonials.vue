<script>
export default {
    name: 'Testimonials',
    data() {
        return {
            testimonials: [
                {
                    profile: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/elementor/thumbs/person0-p0a17bbqv6696rzdb2ly3jl0kdng6od3fj7vti5wi8.jpg',
                    paragraph: 'As a yacht owner, after either of my regular maintenance checkups, I oftentimes find it necessary to do this or that kind of a repair. The thing is that I don’t always have enough time (or sometimes the skill), to do all of the repairs all by myself…',
                    sign: '- Albert Winning',
                },
                {
                    profile: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/elementor/thumbs/person01-p0a17bbqv6696rzdb2ly3jl0kdng6od3fj7vti5wi8.jpg',
                    paragraph: 'Having had a real handful of favorite pastimes over the course of my whole adult life, sailing was always front and center in such a list. So, when I found out about this yachts chartering service located just a few miles near my home, I was thrilled!',
                    sign: '- Reginald Stanhow',
                },
                {
                    profile: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/elementor/thumbs/person03-p0a17bbqv6696rzdb2ly3jl0kdng6od3fj7vti5wi8.jpg',
                    paragraph: 'I am an event manager who works for one of the Fortune 500 US-based companies. From time to time, we throw some awesome corporate, large-scale corporate events, as a gesture of appreciation to our employees. Yacht chartering is one of those!',
                    sign: '- Mary Adwetto',
                }
            ],
            currentIndex: 0 // Initialize the current index to 0
        }
    },
    mounted() {
        this.startCarousel();
    },
    methods: {
        startCarousel() {
            setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
            }, 3000); // Change the index every 3 seconds
        }
    }
}
</script>

<template>
    <section class="bg-image">
        <div class="container py-5">
            <div class="row">
                <div class="title-container text-center py-5">
                    <h2 class="title-s">Testimonials</h2>
                </div>
                <div class="col-12 my-4" style="background-color:#ffff;">
                    <div class="col-1" style="height: 1px; background-color:#F1E2C5 ; margin:0 auto;">
                    </div>
                </div>
                <div class="col-12 d-flex py-3 flex-column align-items-center mb-5">
                    <div class="card p-1 p-5">
                        <div class="d-flex flex-column flex-md-row">
                            <div class="col-12 col-md-3 py-2 d-flex justify-content-center align-items-center order-md-1">
                                <div class="img-content d-flex justify-content-center align-items-center">
                                    <img :src="testimonials[currentIndex].profile" :alt="testimonials[currentIndex].sign"
                                        class="img-fluid img-size rounded-circle">
                                </div>
                            </div>

                            <div class="col py-2 d-flex justify-content-center align-items-center order-md-2">
                                <div class="text-content">
                                    <p class="custom-paragraph">{{ testimonials[currentIndex].paragraph }}</p>
                                    <h3 class="custom-sign">{{ testimonials[currentIndex].sign }}</h3>
                                </div>
                            </div>
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
    background-image: url('/images/pharm-overlay.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.title-s {
    @include title-s;
}

.card {
    background-color: $custom-transparent-white-cards;
    max-width: 80%;
}

.custom-paragraph {
    color: #ffff;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.8em;
}

.custom-sign {
    color: #ffff;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.8em;
}

.img-size {
    max-width: 100%;
}

@media (max-width: 991px) {
    .custom-paragraph {
        font-size: 14px; 
    }

    .custom-sign {
        font-size: 14px; 
    }

    .title-s {
        font-size: 2.5rem; 
    }

    .card {
        max-width: 100%;
    }
}

@media (max-width: 576px) {
    .custom-paragraph {
        font-size: 12px; 
    }

    .custom-sign {
        font-size: 12px; 
    }

    .title-s {
        font-size: 2rem; 
    }

    .card {
        max-width: 100%;
    }

    .img-size {
        max-width: 80%;
    }
}
</style>
