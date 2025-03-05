<script>

//header
import UniversalHeader from "../components/AppUniversalHeader.vue";
import HeaderAboutContacts from "../components/HeaderAboutContacts.vue";


//main
import AppGifSection from "../components/about-page-components/AppGifSection.vue"
import AppBusiness from "../components/service-page-components/AppBusiness.vue";





export default {
  name: "AppRestaurant",
  components: {
    UniversalHeader,
    HeaderAboutContacts,
    AppGifSection,
    AppBusiness
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
          backgroundImage:'/images/attività.png',
          text:'Dalla passeggiata a cavallo tra le colline umbre, alle escursioni in fattoria, ogni giorno offre nuove esperienze per arricchire il tuo soggiorno. Vivi la natura, esplora il territorio e lasciati sorprendere dalle tradizioni locali',

        }
    }
};
</script>

<template>
  <UniversalHeader />
  <HeaderAboutContacts />
  <main>
    <AppGifSection :backgroundImage="backgroundImage" :text="text" />
    <AppBusiness></AppBusiness>
  </main>
</template>

