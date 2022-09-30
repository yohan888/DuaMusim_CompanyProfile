<template>
    <div class="jumbotron" style="background-color:white">
        <br>
    </div>
    <div class="bg">
        <ion-img class="imgFirst" src="assets/image/thirdHome1.png"></ion-img>
        <ion-img class="imgSecond" src="assets/image/thirdHome2.png"></ion-img>
        <ion-img class="imgThird" src="assets/image/thirdHome3.png"></ion-img>
        <ion-img class="imgFourth" src="assets/image/thirdHome4.png"></ion-img>
        <ion-grid>
            <ion-row>
                <ion-col class="centered">
                    <center>
                    <div class="container">
                        <div class="thirdTextHome">
                            <h1><b>Segara</b></h1>
                            <p class="mt-4">Dengan Segara Anda dapat membudidayakan sumber daya laut di tengah kota yang jauh dari pesisir laut.</p>
                            <ion-button class="button mt-3" color="creamsegara" href="/segara"><b>Lihat Produk</b></ion-button>
                        </div>
                    </div>
                    </center>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>

<script>
import { IonButton, IonGrid, IonRow, IonCol, IonImg, } from '@ionic/vue';

export default({
  name: 'ThirdContentHome',
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
    margin-top: -0.65em;
}
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
.thirdTextHome h1{
    color: #EDECE6;
    font-family: 'Nunito', sans-serif;
    font-size: 50px;
}
.thirdTextHome p{
    color: #EDECE6;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    width: 40%;
}
.button{
    font-family: 'Poppins', sans-serif;
    width: 15%;
    font-size: 15px;
    border-radius: 7px !important;
    overflow: hidden;
}
.imgFirst{
    pointer-events: none;
}
.imgSecond, .imgThird, .imgFourth{
    display: none;
}
@media screen and (max-width:1400px){
    .button{
        width: 17%;
    }
    .thirdTextHome p{
        width: 50%;
    }
}
@media screen and (max-width:1200px){
    .thirdTextHome p{
        width: 60%;
    }
    .button{
        width: 20%;
    }
    .centered {
        top: 46%;
    }
}
@media screen and (max-width:992px){
    .thirdTextHome p{
        width: 80%;
    }
    .button{
        width: 27%;
    }
    .imgFirst{
        display: none;
    }
    .imgSecond{
        display: block;
        pointer-events: none;
    }
}
@media screen and (max-width:768px){
    .thirdTextHome p{
        width: 95%;
    }
    .button{
        width: 37%;
    }
    .imgSecond{
        display: none;
    }
    .imgThird{
        display: block;
        pointer-events: none;
    }
    .centered{
        top: 46%;
    }
}
@media screen and (max-width:600px){
    .thirdTextHome h1{
        font-size: 40px;
    }
    .thirdTextHome p{
        width: 85%;
    }
    .imgThird{
        display: none;
    }
    .imgFourth{
        display: block;
        pointer-events: none;
    }
}
</style>