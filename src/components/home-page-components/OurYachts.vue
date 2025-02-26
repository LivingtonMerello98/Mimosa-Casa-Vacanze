<script>
export default {
    name: 'OurYachts',
    data() {
        return {
            yachts: [
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'express',
                    url: 'house.png'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'cruiser',
                    url: 'house.png'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'cruiser',
                    url: 'house.png'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'flybridges',
                     url: 'house.png'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'sedan bridges',
                     url: 'house.png'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'tri-deck',
                     url: 'house.png'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'megayacths',
                     url: 'house.png'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'convertibles',
                     url: 'house.png'
                }
            ]
        }
    }
}
</script>




<template>
    <section class="py-5 bg custom-primary-color">
        <div class="container">
            <div class="row">
                <div class="col-12 py-4">
                    <div class="title text-center py-4">
                        <h2 class="title-s mb-3 fw-bold">Lorem ipsum</h2>
                        <div class="col-12 my-4" style="background-color:#ffff;">
                            <div class="col-1" style="height: 1px; background-color:#F1E2C5 ; margin:0 auto;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 p-3" v-for="yacht in yachts" :key="yacht.url">
                    <div class="img-content position-relative">
                        <img :src="yacht.url" class="yacht-img">
                        <div class="overlay">
                            <div class="text-center">
                                <div v-html="yacht.icon" class=" icon-custom-primary-color"></div>
                                <div class="hover-text fs-2 fw-bold">{{ yacht.name }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 text-center py-5">
                    <button class="btn-border-to-white">View All</button>
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
}

.icon-custom-primary-color {
    color: $custom-primary-color;
    font-size: $custom-title-m ;
}

.yacht-img {
    width: 100%;
    height: auto;
    max-width: 500px;
    max-height: 500px;
    object-fit: cover;
    border-radius: 5px;
}

.img-content {
    position: relative;
    overflow: hidden;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.3s ease;
    }

    .hover-text {
        color: white;
        font-size: 20px;
    }
}

.img-content:hover .overlay {
    opacity: 1;
}

.title-s {
    @include title-s;
}

.btn-border-to-white {
    @include btn-border-to-white;
}
</style>
