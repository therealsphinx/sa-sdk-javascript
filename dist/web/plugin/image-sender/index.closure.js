!function(){"use strict";function n(n,e,r){if(e&&(n.plugin_name=e),r&&n.init){var t=n.init;n.init=function(e,a){function i(){t.call(n,e,a)}return e.readyState&&e.readyState.state>=3||!e.on?i():void e.on(r,i)}}return n}function e(e,r,t){return n(e,r,t),e.plugin_version=s,e}function r(n,e){var r=u.kit.encodeTrackData(e);return n.indexOf("?")!==-1?n+"&"+r:n+"?"+r}function t(n){var e=new c.ImageSend(n);e.start()}function a(n,e){var a=n.server_url;n.data=r(a,n.data),c.isArray(a)&&a.length?c.each(a,function(e){n.callback=null,n.server_url=e,t(n)}):"string"==typeof u.para.server_url&&""!==u.para.server_url?t(n):u.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"),e.cancellationToken.stop()}function i(){"image"!==u.para.send_type&&"ajax"!==u.para.send_type&&"beacon"!==u.para.send_type&&(u.para.send_type="image")}function o(){u.on("sdkInitPara",function(){i()}),u.on("sdkAfterInitPara",function(){u.registerInterceptor("sendDataStage",{send:{priority:130,entry:a}})})}var u,c,s="1.24.15",l={plugin_name:"ImageSender",init:function(n){u=n,c=u._,o()}},f=e(l);return f}();