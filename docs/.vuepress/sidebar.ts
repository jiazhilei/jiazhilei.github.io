import { SidebarConfig } from "@vuepress/theme-default";

const sidebar: SidebarConfig = {
  "/web/javascript/": [
    {
      text: "JavaScript",
      link: "/web/javascript/",
      children: ["/web/javascript/es6.md"],
    },
  ],

  "/web/react/": [
    {
      text: "React",
      link: "/web/react/",
      children: ["/web/react/hooks.md"],
    },
  ],
};

export default sidebar;
