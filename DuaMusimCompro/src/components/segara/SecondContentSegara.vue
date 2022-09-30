<template >
    <div class="jumbotron">
        <div class="bg">
            <ion-img class="imgFirst" src="assets/image/secondSegara1.png"></ion-img>
            <ion-img class="imgSecond" src="assets/image/secondSegara2.png"></ion-img>
            <ion-grid>
                <form @submit.prevent="myFunction" name="Dua-Musim-Segara">
                    <ion-row>
                        <div class="container">
                            <ion-col class="centered">
                                <h1><b>Pertanian model vertikal.</b></h1>
                                <p class="mt-4">Pembesaran komoditas dapat dilakukan dimanapun dengan ukuran ruang yang relatif kecil. Hasil komoditas dengan harga jual yang sama dengan pembesaran di alam. Kami membuka peluang teknologi ini berada di lokasi Anda.</p>
                                <ion-grid>
                                    <ion-row class="email">
                                        <ion-col>
                                            <ion-input name="email" class="inputBukaLahan" v-model="email" type="email" placeholder="email@address.com" required></ion-input>
                                        </ion-col>
                                        <ion-row>
                                            <ion-col>
                                                <div class="form-group">
                                                    <ion-button type="submit" onclick="myFunction()" class="btnkirim ion-float-right" color="creamsegara"><b>Saya Tertarik</b></ion-button>
                                                    <button class="btn btn-loading d-none mt-1" type="button" style="color: #384973; background-color: yellow; font-family: 'Poppins', sans-serif;">
                                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" ></span>
                                                        Loading...
                                                    </button> 
                                                </div>    
                                            </ion-col>
                                        </ion-row>
                                    </ion-row>
                                </ion-grid>
                            </ion-col>
                        </div>
                    </ion-row>
                </form>
            </ion-grid>
        </div>
    </div>
</template>

<script>
import { IonButton, IonGrid, IonRow, IonCol, IonImg, } from '@ionic/vue';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

export default({
  name: 'SecondContentSegara',
  components: {
    IonButton,
    IonGrid, 
    IonRow, 
    IonCol,
    IonImg,
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
        "https://script.google.com/macros/s/AKfycbyQWqsNFbkonDTXHlOBQ7hqheXXrK7CUqA-tnNyNwBCfgxalbMy5MEiSSKHe-j4gSd0/exec";
      const form = document.forms["Dua-Musim-Segara"];

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
.bg {
    position: relative;
    margin-top: -0.65em;
}
.centered {
    position: absolute;
    top: 20%;
}
.centered h1{
    color: #EDECE6;
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
}
.centered p{
    font-family: 'Nunito', sans-serif;
    color: #EDECE6;
    font-size: 20px;
    width: 30%;
}
.email{
    width:24em;
    margin-left: -0.5em;
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
    border: 1px solid #384973;
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
.imgFirst{
    pointer-events: none;
}
.imgSecond, .imgThird, .imgFourth, .imgFifth, .imgSixth{
    display: none;
}
@media screen and (max-width:1400px){
    .centered{
        top: 18%;
    }
    .centered p{
        width: 35%;
    }
}
@media screen and (max-width:1200px){
    .centered{
        top: 13%;
    }
    .centered p{
        width: 40%;
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
    .jumbotron{
        background-color: #384973;
        height: 30em;
    }
    .email{
        margin-left: 10em;
    }
    .centered {
        position: relative;
        top: 3em;
    }
    .centered p{
        width: 65%;
        display: block; margin-left: auto; margin-right: auto;
    }
    .bg {
        text-align: center;
    }
    .imgSecond{
        display: none;
    }
}
@media screen and (max-width:768px){
    .centered{
        top: 2em;
    }
    .centered p{
        width: 85%;
    }
    .imgThird{
        display: none;
    }
    .imgFourth{
        display: block;
        pointer-events: none;
    }
    .email{
        margin-left: 4.5em;
    }
}
@media screen and (max-width:600px){
    .jumbotron{
        height: 34em;
    }
    .centered{
        top: 2em;
    }
    .centered p{
        width: 85%;
    }
    .email{
        margin-top: -1em;
        width:15em;
        display: block; margin-left: auto; margin-right: auto;
    }
    .btnkirim{
        width: 15em;
        margin-top: -1em;
    }
    .btn{
        width: 13.5em;
        margin-bottom: 2em;
        border-radius: 7px !important;
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
    .jumbotron{
        height: 35em;
    }
    .centered{
        top: 1em;
    }
}
</style>