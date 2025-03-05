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
          text:'Mimosa Casa Vacanze è pensato per offrirti un soggiorno rilassante nel cuore della campagna umbra, dove il comfort e la tranquillità si fondono perfettamente.',
          description: {
            title: "I nostri appartamenti, il comfort della tua casa in Umbria",
            subtitle:"Mimosa Casa Vacanze offre ai suoi ospiti ben nove appartamenti deliziosi e romantici, perfetti per ogni esigenza.",
            paragraph: "Che tu stia cercando una fuga romantica o una vacanza in famiglia, gli appartamenti di Mimosa Casa Vacanze offrono comfort e privacy immersi nel verde. Dotati di cucina attrezzata, Wi-Fi gratuito e riscaldamento, sono arredati con cura per garantirti un soggiorno rilassante. Scegli tra formula B&B, mezza pensione o pensione completa per vivere al meglio la nostra ospitalità."
          },
          carouselDescription: {
            title: "Esplora i nostri appartamenti",
            paragraph: "Ogni appartamento è dotato di cucina completamente attrezzata, per offrire ai nostri ospiti la libertà di preparare i propri piatti preferiti, garantendo il massimo comfort, accanto alla possibilità di gustare i piatti del nostro ristorante.."
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

