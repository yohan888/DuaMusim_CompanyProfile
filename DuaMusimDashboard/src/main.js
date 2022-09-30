import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// Added by the CLI
import './registerServiceWorker'

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

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4q_yAPLPuCxuTeLSnAZ3-M-eL8cDWdcg",
  authDomain: "dashboardduamusim.firebaseapp.com",
  projectId: "dashboardduamusim",
  storageBucket: "dashboardduamusim.appspot.com",
  messagingSenderId: "878133794693",
  appId: "1:878133794693:web:27921a52266583880e56ec",
  measurementId: "G-QCHZ4JW777"
};

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(initializeApp(firebaseConfig));
  
router.isReady().then(() => {
  app.mount('#app');
});