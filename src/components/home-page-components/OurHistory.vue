<script>
export default {
    name: 'OurHistory'
}
</script>

<template>
    <section>
        <div class="container py-5">
            <div class="row">
                <div class="col-md-6 col-12  d-none d-md-block d-flex justify-content-center align-items-center py-5">
                    <img src="https://incrociata.it/wp-content/uploads/2019/10/incrociata-840x560.jpg" class="img-fluid img-agriturismo" alt="Agriturismo">
                </div>

                <div class="col-md-12 col-sm-12 col-lg-6 py-5">
                    <div class="text col-12 text-center text-lg-start"> <!-- Classi aggiunte per centrare solo su mobile/tablet -->
                        <h1 class="title-section mb-2">La Nostra storia</h1>
                        <!-- hr provvisorio -->
                        <div class="col-12 d-flex my-5" style="background-color: #ffff;">
                            <div class="col-2" style="height: 1px; background-color:#F1E2C5 ;"></div>
                        </div>
                        <p class="paragraph-bold mb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <p class="paragraph-thin mb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <p class="paragraph-thin mb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <button class="btn-secondary">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

.img-agriturismo{
    width: 80%;
}

section{
background-color: white;
}

.title-section {
        @include title-section;
    }

    .btn-secondary {
        @include btn-secondary;
    }

    .paragraph-bold {
        @include paragraph-bold;
    }

    .paragraph-thin {
        @include paragraph-thin;
    }

/* Media query per tablet e mobile */
@media (max-width: 991px) {
    .text-center {
        text-align: center;
    }
    p{
        font-size: 14px;
    }
}
</style>
