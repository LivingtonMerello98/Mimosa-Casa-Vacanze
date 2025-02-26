<script>

//header
import UniversalHeader from "../components/AppUniversalHeader.vue";
import HeaderAboutContacts from "../components/HeaderAboutContacts.vue";


//main
import AppGifSection from "../components/about-page-components/AppGifSection.vue"
import AppAboutUs from "../components/about-page-components/AppAboutUs.vue"
import AppWhyChooseUs from "../components/about-page-components/AppWhyChooseUs.vue"
import AppOurTeam from "../components/about-page-components/AppOurTeam.vue"
import AppTestimonials from "../components/about-page-components/AppTestimonials.vue"
import AppFeaturedProjects from "../components/about-page-components/AppFeaturedProjects.vue"



export default {
  name: "AppRestaurant",
  components: {
    UniversalHeader,
    HeaderAboutContacts,
    AppGifSection,
    AppAboutUs,
    AppWhyChooseUs,
    AppOurTeam,
    AppTestimonials,
    AppFeaturedProjects,
  },

data() {
        return {
          elements: [
                {
                    //icon: '<i class="fa-solid fa-anchor"></i>',
                    //name: 'Express',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlp-HhZIkqB4HCOSFOI_FZAIYrIBs0MUjjg&s',
                },
                {
                    //icon: '<i class="fa-solid fa-anchor"></i>',
                    //name: 'Cruiser',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlp-HhZIkqB4HCOSFOI_FZAIYrIBs0MUjjg&s'
                },
                {
                    //icon: '<i class="fa-solid fa-anchor"></i>',
                    //name: 'Sport cruiser',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlp-HhZIkqB4HCOSFOI_FZAIYrIBs0MUjjg&s'

                },
                {
                    //icon: '<i class="fa-solid fa-anchor"></i>',
                    //name: 'Flybridges',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlp-HhZIkqB4HCOSFOI_FZAIYrIBs0MUjjg&s'
                },
                {
                    //icon: '<i class="fa-solid fa-anchor"></i>',
                    //name: 'Sedan bridges',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlp-HhZIkqB4HCOSFOI_FZAIYrIBs0MUjjg&s'
                },
                {
                    //icon: '<i class="fa-solid fa-anchor"></i>',
                    //name: 'Tri-deck',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlp-HhZIkqB4HCOSFOI_FZAIYrIBs0MUjjg&s'
                },
            ]
        }
    }
};
</script>

<template>
  <UniversalHeader />
  <HeaderAboutContacts />

  <main>
    <AppGifSection />
    <AppAboutUs />
    <AppFeaturedProjects :elements="elements" />
    <AppAboutUs />
    <AppFeaturedProjects />
  </main>
</template>