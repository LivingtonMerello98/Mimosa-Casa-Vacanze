<script>
import { store } from '../../store';
export default {
  name: "AppAboutUs",
  props: {
    description: {
      type: Array,
      required: true
    }
  },
  mounted() {
        store.observeElementsWithFadeIn();
    },
};
</script>

<template>
  <section class="about-us-section">
    <div class="container fade-in-element">
      <div class="row py-5">
        <div class="col-12 py-5">
          <h1 class="text-center custom-font">{{ description.title }}</h1>
          <div class="col-12 my-5">
            <div class="col-1" style="height: 1px; background-color:#F1E2C5; margin: 0 auto;"></div>
          </div>
        </div>
        <div class="col-12 text-center">
          <p class="paragraph-bold mb-5">
            {{ description.subtitle }}
          </p>
          <p class="paragraph-thin mb-5">
            {{ description.paragraph }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "src/assets/partials/mixin" as *;
@use "src/assets/partials/variables" as *;


.fade-in-element {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in-element.fade-in {
    opacity: 1;
    transform: translateY(0);
}


.about-us-section {
  //background-image: url("https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/bg6.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: $custom-secondary-color;
}

span {
  font-weight: bold;
  font-size: $custom-sub-title-l
}

.custom-font {
  font-weight: 700;
  line-height: 1.25em;
  font-size: $custom-title-section-size;
  color:white;

  @media only screen and (max-width: 500px) {
    font-size:1.8rem;
  }
}

.custom-circle {
  background-color: $custom-primary-color;
  color: white;
  border-radius: 100%;
  padding: 30px;
}

.paragraph-bold {
  @include paragraph-bold;
  color: white;
}
.paragraph-thin {
    @include paragraph-thin;
    color:white;
}
</style>
