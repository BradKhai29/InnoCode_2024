import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import bootstrap_css from "./assets/lib/bootstrap_5_3/css/bootstrap.min.css";
import style_css from "./assets/css/style.css";
import carousel_css from "./assets/css/carousel.css";

const app = createApp(App);
app.use(router);

app.use(bootstrap_css);
app.use(carousel_css);
app.use(style_css);

app.mount("#app");
