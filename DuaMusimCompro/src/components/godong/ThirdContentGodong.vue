<template>
<div class="jumbotron">
    <div class="bg">
        <ion-img class="imgFirst" src="assets/image/thirdGodong1.png"></ion-img>
        <ion-img class="imgFirst-B" src="assets/image/thirdGodong1b.png"></ion-img>
        <ion-img class="imgFirst-C" src="assets/image/thirdGodong1c.png"></ion-img>
        <!-- <ion-img class="imgFourth" src="assets/image/firstGodong4.png"></ion-img> -->
        <ion-grid>
            <ion-row>
                <ion-col class="centered">
                    <center>
                    <div class="container">
                        <div class="ThirdTextGodong">
                            <h1><b>Komoditas.</b></h1>
                            <p class="mt-4">Apa yang sedang kami panen di Godong?</p>
                        </div>
                    </div>
                    <ion-row class="imgGodong mt-5">
                        <ion-col>
                            <p><b>Selada Romaine</b></p>
                            <ion-img class="imgSecond" src="assets/image/thirdGodong2.png"></ion-img>
                        </ion-col>
                        <ion-col>
                            <p><b>Selada</b></p>
                            <ion-img class="imgThird" src="assets/image/thirdGodong3.png"></ion-img>
                        </ion-col>
                        <ion-col>
                            <p><b>Kubis Ungu</b></p>
                            <ion-img class="imgFourth" src="assets/image/thirdGodong4.png"></ion-img>
                        </ion-col>
                    </ion-row>
                    </center>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</div>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonImg, } from '@ionic/vue';

export default({
  name: 'FirstContentGodong',
  components: {
    IonGrid, 
    IonRow, 
    IonCol,
    IonImg,
  },
});
</script>

<style scoped>
.bg {
    position: relative;
    text-align: center;
    margin-top: -0.65em;
}
.centered {
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.ThirdTextGodong h1{
    color: #387352;
    font-family: 'Nunito', sans-serif;
    font-size: 40px;
}
.ThirdTextGodong p{
    color: #387352;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
}
.imgFirst{
    pointer-events: none;
}
.imgFirst-B, .imgFirst-C{
    display: none;
}
.imgSecond, .imgThird, .imgFourth{
    width: 20em;
    pointer-events: none;
}
.imgGodong{
    width:75em;
}
.imgGodong p{
    color: black;
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
}
@media screen and (max-width:1400px){
    .imgSecond, .imgThird, .imgFourth{
        width: 18em;
    }
    .imgGodong{
        width:65em;
    }
}
@media screen and (max-width:1200px){
    .imgSecond, .imgThird, .imgFourth{
        width: 15.5em;
    }
    .imgGodong{
        width:58em;
    }
}
@media screen and (max-width:992px){
    .imgSecond, .imgThird, .imgFourth{
        width: 90%;
    }
    .imgGodong p{
        font-size: 16px;
    }
    .imgFirst{
        display: none;
    }
    .imgFirst-B{
        display: block;
    }
    .imgGodong{
        width:100%;
    }
}
@media screen and (max-width:768px){
    .jumbotron{
        background-color: #387352;
    }
    .centered {
        position: relative;
        top: 28em;
    }
    .imgSecond, .imgThird, .imgFourth{
        width: 15em;
    }
    .imgFirst-B{
        display: none;
    }
    .imgGodong{
        width:50%;
    }
    .ThirdTextGodong h1{
        margin-top: 3em;
        color: #EDECE6;
    }
    .ThirdTextGodong p{
        color: #EDECE6;
    }
    .imgGodong p{
        font-size: 18px;
    }
}
@media screen and (max-width:600px){
    .imgSecond, .imgThird, .imgFourth{
        width: 15em;
    }
    .imgGodong{
        width:85%;
    }
}
</style>