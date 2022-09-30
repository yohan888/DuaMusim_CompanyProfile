<template>
    <div class="jumbotron">
        <center>
            <br>
            <h1 class="mt-5">Pilih Produk</h1>
            <ion-grid>
                <ion-row class="imgDukungan">
                    <ion-col>
                        <ion-img class="imgSixth" src="assets/image/secondDukungan1.png"></ion-img>
                    </ion-col>
                    <ion-col>
                        <ion-img class="imgSeventh" src="assets/image/secondDukungan2.png"></ion-img>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <br><br>
            <hr class="hrDukungan mt-4">
        </center>
    </div>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonImg, } from '@ionic/vue';

export default({
  name: 'FirstContentDukungan',
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
    background-color: #EDECE6;
}
.jumbotron h1{
    color: black;
    font-family: 'Nunito', sans-serif;
    font-size: 39px;
}
.imgDukungan{
    width: 35em;
}
.imgSixth, .imgSeventh{
    width: 70%;
    pointer-events: none;
}
.hrDukungan{
    border-top: 1px solid black;
}
@media screen and (max-width:1400px){
}
@media screen and (max-width:1200px){
}
@media screen and (max-width:992px){
}
@media screen and (max-width:768px){
}
@media screen and (max-width:600px){
    .jumbotron h1{
        color: black;
        font-family: 'Nunito', sans-serif;
        font-size: 29px;
    }
    .imgDukungan{
        width: 20em;
    }
    .imgSixth, .imgSeventh{
        width: 12em;
    }
}
@media screen and (max-width:400px){
    .imgDukungan{
        width: 20em;
    }
    .imgSixth, .imgSeventh{
        width: 10em;
    }
}
</style>