/*
 * @Author: lx
 * @Date: 2022-09-11 22:18:15
 * @LastEditors: @zhuyadexiatian 734127061@qq.com
 * @LastEditTime: 2022-09-11 23:11:04
 * @FilePath: \smart_cover_mobile_managere:\学习\qh-components-doc\docs\.vitepress\theme\index.js
 * @Description:
 *
 */
import DefaultTheme from "vitepress/theme";
import ElementPlus from 'element-plus'
import QhComponents from 'qh-components'
import "element-plus/dist/index.css";
import "qh-components/style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.use(ElementPlus).use(QhComponents)
  },
};
