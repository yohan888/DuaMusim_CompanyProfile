<template>
  <ion-page>
    <ion-content color="cream">
      <NavbarDukungan/>
      <FirstContentDukungan />
      <SecondContentDukungan />
      <ThirdContentDukungan />
      <FourthContentDukungan />
      <!--<FifthContentGodong />-->
      <Footer /> 
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, } from '@ionic/vue';
import NavbarDukungan from '@/components/dukungan/NavbarDukungan.vue';
import FirstContentDukungan from '@/components/dukungan/FirstContentDukungan.vue';
import SecondContentDukungan from '@/components/dukungan/SecondContentDukungan.vue';
import ThirdContentDukungan from '@/components/dukungan/ThirdContentDukungan.vue';
import FourthContentDukungan from '@/components/dukungan/FourthContentDukungan.vue';
// import FifthContentGodong from '@/components/godong/FifthContentGodong.vue';
import Footer from '@/components/Footer.vue';

export default({
  name: 'Dukungan',
  components: {
    IonContent,
    IonPage,
    NavbarDukungan,
    FirstContentDukungan,
    SecondContentDukungan,
    ThirdContentDukungan,
    FourthContentDukungan,
    // FifthContentGodong,
    Footer
  }
});
</script>

<style scoped>

</style>