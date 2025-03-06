<script>
//header
import UniversalHeader from "../components/AppUniversalHeader.vue";
import HeaderAboutContacts from "../components/HeaderAboutContacts.vue";
//main
import AppGifSection from "../components/about-page-components/AppGifSection.vue"
import AppMaps from "../components/contacts-page-componets/AppMaps.vue";

export default {
  name: "AppContacts",
  components: {
    UniversalHeader,
    HeaderAboutContacts,
    AppGifSection,
    AppMaps
    
  },
  data() {
        return {
          backgroundImage:'/images/nature.png',
          text:'Vieni a carcarci, e passa un piacevole weekend immerso nella natura.',
        }
    }
};
</script>

<template>
  <UniversalHeader />
  <HeaderAboutContacts />
  <main>
    <AppGifSection :backgroundImage="backgroundImage" :text="text" />
    <AppMaps></AppMaps>
    <!-- <AppWhyChooseUs /> -->
  </main>
</template>