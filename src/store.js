import { reactive } from 'vue';

export const store = reactive({
    showMenu: false,

    // Timeout globale per l'animazione (modificabile facilmente)
    animationDelay: 2100,

    // Stato visibilità componenti
    visibleComponents: {
        hero: false
    },

    toggleMenu() {
        console.log('menu aperto');
        this.showMenu = !this.showMenu;
    },

    // Mostra il componente con il delay predefinito
    showComponentWithDelay(componentName) {
        if (componentName in store.visibleComponents) {
            setTimeout(() => {
                store.visibleComponents[componentName] = true;
            }, store.animationDelay);
        } else {
            console.warn(`Il componente ${componentName} non è stato inizializzato nello store.`);
        }
    },

    hideComponent(componentName) {
        if (componentName in store.visibleComponents) {
            store.visibleComponents[componentName] = false;
        }
    }
});







// links
// Links relativi alle ancore
// anchors: [
//     {
//         name: 'Certificates',
//         link: '#certificates',  // Link per scrollare verso la sezione certificati
//     },
//     {
//         name: 'Projects',
//         link: '#projects',  // Link per scrollare verso la sezione progetti
//     },
//     {
//         name: 'Get In Touch',
//         link: '#contact',  // Link per scrollare verso la sezione contatti
//     },
// ]
