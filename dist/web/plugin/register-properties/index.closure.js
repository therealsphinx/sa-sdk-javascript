!function(){"use strict";function t(t,e){if("track"!==t.type)return t;var i=e.sd,r=i._,s=i.saEvent.check,n=r.extend2Lev({properties:{}},t),o=e.customRegister,p=n.properties,u=n.event,c={};return r.each(o,function(t){if(r.isObject(t))r.indexOf(t.events,u)>-1&&s({properties:t.properties})&&(c=r.extend(c,t.properties));else if(r.isFunction(t)){var e=t({event:u,properties:p,data:n});r.isObject(e)&&!r.isEmptyObject(e)&&s({properties:e})&&(c=r.extend(c,e))}}),t.properties=r.extend(p,c),t}function e(){this.sd=null,this.log=window.console&&window.console.log||function(){},this.customRegister=[]}function i(t,e,i){if(e&&(t.plugin_name=e),i&&t.init){var r=t.init;t.init=function(e,s){function n(){r.call(t,e,s)}return e.readyState&&e.readyState.state>=3||!e.on?n():void e.on(i,n)}}return t}function r(t,e,r){return i(t,e,r),t.plugin_version=s,t}e.prototype.init=function(e){if(e){this.sd=e,this._=e._,this.log=e.log;var i=this;e.registerInterceptor("buildDataStage",{extendProps:{priority:0,entry:function(e){return t(e,i)}}})}else this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")},e.prototype.register=function(t){return this.sd?void(this._.isObject(t)&&this._.isArray(t.events)&&t.events.length>0&&this._.isObject(t.properties)&&!this._.isEmptyObject(t.properties)?this.customRegister.push(t):this.log("RegisterProperties: register \u53c2\u6570\u9519\u8bef")):void this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")},e.prototype.hookRegister=function(t){return this.sd?void(this._.isFunction(t)?this.customRegister.push(t):this.log("RegisterProperties: hookRegister \u53c2\u6570\u9519\u8bef")):void this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")};var s="1.25.2";e.prototype.plugin_name="RegisterProperties";var n=new e,o=r(n);return o}();