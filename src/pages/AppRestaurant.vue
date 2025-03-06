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
import AppCarousel from '../components/AppCarousel.vue';



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
    AppCarousel
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
          text:'Casale San Fedele, a pochi passi dalla nostra struttura, il ristorante offre piatti autentici preparati con ingredienti freschi e vini locali. Un’esperienza culinaria unica, tra sapori genuini e un’atmosfera accogliente.',
          description: {
            "title": "Il gusto dell’Umbria nel nostro ristorante",
            "subtitle": "Piatti tradizionali preparati con ingredienti freschi e locali",
            "paragraph": "Sebbene non faccia parte direttamente della nostra casa vacanze, il ristorante Casale San Fedele si trova a breve distanza ed è facilmente raggiungibile. Qui potrete gustare piatti preparati con ingredienti freschi e genuini, dalla pasta fatta in casa ai secondi di carne e pesce, accompagnati da dolci artigianali. La nostra selezione di vini DOC e IGT di Montefalco completa l’esperienza enogastronomica, con menu dedicati anche a vegetariani e celiaci"
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
    <section class="container py-5 ">

      <div class="container py-5 ">
        <AppCarousel :elements="elements" />
      </div>
    </section>
    <!-- <AppFeaturedProjects :carouselDescription="carouselDescription" :paragraph="paragraph" :elements="elements" /> -->
    <!-- <AppWhyChooseUs /> -->
  </main>
</template>

