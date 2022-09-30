<template>
  <ion-header>
    <ion-toolbar color="green">
      <div class="container">
        <ion-title class="titleModal ion-float-left"><b>Apa</b></ion-title>
        <ion-button @click="closeModal" fill="clear" class="buttonClose ion-float-right">
          <ion-icon :icon="closeOutline" size="large" class="icon"></ion-icon>
        </ion-button>
      </div>
    </ion-toolbar>
    
  </ion-header>
  <ion-content class="ion-padding content" color="green">
    <div class="container mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper tellus nec lacinia rutrum. Morbi tincidunt libero nec fermentum luctus.  <br />
    </div>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  modalController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { closeOutline, } from 'ionicons/icons';

export default defineComponent({
  name: "Modal",
  components: { IonContent, IonHeader, IonToolbar, IonTitle, IonButton },
  setup() {
    const closeModal = () => {
      modalController.dismiss();
    };

    return { closeModal, closeOutline };
  },
});
</script>

<style scoped>
.content{
  font-family: 'Poppins', sans-serif;
  line-height: 2.0;
}
.titleModal{
  font-size: 28px;
  color: #EDECE6;
}
.icon{
  color: gray;
}
.buttonClose:hover .icon{
  color: white;
}
@media screen and (max-width:992px) {
  .icon{
    color: white;
  }
}
</style>