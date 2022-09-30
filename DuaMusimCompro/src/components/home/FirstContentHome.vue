<template>
    <div class="jumbotron">
        <center>
        <div class="container">
            <div class="firstTextHome animate__animated animate__slideInDown" style="animation-duration: 2s;">
                <br>
                <h1><b>Pertanian dalam kota menjadi mungkin.</b></h1>
                <p class="mt-4"><b>Jadikan lokasi bisnis Anda menjadi lahan pertanian dalam ruang.</b></p>
                <ion-grid>
                    <form @submit.prevent="myFunction" name="Dua-Musim-Godong">
                        <ion-row class="email">
                            <ion-col>
                                <ion-input name="email" class="inputemail" v-model="email" type="email" placeholder="email@address.com" required></ion-input>
                            </ion-col>
                            <ion-row>
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
            <ion-grid>
                <ion-row class="mt-5">
                    <ion-col> 
                        <ion-img class="imgFirst" src="assets/image/firstHome1.png"></ion-img>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
        </center>
    </div>
</template>

<script>
import { IonButton, IonGrid, IonRow, IonCol, IonImg, IonInput, } from '@ionic/vue';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

export default({
  name: 'FirstContentHome',
  components: {
    IonButton,
    IonGrid, 
    IonRow, 
    IonCol,
    IonImg,
    IonInput,
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
    background-color: #EDECE6;
}
.firstTextHome h1{
    color: #387352;
    font-family: 'Nunito', sans-serif;
    font-size: 40px;
    width: 40%;
}
.firstTextHome p{
    font-family: 'Poppins', sans-serif;
    color: black;
    width: 28%;
    font-size: 15px;
}
.email{
    width:23em;
}
.inputemail{
    text-align: left;
    border: 1px solid #b3b3b3;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    background-color: white;
}
.inputemail:hover{
    border: 1px solid #387352;
}
.btnkirim{
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    border-radius: 7px !important;
    overflow: hidden;
}
.imgFirst{
    width: 23%;
    pointer-events: none;
}
@media screen and (max-width:1400px){
    .firstTextHome p{
        width: 30%;
    }
    .imgFirst{
        width: 27%;
    }
}
@media screen and (max-width:1200px){
    .firstTextHome h1{
        width: 50%;
    }
    .firstTextHome p{
        width: 35%;
    }
    .imgFirst{
        width: 32%;
    }
}
@media screen and (max-width:992px){
    .firstTextHome h1{
        width: 75%;
    }
    .firstTextHome p{
        width: 50%;
    }
    .imgFirst{
        width: 43%;
    }
}
@media screen and (max-width:768px){
    .firstTextHome h1{
        width: 90%;
    }
    .firstTextHome p{
        width: 70%;
    }
    .imgFirst{
        width: 58%;
        margin-top: -1vw;
    }
}
@media screen and (max-width:600px){
    .firstTextHome h1{
        font-size: 30px;
    }
    .firstTextHome p{
        width: 73%;
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
    .imgFirst{
        width: 60%;
        margin-top: -1vw;
    }
}
/* @media screen and (max-width:400px){
    .firstTextHome h1{
        width: 90%;
    }
} */
</style>