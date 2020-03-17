# Microtek  
全友家居

#安装依赖  
npm i

#运行  
npm run serve

#项目结构  
├─public              存放顶级页面  
├─src  
│  ├─api              后台接口   
│  │
│  ├─assets           图片资源    
│  │  │    
│  │  ├─index  		  
│  │  ├─products  	  
│  │  ├─news    
│  │  ├─about  	  
│  │  ├─brand    
│  │  ├─contact  	  
│  │  │    
│  │  ├─carousel      轮播图  
│  │  ├─common        公共图片  
│  │  └─goods         商品图片(总)  
│  │   
│  ├─components       公共组件  
│  │  └─elementUI.js  注册要使用的组件  
│  │  
│  ├─pages  
│  │  ├─index         首页  
│  │  │  └─views  
│  │  ├─products      产品页面  
│  │  │   └─views  
│  │  ├─about         关于页面  
│  │  │  └─views  
│  │  ├─brand         联系我们页面  
│  │  │  └─views  
│  │  ├─contact       品牌页面  
│  │  │  └─views  
│  │  └─news          新闻页面  
│  │   	 └─views  
│  │  
│  ├─store						状态管理  
│  │  └─modules  
│  │
│  └─utils  
│  │  ├─js  
│  │  │ └─utils.js        工具函数  
│	 │  └─css  
│  │    └─reset.css       重置样式  
│  │    └─animation.css   动画  
│	 │  
│  └─theme            统一风格  
└─static              静态资源  

#less,axios,fontawesome已配好  

  axios调用：vue.axios


#状态管理store分了模块  

  index.js模块的组装  
  actions.js顶级页面的提交操作  
  mutations.js顶级页面改变状态的操作  


#element-ul

  要使用的组件在components里的elementUI.js里注册   


#增加最顶级页面  

  在根目录下的vue.config.js里注册  


#增加顶级页面的子页面  

  添加在pages下子文件夹的views里  


#src下的utils文件夹  

  工具函数,模块导出,模块导入  


#assets文件夹  

  要加的图片放各自页面的img文件夹下  
  子文件夹下的goods不要加图片也不要引用,主要是为了你们好找图片,  
  上线后要删的，要用先看id再用assets>goods下的  

#哈木原网址(http://www.hamuoo.com/)  

#访问
http://localhost:8080/
