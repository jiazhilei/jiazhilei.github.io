import { DefaultTheme } from "vitepress";
import nav from "./nav";
import sidebar from "./sidebar";

const themeConfig: DefaultTheme.Config = {
  // https://vitepress.dev/reference/default-theme-config
  nav,

  sidebar,

  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2019-present Evan You",
  },
  logo: "/images/vitepress-logo-large.webp",
  socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  outline: {
    level: 3,
    label: "目录",
  },
  returnToTopLabel: "Return to top",
  search: {
    provider: "local",
    options: {
      locales: {
        zh: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
    },
  },
  // carbonAds: {
  //   code: "your-carbon-code",
  //   placement: "your-carbon-placement",
  // },
};
export default themeConfig;
