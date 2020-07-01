(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{705:function(_,t,v){"use strict";v.r(t);var s=v(14),e=Object(s.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"热更新方案"}},[_._v("热更新方案")]),_._v(" "),v("h3",{attrs:{id:"自动更新的基本需求"}},[_._v("自动更新的基本需求")]),_._v(" "),v("p",[v("strong",[_._v("不管每个应用的自动更新有多少的细节差别，有一些基本的需求（也可以说环节）是必须要实现的。")])]),_._v(" "),v("ul",[v("li",[_._v("检查更新 ：检查是否有新版本可用，什么时候检查，有哪些方式触发检查，可以自定。")]),_._v(" "),v("li",[_._v("通知用户 ：当有更新可用的时候需要通知用户，可以检查到有更新就通知，也可以在更新文件下载好了后再通知，前者用户可以见到下载过程，后者用户感受不到下载过程。")]),_._v(" "),v("li",[_._v("下载更新 ：应用有能力下载更新，并且保证下载的完整性，可以后台下载，也可以前台下载。")]),_._v(" "),v("li",[_._v("安装更新 ：应用能唤起下载好的新版应用安装程序，然后自身退出，至于什么时候唤起安装，可以根据需要做设计。")])]),_._v(" "),v("h3",{attrs:{id:"区分强弱更新"}},[_._v("区分强弱更新")]),_._v(" "),v("p",[v("strong",[_._v("我们把自动更新划分成了强弱两种更新方式，背后的出发点是，我们对某次更新的定性。")])]),_._v(" "),v("ul",[v("li",[v("p",[_._v("如果某次更新只是功能特性的改进、小功能的上线、普通 BUG 的修复，总之是一次让你「 情绪保持稳定 」的更新，那么这被定性为一次弱更新，我们对于这次更新的期待是，希望用户更新，但是不强制。")])]),_._v(" "),v("li",[v("p",[_._v("如果某次更新包含了杀手级功能的上线、重大 BUG 的修复、大的改版，总之是一次让你「 无法保持平静 」的更新，那么这被定性为一次强更新，我们对于强更新的期待是，强烈推荐用户更新，具有强制性。")])])]),_._v(" "),v("h3",{attrs:{id:"设计自动更新的产品逻辑"}},[_._v("设计自动更新的产品逻辑")]),_._v(" "),v("p",[_._v("检查更新有两个问题，第一个问题是我们检查什么？这里我们可以不依赖后端接口去实现检查，我们把各次版本发行记录在一个 json 文件中，然后部署这个 json 文件到服务器，检查更新就是去服务器请求这个 json 文件，然后解析，对比里面的最新版和当前使用的客户端版本，知道有没有更新。")]),_._v(" "),v("p",[_._v("第二个问题是，依据什么判断是强升级还是弱更新？基于上面的需求拆分，我们需要划分出强弱更新，强弱更新的逻辑是不一样的，那么在检查更新阶段如何判定该进入哪个更新逻辑呢？")]),_._v(" "),v("p",[_._v("第一个办法，在 json 文件中对于每个版本标明相比于上一个版本是一次强升级还是弱更新，比如有一个 "),v("code",[_._v("updateType")]),_._v(" 字段。这个方式的优点是简单明了，就算用户当前的版本和最新版相隔了好几个版本， 只要满足这其中跨越的有任何一个版本是强升级，那么这次的更新就是一次强升级 ，否则是一次弱更新。")]),_._v(" "),v("p",[_._v("第二个办法，一切根据版本号而来，"),v("code",[_._v("「X.Y.Z」")]),_._v(" 这样的版本号，对比当前客户端的版本和最新版，我们可以把 "),v("code",[_._v("X、Y")]),_._v(" 不变，仅仅 "),v("code",[_._v("Z")]),_._v("（修订版本号）改变的当做一次"),v("code",[_._v("弱更新")]),_._v("，如果对比发现，"),v("code",[_._v("X")]),_._v(" 或 "),v("code",[_._v("Y")]),_._v(" 有任何一个比当前的高了，那么就定义为一次"),v("code",[_._v("强升级")]),_._v("。这种方式不用额外的字段，也不用比对中间跨越的版本，仅仅需要对比当前的版本和最新的版本。")]),_._v(" "),v("p",[_._v("推荐采用第二种方式，那么检查更新的流程是以下这样的：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200227210931233.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"x、y、z更新方案"}})]),_._v(" "),v("h3",{attrs:{id:"强升级逻辑"}},[_._v("强升级逻辑")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020022721102657.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"强更新逻辑"}})]),_._v(" "),v("p",[_._v("强升级下，一旦发行有可用的更新，在下载前就直接通知用户，而通知的方式是新建一个通知窗口，在 "),v("code",[_._v("Electron")]),_._v(" 中也就是新建一个渲染进程。")]),_._v(" "),v("h3",{attrs:{id:"弱更新逻辑"}},[_._v("弱更新逻辑")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200227211437320.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"弱更新逻辑"}})]),_._v(" "),v("h3",{attrs:{id:"代码实现"}},[_._v("代码实现")]),_._v(" "),v("p",[_._v("本文的思路是采用"),v("code",[_._v("electron-builder")]),_._v(" 和 "),v("code",[_._v("electron-update")]),_._v("两个插件来实现自动更新")])])}),[],!1,null,null,null);t.default=e.exports}}]);