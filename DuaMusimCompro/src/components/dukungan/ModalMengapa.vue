<template>
                        <ion-card class="cardDukungan" color="green" style="border-radius:10px">
                            <div class="container">
                                <ion-card-header>
                                    <ion-card-title class="title mt-2">Mengapa</ion-card-title>
                                </ion-card-header>
                                <ion-card-content class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper tellus nec lacinia rutrum. Morbi tincidunt libero nec fermentum luctus.
                                </ion-card-content>
                                <ion-button @click="openModal" fill="clear" class="ion-float-right">
                                    <ion-icon :icon="addCircleOutline" color="cream" size="large" class="icon"></ion-icon>
                                </ion-button>
                            </div>
                            <br><br><br>
                        </ion-card>
        
        
</template>

<script>
import { IonIcon, IonButton, modalController, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import Modal from "@/components/modalMengapa.vue";
import { addCircleOutline, } from 'ionicons/icons';


export default({
  name: 'ModalMengapa',
  components: {
    IonIcon,
    IonButton,
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent,
  },
  setup() {
    const openModal = async () => {
      const modalSiapa = await modalController.create({
        component: Modal, //Modal is name of the component to render inside ionic modal
      });
      return modalSiapa.present();
    };

    return { openModal, addCircleOutline };
  },
});
</script>

<style scoped>
.contentDukungan{
    width: 65em;
}
.cardDukungan{
    width: auto;
}
.title{
    text-align: left;
    font-weight: 900;
    font-size:39px; 
    font-family: 'Nunito', sans-serif;
}
.content{
    text-align: left;
    font-size:12px; 
    font-family: 'Poppins', sans-serif;
    line-height: 2.0;
    margin-top: -0.5em;
}
@media screen and (max-width:1400px){
}
@media screen and (max-width:1200px){
    .contentDukungan{
        width: 57em;
    }
    .cardDukungan{
        width: 92%;
    }
}
@media screen and (max-width:992px){
    .contentCardDukungan{
        display: none;
    }
}
@media screen and (max-width:768px){
    
}
@media screen and (max-width:600px){
    .thirdTextDukungan h1{
        color: black;
        font-size: 29px;
    }
}
@media screen and (max-width:400px){
    
}
</style>