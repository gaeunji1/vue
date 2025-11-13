import { createApp } from "vue";
import App from "./App.vue";
import globalChild from "@/components/globalChild.vue";
import GlobalChild from "@/components/globalChild.vue";

const app = createApp(App);

app.component("GlobalChild", GlobalChild);

app.mount("#app");
