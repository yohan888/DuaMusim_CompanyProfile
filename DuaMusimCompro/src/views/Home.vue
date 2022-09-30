<template>
  <ion-page>
    <ion-content>
      <NavbarHome/>
      <FirstContentHome />
      <SecondContentHome />
      <ThirdContentHome />
      <FourthContentHome />
      <Footer />
    </ion-content>
  </ion-page>
</template>

<script>

import { IonContent, IonPage, } from '@ionic/vue';
import NavbarHome from '@/components/home/NavbarHome.vue';
import FirstContentHome from '@/components/home/FirstContentHome.vue';
import SecondContentHome from '@/components/home/SecondContentHome.vue';
import ThirdContentHome from '@/components/home/ThirdContentHome.vue';
import FourthContentHome from '@/components/home/FourthContentHome.vue';
import Footer from '@/components/Footer.vue';

export default({
  name: 'Home',
  components: {
    IonContent,
    IonPage,
    NavbarHome,
    FirstContentHome,
    SecondContentHome,
    ThirdContentHome,
    FourthContentHome,
    Footer
  }
});
</script>

<style scoped>

</style>