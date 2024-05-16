import { NavbarConfig } from "@vuepress/theme-default";
const navbar: NavbarConfig = [
  {
    text: "导航",
    link: "/guide/",
    children: [
      {
        text: "getting",
        link: "/guide/getting-started.md",
      },
      {
        text: "introduction",
        link: "/guide/introduction.md",
      },
    ],
  },
  {
    text: "工具",
    link: "/utils/",
    children: [
      {
        text: "Picx图床",
        link: "https://picx.xpoet.cn",
      },
    ],
  },
];
export default navbar;
