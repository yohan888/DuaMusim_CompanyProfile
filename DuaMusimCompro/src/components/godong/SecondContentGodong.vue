<template id="secondContentGodong">
    <div class="jumbotron">
        <center>
        <div class="container">
            <div class="secondTextGodong">
                <br>
                <h1><b>Menggunakan ruang minimal dengan hasil maksimal.</b></h1>
                <p class="">Godong diciptakan untuk dapat ditempatkan di lokasi yang terdekat dengan konsumen seperti di supermarket atau resto. Jika Anda memiliki bisnis yang tepat untuk menjangkau pasar, kami membuka peluang kerjasama dengan imbalan.</p>
                <ion-grid>
                    <form @submit.prevent="myFunction" name="Dua-Musim-Godong">
                        <ion-row class="email">
                            <ion-col class="email2">
                                <ion-input name="email" class="inputBukaLahan" v-model="email" type="email" placeholder="email@address.com" required></ion-input>
                            </ion-col>
                            <ion-row class="email3">
                                <ion-col>
                                    <div class="form-group">
                                        <ion-button type="submit" onclick="myFunction()" class="btnkirim ion-float-right" color="green"><b>Buka Lahan</b></ion-button>
                                        <button class="btn btn-loading d-none mt-1" type="button" style="color: #387352; background-color: yellow; font-family: 'Poppins', sans-serif;">
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" ></span>
                                            Loading...
                                        </button>
                                    </div>    
                                </ion-col>
                            </ion-row>
                        </ion-row>
                    </form>
                </ion-grid>
            </div>
        </div>
        <div class="container">
            <ion-grid>
                <ion-row class="rowImg mt-3">
                    <ion-col> 
                        <ion-img class="imgFirst" src="assets/image/secondGodong1.png"></ion-img>
                    </ion-col>
                    <ion-col> 
                        <ion-img class="imgSecond" src="assets/image/secondGodong2.png"></ion-img>
                    </ion-col>
                    <ion-col> 
                        <ion-img class="imgThird" src="assets/image/secondGodong3.png"></ion-img>
                    </ion-col>
                    <ion-col>
                        <ion-img class="imgFourth" src="assets/image/secondGodong4.png"></ion-img>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
        <ReadMoreSecondContentGodong class="readmore"/>
        <br><br><br>
        </center>
    </div>
</template>

<script>
import { IonButton, IonGrid, IonRow, IonCol, IonImg, } from '@ionic/vue';
import ReadMoreSecondContentGodong from '@/components/godong/ReadMoreSecondContentGodong.vue';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

export default({
  name: 'SecondContentGodong',
  components: {
    IonButton,
    IonGrid, 
    IonRow, 
    IonCol,
    IonImg,
    ReadMoreSecondContentGodong,
  },

  data(){
    return{
      email: '',
    }
  },

  setup() {
    return {
    };
  },

  mounted(){
    $('input').keyup(function () {
      if ($.trim(this.value).length > 0) $('#btSend').show() 
      else $('#btSend').hide()
    });
  },
  
  methods:{
      myFunction() {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzLTep84ji2rOIgFet3Ckva_sbzz2otP1_LbMn1wLFE8muIR6mx5Pc5LQr8T52Q6Ao/exec";
      const form = document.forms["Dua-Musim-Godong"];

      const btnkirim = document.querySelector(".btnkirim");
      const btnLoding = document.querySelector(".btn-loading");
      // const alert = document.querySelector(".alert");

      // console.log(form);
      btnLoding.classList.toggle("d-none");
      btnkirim.classList.toggle("d-none");

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          // tampilkan tombol kirim, hilangkan tombol kirim
          btnLoding.classList.toggle("d-none");
          btnkirim.classList.toggle("d-none");
          //tampilkan alert
          // alert.classList.toggle("d-none");
          // alert("Berhasil");
          // Swal.fire({
          //   icon: 'success',
          //   title: 'Berhasil Terkirim',
          //   text: 'Terimakasih Telah Memberikan Pesan Kepada Kami',
          //   // background-color : 
          // })

          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
            },
            buttonsStyling: false
          })

          swalWithBootstrapButtons.fire({
            title: 'Berhasil Terkirim',
            text: "Terimakasih Telah Memberikan Pesan Kepada Kami",
            icon: 'success'
          })
          // reset formnya
          form.reset();

          console.log("Success!", response);
          // alert('Berhasil kirim!');
        })
        .catch((error) => console.error("Error mas!", error.message));
      // form.addEventListener('submit', e => {
      //   // e.preventDefault();
      //   //ketika tombol submit di kirim
      //   // Tampilkan tombol loading, hilangkan tombol kirim
      //   // btnLoding.classList.toggle('d-none');
      //   // btnKirim.classList.toggle('d-none');

      //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      //     .then(response => {
      //       // btnLoding.classList.toggle('d-none');
      //       // btnKirim.classList.toggle('d-none');
      //       console.log('Success!', response)
      //       })
      //     .catch(error => console.error('Error mas!', error.message));
      // });
    
    },
  }
});
</script>

<style scoped>
.jumbotron{
    background-color: white;
    margin-top: -0.65em;
}
.secondTextGodong h1{
    color: #387352;
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
    width: 45%;
}
.secondTextGodong p{
    font-family: 'Poppins', sans-serif;
    color: black;
    width: 40%;
    font-size: 15px;
}
.email{
    width:23em;
}
.inputBukaLahan{
    text-align: left;
    border: 1px solid #b3b3b3;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    background-color: white;
}
.inputBukaLahan:hover{
    border: 1px solid #387352;
}
.native-input.sc-ion-input-md{ 
    max-width: 3vw; 
    }
.btnkirim{
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    border-radius: 7px !important;
    overflow: hidden;
}
.imgFirst, .imgSecond, .imgThird, .imgFourth{
    width: 19em;
    pointer-events: none;
}
.readmore{
    display: none;
}
@media screen and (max-width:1400px){
    .secondTextGodong h1{
        width: 53%;
    }
    .secondTextGodong p{
        width: 48%;
    }
    .imgFirst, .imgSecond, .imgThird, .imgFourth{
        width: 16em;
    }
}
@media screen and (max-width:1200px){
    .secondTextGodong h1{
        width: 63%;
    }
    .secondTextGodong p{
        width: 58%;
    }
    .imgFirst, .imgSecond, .imgThird, .imgFourth{
        width: 13.5em;
    }
}
@media screen and (max-width:992px){
    .secondTextGodong h1{
        width: 85%;
    }
    .secondTextGodong p{
        width: 78%;
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
    .rowImg{
        display: block; margin-left: auto; margin-right: auto;
    }
    .imgFirst, .imgSecond, .imgThird, .imgFourth{
        display: none;
    }
    .readmore{
        display: block;
    }
    .email{
        width:15em;
    }
    .btnkirim{
        width: 15em;
    }
    .btn{
        width: 14.3em;
    }
}
@media screen and (max-width:400px){
    .jumbotron{
        margin-top: -1em;
    }
}
</style>