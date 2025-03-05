<script>
import { store } from './store';
import AppFooterShare from './components/AppFooterShare.vue';
import AppSplashPage from './pages/AppSplashPage.vue';
import AppSidebar from './components/AppSidebar.vue';
import { mapState } from 'vuex';

export default {
  components: {
    AppFooterShare,
    AppSplashPage,
    AppSidebar
  },
  data() {
    return {
      flag: true,  // Indica se la splash page deve essere visibile
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
      return store.showMenu;
    }
  },
  watch: {
    showMenu(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      // Mostra la splash page quando la navigazione cambia
      this.flag = true;
      setTimeout(() => {
        this.flag = false;  // Nasconde la splash page dopo 2 secondi
        next();  // Procede con la navigazione
      }, 2000); // Mostra la splash page per 2 secondi
    });
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
    
    <AppFooterShare/>
  </div>
</template>

<style lang="scss" scoped>
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