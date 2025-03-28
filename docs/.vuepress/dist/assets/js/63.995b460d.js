(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{428:function(a,s,t){"use strict";t.r(s);var e=t(0),l=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"修改用户权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改用户权限"}},[a._v("#")]),a._v(" 修改用户权限")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("符号模式")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("语法：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chmod [who][operator][permissions] <文件/目录>\n")])])])]),a._v(" "),s("li",[s("p",[a._v("添加执行权限：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x script.sh\n")])])])]),a._v(" "),s("li",[s("p",[a._v("移除其他用户的写权限：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" o-w file.txt\n")])])])]),a._v(" "),s("li",[s("p",[a._v("设置所有用户的读写权限：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("rw file.txt\n")])])])])])]),a._v(" "),s("li",[s("p",[a._v("数字模式")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("语法：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chmod <数字> <文件/目录>\n")])])])]),a._v(" "),s("li",[s("p",[a._v("每个权限用一个数字表示：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("4")]),a._v("：读（r）。")]),a._v(" "),s("li",[s("code",[a._v("2")]),a._v("：写（w）。")]),a._v(" "),s("li",[s("code",[a._v("1")]),a._v("：执行（x）。")])])]),a._v(" "),s("li",[s("p",[a._v("设置权限为 "),s("code",[a._v("rwxr-xr--")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chmod 754 file.txt\n")])])])])])])]),a._v(" "),s("p",[a._v("修改所有者")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("语法：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chown <用户> <文件/目录>\n")])])])]),a._v(" "),s("li",[s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chown alice file.txt\n")])])])])]),a._v(" "),s("p",[a._v("修改所属组")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("语法：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chgrp <组> <文件/目录>\n")])])])]),a._v(" "),s("li",[s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chgrp developers file.txt\n")])])])])]),a._v(" "),s("p",[a._v("同时修改所有者和所属组")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("语法：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chown <用户>:<组> <文件/目录>\n")])])])]),a._v(" "),s("li",[s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chown alice:developers file.txt\n")])])])])]),a._v(" "),s("p",[a._v("默认权限（umask）")]),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("umask")]),a._v(" 用于设置新建文件或目录的默认权限。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("查看当前 "),s("code",[a._v("umask")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("umask\n")])])])]),a._v(" "),s("li",[s("p",[a._v("设置 "),s("code",[a._v("umask")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("umask 022\n")])])])])])])]),a._v(" "),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])])])}),[],!1,null,null,null);s.default=l.exports}}]);