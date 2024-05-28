import { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = {
  "/web/javascript/": [
    {
      text: "ES6新增",
      link: "/web/javascript/es6.md",
    },
    {
      text: "DOM",
      link: "/web/javascript/dom.md",
    },
  ],
  "/web/react/": [
    {
      text: "常用hooks",
      link: "/web/react/hooks.md",
    },
  ],
};

export default sidebar;
