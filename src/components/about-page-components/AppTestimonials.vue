<script>
export default {
  name: "AppTestimonials",
  data() {
    return {
      testimonials: [
        {
          url: "https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/person0.jpg",
          name: "- Albert Winning",
          role: "Yatch Repairs",
          desc: "As a yacht owner, after either of my regular maintenance checkups, I oftentimes find it necessary to do this or that kind of a repair. The thing is that I don’t always have enough time (or sometimes the skill), to do all of the repairs all by myself…",
        },
        {
          url: "https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/person01.jpg",
          name: "- Reginald Stanhow",
          role: "Yatch Rentals",
          desc: "Having had a real handful of favorite pastimes over the course of my whole adult life, sailing was always front  and center in such a list. So, when I found out about this yachts chartering service located just a few miles near my home, I was thrilled!",
        },
      ],
    };
  },
};
</script>

<template>
  <section>
    <h2 class="text-center py-5">Testimonials</h2>
    <div class="container">
      <div class="col-12 mb-5" style="background-color: rgba(0, 0, 0, 0.037);">
        <div class="col-1" style="height: 1px; background-color: #6ec1e4; margin: 0 auto;"></div>
      </div>
      <div class="row">
        <div class="col-md-6 d-flex flex-column flex-md-row align-items-center" v-for="testimonial in testimonials">
          <div class="card-testimonial">
            <img :src="testimonial.url" alt="" class="img-testimonial" />
          </div>
          <div class="info-testimonials mb-5 px-4 text-center text-md-left">
            <span class="role-testimonial">{{ testimonial.role }}</span>
            <p class="mb-3">
              <span>{{ testimonial.desc }}</span>
            </p>
            <p class="name-testimonial mb-3">{{ testimonial.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center py-5">
          <button class="button-view-all">View All</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "src/assets/partials/mixin" as *;
@use "src/assets/partials/variables" as *;

/* Stile desktop invariato */
.button-view-all {
  @include btn-primary-to-secondary;
}

.name-testimonial {
  color: #09c2dd;
  font-weight: bold;
}

h2 {
  font-weight: bold;
  font-size: $custom-title-section-size;
}

.role-testimonial {
  font-weight: bold;
  font-size: $custom-sub-title-m;
}

.img-testimonial {
  max-height: 300px;
}

/* Media query per tablet e mobile */
@media (max-width: 991px) {
  /* Layout tablet */
  .info-testimonials {
    text-align: center; /* Centra il testo per tablet */
  }

  .role-testimonial {
    font-size: 16px; /* Ridimensiona i titoli */
  }

  .name-testimonial {
    font-size: 16px; /* Ridimensiona i nomi */
  }

  p {
    font-size: 14px; /* Ridimensiona i paragrafi */
  }

  .img-testimonial {
    max-height: 200px; /* Ridimensiona l'immagine */
  }
}

@media (max-width: 576px) {
  /* Layout mobile */
  .col-md-6 {
    flex-direction: column; /* Impila immagine e testo */
    text-align: center; /* Centra tutto */
  }

  .card-testimonial {
    margin-bottom: 20px; /* Spaziatura tra immagine e testo */
  }

  h2 {
    font-size: 24px; /* Ridimensiona titolo sezione */
  }

  .role-testimonial {
    font-size: 16px; /* Ulteriore ridimensionamento per mobile */
  }

  .name-testimonial {
    font-size: 16px; /* Ridimensiona i nomi */
  }

  p {
    font-size: 14px; /* Ridimensiona paragrafi */
  }

  .img-testimonial {
    max-height: 150px; /* Ridimensiona ulteriormente immagine */
  }
}
</style>
