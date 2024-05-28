import { DefaultTheme } from "vitepress";

const nav: DefaultTheme.NavItem[] = [
  {
    text: "前端",
    items: [
      {
        text: "JavaScript",
        link: "/web/javascript/index.md",
      },
      {
        text: "React",
        link: "/web/react/index.md",
      },
    ],
  },
  {
    text: "导航",
    items: [
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
    items: [
      {
        text: "Picx图床",
        link: "https://picx.xpoet.cn",
      },
    ],
  },
];

export default nav;
