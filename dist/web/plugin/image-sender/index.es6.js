var sd,_,sdkversion_placeholder="1.25.2";function wrapPluginInitFn(e,n,r){if(n&&(e.plugin_name=n),r&&e.init){var a=e.init;e.init=function(n,t){if(n.readyState&&n.readyState.state>=3||!n.on)return i();function i(){a.call(e,n,t)}n.on(r,i)}}return e}function createPlugin(e,n,r){return wrapPluginInitFn(e,n,r),e.plugin_version=sdkversion_placeholder,e}function getSendUrl(e,n){var r=sd.kit.encodeTrackData(n);return-1!==e.indexOf("?")?e+"&"+r:e+"?"+r}function sendData(e){new _.ImageSend(e).start()}function sendInterceptor(e,n){var r=e.server_url;e.data=getSendUrl(r,e.data),_.isArray(r)&&r.length?_.each(r,function(n){e.callback=null,e.server_url=n,sendData(e)}):"string"==typeof sd.para.server_url&&""!==sd.para.server_url?sendData(e):sd.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"),n.cancellationToken.stop()}function initPara(){"image"!==sd.para.send_type&&"ajax"!==sd.para.send_type&&"beacon"!==sd.para.send_type&&(sd.para.send_type="image")}function senderInit(){sd.on("sdkInitPara",function(){initPara()}),sd.on("sdkAfterInitPara",function(){sd.registerInterceptor("sendDataStage",{send:{priority:130,entry:sendInterceptor}})})}var ImageSender={plugin_name:"ImageSender",init:function(e){_=(sd=e)._,senderInit()}},index=createPlugin(ImageSender);export default index;