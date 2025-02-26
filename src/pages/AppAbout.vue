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
  name: "AppAbout",
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
                    url: 'https://lombardiasecrets.com/wp-content/webpc-passthru.php?src=https://lombardiasecrets.com/wp-content/uploads/2024/01/Rosa-Grand-Milano-Lombardia-Secrets1783.jpg&nocache=1'
                },
                {
                    //icon: '<i class="fa-solid fa-anchor"></i>',
                    //name: 'Cruiser',
                    url: 'https://lombardiasecrets.com/wp-content/webpc-passthru.php?src=https://lombardiasecrets.com/wp-content/uploads/2024/01/Rosa-Grand-Milano-Lombardia-Secrets1783.jpg&nocache=1'
                },
                {
                    //icon: '<i class="fa-solid fa-anchor"></i>',
                    //name: 'Sport cruiser',
                    url: 'https://lombardiasecrets.com/wp-content/webpc-passthru.php?src=https://lombardiasecrets.com/wp-content/uploads/2024/01/Rosa-Grand-Milano-Lombardia-Secrets1783.jpg&nocache=1'

                },
                {
                    //icon: '<i class="fa-solid fa-anchor"></i>',
                    //name: 'Flybridges',
                    url: 'https://lombardiasecrets.com/wp-content/webpc-passthru.php?src=https://lombardiasecrets.com/wp-content/uploads/2024/01/Rosa-Grand-Milano-Lombardia-Secrets1783.jpg&nocache=1'
                },
                {
                    //icon: '<i class="fa-solid fa-anchor"></i>',
                    //name: 'Sedan bridges',
                    url: 'https://lombardiasecrets.com/wp-content/webpc-passthru.php?src=https://lombardiasecrets.com/wp-content/uploads/2024/01/Rosa-Grand-Milano-Lombardia-Secrets1783.jpg&nocache=1'
                },
                {
                    //icon: '<i class="fa-solid fa-anchor"></i>',
                    //name: 'Tri-deck',
                    url: 'https://lombardiasecrets.com/wp-content/webpc-passthru.php?src=https://lombardiasecrets.com/wp-content/uploads/2024/01/Rosa-Grand-Milano-Lombardia-Secrets1783.jpg&nocache=1'
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
    <AppWhyChooseUs />
    <AppAboutUs />
    <AppFeaturedProjects :elements="elements" />
    <AppAboutUs />
    <AppFeaturedProjects :elements="elements" />
  </main>
</template>

