(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).DebugSender=function(){"use strict";function e(e,r,a){if(r&&(e.plugin_name=r),a&&e.init){var n=e.init;e.init=function(r,t){function u(){n.call(e,r,t)}return r.readyState&&r.readyState.state>=3||!r.on?u():void r.on(a,u)}}return e}function r(r,a,n){return e(r,a,n),r.plugin_version=o,r}function a(e){var r=e,a="";a=i.para.debug_mode_url.indexOf("?")!==-1?i.para.debug_mode_url+"&"+i.kit.encodeTrackData(e):i.para.debug_mode_url+"?"+i.kit.encodeTrackData(e),d.ajax({url:a,type:"GET",cors:!0,header:{"Dry-Run":String(i.para.debug_mode_upload)},success:function(e){d.isEmptyObject(e)===!0?alert("debug\u6570\u636e\u53d1\u9001\u6210\u529f"+r):alert("debug\u5931\u8d25 \u9519\u8bef\u539f\u56e0"+JSON.stringify(e))}})}function n(e,r){if(i.para.debug_mode===!0){var n=e.data;e.callback;a(JSON.stringify(n)),r.cancellationToken.stop()}return e}function t(){i.para.debug_mode===!0&&(i.para.debug_mode_upload=i.para.debug_mode_upload||!1,d.isString(i.para.debug_mode_url)||(d.isString(i.para.server_url)?i.para.debug_mode_url=i.para.server_url.replace("sa.gif","debug"):d.isArray(i.para.server_url)&&d.isString(i.para.server_url[0])?i.para.debug_mode_url=i.para.server_url[0].replace("sa.gif","debug"):i.para.debug_mode=!1))}function u(){i.on("sdkInitPara",function(){t()}),i.on("sdkAfterInitPara",function(){i.registerInterceptor("sendDataStage",{send:{priority:30,entry:n}})})}var i,d,o="1.24.15",g={plugin_name:"DebugSender",init:function(e){i=e,d=i._,u()}},s=r(g);return s}();