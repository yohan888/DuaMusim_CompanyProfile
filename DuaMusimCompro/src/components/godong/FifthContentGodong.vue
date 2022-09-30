<template>
    <div class="jumbotron">
        <div class="container">
            <div class="fifthTextGodong">
                <br><br>
                <h1><b>Bagaimana Godong bekerja?</b></h1>
            </div>
        </div>
        <div class="container">
            <ion-grid>
                <ion-row class="rowImg mt-5">
                    <ion-col>
                        <div class="box">
                            <ion-img class="imgFirst" src="assets/image/fifthGodong1.png"></ion-img>
                            <p class="fifthTextGodong-p1 mt-3"><b>Pilih bibit.</b></p>
                            <p class="fifthTextGodong-p2">Pilih bibit yang Anda ingin tanam seperti bibit selada, kubis atau lainnya.</p>
                        </div>
                    </ion-col>
                    <ion-col>
                        <div class="box">
                            <ion-img class="imgSecond" src="assets/image/fifthGodong2.png"></ion-img>
                            <p class="fifthTextGodong-p1 mt-3"><b>Tanam.</b></p>
                            <p class="fifthTextGodong-p2">Masukkan bibit ke dalam net pot.</p>
                        </div>
                    </ion-col>
                    <ion-col>
                        <div class="box">
                            <ion-img class="imgThird" src="assets/image/fifthGodong3.png"></ion-img>
                            <p class="fifthTextGodong-p1 mt-3"><b>Pantau.</b></p>
                            <p class="fifthTextGodong-p2">Pantau dan kendalikan pertumbuhan sayuran secara digital.</p>
                        </div>
                    </ion-col>
                    <ion-col>
                        <div class="box">
                            <ion-img class="imgFourth" src="assets/image/fifthGodong4.png"></ion-img>
                            <p class="fifthTextGodong-p1 mt-3"><b>Panen.</b></p>
                            <p class="fifthTextGodong-p2">Dapatkan pengingat jika sayuran sudah waktunya untuk dipanen.</p>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
        <ReadMoreFifthContentGodong class="readmore2"/>
        <br><br>
    </div>

    <!-- <div class="jumbotron2">
        <center>
            <div class="box2">
                <p><a class="pdf" href="assets/Pitch Deck - Pre Seed Funding.pdf"><br>Download Spesifikasi Teknis Godong.</a></p>
            </div>
        </center>
    </div> -->

</template>

<script>
import { IonGrid, IonRow, IonCol, IonImg, } from '@ionic/vue';
import ReadMoreFifthContentGodong from '@/components/godong/ReadMoreFifthContentGodong.vue';

export default({
  name: 'FifthContentGodong',
  components: {
    IonGrid, 
    IonRow, 
    IonCol,
    IonImg,
    ReadMoreFifthContentGodong,
  },
});
</script>

<style scoped>
.jumbotron{
    background-color: white;
}
.fifthTextGodong h1{
    color: #387352;
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
}
.box{
    width: 18em;
}
.fifthTextGodong-p1{
    color: #387352;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
}
.fifthTextGodong-p2{
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    margin-top: -0.5vw;
}
.imgFirst, .imgSecond, .imgThird, .imgFourth{
    width: auto;
    pointer-events: none;
}
.jumbotron2{
    background-color: #EECD07; 
    height:6em
}
.box2{
    width: 100%;
}
.pdf{
    text-decoration: none;
    font-size: 20px;
    color: #387352;
    font-family: 'Poppins', sans-serif;
}
.box2:hover .pdf { 
    text-decoration: underline; 
}
.readmore2{
    display: none;
}
@media screen and (max-width:1400px){
    .fifthTextGodong h1{
        width: 53%;
    }
    .box{
        width: auto;
    }
    .imgFirst, .imgSecond, .imgThird, .imgFourth{
        width: 16em;
    }
}
@media screen and (max-width:1200px){
    .fifthTextGodong h1{
        width: 63%;
    }
    .imgFirst, .imgSecond, .imgThird, .imgFourth{
        width: 13.5em;
    }
}
@media screen and (max-width:992px){
    .fifthTextGodong h1{
        width: 85%;
    }
    .imgFirst, .imgSecond, .imgThird, .imgFourth{
        width: 20em;
    }
    .imgThird, .imgFourth{
        margin-top: 1.5vw;
    }
}
@media screen and (max-width:768px){
    .imgFirst, .imgSecond, .imgThird, .imgFourth{
        width: 15em;
    }
    .imgThird, .imgFourth{
        margin-top: 0.5vw;
    }
}
@media screen and (max-width:600px){
    .fifthTextGodong h1{
        text-align: center;
        font-size: 30px;
        width: auto;
    }
    .imgFirst, .imgSecond, .imgThird, .imgFourth, .fifthTextGodong-p1, .fifthTextGodong-p2{
        display: none;
    }
    .readmore2{
        display: block;
    }
    .jumbotron2{
        height:5em;
    }
    .pdf{
        font-size: 17px;
    }
}
/* @media screen and (max-width:400px){
    .firstTextHome h1{
        width: 90%;
    }
} */
</style>