var sd,_,log,sdkversion_placeholder="_sdk_sdk_version";function wrapPluginInitFn(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(t,i){if(t.readyState&&t.readyState.state>=3||!t.on)return s();function s(){n.call(e,t,i)}t.on(r,s)}}return e}function createPlugin(e,t,r){return wrapPluginInitFn(e,t,r),e.plugin_version=sdkversion_placeholder,e}var IOSObsoleteBridge={init:function(e){_=(sd=e)&&sd._,log=sd&&sd.log||console&&console.log||function(){},initBridge()}};function initBridge(){sd&&!sd.bridge.activeBridge&&hasBridge()&&(sd.bridge.activeBridge=IOSObsoleteBridge,sd.bridge.bridge_info={touch_app_bridge:!0,platform:"ios",verify_success:verifyIOSObsoleteBridge()?"success":"fail"},sd.para.app_js_bridge?(sd.registerInterceptor("sendDataStage",{send:{priority:90,entry:sendData}}),log("IOS obsolete bridge inits succeed.")):log("app_js_bridge is not configured, data will not be sent by iOS obsolete bridge."))}function hasBridge(){return(/sensors-verify/.test(navigator.userAgent)||/sa-sdk-ios/.test(navigator.userAgent))&&!window.MSStream}function verifyIOSObsoleteBridge(){if(/sensors-verify/.test(navigator.userAgent)){var e=navigator.userAgent.match(/sensors-verify\/([^\s]+)/);if(e&&e[0]&&"string"==typeof e[1]&&2===e[1].split("?").length){e=e[1].split("?");var t=null,r=null;try{t=_.URL(sd.para.server_url).hostname,r=_.URL(sd.para.server_url).searchParams.get("project")||"default"}catch(n){sd.log(n)}return!(!t||t!==e[0]||!r||r!==e[1])}return!1}return!!/sa-sdk-ios/.test(navigator.userAgent)}function sendData(e,t){if(sd.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var r,n,i=e.callback;if(sd.bridge.bridge_info.verify_success){var s=document.createElement("iframe"),a=(r=e.data,n=(n=JSON.stringify(_.extend({server_url:sd.para.server_url},r))).replace(/\r\n/g,""),"sensorsanalytics://trackEvent?event="+(n=encodeURIComponent(n)));return s.setAttribute("src",a),document.documentElement.appendChild(s),s.parentNode.removeChild(s),s=null,_.isFunction(i)&&i(),t.cancellationToken.cancel(),!0}return sd.para.app_js_bridge.is_send?(sd.debug.apph5({data:e.data,step:"3.2",output:"all"}),e):(_.isFunction(i)&&i(),t.cancellationToken.cancel(),e)}var index=createPlugin(IOSObsoleteBridge,"IOSObsoleteBridge","sdkAfterInitPara");export default index;