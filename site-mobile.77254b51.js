!function(n){function e(e){for(var a,l,r=e[0],s=e[1],c=e[2],m=0,f=[];m<r.length;m++)l=r[m],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(n[a]=s[a]);for(p&&p(e);f.length;)f.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],a=!0,r=1;r<t.length;r++){var s=t[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),n=l(l.s=t[0]))}return n}var a={},o={2:0},i=[];function l(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=n,l.c=a,l.d=function(n,e,t){l.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,e){if(1&e&&(n=l(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)l.d(t,a,function(e){return n[e]}.bind(null,a));return t},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="./";var r=window.webpackJsonp=window.webpackJsonp||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=s;i.push([267,0]),t()}({116:function(n,e,t){var a=t(3),o=t(269);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};a(o,i);n.exports=o.locals||{}},117:function(n,e,t){var a=t(3),o=t(271);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};a(o,i);n.exports=o.locals||{}},118:function(n,e,t){var a=t(3),o=t(273);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};a(o,i);n.exports=o.locals||{}},119:function(n,e,t){var a=t(3),o=t(275);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};a(o,i);n.exports=o.locals||{}},120:function(n,e,t){var a=t(3),o=t(277);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};a(o,i);n.exports=o.locals||{}},121:function(n,e,t){var a=t(3),o=t(279);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};a(o,i);n.exports=o.locals||{}},267:function(n,e,t){n.exports=t(282)},268:function(n,e,t){"use strict";t(116)},269:function(n,e,t){(e=t(4)(!1)).push([n.i,".van-doc-demo-block__title {\n  margin: 0;\n  padding: 32px 16px 16px;\n  color: rgba(69, 90, 100, 0.6);\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n}\n.van-doc-demo-block__card {\n  margin: 12px 12px 0;\n  overflow: hidden;\n  border-radius: 8px;\n}\n.van-doc-demo-block__title + .van-doc-demo-block__card {\n  margin-top: 0;\n}\n.van-doc-demo-block:first-of-type .van-doc-demo-block__title {\n  padding-top: 20px;\n}\n",""]),n.exports=e},270:function(n,e,t){"use strict";t(117)},271:function(n,e,t){(e=t(4)(!1)).push([n.i,".van-doc-demo-section {\n  box-sizing: border-box;\n  min-height: calc(100vh - 56px);\n  padding-bottom: 20px;\n}\n",""]),n.exports=e},272:function(n,e,t){"use strict";t(118)},273:function(n,e,t){(e=t(4)(!1)).push([n.i,".demo-home-nav__title {\n  margin: 24px 0 8px 16px;\n  color: rgba(69, 90, 100, 0.6);\n  font-size: 14px;\n}\n.demo-home-nav__block {\n  position: relative;\n  display: flex;\n  margin: 0 0 12px;\n  padding-left: 20px;\n  color: #323233;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 40px;\n  background: #f7f8fa;\n  border-radius: 99px;\n  transition: background 0.3s;\n}\n.demo-home-nav__block:hover {\n  background: #eef0f4;\n}\n.demo-home-nav__block:active {\n  background: #e4e8ee;\n}\n.demo-home-nav__icon {\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  width: 16px;\n  height: 16px;\n  margin-top: -8px;\n}\n",""]),n.exports=e},274:function(n,e,t){"use strict";t(119)},275:function(n,e,t){(e=t(4)(!1)).push([n.i,".demo-home {\n  box-sizing: border-box;\n  width: 100%;\n  min-height: 100vh;\n  padding: 46px 20px 20px;\n  background: #fff;\n}\n.demo-home__title,\n.demo-home__desc {\n  padding-left: 16px;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.demo-home__title {\n  margin: 0 0 16px;\n  font-size: 32px;\n}\n.demo-home__title img,\n.demo-home__title span {\n  display: inline-block;\n  vertical-align: middle;\n}\n.demo-home__title img {\n  width: 32px;\n}\n.demo-home__title span {\n  margin-left: 16px;\n}\n.demo-home__title--small {\n  font-size: 24px;\n}\n.demo-home__desc {\n  margin: 0 0 40px;\n  color: rgba(69, 90, 100, 0.6);\n  font-size: 14px;\n}\n",""]),n.exports=e},276:function(n,e,t){"use strict";t(120)},277:function(n,e,t){(e=t(4)(!1)).push([n.i,".demo-nav {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 56px;\n  background-color: #fff;\n}\n.demo-nav__title {\n  font-weight: 600;\n  font-size: 17px;\n  text-transform: capitalize;\n}\n.demo-nav__back {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n}\n",""]),n.exports=e},278:function(n,e,t){"use strict";t(121)},279:function(n,e,t){(e=t(4)(!1)).push([n.i,"/* cyrillic-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOX-hpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOVuhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXuhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOUehpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXehpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXOhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\nbody {\n  min-width: 1100px;\n  margin: 0;\n  overflow-x: auto;\n  color: #323233;\n  font-size: 16px;\n  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;\n  background-color: #f7f8fa;\n  -webkit-font-smoothing: antialiased;\n}\np {\n  margin: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  font-size: inherit;\n}\nul,\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n.van-doc-row {\n  width: 100%;\n}\n@media (min-width: 1680px) {\n.van-doc-row {\n    width: 1680px;\n    margin: 0 auto;\n}\n}\nbody {\n  min-width: 100vw;\n}\n::-webkit-scrollbar {\n  width: 0;\n  background: transparent;\n}\n",""]),n.exports=e},280:function(n,e){!function(){if("undefined"!=typeof window){var n,e="ontouchstart"in window;document.createTouch||(document.createTouch=function(n,e,a,o,i,l,r){return new t(e,a,{pageX:o,pageY:i,screenX:l,screenY:r,clientX:o-window.pageXOffset,clientY:i-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var n=o(),e=0;e<arguments.length;e++)n[e]=arguments[e];return n.length=arguments.length,n}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(n){var e=this;do{if(e.matches(n))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null});var t=function(n,e,t,a,o){a=a||0,o=o||0,this.identifier=e,this.target=n,this.clientX=t.clientX+a,this.clientY=t.clientY+o,this.screenX=t.screenX+a,this.screenY=t.screenY+o,this.pageX=t.pageX+a,this.pageY=t.pageY+o},a=!1;s.multiTouchOffset=75,e||new s}function o(){var n=[];return n.item=function(n){return this[n]||null},n.identifiedTouch=function(n){return this[n+1]||null},n}function i(e){return function(t){var o,i,s;("mousedown"===t.type&&(a=!0),"mouseup"===t.type&&(a=!1),"mousemove"!==t.type||a)&&(("mousedown"===t.type||!n||n&&!n.dispatchEvent)&&(n=t.target),null==n.closest("[data-no-touch-simulate]")&&(o=e,i=t,(s=document.createEvent("Event")).initEvent(o,!0,!0),s.altKey=i.altKey,s.ctrlKey=i.ctrlKey,s.metaKey=i.metaKey,s.shiftKey=i.shiftKey,s.touches=r(i),s.targetTouches=r(i),s.changedTouches=l(i),n.dispatchEvent(s)),"mouseup"===t.type&&(n=null))}}function l(e){var a=o();return a.push(new t(n,1,e,0,0)),a}function r(n){return"mouseup"===n.type?o():l(n)}function s(){window.addEventListener("mousedown",i("touchstart"),!0),window.addEventListener("mousemove",i("touchmove"),!0),window.addEventListener("mouseup",i("touchend"),!0)}}()},282:function(n,e,t){"use strict";t.r(e);var a=t(1),o={name:"demo-block",props:{card:Boolean,title:String}},i=(t(268),t(0)),l=Object(i.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"van-doc-demo-block"},[n.title?t("h2",{staticClass:"van-doc-demo-block__title"},[n._v(n._s(n.title))]):n._e(),n.card?t("div",{staticClass:"van-doc-demo-block__card"},[n._t("default")],2):n._t("default")],2)}),[],!1,null,null,null).exports,r=t(14),s={name:"demo-section",computed:{demoName:function(){var n=(this.$route||{}).meta;return n&&n.name?"demo-".concat(Object(r.a)(n.name)):""}}},c=(t(270),Object(i.a)(s,(function(){var n=this.$createElement;return(this._self._c||n)("section",{staticClass:"van-doc-demo-section",class:this.demoName},[this._t("default")],2)}),[],!1,null,null,null).exports),p=t(18),m=t(55),f=(t(87),t(20)),u=t(38),d=t(39),h=t(40),g=t(41),v=t(21),b=t(22),_=t(23),y=t(24),U=t(42),w=t(25),x=t(26),O=t(27),S=t(43),F=Object(i.a)({},(function(){var n=this.$createElement;return(this._self._c||n)("tm-progress")}),[],!1,null,null,null).exports,k=t(28),B=t(29),A=t(30),T=t(44),E=t(31),C=t(32),j=t(45),M=t(33),z=t(34),P=t(46),Y=t(35),D=t(36),K=t(37);a.default.use(m.a),f.a.name="demo-avatar",u.a.name="demo-avatarCard",d.a.name="demo-block",h.a.name="demo-button",g.a.name="demo-buttonTabs",v.a.name="demo-collapseText",b.a.name="demo-dateRange",_.a.name="demo-deptTree",y.a.name="demo-dialog",U.a.name="demo-empty",w.a.name="demo-icon",x.a.name="demo-message",O.a.name="demo-optionalPicker",S.a.name="demo-pagination",F.name="demo-progress",k.a.name="demo-search",B.a.name="demo-steps",A.a.name="demo-tabs",T.a.name="demo-tag",E.a.name="demo-tagCombo",C.a.name="demo-tagGroup",j.a.name="demo-tagPro",M.a.name="demo-timeline",z.a.name="demo-tip",P.a.name="demo-title",Y.a.name="demo-tree",D.a.name="demo-upload",K.a.name="demo-vTitle";var R={Avatar:f.a,AvatarCard:u.a,Block:d.a,Button:h.a,ButtonTabs:g.a,CollapseText:v.a,DateRange:b.a,DeptTree:_.a,Dialog:y.a,Empty:U.a,Icon:w.a,Message:x.a,OptionalPicker:O.a,Pagination:S.a,Progress:F,Search:k.a,Steps:B.a,Tabs:A.a,Tag:T.a,TagCombo:E.a,TagGroup:C.a,TagPro:j.a,Timeline:M.a,Tip:z.a,Title:P.a,Tree:Y.a,Upload:D.a,VTitle:K.a},G={name:"tm-design",build:{css:{preprocessor:"less"},site:{publicPath:"./"},namedExport:!0},site:{title:"tm-design",logo:"https://dev.tanmarket.cn/site/logo.png",hideSimulator:!0,baiduAnalytics:{seed:"f59e812c45db896c796d182c59148734"},nav:[{title:"基础组件",items:[{path:"button",title:"Button 按钮"},{path:"icon",title:"Icon 图标"},{path:"title",title:"Title 标题"}]},{title:"表单组件",items:[{path:"optional-picker",title:"OptionalPicker 日周月选择器"},{path:"search",title:"Search 搜索框"},{path:"upload",title:"Upload 上传"}]},{title:"展示组件",items:[{path:"avatar",title:"Avatar 头像"},{path:"collapse-text",title:"CollapseText 折叠文本"},{path:"empty",title:"Empty 空状态"},{path:"pagination",title:"Pagination 分页"},{path:"tabs",title:"Tabs 标签页"},{path:"tag",title:"Tag 标签"},{path:"tag-pro",title:"TagPro 标签"},{path:"tag-group",title:"TagGroup 标签组"},{path:"timeline",title:"Timeline 时间线"},{path:"tree",title:"Tree 树"},{path:"button-tabs",title:"ButtonTabs 标签按钮"}]},{title:"导航组件",items:[{path:"steps",title:"Steps 步骤条"}]},{title:"反馈组件",items:[{path:"dialog",title:"Dialog 对话框"},{path:"message",title:"Message 消息提示"},{path:"tip",title:"Tip 文字提示"},{path:"v-title",title:"vTitle 提示"}]},{title:"业务组件",items:[{path:"avatar-card",title:"AvatarCard 头像卡片"},{path:"block",title:"Block 内容块"},{path:"date-range",title:"DateRange 日期范围"},{path:"dept-tree",title:"DeptTree 部门员工选择"},{path:"progress",title:"Progress 进度条"},{path:"tag-combo",title:"TagCombo 标签组合"}]}]}},Z={components:{ArrowRight:Object(i.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("svg",{attrs:{viewBox:"0 0 1024 1024"}},[e("path",{attrs:{fill:"#B6C3D2",d:"M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"}}),e("path",{attrs:{fill:"#B6C3D2",d:"M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"}})])}),[],!1,null,null,null).exports},props:{lang:String,group:Object},data:function(){return{active:[]}},computed:{base:function(){return this.lang?"/".concat(this.lang):""}}},N=(t(272),{components:{DemoHomeNav:Object(i.a)(Z,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"demo-home-nav"},[t("div",{staticClass:"demo-home-nav__title"},[n._v(n._s(n.group.title))]),t("div",{staticClass:"demo-home-nav__group"},n._l(n.group.items,(function(e){return t("router-link",{key:e.path,class:["demo-home-nav__block",e.className],attrs:{to:n.base+"/"+e.path}},[n._v("\n      "+n._s(e.title)+"\n      "),t("arrow-right",{staticClass:"demo-home-nav__icon"})],1)})),1)])}),[],!1,null,null,null).exports},computed:{lang:function(){var n=this.$route.meta.lang;return n},config:function(){var n=G.site.locales;return n?n[this.lang]:G.site},smallTitle:function(){return this.config.title.length>=8}}}),X=(t(274),Object(i.a)(N,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"demo-home"},[t("h1",{staticClass:"demo-home__title",class:{"demo-home__title--small":n.smallTitle}},[t("img",{attrs:{src:n.config.logo}}),t("span",[n._v(n._s(n.config.title))])]),n.config.description?t("h2",{staticClass:"demo-home__desc"},[n._v("\n    "+n._s(n.config.description)+"\n  ")]):n._e(),n._l(n.config.nav,(function(e,a){return[t("demo-home-nav",{key:a,attrs:{group:e,lang:n.lang}})]}))],2)}),[],!1,null,null,null).exports),$=t(13),L=t(17),W=G.site,H=W.locales,V=W.defaultLang;Object($.b)(V),a.default.use(p.a);var I,J,q,Q=new p.a({mode:"hash",routes:(I=[],J=Object.keys(R),q=H?Object.keys(H):[],q.length?(I.push({path:"*",redirect:function(n){return"/".concat(function(n){var e=n.path.split("/")[1];return-1!==Object.keys(H).indexOf(e)?e:Object($.a)()}(n),"/")}}),q.forEach((function(n){I.push({path:"/".concat(n),component:X,meta:{lang:n}})}))):(I.push({path:"*",redirect:function(){return"/"}}),I.push({path:"/",component:X})),J.forEach((function(n){var e=Object(r.a)(n);q.length?q.forEach((function(t){I.push({name:"".concat(t,"/").concat(e),path:"/".concat(t,"/").concat(e),component:R[n],meta:{name:n,lang:t}})})):I.push({name:n,path:"/".concat(e),component:R[n],meta:{name:n}})})),I),scrollBehavior:function(n,e,t){return t||{x:0,y:0}}});Q.afterEach((function(){Q.currentRoute.redirectedFrom||Object(L.c)()})),Object(L.a)(Q),window.vueRouter=Q;var nn={data:function(){return{path:"M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"}},computed:{title:function(){var n=(this.$route.meta||{}).name;return n?n.replace(/-/g,""):""}},methods:{onBack:function(){history.length>1?history.back():this.$router.replace("/")}}},en=(t(276),{components:{DemoNav:Object(i.a)(nn,(function(){var n=this.$createElement,e=this._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.title,expression:"title"}],staticClass:"demo-nav"},[e("div",{staticClass:"demo-nav__title"},[this._v(this._s(this.title))]),e("svg",{staticClass:"demo-nav__back",attrs:{viewBox:"0 0 1000 1000"},on:{click:this.onBack}},[e("path",{attrs:{fill:"#969799","fill-rule":"evenodd",d:this.path}})])])}),[],!1,null,null,null).exports}}),tn=(t(278),Object(i.a)(en,(function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("demo-nav"),e("keep-alive",[e("router-view")],1)],1)}),[],!1,null,null,null).exports);t(280);a.default.component(l.name,l),a.default.component(c.name,c),setTimeout((function(){new a.default({el:"#app",render:function(n){return n(tn)},router:Q})}),0)}});