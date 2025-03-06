<script>
export default {
    name: 'AppMaps'
}
</script>

<template>
    <section>
        <div class="container py-3">
            <div class="row justify-content-center">
                <div class="col-md-6 py-5">
                    <div>
                        <h2 class="costum-font-size fw-bold">Contattaci!</h2>
                        <div class="col-12 d-flex my-5" style="background-color: #ffff;">
                            <div class="col-2" style="height: 1px; background-color:#191B1C ;"></div>
                        </div>
                        <div class="mt-3">
                            <p><strong>Indirizzo:</strong> Via degli Olivi 06034 Mercatello PG</p>
                            <p><strong>telefono:</strong> <a href="tel:+39 329 7368840"
                                    class="info fw-bold">+39 329 7368840</a></p>
                            <p><strong>telefono 2:</strong> <a href="tel:+39 329 209 0010"
                                    class="info fw-bold">+39 329 209 0010</a></p>
                            <p><strong>E-mail:</strong> <a href="mailto:info@mimosacasevacanze.it"
                                    class="info fw-bold">info@mimosacasevacanze.it</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 py-5">
                    <div class="ratio ratio-16x9">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96714.68291250926!2d12.6778777!3d42.8354111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132e8d38ced72e35%3A0xcea7a9cbc6f2f6e8!2sCasa+vacanze+le+mimose!5e0!3m2!1sit!2sit!4v1672242259543"
                            width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use 'src/assets/partials/mixin' as *;
@use 'src/assets/partials/variables' as *;

.info{
    color: $custom-tertiary-color;
    text-decoration: none;
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
        color: $custom-primary-color; 
        text-decoration: none; 
    }

    &:focus {
        outline: none;  
        color: $custom-primary-color;  
        text-decoration: none;  
    }
}
</style>
