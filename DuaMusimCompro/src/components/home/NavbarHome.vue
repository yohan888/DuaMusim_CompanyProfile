<template>
    <ion-nav-link class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <router-link class="navbar-brand" to="">&ensp;<img class="logoputih" src="../../../public/assets/icon/logoputih.png"/>&emsp;</router-link>
            <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="border: none;">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse textnavbar" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 navnav1">
                  <li class="nav-item">
                    <router-link class="nav-link active" to="" style="color:#EDECE6; font-size:15px">&emsp;<b>Beranda</b>&emsp;</router-link>
                  </li>
                  <li class="nav-item">
                    <ion-router-link class="nav-link menu" href="/godong" style="color:#EDECE6; font-size:15px">&emsp;Godong&emsp;</ion-router-link>
                  </li>
                  <li class="nav-item">
                    <ion-router-link class="nav-link menu" href="/segara" style="color:#EDECE6; font-size:15px">&emsp;Segara&emsp;</ion-router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link menu" to="/dukungan" style="color:#EDECE6; font-size:15px">&emsp;Dukungan&emsp;</router-link>
                  </li>
                </ul>
                <div class="button-navbar">
                  <ion-button class="textnavbar-btn1" color="cream" router-link="/login"><b>Mulai Bertani</b></ion-button>
                </div>
            </div>
        </div>
    </ion-nav-link>
</template>

<script>
import { IonButton, IonNavLink, } from '@ionic/vue';

export default({
  name: 'Navbar',
  components: {
    IonButton, 
    IonNavLink,
  }
});
</script>

<style scoped>
.navbar{
  background-color: #387352;
}
.logoputih{
  width:40px;
  pointer-events: none;
}
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
}
.menu{
  display: inline-block;
  position: relative;
  color: #EDECE6;
}
.menu:after{
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 1.5px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.menu:hover:after{
  width: 30%; 
  left: 35%;
}
.textnavbar{
  font-family: 'Nunito', sans-serif;
}
.textnavbar-btn1, .textnavbar-btn2{
  font-family: 'Nunito', sans-serif;
  border-radius: 7px !important;
  overflow: hidden;
  width:10em;
  font-size: 15px;
}

@media screen and (max-width: 1200px) {
  .textnavbar{
    text-align: center;
  }
}
@media screen and (max-width: 991.5px){
  .button-navbar{
    width: auto;
    display: block; margin-left: auto; margin-right: auto;
  }
  .textnavbar-btn1, .textnavbar-btn2{
    width:10em;
  }
  .textnavbar-btn2{
    margin-top: 1em;
  }
}
@media screen and (max-width: 900px) {
  .logoputih{
    width:33px; 
  }
  .textnavbar-btn{
    font-family: 'Nunito', sans-serif;
    border-radius: 7px !important;
    overflow: hidden;
    width:10em;
  }
}
</style>