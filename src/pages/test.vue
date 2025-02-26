<script>
export default {
    name: 'test'
}
</script>

<template>
    <div class="mx-2">
        <h1>Design sistem</h1>

        <p>//guardate il layout, le formattazioni dovrebbero esserci tutte <br>
            <a
                href="https://ld-wp73.template-help.com/wordpress/prod_5291/v1/">https://ld-wp73.template-help.com/wordpress/prod_5291/v1/</a>
        </p>
        <ul>
            <li>•cerchaimo di usare bootsrap, perchè le mediaquery in alcuni componenti sono integrate</li>
            <li>•a fine progetto le variabili le cambierò da pixel in rem, quindi cerchiamo di usare le variabili, nel caso
                bootsrap ha già delle classi font-size (fs-1,fs-2, fs-3 etc...)</li>
            <i>•usiamo i button presenti nei mixin, dovrebbero già esserci tutti già con l'hover..il padding el caso lo
                rivediamo
                tutti insieme in call ma intanto abbiamo già i componenti</i>
        </ul>
        <hr>
        <p class="paragraph-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequatur excepturi
            debitis natus eligendi
            animi accusamus alias eaque cupiditate. Est quas iste unde laboriosam repudiandae dolorem eum recusandae
            officiis
            placeat?
        </p>
        <p class="paragraph-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequatur excepturi
            debitis natus eligendi
            animi accusamus alias eaque cupiditate. Est quas iste unde laboriosam repudiandae dolorem eum recusandae
            officiis
            placeat?
        </p>
        <i class="fa-solid fa-house"></i>
        <i class="fa-brands fa-facebook"></i>
        <p class="title-section">title-section
        </p>
        <p class="sub-title-l">sub-title-l
        </p>
        <p class="sub-title-m">sub-title-m
        </p>
        <p class="sub-title-s">sub-title-s
        </p>
        <div style="background-color: rgb(79, 79, 79); padding: 1rem; margin: 1rem;">
            <button class="btn mx-2">click</button>
            <button class="btn-2 mx-1">click</button>
            <button class="btn-3 mx-1">send</button>
        </div>
        <div style="background-color: rgb(29, 29, 29); padding:1rem;">
            <p class="sub-title-s">title s </p>
            <p class="title-s">title s </p>
            <p class="title-m">title m </p>
            <p class="title-l">title l </p>
            <p class="title-xl">title-xl </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/partials/mixin' as *;
@use '../assets/partials/variables' as *;

.btn {
    @include btn-primary-to-secondary
}

.btn-2 {
    @include btn-border-to-white
}

.btn-3 {
    @include btn-primary-to-white
}

.paragraph-thin {
    @include paragraph-thin
}

.paragraph-bold {
    @include paragraph-bold
}

.title-section {
    @include title-section
}

.sub-title-l {
    @include sub-title-l
}

.sub-title-m {
    @include sub-title-m
}

.sub-title-s {
    @include sub-title-s
}



.sub-title-s {
    @include sub-title-s
}

.title-s {
    @include title-s
}

.title-m {
    @include title-m
}

.title-l {
    @include title-l
}


.title-xl {
    @include title-xl
}
</style>
