<template>
    <div class="bg">
        <ion-img class="imgFirst" src="assets/image/firstGodong1.png"></ion-img>
        <ion-img class="imgSecond" src="assets/image/firstGodong2.png"></ion-img>
        <ion-img class="imgThird" src="assets/image/firstGodong3.png"></ion-img>
        <ion-img class="imgFourth" src="assets/image/firstGodong4.png"></ion-img>
        <ion-grid>
            <ion-row>
                <ion-col class="centered">
                    <center>
                    <div class="container">
                        <div class="FirstTextGodong animate__animated animate__slideInDown" style="animation-duration: 2s;">
                            <h1><b>Godong</b></h1>
                            <p class="mt-5"><b>/go·dong/ n bagian bawah rumah panggung yang digunakan untuk menyimpan alat-alat dan hasil pertanian dan sebagainya.</b> Godong dalam bahasa Jawa jika diterjemahkan ke bahasa Indonesia artinya daun-daun.</p>
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
    margin-top: -0.65em;
}
.centered {
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.FirstTextGodong h1{
    color: #EDECE6;
    font-family: 'Nunito', sans-serif;
    font-size: 80px;
}
.FirstTextGodong p{
    color: #EDECE6;
    font-family: 'Nunito', sans-serif;
    font-size: 36px;
    width: 63%;
}
.imgFirst{
    pointer-events: none;
}
.imgSecond, .imgThird, .imgFourth{
    display: none;
}
@media screen and (max-width:1400px){
    .FirstTextGodong p{
        width: 73%;
    }
}
@media screen and (max-width:1200px){
    .FirstTextGodong h1{
        font-size: 70px;
    }
    .FirstTextGodong p{
        width: 85%;
        font-size: 30px;
    }
}
@media screen and (max-width:992px){
    .FirstTextGodong p{
        width: 90%;
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
    .imgSecond{
        display: none;
    }
    .imgThird{
        display: block;
        pointer-events: none;
    }
}
@media screen and (max-width:600px){
    .FirstTextGodong h1{
        font-size: 60px;
    }
    .FirstTextGodong p{
        font-size: 25px;
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
        top: 44%;
    }
    .FirstTextGodong h1{
        font-size: 45px;
    }
    .FirstTextGodong p{
        font-size: 20px;
    }
}
</style>