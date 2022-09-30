<template>
    <div class="jumbotron" style="background-color:white">
        <br>
    </div>
    <div class="bg">
        <ion-img class="imgFirst" src="assets/image/fourthHome1.png"></ion-img>
        <ion-img class="imgSecond" src="assets/image/fourthHome2.png"></ion-img>
        <ion-img class="imgThird" src="assets/image/fourthHome3.png"></ion-img>
        <ion-img class="imgFourth" src="assets/image/fourthHome4.png"></ion-img>
        <ion-img class="imgFifth" src="assets/image/fourthHome5.png"></ion-img>
        <ion-img class="imgSixth" src="assets/image/fourthHome6.png"></ion-img>
        <ion-grid>
            <ion-row>
                <div class="container">
                    <ion-col class="centered">
                        <h1><b>Dukung Petani Milenial.</b></h1>
                        <p class="mt-4">Kami mendukung penuh usaha dari pemerintah Indonesia untuk mempopulerkan petani muda di usia milenial. Datang dengan perspektif baru, kami tahu pendekatan yang lebih sesuai dengan semangat milenial.</p>
                        <ion-button class="button mt-3" color="green" router-link="/login"><b>Bertani Bersama Kami</b></ion-button>
                    </ion-col>
                </div>
            </ion-row>
        </ion-grid>
    </div>
</template>

<script>
import { IonButton, IonGrid, IonRow, IonCol, IonImg, } from '@ionic/vue';

export default({
  name: 'FourthContentHome',
  components: {
    IonButton,
    IonGrid, 
    IonRow, 
    IonCol,
    IonImg,
  },
});
</script>

<style scoped>
.jumbotron{
    background-color: #EDECE6;
    margin-top: -0.6em;
}
.bg {
    position: relative;
    margin-top: -0.65em;
}
.centered {
    position: absolute;
    top: 15%;
}
.centered h1{
    color: #387352;
    font-family: 'Nunito', sans-serif;
    font-size: 40px;
}
.centered p{
    font-family: 'Poppins', sans-serif;
    color: black;
    font-size: 15px;
    width: 35%;
}
.button{
    font-family: 'Poppins', sans-serif;
    width: 18%;
    font-size: 15px;
    border-radius: 7px !important;
    overflow: hidden;
}
.imgFirst{
    pointer-events: none;
}
.imgSecond, .imgThird, .imgFourth, .imgFifth, .imgSixth{
    display: none;
}
@media screen and (max-width:1400px){
    .centered {
        top: 10%;
    }
    .centered p{
        width: 35%;
    }
    .button{
        width: 20%;
    }
}
@media screen and (max-width:1200px){
    .centered{
        top: 5%;
    }
    .centered p{
        width: 43%;
    }
    .button{
        width: 25%;
    }
    .imgFirst{
        display: none;
    }
    .imgSecond{
        display: block;
        pointer-events: none;
    }
}
@media screen and (max-width:992px){
    .centered p{
        width: 65%;
        display: block; margin-left: auto; margin-right: auto;
    }
    .bg {
        text-align: center;
    }
    .centered{
        position: absolute;
        top: 47%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .imgSecond{
        display: none;
    }
    .imgThird{
        display: block;
        pointer-events: none;
    }
    .button{
        width: 30%;
    }
}
@media screen and (max-width:768px){
    .centered p{
        width: 65%;
    }
    .button{
        width: 40%;
    }
    .imgThird{
        display: none;
    }
    .imgFourth{
        display: block;
        pointer-events: none;
    }
}
@media screen and (max-width:600px){
    .centered h1{
        font-size: 30px;
    }
    .centered p{
        width: 85%;
    }
    .button{
        width: auto;
    }
    .imgFourth{
        display: none;
    }
    .imgFifth{
        display: block;
        pointer-events: none;
    }
}
@media screen and (max-width:500px){
    .imgFifth{
        display: none;
    }
    .imgSixth{
        display: block;
        pointer-events: none;
    }
}
</style>