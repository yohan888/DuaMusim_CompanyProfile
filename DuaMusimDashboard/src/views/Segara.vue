<template>
  <IonApp>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button auto-hide="false" menu="testmenu"></ion-menu-button>
        </ion-buttons>
        <img class="logologin" src="../../public/assets/icon/logoLogin.png"/>
      </ion-toolbar>
    </ion-header>
    
    <ion-menu menu-id="testmenu" content-id="mycontent">
      <ion-content color="dark">
        <div class="bg">
          <ion-img class="imgFirst" src="assets/img/firstDashboard.png"></ion-img>
          <div class="centered">
            <i class="fa fa-user mt-2"></i>
            <p class="emailProfile mt-2">Selamat Datang</p>
          </div>
        </div>
          <div class="menu">
            <i class="fa fa-home"></i><ion-router-link href="/" class="menuHome">Home</ion-router-link>
            <br>
            <hr class="hr">
            <i class="fa fa-tags"></i><ion-router-link href="" class="menuGodong">Godong</ion-router-link>
            <br>
            <hr class="hr">
            <i class="fa fa-tags"></i><ion-router-link href="/segara" class="menuSegara"><b>Segara</b></ion-router-link>
            <br>
            <hr class="hr">
            <div class="jumbotron">
              <div class="bottom mt-3">
                <i class="fa fa-sign-out"></i><ion-router-link href="https://comproduamusim.web.app" class="menuLogout"><b>Logout</b></ion-router-link>
              </div>
            </div>
          </div>
      </ion-content>
    </ion-menu>

    <ion-content id="mycontent">
      <div class="container">
        <h3>Segara</h3>
      </div>
    </ion-content>
  </IonApp>
</template>

<script>
import { IonContent, IonMenu, IonHeader, IonToolbar, IonImg } from '@ionic/vue';

export default ({
  name: 'Home',
  components: {
    IonContent, 
    IonMenu, 
    IonHeader, 
    IonToolbar,
    IonImg,
  }
});
</script>

<style scoped>
.logologin{
  width: 2.7em;
  display: block; margin-left: auto; margin-right: auto;
}
.bg {
  position: relative;
  text-align: center;
}
.centered {
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.emailProfile{
  width: 15em;
  font-size: 25px;
  display: block; margin-left: auto; margin-right: auto;
}
.menuHome, .menuGodong, .menuSegara, .menuLogout{
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-family: 'Nunito', sans-serif;
}
.menu{
  margin-left: 2em;
}
.menuHome, .menuGodong, .menuSegara, .menuLogout{
  margin-left: 1em;
}
.menuLogout{
  color: rgb(167, 0, 0);
}
.fa-home{
  margin-top: 0.5em;
  font-size: 30px;
}
.fa-tags{
  font-size: 25px;
}
.fa-user{
  font-size: 65px;
}
.fa-sign-out{
  font-size: 29px;
  transform: scaleX(-1);
  color: rgb(167, 0, 0);
}
.jumbotron{
  margin-left: -2em;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4em;
  background-color:white
}
.bottom{
  margin-left: 2em;
}
.hr{
  margin-left: -2em;
}
</style>