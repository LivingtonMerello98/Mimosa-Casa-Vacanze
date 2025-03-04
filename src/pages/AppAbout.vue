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
                    url: 'https://lombardiasecrets.com/wp-content/webpc-passthru.php?src=https://lombardiasecrets.com/wp-content/uploads/2024/01/Rosa-Grand-Milano-Lombardia-Secrets1783.jpg&nocache=1'
                },
                {
                    url: 'https://lombardiasecrets.com/wp-content/webpc-passthru.php?src=https://lombardiasecrets.com/wp-content/uploads/2024/01/Rosa-Grand-Milano-Lombardia-Secrets1783.jpg&nocache=1'
                },
                {
                    url: 'https://lombardiasecrets.com/wp-content/webpc-passthru.php?src=https://lombardiasecrets.com/wp-content/uploads/2024/01/Rosa-Grand-Milano-Lombardia-Secrets1783.jpg&nocache=1'
                },
                {
                    url: 'https://lombardiasecrets.com/wp-content/webpc-passthru.php?src=https://lombardiasecrets.com/wp-content/uploads/2024/01/Rosa-Grand-Milano-Lombardia-Secrets1783.jpg&nocache=1'
                },
                {
                    url: 'https://lombardiasecrets.com/wp-content/webpc-passthru.php?src=https://lombardiasecrets.com/wp-content/uploads/2024/01/Rosa-Grand-Milano-Lombardia-Secrets1783.jpg&nocache=1'
                },
                {
                    url: 'https://lombardiasecrets.com/wp-content/webpc-passthru.php?src=https://lombardiasecrets.com/wp-content/uploads/2024/01/Rosa-Grand-Milano-Lombardia-Secrets1783.jpg&nocache=1'
                },
          ],
          backgroundImage:'/images/appartament.png',
          text:'Scopri il comfort e la serenità dei nostri appartamenti, pensati per offrirti un soggiorno rilassante nel cuore della campagna toscana',
          description: {
            title: "I nostri appartamenti: il comfort della tua casa in Toscana",
            subtitle:"Accoglienti, spaziosi e perfetti per ogni tipo di soggiorno",
            paragraph: "Ogni appartamento di Mimosa Casa Vacanze è pensato per offrirti il massimo del comfort e della privacy. Arredati con cura, i nostri spazi sono dotati di tutti i servizi necessari per rendere il tuo soggiorno speciale: cucina attrezzata, Wi-Fi gratuito, camere eleganti e una vista mozzafiato sulla campagna toscana. Che tu stia cercando una fuga romantica o una vacanza in famiglia, troverai l’appartamento ideale per ogni esigenza."
          },
          carouselDescription: {
            title: "Esplora i nostri appartamenti",
            paragraph: "Guarda da vicino i nostri spazi accoglienti, pensati per il massimo del comfort e della tranquillità."
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

