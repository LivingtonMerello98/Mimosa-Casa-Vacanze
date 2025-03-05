<script>
import UniversalHeader from "../components/AppUniversalHeader.vue";
import HeaderAboutContacts from "../components/HeaderAboutContacts.vue";
import AppGifSection from '../components/about-page-components/AppGifSection.vue';

export default {
  name: "AppApartment",
  components:{
    UniversalHeader,
    HeaderAboutContacts,
    AppGifSection,
  },
  data() {
    return {
      apartments: [
        { name: 'camera mercatello', folder: 'camera_mercatello', description: 'Un’accogliente camera per un soggiorno rilassante.', price: '80 € a notte' },
        { name: 'assisi', folder: 'assisi', description: 'Un appartamento elegante a due passi dalla storia.', price: '150 € a notte' },
        { name: 'bevagna', folder: 'bevagna', description: 'Comfort e charme nel cuore dell’Umbria.', price: '150 € a notte' },
        { name: 'montefalco', folder: 'montefalco', description: 'Un rifugio perfetto tra i vigneti umbri.', price: '150 € a notte' },
        { name: 'perugia', folder: 'perugia', description: 'Un mix di modernità e tradizione per il tuo relax.', price: '150 € a notte' },
        { name: 'spoleto', folder: 'spoleto', description: 'Vivi la magia di Spoleto in un ambiente accogliente.', price: '150 € a notte' },
        { name: 'trevi', folder: 'trevi', description: 'Vista mozzafiato e massimo comfort.', price: '150 € a notte' }
      ],
      apartment: null,
      images: [],
      backgroundImage: '/images/appartament.png',
      text: 'Mimosa Casa Vacanze è pensato per offrirti un soggiorno rilassante nel cuore della campagna umbra, dove il comfort e la tranquillità si fondono perfettamente.'
    };
  },
  async mounted() {
    const apartmentName = this.$route.params.name.toLowerCase();
    this.apartment = this.apartments.find(ap => ap.name.toLowerCase() === apartmentName);

    if (this.apartment) {
      await this.loadImages(this.apartment.folder);
    }
  },
  methods: {
    async loadImages(folder) {
      try {
        const response = await fetch("/images/images.json");
        const data = await response.json();
        if (data[folder]) {
          this.images = data[folder].map(img => `/images/${folder}/${img}`);
        }
      } catch (error) {
        console.error("Errore nel caricamento delle immagini:", error);
      }
    }
  }
};
</script>

<template>
  <UniversalHeader />
  <HeaderAboutContacts />
  <AppGifSection :backgroundImage="backgroundImage" :text="text" />

  <section class="about-us-section">
    <div v-if="apartment">
      <div class="about-us-section">
        <div class="fade-in-element">
          <div class="row py-5">
            <div class="col-12 py-5">
              <h1 class="text-center custom-font text-uppercase">{{ apartment.name }}</h1>
              <div class="col-12 my-5">
                <div class="col-1" style="height: 1px; background-color:#F1E2C5; margin: 0 auto;"></div>
              </div>
            </div>
            <div class="col-12 text-center">
              <p class="text-center"><strong>Prezzo:</strong> {{ apartment.price }}</p>
              <p class="text-center">{{ apartment.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="container">
    <div v-if="apartment">
      <!-- Loader mentre le immagini si caricano -->
      <div v-if="images.length === 0">
        <div class="container">
          <p>Caricamento immagini...</p>
        </div>
      </div>

      <div v-else class="row py-5">
        <div class="col-lg-4 col-md-6 col-sm-12 py-3 px-3 text-center" v-for="img in images" :key="img">
          <div class="img-content position-relative">
            <img :src="img" alt="Foto dell'appartamento" class="apartment-image">
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Appartamento non trovato</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "src/assets/partials/mixin" as *;
@use "src/assets/partials/variables" as *;


.about-us-section {
  background-color: $custom-secondary-color;
  color: white;
}

.apartment-image {
  width: 100%;
  height: 300px; /* Altezza ridotta */
  object-fit: cover; /* Mantiene proporzioni senza deformazioni */
  border-radius: 10px; /* Optional: angoli arrotondati */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
