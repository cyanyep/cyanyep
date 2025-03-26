(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{522:function(t,e,l){"use strict";l.r(e);var a=l(2),i=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"spring注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring注解"}},[t._v("#")]),t._v(" Spring注解")]),t._v(" "),e("h1",{attrs:{id:"runwith-springrunner-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runwith-springrunner-class"}},[t._v("#")]),t._v(" @RunWith(SpringRunner.class)")]),t._v(" "),e("h1",{attrs:{id:"前后端数据传输注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前后端数据传输注解"}},[t._v("#")]),t._v(" 前后端数据传输注解")]),t._v(" "),e("p",[t._v("@RequestParam、@PathVariable、 @RequestBody、@RequestHeader")]),t._v(" "),e("p",[e("strong",[t._v("没有指定注解则是通过查询字符串传递")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("注解")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("作用")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("示例场景")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("@RequestParam")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("从 URL 查询参数中提取数据，有多个同名参数自动转为集合")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("/users?id=123")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("@PathVariable")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("从 URL 路径参数中提取数据")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("/users/123")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("@RequestBody")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("从 HTTP 请求体中提取数据")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JSON 或 XML 格式的请求体")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("@RequestHeader")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("从 HTTP 请求头中提取数据")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("Authorization: Bearer <token>")])])])])]),t._v(" "),e("p",[t._v("@PathVariable 常用于 RESTful 风格的 URL 中获取资源标识符,如 ID、名称等。@RequestBody 常用于处理 POST、PUT 等请求方法,接收请求体中的数据。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("方式")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("安全性分析")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("适用场景")]),t._v(" "),e("th",[t._v("优缺点")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("URL 查询参数/查询字符串（Query String）")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("不安全，数据暴露在 URL 中，容易被日志、浏览器历史记录或第三方工具捕获。")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("适合传递非敏感数据（如分页参数、搜索关键字）。")]),t._v(" "),e("td",[t._v("不适用于传递大量或敏感数据")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("URL 路径参数")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("较不安全，数据仍然暴露在 URL 中，但比查询参数稍隐蔽。")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("适合传递资源标识符（如 "),e("code",[t._v("/users/123")]),t._v("）。")]),t._v(" "),e("td",[t._v("简洁明了，易于理解。不适合传递大量或复杂的数据。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("HTTP 头部")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("较安全，数据不暴露在 URL 中，但需确保使用 HTTPS 加密传输。")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("适合传递敏感信息（如身份验证令牌、API 密钥）。")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("请求体（POST/PUT/PATCH）")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("较安全，数据不暴露在 URL 中，但仍需使用 HTTPS 加密传输。")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("适合传递敏感信息或大量数据（如登录信息、支付数据）。")]),t._v(" "),e("td",[t._v("多种格式，如JSON、XML、form-data。传输大量或复杂的数据。不能用于GET请求")])])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("特性")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("POST")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("PUT")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("PATCH")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("语义")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("获取资源")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("创建资源或触发操作")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("更新或替换资源")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("部分更新资源")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("幂等性")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("幂等")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("不是幂等的")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("幂等的")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("不是幂等的")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("数据传递")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("URL 查询参数")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请求体")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请求体")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请求体")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("是否修改资源")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("使用场景")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("获取数据")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("创建资源、触发操作")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("更新或替换资源")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("部分更新资源")])])])]),t._v(" "),e("h1",{attrs:{id:"restcontroller"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restcontroller"}},[t._v("#")]),t._v(" RestController")]),t._v(" "),e("ul",[e("li",[t._v("RESTful风格")]),t._v(" "),e("li",[t._v("所有方法的返回值都会直接写入 HTTP 响应体，而不是解析为视图。")]),t._v(" "),e("li",[t._v("默认情况下，返回值会被转换为 JSON 格式")])]),t._v(" "),e("h1",{attrs:{id:"transaction事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transaction事务"}},[t._v("#")]),t._v(" @Transaction事务")])])}),[],!1,null,null,null);e.default=i.exports}}]);