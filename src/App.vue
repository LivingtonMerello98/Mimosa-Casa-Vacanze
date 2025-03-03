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
  <div v-if="flag" class="overflowHidden">
      <AppSplashPage/>
  </div>
  <div v-if="showMenu"> 
        <AppSidebar/> 
  </div>
  <router-view></router-view>
  <AppFooterShare :links="footerLinks" />
</template>
