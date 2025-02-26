<script>
export default {
  name: "AppWhyChooseUs",
  data() {
    return {};
  },
};
</script>

<template>
  <section class="why-ppl-choose-us py-5">
    <h2 class="text-center py-5">Why People Choose Us</h2>
    <div class="container">
      <div class="col-12  mb-5" style="background-color: rgba(0, 0, 0, 0.037);">
        <div class="col-1" style="height: 1px; background-color:#F1E2C5; margin: 0 auto;">
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card-counter">
            <div class="container">
              <div class="content text-center">
                <div class="num-counter">5586</div>
                <hr class="mb-5 card-divider" />
                <div class="card-item">lorem ipsum</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card-counter">
            <div class="container">
              <div class="content text-center">
                <div class="num-counter">3864</div>
                <hr class="mb-5 card-divider" />
                <div class="card-item">lorem ipsum</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card-counter">
            <div class="container">
              <div class="content text-center">
                <div class="num-counter">98</div>
                <hr class="mb-5 card-divider" />
                <div class="card-item">lorem ipsum</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card-counter">
            <div class="container">
              <div class="content text-center">
                <div class="num-counter">11</div>
                <hr class="mb-5 card-divider" />
                <div class="card-item">lorem ipsum</div>
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
