<script>
export default {
    name: 'AppForm'
}
</script>
<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-12 mb-4 mb-md-0">
                    <div>
                        <h2 class="costum-font-size fw-bold">Contacts</h2>
                        <div class="mt-3">
                            <p><strong>Address:</strong> 11559 Ventura Boulevard, Studio City, CA 91604</p>
                            <p><strong>Phone:</strong> <a href="tel:5557486051"
                                    class="costum-font-size fw-bold">555.748.6051</a></p>
                            <p><strong>Fax:</strong> <a href="fax:5557486051"
                                    class="costum-font-size fw-bold">555.748.6051</a></p>
                            <p><strong>E-mail:</strong> <a href="mailto:quickwind@demolink.org"
                                    class="costum-font-size fw-bold">quickwind@demolink.org</a></p>
                            <div class="d-flex gap-3">
                                <a href="#"><i class="fab fa-facebook-f custom-primary-color"></i></a>
                                <a href="#"><i class="fab fa-twitter custom-primary-color"></i></a>
                                <a href="#"><i class="fab fa-instagram custom-primary-color"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-12 mb-5">
                    <h2 class="costum-font-size fw-bold">Send us a message</h2>
                    <form>
                        <div class="mb-3 py-3">
                            <label for="fullName" class="form-label">
                                <h3 class="costum-font-size fw-bold">Full name</h3>
                            </label>
                            <input type="text" class="form-control costum-font-size fw-bold" id="fullName">
                        </div>
                        <div class="mb-3 py-3">
                            <label for="email" class="form-label">
                                <h3 class="costum-font-size fw-bold">E-mail</h3>
                            </label>
                            <input type="email" class="form-control costum-font-size fw-bold" id="email"
                                aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">.</div>
                        </div>
                        <div class="mb-3 py-3">
                            <label for="company" class="form-label">
                                <h3 class="costum-font-size fw-bold">Company</h3>
                            </label>
                            <input type="text" class="form-control costum-font-size fw-bold" id="company">
                        </div>
                        <div class="mb-3 py-3">
                            <label for="subject" class="form-label">
                                <h3 class="costum-font-size fw-bold">Subject</h3>
                            </label>
                            <input type="text" class="form-control costum-font-size fw-bold" id="subject">
                        </div>
                        <div class="mb-3 py-3">
                            <label for="message" class="form-label">
                                <h3 class="costum-font-size fw-bold">Your Message</h3>
                            </label>
                            <textarea class="form-control costum-font-size fw-bold" id="message" rows="10"></textarea>
                        </div>
                        <button type="submit" class="btn-primary-to-secondary costum-font-size fw-bold">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>



<style scoped lang="scss">
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;


a {
    color: #86CCFF;
    text-decoration: none;
    font-size: 20px;
}

p {
    font-size: 20px;
}

.btn-primary-to-secondary {
    @include btn-primary-to-secondary
}

.custom-primary-color {
    color: $custom-primary-color;
}

.costum-font-size {
    font-size: 17px;
}</style>