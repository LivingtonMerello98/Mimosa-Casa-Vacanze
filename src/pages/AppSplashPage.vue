<script>
export default {
    name: 'AppSplashPage',
    data() {
        const phrases = [
            "Esplora il nostro agriturismo",
            "Comfort e relax immersi nella natura",
            "Camere accoglienti per un soggiorno indimenticabile",
        ];

        return {
            randomPhrase: phrases[Math.floor(Math.random() * phrases.length)]
        };
    }
}
</script>

<template>
    <div class="splashPage">
        <div class="container d-flex justify-content-center align-items-center content">
            <img src="/images/mimosa_logo.svg" class="rocket mb-3" alt="Rocket">
            <span class=" random-phrase">{{ randomPhrase }}</span>
            <div class="spinner mt-5"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;
.splashPage {
    position: fixed;
    z-index: 999;
    background: $custom-secondary-color;
    height: 100vh;
    width: 100vw;
    overflow: hidden; /* Evita scrollare la splash page */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Aggiungi queste regole per impedire lo scroll globale */
body {
    overflow: hidden;
}

/* Spinner styling */
.spinner {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0); /* Cerchio trasparente */
    border-top: 5px solid $custom-tertiary-color; /* Linea visibile */
    border-radius: 50%;
    animation: spin 1s linear infinite; /* Rotazione infinita */
    margin-bottom: 20px; /* Distanza dal razzo */
}

/* Animazione dello spinner */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.rocket {
    width: 200px;
    height: auto;
}

/* Aggiungi la definizione dell'animazione 'float' */
@keyframes float {
    0% {
        transform: translateY(0); 
    }
    50% {
        transform: translateY(-30px); 
    }
    100% {
        transform: translateY(0); 
    }
}

/* Styling per il testo della frase */
.random-phrase {
    font-size: 14px;
    font-weight: thin;
    color:$custom-tertiary-color;
    margin-top: 20px; /* Aggiunge un margine sopra la frase */
}

/* Content styling per disporre gli elementi in colonna */
.content {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centra verticalmente il contenuto */
    align-items: center; /* Centra orizzontalmente */
}
</style>
