'use strict';!function(require,directRequire){function a(a,b){return function(){return b(a.apply(void 0,arguments))}}const b=require('url'),c=require('querystring'),d=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),e=require('./common/locales/index.js'),f=require('redux'),g=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),h=require('./9fdd4ac31a05c27355910f0d74accd4c.js');module.exports={parseCgiErrorCode:function(a,b){let c=e.config;return a===d.NOT_LOGIN||a===d.INVALID_LOGIN||a===d.INVALID_TOKEN||a===d.DEV_INVALID_SIGNATURE||a===d.DEV_NEED_RELOGIN?c.CGI_ERR_NEED_RELOGIN:a===d.NOT_LIMITS_CARD?c.CGI_ERR_NO_PERMISSION:a===d.DEV_APP_NOT_BAND?c.CGI_ERR_NOT_BAND:a===d.DEV_NEED_ADMIN?c.CGI_ERR_NEED_ADMIN:a===d.DEV_NEED_UPDATE?c.CGI_ERR_NEED_UPDATE:a===d.DEV_NEED_SCAN_CODE?c.CGI_ERR_NEED_SCAN_CODE:a===d.DEV_COMPILE_EMPTY_SOURCE?c.CGI_ERR_EMPTY_SOURCE:a===d.DEV_COMPILE_SOURCE_MAX_LIMIT?c.CGI_ERR_SOURCE_MAX_LIMIT:a===d.DEV_COMPILE_WXPKG_MAX_LIMIT?c.CGI_ERR_WXPKG_MAX_LIMIT:a===d.DEV_COMPILE_INVALID_WXPKG?c.CGI_ERR_INVALID_WXPKG:a===d.DEV_COMPILE_WXML_FAIL?c.CGI_ERR_WXML_FAIL.format(b):a===d.DEV_COMPILE_WXSS_FAIL?c.CGI_ERR_WXSS_FAIL.format(b):a===d.DEV_COMPILE_INVALID_FILE?c.CGI_ERR_INVALID_FILE.format(b):a===d.DEV_COMPILE_INVALID_JSON_FILE?c.CGI_ERR_INVALID_JSON:a===d.DEV_COMPILE_LACK_OF_FILE?c.CGI_ERR_LACK_OF_FILE.format(b):a===d.DEV_BIND_NOT_24H?c.CGI_ERR_BIND_NOT_24H:a===d.DEV_PLATFORM_NOT_BAND_DEV?c.CGI_ERR_PLATFORM_NOT_BAND:a===d.DEV_PLATFORM_INVALID_EXT_APPID?c.CGI_ERR_PLATFORM_INVALID_EXT_APPID:a===d.DEV_PLATFORM_EXT_APPID_NOT_AUTH?c.CGI_ERR_PLATFORM_EXT_APPID_NOT_AUTH:a===d.NOT_LIMITS?c.CGI_ERR_NOT_LIMITS:a===d.NOT_LIMITS_QY?c.CGI_ERR_NOT_LIMITS_QY:a===d.DEV_INVALID_APPID?c.CGI_ERR_DEV_INVALID_APPID:a===d.DEV_CLOUD_NO_PERMISSION?c.CGI_ERR_DEV_CLOUD_NO_PERMISSION:a===d.DEV_CLOUD_NO_PRODUCT_ENV?c.CGI_ERR_DEV_CLOUD_NO_PRODUCT_ENV:a===d.DEV_CLOUD_INVALID_RESP_DATA?c.CGI_ERR_DEV_CLOUD_INVALID_RESP_DATA:a===d.DEV_CLOUD_SYNC_CALLBACK_ERR||a===d.DEV_CLOUD_ASYNC_CALLBACK_ERR?c.CGI_ERR_DEV_CLOUD_CALLBACK_ERR.format(a):a===d.DEV_CLOUD_NO_CLOUD_ACCOUNT?c.CGI_ERR_DEV_CLOUD_NO_CLOUD_ACCOUNT:a===d.DEV_CLOUD_EVENT_EXPIRED?c.CGI_ERR_DEV_CLOUD_EVENT_EXPIRED:a===d.DEV_CLOUD_INVALID_ACTION?c.CGI_ERR_DEV_CLOUD_INVALID_ACTION:b||a},parseUrl:function(a){let d=b.parse(a);return{pathName:d.pathname.replace(/\.html$/,''),query:c.parse(d.query)}},getProjectHashFromURL:function(a){let b=a.replace(/https?:\/\//,'').split('.');return b[0]},bindActionCreators:function(b,c){if('[object Function]'==Object.prototype.toString.call(b))return a(b,c);for(var d=Object.keys(b),e={},f=0;f<d.length;f++){var g=d[f],h=b[g];'[object Function]'==Object.prototype.toString.call(h)&&(e[g]=a(h,c))}return e},getWidgetOffset:function(a,b){if(a==h.search)return{width:b.screenWidth-30,height:(b.screenWidth-30)*g.default_search_widget_radio};if(a==h.conversation){let a=0.6*b.screenWidth;return('iPhone 6'==b.title||'iPhone 6 Plus'==b.title)&&(a=0.56*b.screenWidth),{height:a*g.default_conversation_widget_radio,width:a}}},getWidgetDirectory:function(a,b){try{for(let c,d=0,e=b.widgets.length;d<e;d++)if(c=b.widgets[d],c.type==a)return c.path}catch(a){}return''},strToHash:function(a){let b,c,d,e=0;if(0===a.length)return e;for(b=0,d=a.length;b<d;b++)c=a.charCodeAt(b),e=(e<<5)-e+c,e|=0;return 0<e?e:0-e}}}(require('lazyload'),require);