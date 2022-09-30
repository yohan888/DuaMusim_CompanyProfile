<template>
    <div class="jumbotron">
        <div class="container">
            <div class="fourthTextSegara">
                <br><br>
                <h1><b>Keunggulan Segara.</b></h1>
                <p class="mt-5"><b>Menghindari kanibal sesama kepiting.</b> Tidak tergantung kondisi alam. <b>Hemat tempat dan bersih.</b> Dapat mengendalikan siklus pertumbuhan dan ketersediaan stok. <b>Kualitas air bisa dijaga.</b> Mencegah penyakit. <b>Bebas polusi.</b></p>
            </div>
        </div>
        <br><br><br>
    </div>

    <!-- <div class="jumbotron2">
        <center>
            <div class="box2">
                <p><a class="pdf" href="assets/Pitch Deck - Pre Seed Funding.pdf"><br>Download Spesifikasi Teknis Segara.</a></p>
            </div>
        </center>
    </div>
    <div class="jumbotron" style="background-color:#384973; margin-top:-0.6em;">
        <br>
    </div> -->
</template>

<script>
import { } from '@ionic/vue';

export default({
  name: 'FourthContentSegara',
  components: {
  },
});
</script>

<style scoped>
.jumbotron{
    background-color: #384973;
}
.fourthTextSegara h1{
    color: #EDECE6;
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
}
.fourthTextSegara p{
    font-family: 'Nunito', sans-serif;
    color: #EDECE6;
    font-size: 40px;
}
.button{
    font-family: 'Poppins', sans-serif;
    width: 15%;
    font-size: 15px;
    border-radius: 7px !important;
    overflow: hidden;
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
@media screen and (max-width:1400px){
    .button{
        width: 17%;
    }
    .box{
        width: auto;
    }
}
@media screen and (max-width:1200px){
    .button{
        width: 20%;
    }
}
@media screen and (max-width:992px){
    .fourthTextSegara h1{
        font-size: 28px;
    }
    .fourthTextSegara p{
        font-size: 38px;
    }
    .button{
        width: 27%;
    }
}
@media screen and (max-width:768px){
    .fourthTextSegara h1{
        font-size: 25px;
    }
    .fourthTextSegara p{
        font-size: 33px;
    }
    .button{
        width: 37%;
    }
}
@media screen and (max-width:600px){
    .fourthTextSegara h1{
        font-size: 23px;
    }
    .fourthTextSegara p{
        font-size: 28px;
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