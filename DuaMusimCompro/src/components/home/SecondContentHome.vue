<template>
    <div class="jumbotron" style="background-color:white">
        <br>
    </div>
    <div class="jumbotron">
        <center>
        <div class="container">
            <div class="secondTextHome">
                <br>
                <h1><b>Godong</b></h1>
                <p class="mt-4"><b>Tumbuhkan dan panen produk berkualitas tinggi secara langsung di lokasi Anda dengan satu sentuhan tombol.</b> Godong adalah lahan portabel masa depan untuk sayuran yang kami tempatkan di banyak pasar lokal di kota Anda. Dua Musim mengatur pertumbuhan sayuran menggunakan teknologi ini. Tidak ada hama dan hemat air.</p>
                <ion-button class="button mt-4" color="green" href="/godong"><b>Lihat Produk</b></ion-button>
            </div>
            <ion-grid>
                <ion-row class="mt-4">
                    <ion-col>
                        <ion-img class="imgFirst" src="assets/image/secondHome1.png"></ion-img>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
        </center>
    </div>
</template>

<script>
import { IonButton, IonGrid, IonRow, IonCol, IonImg, } from '@ionic/vue';

export default({
  name: 'SecondContentHome',
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
.secondTextHome h1{
    color: #387352;
    font-family: 'Nunito', sans-serif;
    font-size: 50px;
}
.secondTextHome p{
    color: #387352;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    width: 43%;
}
.button{
    font-family: 'Poppins', sans-serif;
    width: 15%;
    font-size: 15px;
    border-radius: 7px !important;
    overflow: hidden;
}
.imgFirst{
    width: 38%;
    pointer-events: none;
}
@media screen and (max-width:1400px){
    .secondTextHome p{
        width: 50%;
    }
    .button{
        width: 17%;
    }
    .imgFirst{
    width: 43%;
}
}
@media screen and (max-width:1200px){
    .secondTextHome p{
        width: 60%;
    }
    .button{
        width: 20%;
    }
    .imgFirst{
        width: 52%;
    }
}
@media screen and (max-width:992px){
    .secondTextHome p{
        width: 80%;
    }
    .button{
        width: 27%;
    }
    .imgFirst{
        width: 71%;
    }
}
@media screen and (max-width:768px){
    .secondTextHome p{
        width: 95%;
    }
    .button{
        width: 37%;
    }
    .imgFirst{
        width: 90%;
    }
}
@media screen and (max-width:600px){
    .secondTextHome h1{
        font-size: 40px;
    }
    .secondTextHome p{
        width: 85%;
    }
    .imgFirst{
        width: 100%;
    }
}
</style>