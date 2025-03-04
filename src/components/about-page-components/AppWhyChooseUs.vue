<script>
export default {
  name: "AppWhyChooseUs",
  data() {
    return {
      stats: [
        { value: 1000, label: "Ospiti soddisfatti" },
        { value: 4, label: "Anni di ospitalità" },
        { value: 6, label: "Ettari di natura" },
        { value: 5, label: "Esperienze uniche" },
      ],
      counters: [] // Array per i valori che si animano
    };
  },
  mounted() {
    this.startCounting();
  },
  methods: {
    startCounting() {
      this.stats.forEach((stat, index) => {
        this.counters[index] = 0; // Inizializza ogni contatore a 0

        const duration = 2000; // Durata totale dell'animazione in ms
        const steps = 60; // Numero di aggiornamenti dell'animazione
        const increment = stat.value / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
          if (currentStep < steps) {
            this.counters[index] += increment;
            currentStep++;
          } else {
            this.counters[index] = stat.value; // Assicura il valore finale corretto
            clearInterval(interval);
          }
        }, duration / steps);
      });
    }
  }
};
</script>

<template>
  <section class="why-ppl-choose-us py-5">
    <h2 class="text-center py-5">Perché i nostri ospiti ci scelgono</h2>
    <div class="container">
      <div class="col-12 mb-5" style="background-color: rgba(0, 0, 0, 0.037);">
        <div class="col-1" style="height: 1px; background-color:#F1E2C5; margin: 0 auto;"></div>
      </div>
      <div class="row py-5">
        <div v-for="(stat, index) in stats" :key="index" class="col-lg-3 col-md-6 col-sm-12">
          <div class="card-counter">
            <div class="container">
              <div class="content text-center">
                <div class="num-counter">+{{ Math.round(counters[index]) }}</div>
                <hr class="mb-5 card-divider" />
                <div class="card-item">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "src/assets/partials/mixin" as *;
@use "src/assets/partials/variables" as *;

.num-counter {
  font-size: 2rem;
  font-weight: bold;
}

section{
  background-color: $custom-primary-color;
}

.num-counter {
  color: $custom-secondary-color;
  font-weight: bold;
  font-size: $custom-title-s;
}

h2 {
  font-weight: bold;
  font-size: $custom-title-section-size;
}

.card-divider {
  color: $custom-primary-color;
}

.card-item {
  font-weight: bold;
  font-size: $custom-sub-title-m;
}
</style>
