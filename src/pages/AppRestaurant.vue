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
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwubbtBEfaS2Uz7XsmtyGcrKyKU5aBA0L5A&s'
                },
                {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwubbtBEfaS2Uz7XsmtyGcrKyKU5aBA0L5A&s'
                },
                {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwubbtBEfaS2Uz7XsmtyGcrKyKU5aBA0L5A&s'
                },
                {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwubbtBEfaS2Uz7XsmtyGcrKyKU5aBA0L5A&s'
                },
                {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwubbtBEfaS2Uz7XsmtyGcrKyKU5aBA0L5A&s'
                },
                {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwubbtBEfaS2Uz7XsmtyGcrKyKU5aBA0L5A&s'
                },
          ],
          backgroundImage:'/images/restaurant.png',
          text:'Gusta piatti tradizionali preparati con ingredienti freschi e locali, in un ambiente accogliente.',
          description: {
            "title": "Il gusto della Toscana nel nostro ristorante",
            "subtitle": "Piatti tradizionali preparati con ingredienti freschi e locali",
            "paragraph": "Il nostro ristorante è il cuore della tradizione toscana. Ogni piatto è preparato con ingredienti freschi e genuini, offrendo un'esperienza culinaria unica. Dalla pasta fatta in casa ai piatti a base di carne e pesce, ogni portata racconta la storia del nostro territorio. Un ambiente accogliente e familiare dove ogni pasto diventa un’occasione speciale per scoprire i sapori autentici della Toscana."
          },
          carouselDescription: {
            "title": "Scopri il nostro ristorante",
            "paragraph": "Gusta piatti tradizionali in un ambiente accogliente, dove ogni pasto è preparato con ingredienti freschi e locali."
          },
        }
    }
};
</script>

<template>
  <UniversalHeader />
  <HeaderAboutContacts />
  <main>
    <AppGifSection :backgroundImage="backgroundImage" :text="text" />
    <AppAboutUs :description="description" />
    <AppFeaturedProjects :carouselDescription="carouselDescription" :paragraph="paragraph" :elements="elements" />
    <!-- <AppWhyChooseUs /> -->
  </main>
</template>

