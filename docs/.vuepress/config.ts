import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import navbar from "./navbar";

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
  theme: defaultTheme({
    hostname: "jiazhilei.github.io",
    // locales
    colorMode: "auto",
    colorModeSwitch: true,
    home: "/",
    logo: "https://vuejs.org/images/logo.png",
    // logoAlt:'', // 指定 Logo 图片的替代文字。
    // logoDark:'', // 在夜间模式中使用的 Logo 图片的 URL。
    // repo: "",// 项目仓库的 URL。
    navbar,
    sidebar: "auto", // false | 'auto' | SidebarConfigArray | SidebarConfigObject
    sidebarDepth: 3, // 设置根据页面标题自动生成的侧边栏的最大深度。
    editLink: true, // 是否启用 编辑此页 链接。
  }),
  bundler: viteBundler(),

//   permalinkPattern: "",
});
