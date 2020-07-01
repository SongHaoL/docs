(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{717:function(v,_,t){"use strict";t.r(_);var o=t(14),e=Object(o.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"执行环境及作用域"}},[v._v("执行环境及作用域")]),v._v(" "),t("p",[t("strong",[v._v("执行环境")])]),v._v(" "),t("ol",[t("li",[t("code",[v._v("全局执行环境")]),v._v("。")]),v._v(" "),t("li",[t("code",[v._v("函数执行环境")]),v._v("。")])]),v._v(" "),t("p",[v._v("每个执行环境都有一个与之关联的变量对象，环境中定义的所有变量和函数都保存在这个对象中。")]),v._v(" "),t("p",[v._v("在Web浏览器中，全局执行环境被认为是 "),t("code",[v._v("window")]),v._v(" 对象，因此所有全局变量和函数都是作为 "),t("code",[v._v("window")]),v._v(" 对象的属性和方法创建的。")]),v._v(" "),t("p",[v._v("某个执行环境中的所有代码执行完毕后，该环境被销毁，保存在其中的所有变量和函数定义也随之销毁("),t("font",{attrs:{color:"red"}},[v._v("全局执行环境直到应用程序退出——例如关闭网页或浏览器时才会被销毁")]),v._v(")。")],1),v._v(" "),t("p",[v._v("每个函数都有自己的执行环境。当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。\n而在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境。"),t("code",[v._v("ECMAScript")]),v._v(" 程序中的执行流正是由这个方便的机制控制着。")]),v._v(" "),t("p",[v._v("当代码在一个环境中执行时，会创建变量对象的一个作用域链（scope chain）。")]),v._v(" "),t("p",[t("strong",[v._v("作用域链的用途，是保证对执行环境有权访问的所有变量和函数的有序访问。")])]),v._v(" "),t("p",[t("strong",[v._v("作用域链的前端，始终都是当前执行的代码所在环境的变量对象。")])]),v._v(" "),t("p",[v._v("如果这个环境是函数，则将其活动对象（activation object）作为变量对象。活动对象在最开始时只包含一个变量，即 "),t("code",[v._v("arguments")]),v._v(" 对象（这个对象在全局环境中是不存在的）。作用域链中的下一个变量对象来自包含（外部）环境，而再下一个变量对象则来自下一个包含环境。这样，一直延\n续到全局执行环境；全局执行环境的变量对象始终都是作用域链中的最后一个对象。")]),v._v(" "),t("p",[v._v("标识符解析是沿着作用域链一级一级地搜索标识符的过程。搜索过程始终从作用域链的前端开始，然后逐级地向后回溯，直至找到标识符为止（如果找不到标识符，通常会导致错误发生）。")]),v._v(" "),t("h2",{attrs:{id:"延长作用域链"}},[v._v("延长作用域链")]),v._v(" "),t("p",[v._v("虽然执行环境的类型总共只有两种——全局和局部（函数），但还是有其他办法来延长作用域链。这么说是因为有些语句可以在作用域链的前端临时增加一个变量对象，该变量对象会在代码执行后被移除。")]),v._v(" "),t("ol",[t("li",[v._v("try-catch 语句的 catch 块；")]),v._v(" "),t("li",[v._v("with 语句。")])])])}),[],!1,null,null,null);_.default=e.exports}}]);