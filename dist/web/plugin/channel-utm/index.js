(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).ChannelUtm=function(){"use strict";function n(n,t,e){if(t&&(n.plugin_name=t),e&&n.init){var a=n.init;n.init=function(t,r){function i(){a.call(n,t,r)}return t.readyState&&t.readyState.state>=3||!t.on?i():void t.on(e,i)}}return n}function t(t,e,r){return n(t,e,r),t.plugin_version=a,t}var e,a="1.24.14",r=["channel_utm_source","channel_utm_content","channel_utm_term","channel_utm_medium","channel_utm_campaign"],i={init:function(n){n&&!e&&(e=n,e._.each(r,function(n){e.source_channel_standard=e.source_channel_standard+" "+n,e.para.source_type.utm.push(n)}),e.registerInterceptor("businessStage",{getUtmData:{entry:function(n){var t=!1,a=n||{};return e._.each(r,function(n){var r=e._.getQueryParam(location.href,n);r.length&&(t=!0,a[n.slice(8)]=r)}),t&&e.register&&e.register({link_v:"1"}),a}}}))}},u=t(i,"ChannelUtm","sdkAfterInitPara");return u}();