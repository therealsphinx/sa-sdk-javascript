!function(){"use strict";function n(n,t,e){if(t&&(n.plugin_name=t),e&&n.init){var i=n.init;n.init=function(t,r){function u(){i.call(n,t,r)}return t.readyState&&t.readyState.state>=3||!t.on?u():void t.on(e,u)}}return n}function t(t,i,r){return n(t,i,r),t.plugin_version=e,t}var e="1.24.15",i={init:function(n){var t=n._.isString,e=n._.rot13defs,i=n._.dfmapping,r="data:enc;",u="dfm-enc-";n.ee.sdk.on("afterInitPara",function(){n.kit.userEncrypt=function(n){return u+i(n)},n.kit.userDecrypt=function(n){return 0===n.indexOf(r)?(n=n.substring(r.length),n=e(n)):0===n.indexOf(u)&&(n=n.substring(u.length),n=i(n)),n},n.kit.userDecryptIfNeeded=function(e){return!t(e)||0!==e.indexOf(r)&&0!==e.indexOf(u)||(e=n.kit.userDecrypt(e)),e}})},plugin_name:"UserEncryptDefault"},r=t(i);return r}();