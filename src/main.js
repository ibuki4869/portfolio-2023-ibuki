import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./firebase/firebase.js";
import VueKinesis from "vue-kinesis";


createApp(App).use(router).use(VueKinesis).mount('#app')