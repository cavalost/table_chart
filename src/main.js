import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { ClientTable } from "vue-tables-2";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

Vue.use(ClientTable, {}, false, "bootstrap4");

Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
