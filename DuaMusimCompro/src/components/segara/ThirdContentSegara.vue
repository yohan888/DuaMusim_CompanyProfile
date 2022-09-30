<template>
    <div class="jumbotron">
    <center>
        <div class="container">
            <div class="thirdTextSegara">
                <br><br>
                <h1><b>Komoditas</b></h1>
                <p class="mt-4">Apa yang sedang kami panen di Segara?</p>
            </div>
        </div>
        <ion-grid>
            <ion-row class="imgSegara mt-4">
                <ion-col>
                    <p><b>Kepiting</b></p>
                    <ion-img class="imgFirst" src="assets/image/thirdSegara1.png"></ion-img>
                </ion-col>
                <ion-col>
                    <p><b>Lobster</b></p>
                    <ion-img class="imgSecond" src="assets/image/thirdSegara2.png"></ion-img>
                </ion-col>
            </ion-row>
        </ion-grid>
        <br><br><br>
    </center>
    </div>

</template>

<script>
import { IonGrid, IonRow, IonCol, IonImg, } from '@ionic/vue';

export default({
  name: 'ThirdContentSegara',
  components: {
    IonGrid, 
    IonRow, 
    IonCol,
    IonImg,
  },
});
</script>

<style scoped>
.jumbotron{
    background-color: #415b7f;
    margin-top: -0.65em;
}
.thirdTextSegara h1{
    color: #EDECE6;
    font-family: 'Nunito', sans-serif;
    font-size: 40px;
}
.thirdTextSegara p{
    color: #EDECE6;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
}
.imgSegara p{
    color: black;
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.imgFirst, .imgSecond{
    width: 20em;
    pointer-events: none;
}
.imgSegara{
    width:52em;
}
@media screen and (max-width:1400px){
    
}
@media screen and (max-width:1200px){
    .imgFirst, .imgSecond{
        width: 17em;
        pointer-events: none;
    }
    .imgSegara{
        width:45em;
    }
}
@media screen and (max-width:992px){
    
}
@media screen and (max-width:768px){
    .imgFirst, .imgSecond{
        width: 85%;
        pointer-events: none;
    }
    .imgSegara{
        width:95%;
    }
}
@media screen and (max-width:600px){
    .imgFirst, .imgSecond{
        width: 15em;
        pointer-events: none;
    }
    .imgSegara{
        width:85%;
    }
}
</style>