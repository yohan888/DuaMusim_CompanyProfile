<template>
    <ion-grid>
        <ion-row class="rowImg2">
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

            <span id="dots2"></span>
            <span id="more2">

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
            </span>

            <center>
                <ion-button v-on:click="myFunction2()" id="myBtn2" color="yellow" class="readmore2">Read more</ion-button>
            </center>
        </ion-row>
    </ion-grid>
</template>

<script>
import { IonButton, IonGrid, IonRow, IonCol, IonImg, } from '@ionic/vue';

export default({
  name: 'ReadMoreFifthContentGodong',
  components: {
    IonButton,
    IonGrid, 
    IonRow, 
    IonCol,
    IonImg,
  },
  methods:{
        myFunction2() {
          var dots2 = document.getElementById("dots2");
          var moreText = document.getElementById("more2");
          var btnText = document.getElementById("myBtn2");

          if (dots2.style.display === "none") {
              dots2.style.display = "inline";
              btnText.innerHTML = "Read more"; 
              moreText.style.display = "none";
          } else {
              dots2.style.display = "none";
              btnText.innerHTML = "Show less"; 
              moreText.style.display = "inline";
          }
      }
    }
});
</script>

<style scoped>
#more2{
    display: none;
}
@media screen and (max-width:600px){
    .button{
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        width: auto;
        border-radius: 20px !important;
        overflow: hidden;
        margin-top: -1em;
    }
    .imgFirst, .imgSecond, .imgThird, .imgFourth{
        width: 15em;
        display: block; margin-left: auto; margin-right: auto;
    }
    .box{
        width: 70%;
        display: block; margin-left: auto; margin-right: auto;
    }
    .rowImg2{
        margin-top: -3em;
        display: block; margin-left: auto; margin-right: auto;
    }
    .fifthTextGodong-p1{
        color: #387352;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        text-align: center;
    }
    .fifthTextGodong-p2{
        color: black;
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        margin-top: -0.5vw;
        text-align: center;
    }
}
</style>