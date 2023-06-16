import { createApp } from 'vue'
import App from './App.vue'
import ApiService from "./services/api.service";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import router from './router'
import 'normalize.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

ApiService.init();

const app = createApp(App)
const options = {
    // You can set your default options here
};
app.use(Toast, options);
app.use(router)

app.mount('#app')
