!function(){"use strict";function t(t,a,n){if(a&&(t.plugin_name=a),n&&t.init){var e=t.init;t.init=function(a,r){function o(){e.call(t,a,r)}return a.readyState&&a.readyState.state>=3||!a.on?o():void a.on(n,o)}}return t}function a(a,n,e){return t(a,n,e),a.plugin_version=c,a}function n(t,a){return!o.para.app_js_bridge&&o.para.batch_send&&i.localStorage.isSupport()&&localStorage.length<o.para.batch_send.storage_length&&(p.add(t.data),a.cancellationToken.stop()),t}function e(){var t={datasend_timeout:6e3,send_interval:6e3,storage_length:200};i.localStorage.isSupport()&&i.isSupportCors()&&"object"==typeof localStorage?o.para.batch_send===!0?o.para.batch_send=i.extend({},t):"object"==typeof o.para.batch_send&&(o.para.batch_send=i.extend({},t,o.para.batch_send)):o.para.batch_send=!1}function r(){o.on("sdkInitPara",function(){e()}),o.on("sdkAfterInitPara",function(){!o.para.app_js_bridge&&o.para.batch_send&&i.localStorage.isSupport()&&(p||(p=new i.BatchSend),p.batchInterval(),o.registerInterceptor("sendDataStage",{send:{priority:100,entry:n}}))})}var o,i,c="1.25.2",p=null,s={plugin_name:"BatchSender",init:function(t){o=t,i=o._,r()}},d=a(s);return d}();