var sdkversion_placeholder="1.25.20";function wrapPluginInitFn(o,e,n){if(e&&(o.plugin_name=e),n&&o.init){var r=o.init;o.init=function(l,a){if(wrapLogFn(l,o,e),l.readyState&&l.readyState.state>=3||!l.on)return t();function t(){r.call(o,l,a)}l.on(n,t)}}return o}function wrapLogFn(o,e,n){function r(e,r){o.logger?o.logger.msg.apply(o.logger,r).module(n+""||"").level(e).log():o.log&&o.log.apply(o,r)}e.log=function(){r("log",arguments)},e.warn=function(){r("warn",arguments)},e.error=function(){r("error",arguments)}}function createPlugin(o,e,n){return wrapPluginInitFn(o,e,n),o.plugin_version=sdkversion_placeholder,o}var _sd=null,_=null,_cacheLogs=[],ConsoleLogger={init:function(o){o&&(_=(_sd=o)._,_sd.logger&&_sd.logger.appendWriter(logWriter),_sd.on&&_sd.on("sdkAfterInitPara",function(){for(var o=0;o<_cacheLogs.length;o++)printLog(_cacheLogs[o]);_cacheLogs=null}),_sd.on&&_sd.on("sdkInitAPI",function(){_sd.enableLocalLog=enableLocalLog,_sd.disableLocalLog=disableLocalLog}))}},index=createPlugin(ConsoleLogger,"ConsoleLogger");function logWriter(o){null!==_cacheLogs?_cacheLogs.push(o):printLog(o)}function printLog(o){try{if("log"===o.level&&canLog())return void writeLog(o);if("warn"===o.level&&canWarn())return void writeLog(o);if("error"===o.level&&canError())return void writeLog(o)}catch(e){}}function canLog(){return!!isLocalLogEnabled()||(!0===_sd.para.show_log||_.isObject(_sd.para.show_log)&&"log"===_sd.para.show_log.level)}function canWarn(){return!!isLocalLogEnabled()||(canLog()||_.isObject(_sd.para.show_log)&&"warn"===_sd.para.show_log.level)}function canError(){return!!isLocalLogEnabled()||(!_.isObject(_sd.para.show_log)||"none"!==_sd.para.show_log.level)}function writeLog(o){var e=o.content,n=_.isObject(e[0])?_.formatJsonString(e[0]):e[0],r=getLogHead(o);e[0]=r+(r.length>0?": ":"")+n;try{console&&(_.isFunction(console[o.level])?console[o.level].apply(console,e):_.isObject(console[o.level])&&console[o.level](e[0]))}catch(l){}}function getLogHead(o){var e="",n="",r=_sd.para.show_log;return _.isObject(r)&&!1===r.show_brand||(e+=o.brand),_.isObject(r)&&!1===r.show_level||(e+=(e.length>0?"-":"")+o.level),e.length>0&&(e="["+e+"]"),_.isObject(r)&&!1===r.show_module||(n=o.module),e+n}var debugTag="sensorsdata_jssdk_debug";function enableLocalLog(){_.sessionStorage.isSupport()&&sessionStorage.setItem(debugTag,"true")}function disableLocalLog(){_.sessionStorage.isSupport()&&sessionStorage.removeItem(debugTag)}function isLocalLogEnabled(){return _.sessionStorage.isSupport()&&"true"===sessionStorage.getItem(debugTag)}export default index;