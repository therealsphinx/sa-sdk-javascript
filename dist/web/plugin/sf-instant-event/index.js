(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).SfInstantEvent=function(){"use strict";function e(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var a=e.init;e.init=function(i,o){function u(){a.call(e,i,o)}return n(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?u():void i.on(r,u)}}return e}function n(e,n,t){function r(n,r){e.logger?e.logger.msg.apply(e.logger,r).module(t+""||"").level(n).log():e.log&&e.log.apply(e,r)}n.log=function(){r("log",arguments)},n.warn=function(){r("warn",arguments)},n.error=function(){r("error",arguments)}}function t(n,t,r){return e(n,t,r),n.plugin_version=l,n}function r(e,n){var t=s.kit.encodeTrackData(n);return e.indexOf("?")!==-1?e+"&"+t:e+"?"+t}function a(e){if("beacon"===s.para.send_type&&d.isSupportBeaconSend())return e.data=s.kit.encodeTrackData(e.data)+"&instant_event=true",new d.BeaconSend(e);if("ajax"===s.para.send_type&&d.isSupportCors())return e.data=s.kit.encodeTrackData(e.data)+"&instant_event=true",new d.BeaconSend(e);var n=r(e.server_url,e.data),t=d.getQueryParam(n,"ext"),a=d.urlParse(n);return a.addQueryString({ext:t+"%2Cinstant_evnet%3Dtrue"}),e.data=a.getUrl(),new d.ImageSend(e)}function i(e){var n=a(e);n.start()}function o(e,n){var t=e.data.event,r=e.data.type;if(!t||d.indexOf(c,t)===-1)return e;var a=s.para.app_js_bridge&&s.bridge&&s.bridge.bridge_info&&"success"===s.bridge.bridge_info.verify_success,o="item_set"===r||"item_delete"===r,u=s.para.app_js_bridge.is_mui===!0;if(a&&!o&&!u)return e.data.is_instant_event=!0,e;n.cancellationToken.stop();var l=e.server_url;return d.isArray(l)&&l.length?void d.each(l,function(n){e.callback=null,e.server_url=n,i(e)}):(i(e),e)}function u(){s.registerInterceptor("sendDataStage",{send:{priority:50,entry:o}})}var s,d,c,l="1.25.12",f={plugin_name:"SfInstantEvent",init:function(e,n){if(s=e,d=s._,d.isObject(n)&&d.isArray(n.instant_events)){if(c=n.instant_events,s.readyState&&s.readyState.state>=3||!s.on)return u();s.on("sdkAfterInitPara",function(){u()})}else s.log("SfInstantEvent init failed\uff0cparameter error. option:",n)}},g=t(f);return g}();