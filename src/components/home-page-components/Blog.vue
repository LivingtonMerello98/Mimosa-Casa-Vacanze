<script>
export default {
    name: 'Blog',
    data() {
        return {
            posts: [
                {
                    image: '/images/bevagna/DSC_0240.JPG',
                    data: '150 € a notte',
                    title: 'bevagna'
                },
                {
                    image: '/images/perugia/DSC_0233.JPG',
                    data: '150 € a notte',
                    title: 'perugia'
                },
                {
                    image: '/images/trevi/DSC_0217.JPG',
                    data: '150 € a notte',
                    title: 'trevi'
                }
            ]
        }
    }
}
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-12 text-center py-5">
                <h2 class="title-section mb-2">Appartamenti e Allogi </h2>

                <div class="col-12  my-5" style="background-color: #ffff;">
                    <div class="col-1" style="height: 1px; background-color:#F1E2C5 ; margin: 0 auto;">
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-12 text-center mb-4" v-for="(post, index) in posts" :key="index">
                <div class="img-content">
                    <img :src="post.image" :alt="post.title" class="post-img mb-4">
                </div>
                <p class="thin-font mb-4">{{ post.data }}</p>
                <h4 class="sub-title-s mb-4">{{ post.title }}</h4>
            </div>
            <div class="col-12 mb-5 text-center">
                <button class="btn-primary-to-secondary">View all Blog Posts</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

.sub-title-s {
    @include sub-title-s;
}

.thin-font {
    font-size: 13px;
    font-weight: 300;
}

.title-section {
    @include title-section;
}

.post-img {
    width: 100%;
    height: auto;
    max-width: 500px;
    max-height: 500px;
    object-fit: cover;
}

.btn-primary-to-secondary {
    @include btn-primary-to-secondary;
}

/* Media query per tablet (max-width: 991px) */
@media (max-width: 991px) {
    .title-section {
        font-size: 2.5rem;
    }

    .sub-title-s {
        font-size: 1.25rem; 
    }

    .thin-font {
        font-size: 12px; 
    }
}

/* Media query per dispositivi mobili (max-width: 576px) */
@media (max-width: 576px) {
    .title-section {
        font-size: 2rem;
    }

    .sub-title-s {
        font-size: 1rem;
    }

    .thin-font {
        font-size: 11px; 
    }
}
</style>
