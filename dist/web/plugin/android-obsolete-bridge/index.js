(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).AndroidObsoleteBridge=function(){"use strict";function e(e){return b&&b.call(v,JSON.stringify(e))}function n(e){return y.call(v)&&S&&S.call(v,JSON.stringify(e))}function r(e,n){return n&&"function"==typeof n[e.callType]&&n[e.callType]()}function a(e,n,r){if(n&&(e.plugin_name=n),r&&e.init){var a=e.init;e.init=function(t,o){function s(){a.call(e,t,o)}return i(t,e,n),t.readyState&&t.readyState.state>=3||!t.on?s():void t.on(r,s)}}return e}function i(e,n,r){function a(n,a){e.logger?e.logger.msg.apply(e.logger,a).module(r+""||"").level(n).log():e.log&&e.log.apply(e,a)}n.log=function(){a("log",arguments)},n.warn=function(){a("warn",arguments)},n.error=function(){a("error",arguments)}}function t(e,n,r){return a(e,n,r),e.plugin_version=w,e}function o(){if(d=window.SensorsData_APP_JS_Bridge,c=d&&d.sensorsdata_track,u=d&&d.sensorsdata_verify,_=d&&d.sensorsdata_visual_verify,g&&!g.bridge.activeBridge&&(u||c||_)){g.bridge.activeBridge=J;var e=u||c;if(_&&(e=!!_.call(d,JSON.stringify({server_url:g.para.server_url}))),g.bridge.bridge_info={touch_app_bridge:!0,platform:"android",verify_success:e?"success":"fail"},!g.para.app_js_bridge)return void f("app_js_bridge is not configured, data will not be sent by android obsolete bridge.");g.registerInterceptor("sendDataStage",{send:{priority:80,entry:s}}),f("Android obsolete bridge inits succeed.")}}function s(e,n){if(g.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var r=e.callback;if(u){var a=u&&u.call(d,JSON.stringify(p.extend({server_url:g.para.server_url},e.data)));return a?(p.isFunction(r)&&r(),n.cancellationToken.cancel(),e):g.para.app_js_bridge.is_send?(g.debug.apph5({data:e.data,step:"3.1",output:"all"}),e):(p.isFunction(r)&&r(),n.cancellationToken.cancel(),e)}return c&&c.call(d,JSON.stringify(p.extend({server_url:g.para.server_url},e.data))),p.isFunction(r)&&r(),n.cancellationToken.cancel(),e}function l(e){var n=e.callType;return n in m.commands?m.commands[n](e,d):d&&p.isFunction(d.sensorsdata_js_call_app)?d.sensorsdata_js_call_app(JSON.stringify(e)):void 0}var d,c,u,_,g,p,f,v=window.SensorsData_App_Visual_Bridge,y=v&&v.sensorsdata_visualized_mode,b=v&&v.sensorsdata_visualized_alert_info,S=v&&v.sensorsdata_hover_web_nodes,m={isVerify:function(){return y&&(y===!0||y.call(v))},commands:{app_alert:e,visualized_track:n,page_info:n,sensorsdata_get_app_visual_config:r}},w="1.25.20",J={init:function(e){g=e,p=g&&g._,f=g&&g.log||console&&console.log||function(){},o()},handleCommand:l},O=t(J,"AndroidObsoleteBridge","sdkAfterInitPara");return O}();