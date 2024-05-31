import { defineConfig } from "vitepress";
import themeConfig from "./theme";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端个人文档",
  description: "A VitePress Site",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/images/vitepress-logo-mini.png" }]],
  // appearance:,
  lastUpdated: true,

  themeConfig,
});
