import "vuetify/styles";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          background: "#ECEFF1",
          surface: "#FFFFFF",
          primary: "#2196F3",
          secondary: "#03A9F4",
          blockquote: "#ECEFF1",
          blockquoteBorder: "#039BE5",
        },
      },
      dark: {
        colors: {
          background: "#263238",
          surface: "#37474F",
          primary: "#2196F3",
          secondary: "#03A9F4",
          blockquote: "#455A64",
          blockquoteBorder: "#0277BD",
        },
      },
    },
  },
});

export default vuetify;
