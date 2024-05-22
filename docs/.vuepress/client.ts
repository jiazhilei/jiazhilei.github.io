import { defineClientConfig } from "vuepress/client";
import NotFound from "./components/NotFound.vue";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    console.log({ app, router, siteData });
  },
  layouts: {
    NotFound,
  },
  setup() {},
  rootComponents: [],
});
