import { createApp } from 'vue';
import { router } from './router';
import './style.scss';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faAnchor, faCar, faBriefcase, faLocationDot, faPhone, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faUser, faStar, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faUser, faAnchor, faCar, faBriefcase, faStar, faThumbsUp, faLocationDot, faPhone, faFacebook, faTwitter, faInstagram, faBars, faClose);

import "@fontsource/archivo"; // Default weight (400)
import "@fontsource/archivo/100.css"; // Weight 100
import "@fontsource/archivo/200.css"; // Weight 200
import "@fontsource/archivo/300.css"; // Weight 300
import "@fontsource/archivo/400.css"; // Weight 400
import "@fontsource/archivo/400-italic.css"; // Italic 400
import "@fontsource/archivo/500.css"; // Weight 500
import "@fontsource/archivo/600.css"; // Weight 600
import "@fontsource/archivo/700.css"; // Weight 700
import "@fontsource/archivo/800.css"; // Weight 800
import "@fontsource/archivo/900.css"; // Weight 900


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');



// import "@fontsource/poppins"; // Defaults to weight 400
// import "@fontsource/poppins/100.css"; // Specify weight
// import "@fontsource/poppins/200.css"; // Specify weight
// import "@fontsource/poppins/300.css"; // Specify weight
// import "@fontsource/poppins/400.css"; // Specify weight
// import "@fontsource/poppins/400-italic.css"; // Specify weight and style
// import "@fontsource/poppins/500.css"; // Import weight 500
// import "@fontsource/poppins/600.css"; // Import weight 600
// import "@fontsource/poppins/700.css"; // Import weight 700
// import "@fontsource/poppins/800.css"; // Import weight 800