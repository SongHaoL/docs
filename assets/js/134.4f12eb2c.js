(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{788:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pillow的介绍与使用"}},[t._v("Pillow的介绍与使用")]),t._v(" "),s("ul",[s("li",[t._v("2020.05.25")])]),t._v(" "),s("h2",{attrs:{id:"pillow简介"}},[t._v("Pillow简介")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Pillow")]),t._v("是"),s("code",[t._v("Python")]),t._v("平台事实上的图像处理标准库了。功能非常强大，但API却非常简单易用,提供了广泛的文件格式支持，强大的图像处理能力，主要包括"),s("code",[t._v("图像储存")]),t._v("、"),s("code",[t._v("图像显示")]),t._v("、"),s("code",[t._v("格式转换")]),t._v("以及"),s("code",[t._v("基本的图像处理操作")]),t._v("等。早期的版本是"),s("code",[t._v("PIL")]),t._v("(由于PIL仅支持2.7的版本)后来志愿者们在其基础上进行了版本升级和兼容,命名为"),s("code",[t._v("Pillow")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[t._v("安装")]),t._v(" "),s("p",[t._v("如果安装了"),s("code",[t._v("Anaconda")]),t._v("，"),s("code",[t._v("Pillow")]),t._v("就已经可用了。否则，我们可以在命令行下通过"),s("code",[t._v("pip")]),t._v("安装：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("pip install pillow\n")])])]),s("h2",{attrs:{id:"image类"}},[t._v("Image类")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Image")]),t._v("类是"),s("code",[t._v("PIL")]),t._v("中最重要的类,许多常用的方法都需要从"),s("code",[t._v("Image")]),t._v("类中导入")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" PIL "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Image\n")])])]),s("h3",{attrs:{id:"打开一张图片"}},[t._v("打开一张图片")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Image.open(fp, mode =’r’ )")]),t._v(": 打开图片文件，返回一个"),s("code",[t._v("Image对象")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("fp")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("图片路径")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("mode")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("模式。如果给出,必须是"),s("code",[t._v("r")])])])])]),t._v(" "),s("p",[t._v("图像的对象属性有"),s("code",[t._v("filename")]),t._v("源文件的文件名或路径、format图片的格式、size图片大小，以像素为单位、mode图片模式、width图像宽度、height图像高度、palette调色板表等；")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" PIL "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Image\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同级目录下的图片不要加相对路径'./img.png'")]),t._v("\npath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img.png'")]),t._v("\nim "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <PIL.PngImagePlugin.PngImageFile image mode=P size=350x142 at 0x1077A3750>")]),t._v("\n")])])]),s("h3",{attrs:{id:"保存图片"}},[t._v("保存图片")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Image.save(fp, format=None, **params)")]),t._v(": 保存图像到给定的文件名下，如果没有指定格式则可以使用文件扩展名来确定要使用的格式，无返回值。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("fp")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("文件名或路径")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("format")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("可选的格式覆盖")])])])]),t._v(" "),s("h3",{attrs:{id:"指定图像的大小"}},[t._v("指定图像的大小")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Image.thumbnail(size, resample=3)")]),t._v(": 指定图片的像素，size是大小，"),s("code",[t._v("resample")]),t._v("是重采样滤波器。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("size")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("图像的大小")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("resample")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("重采样滤波器 ("),s("code",[t._v("Image.NEAREST")]),t._v("、"),s("code",[t._v("Image.BILINEAR")]),t._v("、"),s("code",[t._v("Image.BICUBIC")]),t._v("、"),s("code",[t._v("Image.LANCZOS")]),t._v("、默认为"),s("code",[t._v("Image.BICUBIC")]),t._v(")")])])])]),t._v(" "),s("h3",{attrs:{id:"旋转图片的方向"}},[t._v("旋转图片的方向")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Image.rotate(angle, resample=0, expand=0, ceter=None, translate=None)")]),t._v(": 旋转图片的方向，返回旋转后的图像副本，一个Image对象 。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("angle")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("角度(逆时针旋转)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("resample")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("重采样滤波器")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("expand")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否展开")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("ceter")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("旋转中心")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("translate")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("旋转后")])])])]),t._v(" "),s("h3",{attrs:{id:"图片加滤镜"}},[t._v("图片加滤镜")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Image.filter(filter)")]),t._v(": 给图片添加滤镜，返回一个Image对象。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("filter")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤器")])])])]),t._v(" "),s("h3",{attrs:{id:"旋转或翻转图像"}},[t._v("旋转或翻转图像")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Image.transpose(method)")]),t._v(": 旋转或翻转图像，返回旋转或翻转后的图像副本，一个Image对象。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("method")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("模式("),s("code",[t._v("Image.FLIP_LEFT_RIGHT")]),t._v("、"),s("code",[t._v("Image.FLIP_TOP_BOTTOM")]),t._v("、"),s("code",[t._v("Image.ROTATE_90")]),t._v("、"),s("code",[t._v("Image.ROTATE_180")]),t._v("、"),s("code",[t._v("Image.ROTATE_270")]),t._v("、"),s("code",[t._v("Image.TRANSPOSE")]),t._v("、"),s("code",[t._v("Image.TRANSVERSE")])])])])]),t._v(" "),s("h3",{attrs:{id:"显示图像"}},[t._v("显示图像")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Image.show()")]),t._v(": 显示这个图像，此方法主要用于调试目的；")])]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" PIL "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ImageDraw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ImageFilter\n\npath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getcwd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nim "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取图片的后缀名")]),t._v("\nfExit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lower"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取图片的格式，大小，以及模式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fExit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定图片的像素")]),t._v("\nim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("thumbnail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./image_128_128.{exit}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fExit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 旋转图片的方向")]),t._v("\ndest_im "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndest_im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./image_rotate.{exit}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fExit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给图片添加滤镜  image has wrong mode")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dest_im = im.filter(ImageFilter.GaussianBlur)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dest_im.show()")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 图片反转")]),t._v("\ndest_im "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transpose"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FLIP_LEFT_RIGHT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 左右反转")]),t._v("\ndest_im "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transpose"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FLIP_TOP_BOTTOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上下反转")]),t._v("\ndest_im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 图片上写文字")]),t._v("\nimage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimg_draw "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ImageDraw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Draw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimg_draw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("770")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'black'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 放上文字信息到图像上")]),t._v("\nimage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"imagedraw类"}},[t._v("ImageDraw类")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("ImageDraw")]),t._v("模块为"),s("code",[t._v("Image对象")]),t._v("提供简单的"),s("code",[t._v("2D图形")]),t._v("，可以使用此模块创建新图像，注释或润饰现有图像，以及动态生成图形以供Web使用；")])]),t._v(" "),s("h3",{attrs:{id:"创建可用于在给定图像中绘制的对象"}},[t._v("创建可用于在给定图像中绘制的对象")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("ImageDraw.Draw（im,mode=None)")]),t._v("：创建可用于在给定图像中绘制的对象")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("im")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("要绘制的图像")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("mode")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于颜色值的可选模式")])])])]),t._v(" "),s("h3",{attrs:{id:"在给定位置绘制字符串"}},[t._v("在给定位置绘制字符串")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("ImageDraw.text(xy，text，fill=None，font=None，anchor=None，spacing=0，align =“left”，direction = None，features=None，language=None)")]),t._v("：在给定位置绘制字符串")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("xy")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("文本的左上角")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("text")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("要绘制的文本")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("fill")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("文本的颜色")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("font")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("一个ImageFont实例")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("anchor")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于颜色值的可选模式")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("spacing")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("如果文本传递给"),s("code",[t._v("multiline_text()")]),t._v("，则为行之间的像素数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("align")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("如果文本传递给"),s("code",[t._v("multiline_text()")]),t._v("，“left”，“center”或“right”。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("direction")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("文字的方向。它可以是'rtl'（从右到左），'ltr'（从左到右）或'ttb'（从上到下）。需要libraqm。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("features")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("在文本布局期间使用的OpenType字体功能列表。这通常用于打开默认情况下未启用的可选字体功能，例如'dlig'或'ss01'，但也可用于关闭默认字体功能，例如'-liga'以禁用连字或' - kern'禁用字距调整。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("language")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("文字的语言")])])])]),t._v(" "),s("h3",{attrs:{id:"给定坐标处绘制点"}},[t._v("给定坐标处绘制点")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("ImageDraw.point（xy,fill=None）")]),t._v("：在给定坐标处绘制点。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("xy")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("元组的序列或类似的数值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("fill")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("点的颜色")])])])]),t._v(" "),s("h3",{attrs:{id:"批量将图片大小设置为指定大小的例子"}},[t._v("批量将图片大小设置为指定大小的例子")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" PIL "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Image\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 源目录")]),t._v("\nproject_dir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abspath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__file__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("project_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出目录")]),t._v("\noutput "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("project_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dest'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("modify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换目录")]),t._v("\n    os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chdir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 遍历目录下所有的文件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" image_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listdir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getcwd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        im "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("thumbnail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    modify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);