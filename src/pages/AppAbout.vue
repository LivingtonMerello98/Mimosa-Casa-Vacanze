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


//manca spello
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
              img: '/images/camera_mercatello/DSC_0250.JPG',
              name: 'camera mercatello',
              price: '80 € a notte',
              description: 'Un’accogliente camera per un soggiorno rilassante.'
          },
          {
              img: '/images/assisi/DSC_0264.JPG',
              name: 'assisi',
              price: '150 € a notte',
              description: 'Un appartamento elegante a due passi dalla storia.'
          },
          {
              img: '/images/bevagna/DSC_0240.JPG',
              name: 'bevagna',
              price: '150 € a notte',
              description: 'Comfort e charme nel cuore dell’Umbria.'
          },
          {
              img: '/images/montefalco/DSC_0228.JPG',
              name: 'montefalco',
              price: '150 € a notte',
              description: 'Un rifugio perfetto tra i vigneti umbri.'
          },
          {
              img: '/images/perugia/DSC_0233.JPG',
              name: 'perugia',
              price: '150 € a notte',
              description: 'Un mix di modernità e tradizione per il tuo relax.'
          },
          {
              img: '/images/spoleto/DSC_0247.JPG',
              name: 'spoleto',
              price: '150 € a notte',
              description: 'Vivi la magia di Spoleto in un ambiente accogliente.'
          },
          {
              img: '/images/trevi/DSC_0217.JPG',
              name: 'trevi',
              price: '150 € a notte',
              description: 'Vista mozzafiato e massimo comfort.'
          },
          {
              img: '/images/pharm-overlay.png',
              name: 'giano',
              price: '95 € a notte',
              description: 'Un soggiorno rilassante immerso nella natura.'
          },
          {
              img: '/images/pharm-overlay.png',
              name: 'castel ristaldi',
              price: '95 € a notte',
              description: 'Un angolo di pace nella verde Umbria.'
          }
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

