(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{752:function(s,t,e){"use strict";e.r(t);var a=e(14),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"插入相关"}},[s._v("插入相关")]),s._v(" "),e("h2",{attrs:{id:"mysql-如果数据不存在，则插入新数据，否则更新的实现方法"}},[s._v("mysql 如果数据不存在，则插入新数据，否则更新的实现方法")]),s._v(" "),e("ol",[e("li",[s._v("key存在则更新，不存在则插入，采用以下sql语句可以实现：")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" table_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" my_key"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("duplicate")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("不过在大并发量的数据操作时,可能有时一个有主键的select查询耗时较长，如果对旧数据不关心，可以采用先"),e("code",[s._v("disable")]),s._v("即删除原来"),e("code",[s._v("my_key=1")]),s._v("的数据，再插入新的数据。")])]),s._v(" "),e("p",[s._v("使用"),e("code",[s._v("replace")]),s._v("一个语句可以完成上述操纵流程的功能,其语法与"),e("code",[s._v("insert")]),s._v("差不多。可以写为:"),e("code",[s._v("replace into table_test set ikey=1,value='a',icount=0;")]),s._v("则表中有my_key=1时，先删除旧数据，然后插入新数据.否则直接插入数据,sql语句如下：")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replace")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" table_test "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" ikey"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("icount"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("需要注意的是：如果表中有多个唯一索引，例如："),e("code",[s._v("my_key")]),s._v("和"),e("code",[s._v("value")]),s._v("字段都是"),e("code",[s._v("unique key")]),s._v("，"),e("code",[s._v("replace")]),s._v("会把所有与其唯一索引值相同的数据项删除，再插入新记录。")]),s._v(" "),e("p",[s._v("如表中有两个记录，"),e("code",[s._v("replace into table_test set my_key=5,value='c',count=0;")]),s._v("会将两条数据同时删除再插入；")])])}),[],!1,null,null,null);t.default=r.exports}}]);