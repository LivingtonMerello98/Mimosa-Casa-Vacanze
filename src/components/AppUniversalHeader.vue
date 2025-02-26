<script>

//HEADER DI TUTTI

export default {
  name: "UniversalHeader",
  data() {
    return {};
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-12 py-2 d-flex flex-column flex-md-row align-items-center">
          <!-- INDIRIZZO E NUMERO DI TELEFONO HEADER -->
          <div class="address mb-2 mb-md-0">
            <span>
              <i class="fa-solid fa-location-dot map-location-icon"></i>
            </span>
            <span class="mx-3 custom-font-size">7087 Placeholder, Alexandria, VA</span>
          </div>
          <div class="telephone-contact mx-0 mx-md-5">
            <span><i class="fa-solid fa-phone phone-icon"></i></span>
            <span class="mx-3 custom-font-size">800-2345-6789</span>
          </div>
        </div>
        <div class="col-md-4 col-12 d-flex align-items-center justify-content-center justify-content-md-end">
          <div class="social-icon-circle ">
            <a href=""><i class="fa-brands fa-facebook "></i></a>
            <a href=""><i class="fa-brands fa-twitter mx-4"></i></a>
            <a href=""><i class="fa-brands fa-instagram "></i></a>
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
</style>
