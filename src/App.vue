<script>
import AppFooterShare from './components/AppFooterShare.vue';
import AppSplashPage from './pages/AppSplashPage.vue';

export default {
  components: {
    AppFooterShare,
    AppSplashPage
  },
  data() {
    return {
      //riattivare alla fine
      flag: false,
      footerLinks: [
        { label: 'APPARTAMENTI', url: '#' },
        { label: 'RISTORANTI', url: '#' },
        { label: 'SERVIZI', url: '#' },
        { label: 'CONTACTS', url: '#' },
      ]
    };
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
  <router-view></router-view>
  <AppFooterShare :links="footerLinks" />
</template>
