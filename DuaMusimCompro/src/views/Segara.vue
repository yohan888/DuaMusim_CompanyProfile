<template>
  <ion-page>
    <ion-content>
      <NavbarSegara/>
      <FirstContentSegara />
      <SecondContentSegara />
      <ThirdContentSegara />
      <FourthContentSegara />
      <FooterSegara />
    </ion-content>
  </ion-page>
</template>

<script>

import { IonContent, IonPage, } from '@ionic/vue';
import NavbarSegara from '@/components/segara/NavbarSegara.vue';
import FirstContentSegara from '@/components/segara/FirstContentSegara.vue';
import SecondContentSegara from '@/components/segara/SecondContentSegara.vue';
import ThirdContentSegara from '@/components/segara/ThirdContentSegara.vue';
import FourthContentSegara from '@/components/segara/FourthContentSegara.vue';
import FooterSegara from '@/components/FooterSegara.vue';

export default({
  name: 'Segara',
  components: {
    IonContent,
    IonPage,
    NavbarSegara,
    FirstContentSegara,
    SecondContentSegara,
    ThirdContentSegara,
    FourthContentSegara,
    FooterSegara
  }
});
</script>

<style scoped>

</style>