<template>
    <ion-grid>
        <ion-row class="rowImg">
                <ion-col> 
                    <ion-img class="imgFirst" src="assets/image/secondGodong1.png"></ion-img>
                </ion-col>
                <ion-col> 
                    <ion-img class="imgSecond" src="assets/image/secondGodong2.png"></ion-img>
                </ion-col>
                
                <span id="dots"></span>
                <span id="more">
                
                <ion-col> 
                    <ion-img class="imgThird" src="assets/image/secondGodong3.png"></ion-img>
                </ion-col>
                <ion-col>
                    <ion-img class="imgFourth" src="assets/image/secondGodong4.png"></ion-img>
                </ion-col>
                </span>

                <center>
                    <ion-button v-on:click="myFunction()" id="myBtn" color="yellow" class="readmore">Read more</ion-button>
                </center>
        </ion-row>
    </ion-grid>
</template>

<script>
import { IonButton, IonGrid, IonRow, IonCol, IonImg, } from '@ionic/vue';

export default({
  name: 'ReadMoreSecondContentGodong',
  components: {
    IonButton,
    IonGrid, 
    IonRow, 
    IonCol,
    IonImg,
  },
  methods:{
        myFunction() {
          var dots = document.getElementById("dots");
          var moreText = document.getElementById("more");
          var btnText = document.getElementById("myBtn");

          if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.innerHTML = "Read more"; 
              moreText.style.display = "none";
          } else {
              dots.style.display = "none";
              btnText.innerHTML = "Show less"; 
              moreText.style.display = "inline";
          }
      }
    }
});
</script>

<style scoped>
#more{
    display: none;
}
@media screen and (max-width:600px){
    .button{
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        width: auto;
        border-radius: 20px !important;
        overflow: hidden;
    }
    .imgFirst, .imgSecond, .imgThird, .imgFourth{
        width: 15em;
    }
    .imgFirst{
        margin-top: -2em;
    }
    .rowImg{
        display: block; margin-left: auto; margin-right: auto;
    }
}
</style>