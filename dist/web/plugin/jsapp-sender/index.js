(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).JsappSender=function(){"use strict";function n(n,t,e){if(t&&(n.plugin_name=t),e&&n.init){var i=n.init;n.init=function(r,o){function p(){i.call(n,r,o)}return a(r,n,t),r.readyState&&r.readyState.state>=3||!r.on?p():void r.on(e,p)}}return n}function a(n,a,t){function e(a,e){n.logger?n.logger.msg.apply(n.logger,e).module(t+""||"").level(a).log():n.log&&n.log.apply(n,e)}a.log=function(){e("log",arguments)},a.warn=function(){e("warn",arguments)},a.error=function(){e("error",arguments)}}function t(a,t,e){return n(a,t,e),a.plugin_version=s,a}function e(n,a){if(p.isObject(o.para.jsapp)&&!o.para.jsapp.isOnline&&"function"==typeof o.para.jsapp.setData){var t=n;delete t.callback,t=JSON.stringify(t),o.para.jsapp.setData(t),a.cancellationToken.stop()}return n}function i(){o.on("sdkAfterInitAPI",function(){p.isObject(o.commonWays)&&(o.commonWays.setOnlineState=r),o.registerInterceptor("sendDataStage",{send:{priority:40,entry:e}})})}function r(n){if(n===!0&&p.isObject(o.para.jsapp)&&"function"==typeof o.para.jsapp.getData){o.para.jsapp.isOnline=!0;var a=o.para.jsapp.getData();p.isArray(a)&&a.length>0&&p.each(a,function(n){p.isJSONString(n)&&o.kit.sendData(JSON.parse(n))})}else o.para.jsapp.isOnline=!1}var o,p,s="1.25.15",c={plugin_name:"JsappSender",init:function(n){o=n,p=o._,i()}},l=t(c);return l}();