(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).SfInstantEvent=function(){"use strict";function e(e,t,n){if(t&&(e.plugin_name=t),n&&e.init){var a=e.init;e.init=function(t,r){function i(){a.call(e,t,r)}return t.readyState&&t.readyState.state>=3||!t.on?i():void t.on(n,i)}}return e}function t(t,n,a){return e(t,n,a),t.plugin_version=c,t}function n(e,t){var n=u.kit.encodeTrackData(t);return e.indexOf("?")!==-1?e+"&"+n:e+"?"+n}function a(e){if("beacon"===u.para.send_type&&o.isSupportBeaconSend())return e.data=u.kit.encodeTrackData(e.data)+"&instant_event=true",new o.BeaconSend(e);if("ajax"===u.para.send_type&&o.isSupportCors())return e.data=u.kit.encodeTrackData(e.data)+"&instant_event=true",new o.BeaconSend(e);var t=n(e.server_url,e.data),a=o.getQueryParam(t,"ext"),r=o.urlParse(t);return r.addQueryString({ext:a+"%2Cinstant_evnet%3Dtrue"}),e.data=r.getUrl(),new o.ImageSend(e)}function r(e){var t=a(e);t.start()}function i(e,t){var n=e.data.event,a=e.data.type;if(!n||o.indexOf(d,n)===-1)return e;var i=u.para.app_js_bridge&&u.bridge&&u.bridge.bridge_info&&"success"===u.bridge.bridge_info.verify_success,s="item_set"===a||"item_delete"===a,c=u.para.app_js_bridge.is_mui===!0;if(i&&!s&&!c)return e.data.is_instant_event=!0,e;t.cancellationToken.stop();var f=e.server_url;return o.isArray(f)&&f.length?void o.each(f,function(t){e.callback=null,e.server_url=t,r(e)}):(r(e),e)}function s(){u.registerInterceptor("sendDataStage",{send:{priority:50,entry:i}})}var u,o,d,c="1.24.15",f={plugin_name:"SfInstantEvent",init:function(e,t){if(u=e,o=u._,o.isObject(t)&&o.isArray(t.instant_events)){if(d=t.instant_events,u.readyState&&u.readyState.state>=3||!u.on)return s();u.on("sdkAfterInitPara",function(){s()})}else u.log("SfInstantEvent init failed\uff0cparameter error. option:",t)}},_=t(f);return _}();