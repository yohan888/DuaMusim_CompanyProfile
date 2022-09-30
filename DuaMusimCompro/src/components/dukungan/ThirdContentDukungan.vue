<template>
    <div class="jumbotron">
        <center>
        <div class="container">
            <div class="thirdTextDukungan">
                <br>
                <h1 class="mt-4">Pertanyaan yang sering ditanyakan</h1>
            </div>
        </div>
        </center>
        <div class="container">
            <ion-grid class="contentCardDukungan">
                <br>
                <center>
                <ion-row class="contentDukungan">
                    <ion-col>
                        <ion-card class="cardDukungan" color="green" style="border-radius:10px">
                            <div class="container">
                                <ion-card-header>
                                    <ion-card-title class="title mt-2">Apa</ion-card-title>
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
                    </ion-col>
                    <ion-col>
                        <ModalSiapa class="modalSiapa"/>
                    </ion-col>
                    <ion-col>
                        <ModalMengapa class="modalMengapa"/>
                    </ion-col>
                </ion-row>
                <ion-row class="contentDukungan mt-2">
                    <ion-col>
                        <ModalKapan class="modalKapan"/>
                    </ion-col>
                    <ion-col>
                        <ModalDimana class="modalDimana"/>
                    </ion-col>
                    <ion-col>
                        <ModalBagaimana class="modalBagaimana"/>
                    </ion-col>
                </ion-row>
                </center>
            </ion-grid>
        </div>
        <ReadMoreThirdContentDukungan992px class="readmore"/>
        <ReadMoreThirdContentDukungan600px class="readmore600px"/>
        <br><br><br>
    </div>    
</template>

<script>
import { IonGrid, IonRow, IonCol, IonIcon, IonButton, modalController, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import Modal from "@/components/modal.vue";
import { addCircleOutline, } from 'ionicons/icons';
import ModalSiapa from '@/components/dukungan/ModalSiapa.vue';
import ModalMengapa from '@/components/dukungan/ModalMengapa.vue';
import ModalKapan from '@/components/dukungan/ModalKapan.vue';
import ModalDimana from '@/components/dukungan/ModalDimana.vue';
import ModalBagaimana from '@/components/dukungan/ModalBagaimana.vue';
import ReadMoreThirdContentDukungan992px from '@/components/dukungan/ReadMoreThirdContentDukungan992px.vue';
import ReadMoreThirdContentDukungan600px from '@/components/dukungan/ReadMoreThirdContentDukungan600px.vue';

export default({
  name: 'ThirdContentDukungan',
  components: {
    IonIcon,
    IonButton,
    IonGrid, 
    IonRow, 
    IonCol,
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent,
    ModalSiapa,
    ModalMengapa,
    ModalKapan,
    ModalDimana,
    ModalBagaimana,
    ReadMoreThirdContentDukungan992px,
    ReadMoreThirdContentDukungan600px,
  },
  setup() {
    const openModal = async () => {
      const modal = await modalController.create({
        component: Modal, //Modal is name of the component to render inside ionic modal
      });
      return modal.present();
    };

    return { openModal, addCircleOutline };
  },
});
</script>

<style scoped>
.thirdTextDukungan h1{
    color: black;
    font-family: 'Nunito', sans-serif;
    font-size: 39px;
}
.contentDukungan{
    width: 65em;
}
.cardDukungan{
    width: 92%;
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
.readmore, .readmore600px{
    display: none;
}
.modalSiapa, .ModalMengapa, .ModalKapan, .ModalDimana, .ModalBagaimana{
    display: block;
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
    .readmore{
        display: block;
    }
}
@media screen and (max-width:768px){
    
}
@media screen and (max-width:600px){
    .thirdTextDukungan h1{
        color: black;
        font-size: 29px;
    }
    .readmore{
        display: none;
    }
    .readmore600px{
        display: block;
    }
}
@media screen and (max-width:400px){
    
}
</style>