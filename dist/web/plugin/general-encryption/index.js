(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).GeneralEncryption=function(){"use strict";function n(n,i,t){if(i&&(n.plugin_name=i),t&&n.init){var e=n.init;n.init=function(i,r){function a(){e.call(n,i,r)}return i.readyState&&i.readyState.state>=3||!i.on?a():void i.on(t,a)}}return n}function i(i,t,e){return n(i,t,e),i.plugin_version=r,i}var t,e,r="1.24.15",a={init:function(n,i){t=n,e=t._;var r=i&&i.encrypt_utils,a=window.console&&window.console.log||function(){};a=t&&t.log||a;var o=t.kit.encodeTrackData;return t&&t.kit&&o?e.isObject(r)&&e.isFunction(r.encryptEvent)&&e.isFunction(r.encryptSymmetricKeyWithPublicKey)&&e.isString(i.pub_key)&&e.isNumber(i.pkv)?(t.kit.encodeTrackData=function(n){try{var c=r.encryptEvent,u=r.encryptSymmetricKeyWithPublicKey,l=i.pkv,y=i.pub_key;if(e.isFunction(r.encryptEvent)){var s=c(n),d=t._.base64Encode(s),p={pkv:l,ekey:u(y),payloads:[d]},v=JSON.stringify(p),f=encodeURIComponent(v);return"data="+f}return o.call(t.kit,n)}catch(k){return a("Encrypted data exception."),o.call(t.kit,n)}},void a("GeneralEncryption Plugin initialized successfully.")):void a("GeneralEncryption Plugin initialization failed. parameter error."):void a("Web SDK initialization failed.")}},o=i(a,"GeneralEncryption","sdkReady");return o}();