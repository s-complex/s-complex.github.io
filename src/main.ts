import { ViteSSG } from "vite-ssg/single-page";
import App from "./App.vue";
import vuetify from "./vuetify";
import "./style.css"

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(vuetify);
});
