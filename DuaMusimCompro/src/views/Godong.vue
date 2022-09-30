<template>
  <ion-page>
    <ion-content>
      <NavbarGodong/>
      <FirstContentGodong />
      <SecondContentGodong />
      <ThirdContentGodong />
      <FourthContentGodong />
      <FifthContentGodong />
      <Footer />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, } from '@ionic/vue';
import NavbarGodong from '@/components/godong/NavbarGodong.vue';
import FirstContentGodong from '@/components/godong/FirstContentGodong.vue';
import SecondContentGodong from '@/components/godong/SecondContentGodong.vue';
import ThirdContentGodong from '@/components/godong/ThirdContentGodong.vue';
import FourthContentGodong from '@/components/godong/FourthContentGodong.vue';
import FifthContentGodong from '@/components/godong/FifthContentGodong.vue';
import Footer from '@/components/Footer.vue';

export default({
  name: 'Godong',
  components: {
    IonContent,
    IonPage,
    NavbarGodong,
    FirstContentGodong,
    SecondContentGodong,
    ThirdContentGodong,
    FourthContentGodong,
    FifthContentGodong,
    Footer
  }
});
</script>

<style scoped>

</style>