import { Theme } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import navbar from "./navbar";

const theme: Theme = defaultTheme({
  hostname: "jiazhilei.github.io",
  // locales
  colorMode: "auto",
  colorModeSwitch: true,
  home: "/",
  logo: "https://cdn.jsdelivr.net/gh/jiazhilei/picx-images-hosting@master/logo.7awzkimr2l.webp",
  // logoAlt:'', // 指定 Logo 图片的替代文字。
  // logoDark:'', // 在夜间模式中使用的 Logo 图片的 URL。
  // repo: "",// 项目仓库的 URL。
  navbar,
  sidebar: "auto", // false | 'auto' | SidebarConfigArray | SidebarConfigObject
  sidebarDepth: 3, // 设置根据页面标题自动生成的侧边栏的最大深度。
  editLink: true, // 是否启用 编辑此页 链接。
  lastUpdatedText: "上次更新",
  contributorsText: "贡献者",
});
export default theme;
