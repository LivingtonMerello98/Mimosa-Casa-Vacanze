<script>
export default {
    name: "AppFeaturedProjects",
    props: {
        elements: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <section>
        <div>
            <span class="divider text-center"></span>
        </div>
        <div class="container">
            <h2 class="py-5">Carousel elements</h2>
            <div class="col-12  my-4" style="background-color: rgba(0, 0, 0, 0.037);">
                <div class="col-1" style="height: 1px; background-color:#938A77;">
                </div>
            </div>
            <div class="row">
                <!-- vorrei che non fossero 3 immaginii per colonna ma bensi un carosello che posso scorrere con il mouse -->
                <div class="col-lg-4 col-md-6 col-sm-12 py-5 px-3" v-for="element in elements" :key="element.url">
                    <div class="img-content position-relative">
                        <img :src="element.url" class="yacht-img">
                        <div class="overlay">
                            <div class="text-center">
                                <div v-html="element.icon" class=" icon-custom-primary-color"></div>
                                <div class="hover-text fs-2 fw-bold">{{ element.name }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/variables' as *;

h2 {
    font-weight: bold;
    font-size: $custom-title-section-size;

    @media (max-width: 768px) { 
        font-size: 19px; 
    }

    @media (max-width: 576px) {
        font-size: 18px;
    }
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
        cursor: pointer;
    }

    .hover-text {
        color: white;
        font-size: 20px;

        @media (max-width: 768px) { // Per tablet
            font-size: 16px;
        }

        @media (max-width: 576px) { // Per mobile
            font-size: 14px; // Limite minimo
        }
    }
}

.img-content:hover .overlay {
    opacity: 1;
}

.icon-custom-primary-color {
    color: $custom-primary-color;
    font-size: $custom-title-m;

    @media (max-width: 768px) { // Per tablet
        font-size: 18px;
    }

    @media (max-width: 576px) { // Per mobile
        font-size: 16px;
    }
}
</style>
