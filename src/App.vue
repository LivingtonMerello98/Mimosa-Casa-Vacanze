<script>
import { store } from './store';
import AppFooterShare from './components/AppFooterShare.vue';
import AppSplashPage from './pages/AppSplashPage.vue';
import AppSidebar from './components/AppSidebar.vue';

export default {
  components: {
    AppFooterShare,
    AppSplashPage,
    AppSidebar
  },
  data() {
    return {
      //riattivare alla fine
      flag: true,
      footerLinks: [
        { label: 'APPARTAMENTI', url: '#' },
        { label: 'RISTORANTI', url: '#' },
        { label: 'SERVIZI', url: '#' },
        { label: 'CONTACTS', url: '#' },
      ]
    };
  },
  computed: {
    showMenu() {
      // Accedi alla proprietà `showMenu` dal tuo store
      return store.showMenu;
    }
  },
  watch: {
    showMenu(newValue) {
      if (newValue) {
        // Blocca lo scroll verticale
        document.body.style.overflow = 'hidden';
      } else {
        // Ripristina lo scroll
        document.body.style.overflow = '';
      }
    }
  },

  mounted(){
    setTimeout(()=>{
      this.flag = false;
    },2000) //2 secondo
  }
}
</script>

<template>
  <div>
    <!-- Pulsante "Chiama" posizionato in basso a sinistra con posizione fissa -->
    <a href="tel:+3912345678" class="call-button">
      <span>
        <font-awesome-icon :icon="['fas', 'phone']" class="phone-icon" />
      </span>
    </a>
    
    <div v-if="flag" class="overflowHidden">
        <AppSplashPage/>
    </div>
    <div v-if="showMenu"> 
        <AppSidebar/> 
    </div>
    <router-view></router-view>
    <AppFooterShare :links="footerLinks" />
  </div>
</template>


<style lang="scss"scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

.call-button {
  position: fixed;  
  bottom: 20px;      
  left: 20px;       
  padding: 10px 20px;
  background-color: $custom-tertiary-color; 
  color: white;      
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  z-index: 98;     
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3); 
}

.call-button:hover {
  background-color: $custom-primary-color; 
}
</style>