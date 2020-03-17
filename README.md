<!DOCTYPE html> <html lang="zh"> <head> <meta charset="utf-8"/> <title>Markdown在线编辑器 - www.MdEditor.com</title> <link rel="shortcut icon" href="https://www.mdeditor.com/images/logos/favicon.ico" type="image/x-icon"/> </head> <body><h1 id="h1-microtek"><a name="Microtek" class="reference-link"></a><span class="header-link octicon octicon-link"></span>Microtek</h1><p>全友家居</p> <h1 id="h1-u5B89u88C5u4F9Du8D56"><a name="安装依赖" class="reference-link"></a><span class="header-link octicon octicon-link"></span>安装依赖</h1><p>npm i</p> <h1 id="h1-u8FD0u884C"><a name="运行" class="reference-link"></a><span class="header-link octicon octicon-link"></span>运行</h1><p>npm run serve</p> <h1 id="h1-u9879u76EEu7ED3u6784"><a name="项目结构" class="reference-link"></a><span class="header-link octicon octicon-link"></span>项目结构</h1><p>├─public 存放顶级页面<br>├─src<br>│ ├─api 后台接口<br>│ │<br>│ ├─assets 图片资源<br>│ │ │<br>│ │ ├─index<br>│ │ ├─products<br>│ │ ├─news<br>│ │ ├─about<br>│ │ ├─brand<br>│ │ ├─contact<br>│ │ │<br>│ │ ├─carousel 轮播图<br>│ │ ├─common 公共图片<br>│ │ └─goods 商品图片(总)<br>│ │<br>│ ├─components 公共组件<br>│ │ └─elementUI.js 注册要使用的组件<br>│ │<br>│ ├─pages<br>│ │ ├─index 首页<br>│ │ │ └─views<br>│ │ ├─products 产品页面<br>│ │ │ └─views<br>│ │ ├─about 关于页面<br>│ │ │ └─views<br>│ │ ├─brand 联系我们页面<br>│ │ │ └─views<br>│ │ ├─contact 品牌页面<br>│ │ │ └─views<br>│ │ └─news 新闻页面<br>│ │ └─views<br>│ │<br>│ ├─store 状态管理<br>│ │ └─modules<br>│ │<br>│ └─utils<br>│ │ ├─js<br>│ │ │ └─utils.js 工具函数<br>│ │ └─css<br>│ │ └─reset.css 重置样式<br>│ │ └─animation.css 动画<br>│ │<br>│ └─theme 统一风格<br>└─static 静态资源 </p><h1 id="h1-less-axios-fontawesome-"><a name="less,axios,fontawesome已配好" class="reference-link"></a><span class="header-link octicon octicon-link"></span>less,axios,fontawesome已配好</h1><p> axios调用：vue.axios</p> <h1 id="h1--store-"><a name="状态管理store分了模块" class="reference-link"></a><span class="header-link octicon octicon-link"></span>状态管理store分了模块</h1><p> index.js模块的组装<br> actions.js顶级页面的提交操作<br> mutations.js顶级页面改变状态的操作 </p><h1 id="h1-element-ul"><a name="element-ul" class="reference-link"></a><span class="header-link octicon octicon-link"></span>element-ul</h1><p> 要使用的组件在components里的elementUI.js里注册</p> <h1 id="h1-u589Eu52A0u6700u9876u7EA7u9875u9762"><a name="增加最顶级页面" class="reference-link"></a><span class="header-link octicon octicon-link"></span>增加最顶级页面</h1><p> 在根目录下的vue.config.js里注册</p> <h1 id="h1-u589Eu52A0u9876u7EA7u9875u9762u7684u5B50u9875u9762"><a name="增加顶级页面的子页面" class="reference-link"></a><span class="header-link octicon octicon-link"></span>增加顶级页面的子页面</h1><p> 添加在pages下子文件夹的views里</p> <h1 id="h1-src-utils-"><a name="src下的utils文件夹" class="reference-link"></a><span class="header-link octicon octicon-link"></span>src下的utils文件夹</h1><p> 工具函数,模块导出,模块导入</p> <h1 id="h1-assets-"><a name="assets文件夹" class="reference-link"></a><span class="header-link octicon octicon-link"></span>assets文件夹</h1><p> 要加的图片放各自页面的img文件夹下<br> 子文件夹下的goods不要加图片也不要引用,主要是为了你们好找图片,<br> 上线后要删的，要用先看id再用assets&gt;goods下的 </p><h1 id="h1-u54C8u6728u539Fu7F51u5740"><a name="哈木原网址" class="reference-link"></a><span class="header-link octicon octicon-link"></span>哈木原网址</h1><p>(<a href="http://www.hamuoo.com/">http://www.hamuoo.com/</a>)</p> <h1 id="h1-u8BBFu95EE"><a name="访问" class="reference-link"></a><span class="header-link octicon octicon-link"></span>访问</h1><p><a href="http://localhost:8080/">http://localhost:8080/</a></p> </body> </html>