<template>
    <div class="jumbotron">
        <br>
    </div>
    <section id="footer">
        <div class="container">
            <br>
            <ion-grid>
                <center>
                <ion-row>
                    <ion-col class="footersosmed">
                        <ul class="list-unstyled list-inline social text-center">
                            <li class="list-inline-item">
                                <a href="https://www.linkedin.com/company/duamusim">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://instagram.com/duamusim.id?utm_medium=copy_link">
                                    <i class="fa fa-instagram" ></i>
                                    </a>
                                </li>
                            <li class="list-inline-item">
                                <a href="https://vt.tiktok.com/ZSeNSj26C/">
                                    <i class="fab fa-tiktok"></i>
                                </a>
                            </li>
                        </ul>
                    </ion-col>
                </ion-row>
                <ion-row class="footersosmed2">
                    <ion-col>
                        <ion-row>
                            <ion-col style="text-align:; color:#387352;">
                                <p><i class="fas fa-phone-alt"></i>&ensp;<b>081242029242 / 02983438103 / 085232222466</b></p>
                            </ion-col>
                            <ion-col style="text-align:; color:#387352;">
                                <p><i class="fa fa-envelope"></i>&ensp;<b>halo@duamusim.com / sasongko@duamusim.id</b></p>
                            </ion-col>
                        </ion-row>
                    </ion-col>
                </ion-row>
                </center>
            </ion-grid>
        </div>
        <div class="footerbottom">
            <div class="container">
                <ion-grid>
                    <ion-row>
                        <ion-col>
                        <h2> © All rights reserved - Dua Musim 2021</h2>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </div>
      </section>
</template>

<script>
import { } from '@ionic/vue';

export default({
  name: 'Footer',
  components: {
  },
});
</script>

<style scoped>
.jumbotron{
    background-color: white;
    margin-top: -0.65em;
}
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
#footer {
    background: #EDECE6 !important;
    margin-top: -0.6em;
}
#footer ul.social li a i {
    margin-right: 10px;
	font-size:30px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	font-size:35px;
	margin-top:-10px;
}
#footer ul.social li a, #footer ul.quick-links li a{
	color:#387352;
}
#footer ul.social li a:hover{
	color:black;
}
.fa-envelope, .fa-phone-alt{ 
    color: #387352 
}
.footersosmed2{ 
    font-size: 19px;
    width:50%; 
}
.footerbottom{ 
    background-color: #387352; 
}
.footerbottom h2{ 
    font-size:17px; 
    color: #EDECE6; 
    text-align:center; 
    font-family: 'Nunito', sans-serif; 
}
@media screen and (max-width:1400px) {
    .footersosmed2{
        width: 60%;
    }
}
@media screen and (max-width:1200px){
    .footerbottom h2{ 
        font-size:13px; 
    }
    .footersosmed2{
        width: 70%;
    }
}
@media screen and (max-width:992px) {
    .footersosmed2{
        width: 93%;
    }
}
@media screen and (max-width:768px) {
    .footersosmed2{
        width: 69%;
    }
}
@media screen and (max-width:600px){
    .footersosmed2{ 
        font-size: 11pt; 
        width: 68%;
    }
    .footerbottom h2{ 
        font-size: 9pt; 
    }
}
</style>