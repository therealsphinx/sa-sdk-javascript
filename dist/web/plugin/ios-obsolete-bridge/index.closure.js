!function(){"use strict";function e(e,r,n){if(r&&(e.plugin_name=r),n&&e.init){var i=e.init;e.init=function(a,o){function s(){i.call(e,a,o)}return t(a,e,r),a.readyState&&a.readyState.state>=3||!a.on?s():void a.on(n,s)}}return e}function t(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function r(t,r,n){return e(t,r,n),t.plugin_version=l,t}function n(){if(s&&!s.bridge.activeBridge&&i()){if(s.bridge.activeBridge=g,s.bridge.bridge_info={touch_app_bridge:!0,platform:"ios",verify_success:a()?"success":"fail"},!s.para.app_js_bridge)return void c("app_js_bridge is not configured, data will not be sent by iOS obsolete bridge.");s.registerInterceptor("sendDataStage",{send:{priority:90,entry:o}}),c("IOS obsolete bridge inits succeed.")}}function i(){return(/sensors-verify/.test(navigator.userAgent)||/sa-sdk-ios/.test(navigator.userAgent))&&!window.MSStream}function a(){if(/sensors-verify/.test(navigator.userAgent)){var e=navigator.userAgent.match(/sensors-verify\/([^\s]+)/);if(e&&e[0]&&"string"==typeof e[1]&&2===e[1].split("?").length){e=e[1].split("?");var t=null,r=null;try{t=u.URL(s.para.server_url).hostname,r=u.URL(s.para.server_url).searchParams.get("project")||"default"}catch(n){s.log(n)}return!(!t||t!==e[0]||!r||r!==e[1])}return!1}return!!/sa-sdk-ios/.test(navigator.userAgent)}function o(e,t){function r(e){var t=JSON.stringify(u.extend({server_url:s.para.server_url},e));return t=t.replace(/\r\n/g,""),t=encodeURIComponent(t),"sensorsanalytics://trackEvent?event="+t}if(s.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var n=e.callback;if(s.bridge.bridge_info.verify_success){var i=document.createElement("iframe"),a=r(e.data);return i.setAttribute("src",a),document.documentElement.appendChild(i),i.parentNode.removeChild(i),i=null,u.isFunction(n)&&n(),t.cancellationToken.cancel(),!0}return s.para.app_js_bridge.is_send?(s.debug.apph5({data:e.data,step:"3.2",output:"all"}),e):(u.isFunction(n)&&n(),t.cancellationToken.cancel(),e)}var s,u,c,l="1.25.12",g={init:function(e){s=e,u=s&&s._,c=s&&s.log||console&&console.log||function(){},n()}},d=r(g,"IOSObsoleteBridge","sdkAfterInitPara");return d}();