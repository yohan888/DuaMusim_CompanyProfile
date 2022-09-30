<template>
        <div class="bg">
            <ion-img class="imgFirst" src="assets/image/thirdDukungan1.png"></ion-img>
            <ion-img class="imgSecond" src="assets/image/thirdDukungan2.png"></ion-img>
            <ion-img class="imgThird" src="assets/image/thirdDukungan3.png"></ion-img>
            <ion-img class="imgFourth" src="assets/image/thirdDukungan4.png"></ion-img>
            <ion-img class="imgFifth" src="assets/image/thirdDukungan5.png"></ion-img>
            <ion-grid>
                <ion-row>
                    <ion-col class="centered">
                        <center>
                        <div class="container">
                            <div class="firstTextDukungan">
                                <h1><b>Layanan Dukungan Dua Musim</b></h1>
                                <p>Kami menerima Saran dan Masukkan dari Anda</p>
                                <h2><b>Selamat Berlangganan</b></h2>
                            </div>
                        </div>
                        </center>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
</template>

<script>
import { IonImg, } from '@ionic/vue';

export default({
  name: 'FirstContentDukungan',
  components: {
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
.firstTextDukungan h1{
    color: #EDECE6;
    font-family: 'Nunito', sans-serif;
    font-size: 46px;
}
.firstTextDukungan p{
    font-size: 18px;
    color: #EDECE6;
    font-family: 'Poppins', sans-serif;
}
.firstTextDukungan h2{
    font-size: 23px;
    color: #EDECE6;
    font-family: 'Poppins', sans-serif;
}
.imgFirst{
    pointer-events: none;
}
.imgSecond, .imgThird, .imgFourth, .imgFifth{
    display: none;
}
@media screen and (max-width:1400px){

}
@media screen and (max-width:1200px){
    .centered {
        top: 46%;
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
    .imgSecond{
        display: none;
    }
    .imgThird{
        display: block;
        pointer-events: none;
    }
}
@media screen and (max-width:768px){
    .imgThird{
        display: none;
    }
    .imgFourth{
        display: block;
        pointer-events: none;
    }
    .centered{
        top: 46%;
    }
}
@media screen and (max-width:600px){
    .firstTextDukungan h1{
        font-size: 36px;
    }
    .firstTextDukungan p{
        font-size: 15px;
    }
    .firstTextDukungan h2{
        font-size: 19px;
        color: #EDECE6;
        font-family: 'Poppins', sans-serif;
    }
    .imgFourth{
        display: none;
    }
    .imgFifth{
        display: block;
        pointer-events: none;
    }
}
@media screen and (max-width:400px){
    .firstTextDukungan h1{
        width: 100%;
    }
}
</style>