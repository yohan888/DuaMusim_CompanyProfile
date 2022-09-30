<template>
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
                </ion-row>
                <ion-row class="contentDukungan">
                    <ion-col>
                        <ModalSiapa class="modalSiapa"/>
                    </ion-col>
                </ion-row>
                
                <span id="dots2"></span>
                <span id="more2">

                <ion-row class="contentDukungan mt-2">
                    <ion-col>
                        <ModalMengapa class="modalMengapa"/>
                    </ion-col>
                </ion-row>
                <ion-row class="contentDukungan">
                    <ion-col>
                        <ModalKapan class="modalKapan"/>
                    </ion-col>
                </ion-row>
                <ion-row class="contentDukungan">
                    <ion-col>
                        <ModalDimana class="modalDimana"/>
                    </ion-col>
                </ion-row>
                <ion-row class="contentDukungan">
                    <ion-col>
                        <ModalBagaimana class="modalBagaimana"/>
                    </ion-col>
                </ion-row>
                </span>
                </center>
            <center>
                <ion-button v-on:click="myFunction2()" id="myBtn2" color="yellow" class="readmore2 mt-3">Read more</ion-button>
            </center>
            </ion-grid>
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

export default({
  name: 'ReadMoreThirdContentDukungan600px',
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
    ModalBagaimana
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
  methods:{
        myFunction2() {
          var dots2 = document.getElementById("dots2");
          var moreText = document.getElementById("more2");
          var btnText = document.getElementById("myBtn2");

          if (dots2.style.display === "none") {
              dots2.style.display = "inline";
              btnText.innerHTML = "Read more"; 
              moreText.style.display = "none";
          } else {
              dots2.style.display = "none";
              btnText.innerHTML = "Show less"; 
              moreText.style.display = "inline";
          }
      }
    }
});
</script>

<style scoped>
#more2{
    display: none;
}

@media screen and (max-width:600px){
    .button{
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        width: auto;
        border-radius: 20px !important;
        overflow: hidden;
    }
    .contentDukungan{
        width: 22em;
    }
    .cardDukungan{
        width: 92%;
    }
    .title{
        text-align: left;
        font-weight: 900;
        font-size:35px; 
        font-family: 'Nunito', sans-serif;
    }
    .content{
        text-align: left;
        font-size:12px; 
        font-family: 'Poppins', sans-serif;
        line-height: 2.0;
        margin-top: -0.5em;
    }
    .modalSiapa, .modalMengapa, .modalKapan, .modalDimana, .modalBagaimana{
        display: block;
    }
}
</style>