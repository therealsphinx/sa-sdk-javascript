var sd,_,sdkversion_placeholder="1.25.11";function wrapPluginInitFn(n,e,r){if(e&&(n.plugin_name=e),r&&n.init){var t=n.init;n.init=function(a,i){if(wrapLogFn(a,n,e),a.readyState&&a.readyState.state>=3||!a.on)return o();function o(){t.call(n,a,i)}a.on(r,o)}}return n}function wrapLogFn(n,e,r){function t(e,t){n.logger?n.logger.msg.apply(n.logger,t).module(r+""||"").level(e).log():n.log&&n.log.apply(n,t)}e.log=function(){t("log",arguments)},e.warn=function(){t("warn",arguments)},e.error=function(){t("error",arguments)}}function createPlugin(n,e,r){return wrapPluginInitFn(n,e,r),n.plugin_version=sdkversion_placeholder,n}function getSendUrl(n,e){var r=sd.kit.encodeTrackData(e);return-1!==n.indexOf("?")?n+"&"+r:n+"?"+r}function sendData(n){new _.ImageSend(n).start()}function sendInterceptor(n,e){var r=null;_.isObject(n.config)&&(r=_.optimizeServerUrl(n.config.server_url));var t=r||n.server_url,a=n.data;n.server_url=t,_.isArray(t)&&t.length?_.each(t,function(e){e&&(n.data=getSendUrl(e,a),n.callback=null,n.server_url=e,sendData(n))}):"string"==typeof t&&""!==t?(n.data=getSendUrl(t,a),sendData(n)):sd.logger&&sd.logger.msg("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01").level("warn").log(),e.cancellationToken.stop()}function initPara(){"image"!==sd.para.send_type&&"ajax"!==sd.para.send_type&&"beacon"!==sd.para.send_type&&(sd.para.send_type="image")}function senderInit(){sd.on("sdkInitPara",function(){initPara()}),sd.on("sdkAfterInitPara",function(){sd.registerInterceptor("sendDataStage",{send:{priority:130,entry:sendInterceptor}})})}var ImageSender={plugin_name:"ImageSender",init:function(n){_=(sd=n)._,senderInit()}},index=createPlugin(ImageSender);export default index;