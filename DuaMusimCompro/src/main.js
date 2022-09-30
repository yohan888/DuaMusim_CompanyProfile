import { createApp } from 'vue'
import App from './App.vue'
import router from './router';


// Added by the CLI
import './registerServiceWorker';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
// import { initializeApp } from "firebase/app";
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6XKWZqip3I68pxsjmbJzYBru11KQTNnc",
  authDomain: "comproduamusim.firebaseapp.com",
  projectId: "comproduamusim",
  storageBucket: "comproduamusim.appspot.com",
  messagingSenderId: "371732598207",
  appId: "1:371732598207:web:37a09f4619022ba036250a",
  measurementId: "G-XY9XJB7KMY"
};

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(firebase.initializeApp(firebaseConfig));
  
router.isReady().then(() => {
  app.mount('#app');
});