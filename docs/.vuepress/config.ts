import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/", //https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"。
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  head: [["link", { rel: "icon", href: "/images/favicon.png" }]],
  //   locales: {
  //     "/": {
  //       lang: "en-US",
  //       title: "VuePress",
  //       description: "Vue-powered Static Site Generator",
  //     },
  //   },
  theme,
  bundler: viteBundler(),
  plugins: [
    searchPlugin({
      // 配置项
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
      // 排除首页
      isSearchable: (page) => page.path !== "/",
      // 允许搜索 Frontmatter 中的 `tags`
      getExtraFields: (page) =>
        ((page.frontmatter.tags || page.content || page.data) as []) ?? [],
    }),
  ],

  //   permalinkPattern: "",
});
