<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';


export default {
    name: 'AppCarousel',
    components: {
        Swiper,
        SwiperSlide
    },
    props: {
        elements: {
            type: Object,
            required: true
        }
    }
};
</script>

<template>
    <swiper
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :breakpoints="{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
        }"
        class="element-carousel"
        :touch-events-target="'container'"   
    >
        <swiper-slide v-for="element in elements" :key="element.url">
            <div class="img-content position-relative">
                <img :src="element.url" class="element-img">
                <div class="overlay">
                    <div class="text-center">
                        <div v-html="element.icon" class="icon-custom-primary-color"></div>
                        <div class="hover-text fs-2 fw-bold">{{ element.name }}</div>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<style lang="scss" scoped>
.element-img {
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
</style>