var sd,_,log,sdkversion_placeholder="1.25.11";function wrapPluginInitFn(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,o){if(wrapLogFn(i,e,t),i.readyState&&i.readyState.state>=3||!i.on)return a();function a(){n.call(e,i,o)}i.on(r,a)}}return e}function wrapLogFn(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function createPlugin(e,t,r){return wrapPluginInitFn(e,t,r),e.plugin_version=sdkversion_placeholder,e}var EXPOSURE_ATTR_EVENT_NAME="data-sensors-exposure-event-name",exposureIntersection={},exposureEleOption=[],exposureConfig={area_rate:0,stay_duration:0,repeated:!0};function isSupport(){return("MutationObserver"in window||"WebKitMutationObserver"in window||"MozMutationObserver"in window)&&"IntersectionObserver"in window}function formatConfig(e){var t={};return _.each(e,function(r,n){switch(n){case"area_rate":r=Number(r),!isNaN(r)&&r>=0&&r<=1?t.area_rate=r:log("parameter config.area_rate error. config:",e);break;case"stay_duration":r=Number(r),!isNaN(r)&&r>=0?t.stay_duration=r:log("parameter config.stay_duration error. config:",e);break;case"repeated":"false"===r||!1===r||"true"===r||!0===r?t.repeated="false"!==r&&Boolean(r):log("parameter config.repeated error. config:",e)}}),t}var exposurePlugin={isReady:!1,init:function(e){if(isSupport()){var t=this;_.isObject(e)&&(exposureConfig=_.extend(exposureConfig,formatConfig(e))),_.bindReady(function(){var e=t.getElesByEventName();t.addObserveByNodes(e),mutation.init()}),sd.ee.spa.on("switch",function(e){if(e===location.href)return!1;t.clear();var r=t.getElesByEventName();t.addObserveByNodes(r)}),_.listenPageState({visible:function(){t.start()},hidden:function(){t.stop()}}),this.isReady=!0}else log("The current browser does not support the element exposure key API, and the element exposure plugin initialization failed.")},getElesByEventName:function(e){return(e=e||document).querySelectorAll("["+EXPOSURE_ATTR_EVENT_NAME+"]")},getEleEventName:function(e){return e.getAttribute(EXPOSURE_ATTR_EVENT_NAME)},getEleAttr:function(e,t){t=t||e.attributes;var r={},n={},i=this.getEleEventName(e),o={};return i&&(o.eventName=i),_.each(t,function(t){var i=t.value||e.getAttribute(t.name);try{if("data-sensors-exposure-option"===t.name){var o=_.isObject(i)?i:JSON.parse(i);n=_.isObject(o.config)?o.config:n,r=_.isObject(o.properties)?o.properties:r}}catch(a){log("element attribute data-sensors-exposure-option error. value:",i)}}),_.each(t,function(t){var i=t.value||e.getAttribute(t.name);try{var o=t.name.match(/^data-sensors-exposure-property-(.+)/);o&&(r[o[1]]=i)}catch(s){}try{var a=t.name.match(/^data-sensors-exposure-config-(.+)/);if(a)switch(a[1]){case"area_rate":n.area_rate=i;break;case"stay_duration":n.stay_duration=i;break;case"repeated":n.repeated=i}}catch(s){}}),o.config=formatConfig(n),o.properties=r,o},addObserveByNodes:function(e){if(e.length){var t=this;_.each(e,function(e){if(1===e.nodeType&&e.hasAttribute(EXPOSURE_ATTR_EVENT_NAME)){var r=t.getEleAttr(e);r.ele=e,t.addOrUpdateWatchEle(r)}})}},getIntersection:function(e){var t=this;return exposureIntersection[e.area_rate]?exposureIntersection[e.area_rate]:exposureIntersection[e.area_rate]=new IntersectionObserver(function(){t.exposure.apply(t,arguments)},{threshold:e.area_rate})},exposure:function(e){var t=this;_.each(e,function(e){var r=e.target,n=t.getEleOption(r);!1!==e.isIntersecting&&n&&!n.config.isSend?e.intersectionRatio>=n.config.area_rate&&(n.timer&&(clearTimeout(n.timer),n.timer=null),n.timer=setTimeout(function(){var e=r.getBoundingClientRect(),n=t.getEleOption(r);if(e.width&&e.height&&n&&n.eventName&&!n.config.isSend){var i=n.listener,o=i&&i.shouldExpose,a=i&&i.didExpose,s=sd.heatmap.getEleDetail(r),u=_.extend({},s,n.properties);if(o&&_.isFunction(o))try{if(!1===o(r,u))return}catch(l){}if(sd.track(n.eventName,u),n.config.isSend=!0,n.config.repeated&&(n.config.isSend=!1),a&&_.isFunction(a))try{a(r,u)}catch(l){}}},1e3*n.config.stay_duration)):n&&n.timer&&(clearTimeout(n.timer),n.timer=null)})},getEleOption:function(e){var t=null;return _.each(exposureEleOption,function(r){e===r.ele&&(t=r)}),t},addOrUpdateWatchEle:function(e){var t=e.ele,r=e.config;r.isSend=!1;var n=exposurePlugin.getEleOption(t);if(n){if(r.area_rate===n.config.area_rate)return _.extend2Lev(n,e),void(n.config.repeated&&(n.config.isSend=!1));this.removeWatchEle(t)}if(!(e=_.extend2Lev({},{config:_.extend({},exposureConfig)},n,e)).eventName)return log("parameter option.eventName error. option:",e),!1;_.isElement(t)||log("parameter element error. option:",e),this.getIntersection(e.config).observe(t),exposureEleOption.push(e)},removeWatchEle:function(e){var t=null,r=-1;if(_.each(exposureEleOption,function(n,i){e===n.ele&&(t=n,r=i)}),t){var n=t.config,i=exposureIntersection[n.area_rate];i&&_.isElement(e)&&(i.unobserve(e),t.timer&&(clearTimeout(t.timer),t.timer=null),r>-1&&exposureEleOption.splice(r,1))}},start:function(){_.each(exposureEleOption,function(e){var t=e.config,r=e.ele,n=exposureIntersection[t.area_rate];n&&_.isElement(r)&&n.observe(r)})},stop:function(){_.each(exposureEleOption,function(e){var t=e.config,r=e.ele,n=exposureIntersection[t.area_rate];n&&_.isElement(r)&&(n.unobserve(r),e.timer&&(clearTimeout(e.timer),e.timer=null))})},clear:function(){this.stop(),exposureIntersection={},exposureEleOption=[]}},mutation={mo:null,init:function(){var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;this.mo=new e(this.listenNodesChange),this.observe()},observe:function(){this.mo.observe(document.body,{attributes:!0,childList:!0,subtree:!0,attributeOldValue:!0})},listenNodesChange:function(e){_.each(e,function(e){switch(e.type){case"childList":e.removedNodes.length>0?_.each(e.removedNodes,function(e){if(1===e.nodeType){exposurePlugin.removeWatchEle(e);var t=exposurePlugin.getElesByEventName(e);t.length&&_.each(t,function(e){exposurePlugin.removeWatchEle(e)})}}):e.addedNodes.length&&(exposurePlugin.addObserveByNodes(e.addedNodes),_.each(e.addedNodes,function(e){if(1===e.nodeType){var t=exposurePlugin.getElesByEventName(e);exposurePlugin.addObserveByNodes(t)}}));break;case"attributes":if(!e.attributeName)return!1;var t=e.target,r=e.attributeName;if(!_.isString(r)||r.indexOf("data-sensors-exposure")<0)return;if(t.getAttribute(r)){var n=exposurePlugin.getEleAttr(t);n.ele=t,exposurePlugin.addOrUpdateWatchEle(n)}else r===EXPOSURE_ATTR_EVENT_NAME&&exposurePlugin.removeWatchEle(t)}})}},Exposure={exposureViews:exposureEleOption,init:function(e,t){if(!e||sd)return!1;_=(sd=e)._,log=sd.log,exposurePlugin.init(t),log("Exposure Plugin initialized successfully")},addExposureView:function(e,t){if(exposurePlugin.isReady)if(_.isElement(e)){var r={ele:e,config:_.isObject(t.config)?formatConfig(t.config):{},eventName:t.eventName,properties:_.isObject(t.properties)?t.properties:{},listener:_.isObject(t.listener)?t.listener:{}};_.isString(r.eventName)&&r.eventName?exposurePlugin.addOrUpdateWatchEle(r):log("parameter option.eventName error. option",t)}else log("parameter element error.");else log("Exposure Plugin uninitialized.")},removeExposureView:function(e){exposurePlugin.isReady?_.isElement(e)?exposurePlugin.removeWatchEle(e):log("removeExposureView parameter ele errors."):log("Exposure Plugin uninitialized.")}},index=createPlugin(Exposure,"Exposure","sdkAfterInitPara");export default index;