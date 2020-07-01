(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{700:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"适配相关"}},[t._v("适配相关")]),t._v(" "),a("ul",[a("li",[t._v("2020.05.18")])]),t._v(" "),a("h2",{attrs:{id:"iphone-x系列安全区域适配问题"}},[t._v("iPhone X系列安全区域适配问题")]),t._v(" "),a("p",[a("code",[t._v("iPhone X")]),t._v(" 以及它以上的系列，都采用刘海屏设计和全面屏手势。头部、底部、侧边都需要做特殊处理。才能适配 "),a("code",[t._v("iPhone X")]),t._v(" 的特殊情况。")]),t._v(" "),a("h3",{attrs:{id:"_1-设置安全区域，填充危险区域，危险区域不做操作和内容展示。"}},[t._v("1. 设置安全区域，填充危险区域，危险区域不做操作和内容展示。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("危险区域指头部不规则区域，底部横条区域，左右触发区域。")])]),t._v(" "),a("p",[t._v("具体操作为："),a("code",[t._v("viewport-fit meta")]),t._v(" 标签设置为 "),a("code",[t._v("cover")]),t._v("，获取所有区域填充。判断设备是否属于 "),a("code",[t._v("iPhone X")]),t._v("，给头部底部增加适配层")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("viewport-fit")]),t._v(" 有 3 个值分别为：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("auto")]),t._v("：此值不影响初始布局视图端口，并且整个web页面都是可查看的。")]),t._v(" "),a("li",[a("code",[t._v("contain")]),t._v("：视图端口按比例缩放，以适合显示内嵌的最大矩形。")]),t._v(" "),a("li",[a("code",[t._v("cover")]),t._v("：视图端口被缩放以填充设备显示。强烈建议使用 "),a("code",[t._v("safe area inset")]),t._v(" 变量，以确保重要内容不会出现在显示之外。")])])]),t._v(" "),a("p",[a("strong",[t._v("设置 viewport-fit 为 cover")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0, user-scalable=yes, viewport-fit=cover"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("strong",[t._v("增加适配层")])]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("safe area inset")]),t._v(" 变量")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 适配 iPhone X 顶部填充*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@supports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body,\n  .header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 40px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 40px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 40px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 判断iPhoneX 将 footer 的 padding-bottom 填充到最底部 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@supports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body,\n    .footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("safe-area-inset-top")]),t._v(", "),a("code",[t._v("safe-area-inset-right")]),t._v(", "),a("code",[t._v("safe-area-inset-bottom")]),t._v(", "),a("code",[t._v("safe-area-inset-left")]),t._v(" "),a("code",[t._v("safe-area-inset-*")]),t._v("由四个定义了视口边缘内矩形的 top, right, bottom 和 left 的环境变量组成,这样可以安全地放入内容，而不会有被非矩形的显示切断的风险。")]),t._v(" "),a("p",[t._v("对于矩形视口，例如普通的笔记本电脑显示器，其值等于零。对于非矩形显示器（如圆形表盘，iPhoneX 屏幕），在用户代理设置的四个值形成的矩形内，所有内容均可见。")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("其中 "),a("code",[t._v("env()")]),t._v(" 用法为 "),a("code",[t._v("env( <custom-ident> , <declaration-value>? )")]),t._v("，第一个参数为自定义的区域，第二个为备用值。")])]),t._v(" "),a("li",[a("p",[t._v("其中 "),a("code",[t._v("var()")]),t._v(" 用法为 "),a("code",[t._v("var( <custom-property-name> , <declaration-value>? )")]),t._v("，作用是在 "),a("code",[t._v("env()")]),t._v(" 不生效的情况下，给出一个备用值。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("constant（")]),t._v("） 被 css 2017-2018 年为草稿阶段，是否已被标准化未知。而其他iOS 浏览器版本中是否有此函数未知，作为兼容处理而添加进去。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);