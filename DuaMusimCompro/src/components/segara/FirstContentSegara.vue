<template>
    <div class="bg">
        <ion-img class="imgFirst" src="assets/image/firstSegara1.png"></ion-img>
        <ion-img class="imgSecond" src="assets/image/firstSegara2.png"></ion-img>
        <ion-img class="imgThird" src="assets/image/firstSegara3.png"></ion-img>
        <ion-img class="imgFourth" src="assets/image/firstSegara4.png"></ion-img>
        <ion-img class="imgFifth" src="assets/image/firstSegara5.png"></ion-img>        
        <ion-grid>
            <ion-row>
                <ion-col class="centered">
                    <center>
                    <div class="container">
                        <div class="FirstTextSegara animate__animated animate__slideInDown" style="animation-duration: 2s;">
                            <h1><b>Segara</b></h1>
                            <p class="FirstTextSegara-p1 mt-4">/se·ga·ra/ kl n laut(an). Budidaya komoditas laut di ruang tertutup.</p>
                            <p class="FirstTextSegara-p2 mt-4"><b>Segara diciptakan untuk mengimbangi habitat laut yang mulai sulit dikelola karena perilaku komoditas yang tidak dapat dikendalikan jika dilepas secara bebas. Misalnya kanibalisme antar kepiting dengan kepiting lain atau ikan dengan ikan lain. Selain itu area budi daya yang semakin terbatas karena ide soal reklamasi yang kurang lebih kasusnya seperti lahan sawah yang mulai beralih fungsi.</b></p>
                        </div>
                    </div>
                    </center>
                </ion-col>
            </ion-row>
        </ion-grid>
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
}
.centered {
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.FirstTextSegara h1{
    color: #EDECE6;
    font-family: 'Nunito', sans-serif;
    font-size: 80px;
}
.FirstTextSegara-p1{
    color: #EDECE6;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
}
.FirstTextSegara-p2{
    color: #EDECE6;
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    width: 43%;
}
.imgFirst{
    pointer-events: none;
}
.imgSecond, .imgThird, .imgFourth, .imgFifth{
    display: none;
}
@media screen and (max-width:1400px){
    .FirstTextSegara p{
        width: 50%;
    }
}
@media screen and (max-width:1200px){
    .FirstTextSegara p{
        width: 60%;
    }
}
@media screen and (max-width:992px){
    .FirstTextSegara p{
        width: 80%;
    }
    .imgFirst{
        display: none;
    }
    .imgSecond{
        margin-top:-0.05em;
        display: block;
        pointer-events: none;
    }
}
@media screen and (max-width:768px){
    .FirstTextSegara p{
        width: 100%;
    }
    .imgSecond{
        display: none;
    }
    .imgThird{
        display: block;
        pointer-events: none;
    }
}
@media screen and (max-width:600px){
    .FirstTextSegara h1{
        font-size: 60px;
    }
    .FirstTextSegara p{
        width: 90%;
    }
    .imgThird{
        display: none;
    }
    .imgFourth{
        display: block;
        pointer-events: none;
    }
}
@media screen and (max-width:400px){
    .centered {
        top: 46%;
    }
    .FirstTextSegara h1{
        font-size: 45px;
    }
    .imgFourth{
        display: none;
    }
    .imgFifth{
        display: block;
        pointer-events: none;
    }
}
</style>