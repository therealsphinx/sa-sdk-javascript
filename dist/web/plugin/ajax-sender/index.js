(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).AjaxSender=function(){"use strict";function n(n,e,t){if(e&&(n.plugin_name=e),t&&n.init){var a=n.init;n.init=function(i,o){function u(){a.call(n,i,o)}return r(i,n,e),i.readyState&&i.readyState.state>=3||!i.on?u():void i.on(t,u)}}return n}function r(n,r,e){function t(r,t){n.logger?n.logger.msg.apply(n.logger,t).module(e+""||"").level(r).log():n.log&&n.log.apply(n,t)}r.log=function(){t("log",arguments)},r.warn=function(){t("warn",arguments)},r.error=function(){t("error",arguments)}}function e(r,e,t){return n(r,e,t),r.plugin_version=s,r}function t(n){var r=new l.AjaxSend(n);r.start()}function a(n,r){var e=null,a=null;l.isObject(n.config)&&(e=n.config.send_type,a=l.optimizeServerUrl(n.config.server_url));var i="ajax"===e||!e&&"ajax"===u.para.send_type;if(i&&l.isSupportCors()){var o=a||n.server_url;n.server_url=o,n.data=u.kit.encodeTrackData(n.data),l.isArray(o)&&o.length?l.each(o,function(r){n.callback=null,n.server_url=r,t(n)}):"string"==typeof o&&""!==o?t(n):u.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"),r.cancellationToken.stop()}return n}function i(){"ajax"!==u.para.send_type||l.isSupportCors()||(u.para.send_type="image")}function o(){u.on("sdkInitPara",function(){i()}),u.on("sdkAfterInitPara",function(){u.registerInterceptor("sendDataStage",{send:{priority:120,entry:a}})})}var u,l,s="1.25.15",c={plugin_name:"AjaxSender",init:function(n){u=n,l=u._,o()}},g=e(c);return g}();