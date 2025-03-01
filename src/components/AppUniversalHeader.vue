<script>
export default {
  name: "UniversalHeader",
};
</script>

<template>
  <section class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-12 py-2 d-flex flex-column flex-md-row align-items-center">
          <div class="address mb-2 mb-md-0">
            <span>
              <font-awesome-icon :icon="['fas', 'location-dot']" class="map-location-icon" />
            </span>
            <span class="mx-3 custom-font-size">7087 Placeholder, Alexandria, VA</span>
          </div>
          <div class="telephone-contact mx-0 mx-md-5">
            <span>
              <font-awesome-icon :icon="['fas', 'phone']" class="phone-icon" />
            </span>
            <span class="mx-3 custom-font-size">800-2345-6789</span>
          </div>
        </div>
        <div class="col-md-4 col-12 d-flex align-items-center justify-content-center justify-content-md-end">
          <div class="social-icon-circle">
            <a href="">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a href="">
              <font-awesome-icon :icon="['fab', 'twitter']" class="mx-4" />
            </a>
            <a href="">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style lang="scss" scoped>
@use "src/assets/partials/variables" as *;

section {
  background-color: #938a77;
}

.map-location-icon
.phone-icon {
  //color: $custom-primary-color;
  color:white;
} 

a {
  text-decoration: none;
  //color: #849296;
  color:white;

  :hover {
    //color: #20C7DF;
    color:white;
  }
}

.custom-font-size {
  font-size: 14px;
}

span{
  color:white;
}

@media only screen and (max-width: 994px) {
  .top-header{
    display: none;
  }
}
</style>
