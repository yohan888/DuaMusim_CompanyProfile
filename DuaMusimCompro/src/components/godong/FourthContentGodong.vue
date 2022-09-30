<template>
    <div class="jumbotron" style="background-color:white">
        <br>
    </div>
    <div class="jumbotron">
        <div class="container">
            <div class="fourthTextGodong">
                <br>
                <h1><b>Keunggulan Godong.</b></h1>
                <p class="mt-5"><b>320 hasil panen per bulan.</b> Lahan yang setara 22,5 meter persegi. <b>95% Menghemat penggunaan air.</b> 80% operasional dilakukan secara digital. <b>Analisa data yang berbasis komputasi awan.</b> Masa panen yang lebih cepat hingga 5 hari. <b>Memangkas waktu dan biaya distribusi.</b> Penggunaan listrik hingga 70 kWh per bulan.</p>
            </div>
        </div>
        <br><br>
    </div>
</template>

<script>
import { } from '@ionic/vue';

export default({
  name: 'FourthContentGodong',
  components: {
  },
});
</script>

<style scoped>
.jumbotron{
    background-color: #EDECE6;
    margin-top: -0.6em;
}
.fourthTextGodong h1{
    color: #387352;
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
}
.fourthTextGodong p{
    font-family: 'Nunito', sans-serif;
    color: #387352;
    font-size: 40px;
}
@media screen and (max-width:1400px){
    
}
@media screen and (max-width:1200px){

}
@media screen and (max-width:992px){
    .fourthTextGodong h1{
        font-size: 28px;
    }
    .fourthTextGodong p{
        font-size: 38px;
    }
}
@media screen and (max-width:768px){
    .fourthTextGodong h1{
        font-size: 25px;
    }
    .fourthTextGodong p{
        font-size: 33px;
    }
}
@media screen and (max-width:600px){
    .fourthTextGodong h1{
        font-size: 23px;
    }
    .fourthTextGodong p{
        font-size: 28px;
    }
}
/* @media screen and (max-width:400px){
    .firstTextHome h1{
        width: 90%;
    }
} */
</style>