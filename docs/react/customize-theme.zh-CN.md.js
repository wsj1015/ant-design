webpackJsonp([122],{1934:function(s,n){s.exports={content:["article",["p","Ant Design \u8bbe\u8ba1\u89c4\u8303\u4e0a\u652f\u6301\u4e00\u5b9a\u7a0b\u5ea6\u7684\u6837\u5f0f\u5b9a\u5236\uff0c\u4ee5\u6ee1\u8db3\u4e1a\u52a1\u548c\u54c1\u724c\u4e0a\u591a\u6837\u5316\u7684\u89c6\u89c9\u9700\u6c42\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4e3b\u8272\u3001\u5706\u89d2\u3001\u8fb9\u6846\u548c\u90e8\u5206\u7ec4\u4ef6\u7684\u89c6\u89c9\u5b9a\u5236\u3002"],["p",["img",{title:null,src:"https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png",alt:"\u4e00\u4e9b\u914d\u7f6e\u597d\u7684\u4e3b\u9898"}]],["h2","Ant Design \u7684\u6837\u5f0f\u53d8\u91cf"],["p","antd \u7684\u6837\u5f0f\u4f7f\u7528\u4e86 ",["a",{title:null,href:"http://lesscss.org/"},"Less"]," \u4f5c\u4e3a\u5f00\u53d1\u8bed\u8a00\uff0c\u5e76\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217\u5168\u5c40/\u7ec4\u4ef6\u7684\u6837\u5f0f\u53d8\u91cf\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u8fdb\u884c\u76f8\u5e94\u8c03\u6574\u3002"],["p","\u4ee5\u4e0b\u662f\u4e00\u4e9b\u6700\u5e38\u7528\u7684\u901a\u7528\u53d8\u91cf\uff0c\u6240\u6709\u6837\u5f0f\u53d8\u91cf\u53ef\u4ee5\u5728 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"},"\u8fd9\u91cc"]," \u627e\u5230\u3002"],["pre",{lang:"less",highlighted:'<span class="token variable">@primary-color<span class="token punctuation">:</span></span> <span class="token hexcode">#1890ff</span><span class="token punctuation">;</span>                         <span class="token comment" spellcheck="true">// \u5168\u5c40\u4e3b\u8272</span>\n<span class="token variable">@link-color<span class="token punctuation">:</span></span> <span class="token hexcode">#1890ff</span><span class="token punctuation">;</span>                            <span class="token comment" spellcheck="true">// \u94fe\u63a5\u8272</span>\n<span class="token variable">@success-color<span class="token punctuation">:</span></span> <span class="token hexcode">#52c41a</span><span class="token punctuation">;</span>                         <span class="token comment" spellcheck="true">// \u6210\u529f\u8272</span>\n<span class="token variable">@warning-color<span class="token punctuation">:</span></span> <span class="token hexcode">#faad14</span><span class="token punctuation">;</span>                         <span class="token comment" spellcheck="true">// \u8b66\u544a\u8272</span>\n<span class="token variable">@error-color<span class="token punctuation">:</span></span> <span class="token hexcode">#f5222d</span><span class="token punctuation">;</span>                           <span class="token comment" spellcheck="true">// \u9519\u8bef\u8272</span>\n<span class="token variable">@font-size-base<span class="token punctuation">:</span></span> <span class="token number">14</span>px<span class="token punctuation">;</span>                           <span class="token comment" spellcheck="true">// \u4e3b\u5b57\u53f7</span>\n<span class="token variable">@heading-color<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">.85</span><span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment" spellcheck="true">// \u6807\u9898\u8272</span>\n<span class="token variable">@text-color<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">.65</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment" spellcheck="true">// \u4e3b\u6587\u672c\u8272</span>\n<span class="token variable">@text-color-secondary <span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">.45</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment" spellcheck="true">// \u6b21\u6587\u672c\u8272</span>\n<span class="token variable">@disabled-color <span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">.25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment" spellcheck="true">// \u5931\u6548\u8272</span>\n<span class="token variable">@border-radius-base<span class="token punctuation">:</span></span> <span class="token number">4</span>px<span class="token punctuation">;</span>                        <span class="token comment" spellcheck="true">// \u7ec4\u4ef6/\u6d6e\u5c42\u5706\u89d2</span>\n<span class="token variable">@border-color-base<span class="token punctuation">:</span></span> <span class="token hexcode">#d9d9d9</span><span class="token punctuation">;</span>                     <span class="token comment" spellcheck="true">// \u8fb9\u6846\u8272</span>\n<span class="token variable">@box-shadow-base<span class="token punctuation">:</span></span> <span class="token number">0</span> <span class="token number">2</span>px <span class="token number">8</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">.15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// \u6d6e\u5c42\u9634\u5f71</span>'},["code","@primary-color: #1890ff;                         // \u5168\u5c40\u4e3b\u8272\n@link-color: #1890ff;                            // \u94fe\u63a5\u8272\n@success-color: #52c41a;                         // \u6210\u529f\u8272\n@warning-color: #faad14;                         // \u8b66\u544a\u8272\n@error-color: #f5222d;                           // \u9519\u8bef\u8272\n@font-size-base: 14px;                           // \u4e3b\u5b57\u53f7\n@heading-color: rgba(0, 0, 0, .85);              // \u6807\u9898\u8272\n@text-color: rgba(0, 0, 0, .65);                 // \u4e3b\u6587\u672c\u8272\n@text-color-secondary : rgba(0, 0, 0, .45);      // \u6b21\u6587\u672c\u8272\n@disabled-color : rgba(0, 0, 0, .25);            // \u5931\u6548\u8272\n@border-radius-base: 4px;                        // \u7ec4\u4ef6/\u6d6e\u5c42\u5706\u89d2\n@border-color-base: #d9d9d9;                     // \u8fb9\u6846\u8272\n@box-shadow-base: 0 2px 8px rgba(0, 0, 0, .15);  // \u6d6e\u5c42\u9634\u5f71"]],["p","\u5982\u679c\u4ee5\u4e0a\u53d8\u91cf\u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u5b9a\u5236\u9700\u6c42\uff0c\u53ef\u4ee5\u7ed9\u6211\u4eec\u63d0 issue\u3002"],["h2","\u5b9a\u5236\u65b9\u5f0f"],["p","\u539f\u7406\u4e0a\u662f\u4f7f\u7528 less \u63d0\u4f9b\u7684 ",["a",{title:null,href:"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"},"modifyVars"]," \u7684\u65b9\u5f0f\u8fdb\u884c\u8986\u76d6\u53d8\u91cf\uff0c\u53ef\u4ee5\u5728\u672c\u5730\u8fd0\u884c ",["a",{title:null,href:"https://github.com/ant-design/create-react-app-antd"},"\u4f8b\u5b50"]," \u67e5\u770b\u5b9a\u5236\u6548\u679c\u3002\u4e0b\u9762\u5c06\u9488\u5bf9\u4e0d\u540c\u7684\u573a\u666f\u63d0\u4f9b\u4e00\u4e9b\u5e38\u7528\u7684\u5b9a\u5236\u65b9\u5f0f\u3002"],["h3","\u5728 webpack \u4e2d\u5b9a\u5236\u4e3b\u9898"],["p","\u6211\u4eec\u4ee5 webpack@4 \u4e3a\u4f8b\u8fdb\u884c\u8bf4\u660e\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e2a ",["code","webpack.config.js"]," \u7684\u5178\u578b\u4f8b\u5b50\uff0c\u5bf9 ",["a",{title:null,href:"https://github.com/webpack-contrib/less-loader"},"less-loader"]," \u7684 options \u5c5e\u6027\u8fdb\u884c\u76f8\u5e94\u914d\u7f6e\u3002"],["pre",{lang:"diff",highlighted:"// webpack.config.js\nmodule.exports = {\n  rules: [{\n    test: /\\.less$/,\n    use: [{\n      loader: 'style-loader',\n    }, {\n      loader: 'css-loader', // translates CSS into CommonJS\n    }, {\n      loader: 'less-loader', // compiles Less to CSS\n<span class=\"token inserted\">+     options: {</span>\n<span class=\"token inserted\">+       modifyVars: {</span>\n<span class=\"token inserted\">+         'primary-color': '#1DA57A',</span>\n<span class=\"token inserted\">+         'link-color': '#1DA57A',</span>\n<span class=\"token inserted\">+         'border-radius-base': '2px',</span>\n<span class=\"token inserted\">+       },</span>\n<span class=\"token inserted\">+       javascriptEnabled: true,</span>\n<span class=\"token inserted\">+     },</span>\n    }],\n    // ...other rules\n  }],\n  // ...other config\n}"},["code","// webpack.config.js\nmodule.exports = {\n  rules: [{\n    test: /\\.less$/,\n    use: [{\n      loader: 'style-loader',\n    }, {\n      loader: 'css-loader', // translates CSS into CommonJS\n    }, {\n      loader: 'less-loader', // compiles Less to CSS\n+     options: {\n+       modifyVars: {\n+         'primary-color': '#1DA57A',\n+         'link-color': '#1DA57A',\n+         'border-radius-base': '2px',\n+       },\n+       javascriptEnabled: true,\n+     },\n    }],\n    // ...other rules\n  }],\n  // ...other config\n}"]],["p","\u6ce8\u610f less-loader \u7684\u5904\u7406\u8303\u56f4\u4e0d\u8981\u8fc7\u6ee4\u6389 ",["code","node_modules"]," \u4e0b\u7684 antd \u5305\u3002"],["h3","\u5728 roadhog \u6216 Umi \u91cc\u914d\u7f6e\u4e3b\u9898"],["p","\u5982\u679c\u4f60\u5728\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/sorrycc/roadhog"},"roadhog"]," \u6216\u8005 ",["a",{title:null,href:"http://umijs.org/"},"Umi"],"\uff0c\u90a3\u4e48\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5728\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/b7e7983661eb5e53dc807452e9653e93e74276d4/.webpackrc.js#L18"},".webpackrc"],"\uff08roadhog\uff09\u6216 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/56e648ec14bdb9f6724169fd64830447e224ccb1/config/config.js#L45"},"config/config.js"],"\uff08Umi\uff09\u6587\u4ef6\u4e2d ",["code","theme"]," \u5b57\u6bb5\u8fdb\u884c\u4e3b\u9898\u914d\u7f6e\u3002",["code","theme"]," \u53ef\u4ee5\u914d\u7f6e\u4e3a\u4e00\u4e2a\u5bf9\u8c61\u6216\u6587\u4ef6\u8def\u5f84\u3002"],["pre",{lang:"js",highlighted:'<span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token string">"primary-color"</span><span class="token punctuation">:</span> <span class="token string">"#1DA57A"</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>'},["code",'"theme": {\n  "primary-color": "#1DA57A",\n},']],["p","\u6216\u8005 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/b7e7983661eb5e53dc807452e9653e93e74276d4/.webpackrc.js#L18"},"\u4e00\u4e2a js \u6587\u4ef6"],"\uff1a"],["pre",{lang:"js",highlighted:'<span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token string">"./theme.js"</span><span class="token punctuation">,</span>'},["code",'"theme": "./theme.js",']],["h3","\u5728 create-react-app \u4e2d\u5b9a\u5236\u4e3b\u9898"],["p","\u53c2\u8003 ",["a",{title:null,href:"/docs/react/use-with-create-react-app"},"\u5728 create-react-app \u4e2d\u4f7f\u7528"]," \u8fdb\u884c\u914d\u7f6e\u5373\u53ef\u3002"],["h3","\u914d\u7f6e less \u53d8\u91cf\u6587\u4ef6"],["p","\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f\u662f\u5efa\u7acb\u4e00\u4e2a\u5355\u72ec\u7684 ",["code","less"]," \u53d8\u91cf\u6587\u4ef6\uff0c\u5f15\u5165\u8fd9\u4e2a\u6587\u4ef6\u8986\u76d6 ",["code","antd.less"]," \u91cc\u7684\u53d8\u91cf\u3002"],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"~antd/dist/antd.less"</span><span class="token punctuation">;</span></span>   // \u5f15\u5165\u5b98\u65b9\u63d0\u4f9b\u7684 less \u6837\u5f0f\u5165\u53e3\u6587\u4ef6\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"your-theme-file.less"</span><span class="token punctuation">;</span></span>   // \u7528\u4e8e\u8986\u76d6\u4e0a\u9762\u5b9a\u4e49\u7684\u53d8\u91cf'},["code",'@import "~antd/dist/antd.less";   // \u5f15\u5165\u5b98\u65b9\u63d0\u4f9b\u7684 less \u6837\u5f0f\u5165\u53e3\u6587\u4ef6\n@import "your-theme-file.less";   // \u7528\u4e8e\u8986\u76d6\u4e0a\u9762\u5b9a\u4e49\u7684\u53d8\u91cf']],["p","\u6ce8\u610f\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5df2\u7ecf\u8f7d\u5165\u4e86\u6240\u6709\u7ec4\u4ef6\u7684\u6837\u5f0f\uff0c\u4e0d\u9700\u8981\u4e5f\u65e0\u6cd5\u548c\u6309\u9700\u52a0\u8f7d\u63d2\u4ef6 ",["code","babel-plugin-import"]," \u7684 ",["code","style"]," \u5c5e\u6027\u4e00\u8d77\u4f7f\u7528\u3002"],["h2","\u6ca1\u6709\u751f\u6548\uff1f"],["p","\u6ce8\u610f\u6837\u5f0f\u5fc5\u987b\u52a0\u8f7d less \u683c\u5f0f\uff0c\u4e00\u4e2a\u5e38\u89c1\u7684\u95ee\u9898\u5c31\u662f\u5f15\u5165\u4e86\u591a\u4efd\u6837\u5f0f\uff0cless \u7684\u6837\u5f0f\u88ab css \u7684\u6837\u5f0f\u8986\u76d6\u4e86\u3002"],["ul",["li",["p","\u5982\u679c\u4f60\u5728\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," \u7684 ",["code","style"]," \u914d\u7f6e\u6765\u5f15\u5165\u6837\u5f0f\uff0c\u9700\u8981\u5c06\u914d\u7f6e\u503c\u4ece ",["code","'css'"]," \u6539\u4e3a ",["code","true"],"\uff0c\u8fd9\u6837\u4f1a\u5f15\u5165 less \u6587\u4ef6\u3002"]],["li",["p","\u5982\u679c\u4f60\u662f\u901a\u8fc7 ",["code","'antd/dist/antd.css'"]," \u5f15\u5165\u6837\u5f0f\u7684\uff0c\u6539\u4e3a ",["code","antd/dist/antd.less"],"\u3002"]]],["h2","\u793e\u533a\u6559\u7a0b"],["ul",["li",["p",["a",{title:null,href:"https://intoli.com/blog/antd-scss-theme-plugin/"},"Using Ant Design in Sass-Styled Webpack Projects with ",["code","antd-scss-theme-plugin"]]]],["li",["p",["a",{title:null,href:"https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f"},"How to Customize Ant Design with React & Webpack\u2026 the Missing Guide"]]],["li",["p",["a",{title:null,href:"https://gist.github.com/Kruemelkatze/057f01b8e15216ae707dc7e6c9061ef7"},"Theming Ant Design with Sass and Webpack"]]],["li",["p",["a",{title:null,href:"https://medium.com/@mzohaib.qc/using-sass-scss-with-react-app-create-react-app-d03072083ef8"},"Using Sass/Scss with React App (create-react-app)"]]],["li",["p",["a",{title:null,href:"https://medium.com/@mzohaib.qc/ant-design-dynamic-runtime-theme-1f9a1a030ba0"},"Dynamic Theming in Browser using Ant Design"]]]]],meta:{order:5,title:"\u5b9a\u5236\u4e3b\u9898",filename:"docs/react/customize-theme.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Ant-Design-\u7684\u6837\u5f0f\u53d8\u91cf",title:"Ant Design \u7684\u6837\u5f0f\u53d8\u91cf"},"Ant Design \u7684\u6837\u5f0f\u53d8\u91cf"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5b9a\u5236\u65b9\u5f0f",title:"\u5b9a\u5236\u65b9\u5f0f"},"\u5b9a\u5236\u65b9\u5f0f"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6ca1\u6709\u751f\u6548\uff1f",title:"\u6ca1\u6709\u751f\u6548\uff1f"},"\u6ca1\u6709\u751f\u6548\uff1f"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u793e\u533a\u6559\u7a0b",title:"\u793e\u533a\u6559\u7a0b"},"\u793e\u533a\u6559\u7a0b"]]]}}});