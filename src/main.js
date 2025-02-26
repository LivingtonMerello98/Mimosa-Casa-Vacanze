import { router } from './router'
import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import "@fortawesome/fontawesome-free/js/all.js";


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

createApp(App).use(router).mount('#app')
