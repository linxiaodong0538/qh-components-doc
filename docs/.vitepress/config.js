module.exports = {
  title: "琦航组件库", // 网站标题
  description: "总结归纳学习中的知识", // 网站的描述
  base: "/", //  部署时的路径 默认 / ，使用二级地址 /base/
  head: [["link", { rel: "icon", href: "/favicon.ico" }]], // 添加网站图标 // 主题配置
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "qh-components",
    // 导航栏配置
    nav: [
      { text: "指南", link: "/guide/" },
      {
        text: "组件",
        link: "/components/form/",
      },
    ], //  左侧导航栏配置
    sidebar: {
      "/components/": [
        {
          items: [
            { text: "Form", link: "/components/form/" },
            { text: "Table", link: "/components/table/" },
            { text: "Dialog", link: "/components/dialog/" },
          ],
        },
      ],
    },
  },
};
