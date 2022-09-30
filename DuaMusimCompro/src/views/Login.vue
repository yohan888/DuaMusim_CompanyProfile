<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="white">
        <ion-buttons>
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content color="cream">
        <ion-grid>
          <ion-row class="loginutama">
            <ion-col class="login">
              <ion-img src="../../assets/icon/logoLogin.png" class="image3"></ion-img>
              <br>
              <h1 class="loginh1"><b>Dashboard<br>Control</b></h1>
            </ion-col>
            <ion-col class="login2">
              <div class="inputlogin">
                <h1><b>Login</b></h1>
                <div class="inputlogin992"></div>
                <form @submit.prevent="login">
                  <input type="email" name="email" v-model="form.email" class="inputusername mt-4" placeholder="Email" required>
                  <input type="password" name="password" v-model="form.password" class="passwordlogin mt-2" placeholder="Password" required>
                  <i class="bi bi-eye-slash" id="togglePassword"></i>
                  <ion-row class="logincek">
                    <ion-col class="logingagal">
                      <!-- <router-link to="/lupaPassword" class="logingagal2">Lupa Password?</router-link> -->
                    </ion-col>
                    <ion-col>
                      <input type="submit" value="Login" color="green" class="btnlogin mt-4 btn btn-success btn btn-success" shape="round" style="color:white;">
                    </ion-col>
                  </ion-row>
                </form>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
        <br><br><br><br>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonImg,
} from '@ionic/vue';
import { radioButtonOnOutline, } from 'ionicons/icons';
import { defineComponent } from 'vue';
import firebase from 'firebase';
export default defineComponent({
  name: 'Login',
  components: {
    IonBackButton,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonImg,
  },
  data(){
    return{
      form:{
        email: '',
        password: '',
      }
      
    }
  },

  setup() {
    return { 
      radioButtonOnOutline
    };
  },
  methods:{
    login(){
      firebase
      .auth()
      .signInWithEmailAndPassword(this.form.email, this.form.password)
      .then(data => {
        alert("Login berhasil");
        console.log(data)
        window.location = "https://dashboardduamusim.web.app/home";
      })
      .catch((err) => {
        alert("Login gagal");
        console.log(err)
        
      });
    }
  }

});
</script>

<style>
  .loginutama{ margin-top: 10vw; }
  .image3{ width: 18%; float:right; }
  .login{ margin-right: 10em; }
  .login h1{ font-size:50pt; color:black; font-family: 'Nunito', sans-serif; width: auto; height: auto; line-height: 1.0; margin-top: 7.5vw;}
  .loginh1{ text-align: right; }
  .inputlogin{ width: 50%; }
  .login2 h1{ font-size:37pt; color:black;  font-family: 'Nunito', sans-serif; width: auto; height: auto; line-height: 1.0; }
  .logingagal{ font-family: 'Poppins', sans-serif; font-size: 12pt; margin-top: 2em; }
  .logingagal2{ color: black; }
  .logingagal :hover{ color: green; }
  .inputusername, .passwordlogin{ border-radius: 15px; background-color: white; border-style: solid; border-width: thin; color: black; border-color: black; width:100%; height:2.7em}
  .btnlogin{ font-family: 'Poppins', sans-serif; font-size: 15pt; float: right; border:none; border-radius: 20px; width: 70%; }

  
  A {text-decoration: none;}

  ion-toggle {
  --background: #909193;
  --background-checked: #222428;

  --handle-background: #222428;
  --handle-background-checked: #909193;

  width: 80px;
}
@media screen and (max-width:1400px){
    .loginutama{ margin-top: 15vw; }
    .image3{ width: 22%; float:right; }
    .inputlogin{ width: 65%; }
    .login h1{ line-height: 1.0; margin-top: 8vw;}
    
  }
@media screen and (max-width:1200px){
    .loginutama{ margin-top: 15vw; }
    .image3{ width: 28%; float:right; }
    .login{ margin-right: 10em; }
    .login h1{ font-size:45pt; color:black;  font-family: 'Nunito', sans-serif; width: auto; height: auto; line-height: 1.0; margin-top: 11vw;}
    .loginh1{ text-align: right; }
    .inputlogin{ width: 70%; }
    .login2 h1{ font-size:33pt; color:black;  font-family: 'Nunito', sans-serif; width: auto; height: auto; line-height: 1.0; }
    .logingagal{ font-family: 'Poppins', sans-serif; font-size: 12pt; margin-top: 2em; }
    .logingagal2{ color: black; }
    .logingagal :hover{ color: green; }
    .inputusername, .passwordlogin{ border-radius: 20px; background-color: white; border-style: solid; border-width: thin; border-color: black;}
    .btnlogin{ font-family: 'Poppins', sans-serif; font-size: 13pt; float: right; border:none; border-radius: 20px; width: 70%; }
  }
  @media screen and (max-width:992px){
    .loginutama{ margin-top: -5vw; display: block; margin-left: auto; margin-right: auto; }
    .image3{ display: none;}
    .login{  margin-left: 10em;}
    .login h1{ font-size:35pt; margin-top: 2em; color:black;  font-family: 'Nunito', sans-serif; display: block; margin-left: auto; margin-right: auto; margin-right: 0em; text-align: center;}
    .loginh1{ text-align: center;}
    .inputlogin{ width: 20em; display: block; margin-left: auto; margin-right: auto;}
    .login2{ display: block; margin-left: auto; margin-right: auto; }
    .login2 h1{ font-size:30pt; color:black;  font-family: 'Nunito', sans-serif; width: auto; height: auto; line-height: 1.0; text-align: center;}
    .logingagal{ font-family: 'Poppins', sans-serif; font-size: 12pt; margin-top: 2em; }
    .logingagal2{ color: black; }
    .logingagal :hover{ color: green; }
    .inputusername, .passwordlogin{ border-radius: 20px; background-color: white; border-style: solid; border-width: thin; border-color: black;}
    .btnlogin{ font-family: 'Poppins', sans-serif; font-size: 13pt; float: right; border:none; border-radius: 20px; width: 70%; }
  }
  @media screen and (max-width:400px){
    .inputlogin{ width: 85%; }
    .logingagal{ display: block; margin-left: auto; margin-right: auto; } 
  }
</style>