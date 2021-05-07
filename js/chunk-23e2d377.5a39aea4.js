(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23e2d377"],{"16e3":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:500,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[i("a-spin",{attrs:{spinning:e.confirmLoading}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"等级",hasFeedback:""}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iLevel",e.validatorRules.iLevel],expression:"['iLevel', validatorRules.iLevel]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入等级",min:1,max:100,step:1}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"最近30天交易量(≥,单位:CNY)",hasFeedback:""}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iDay30TradeAmount",e.validatorRules.iDay30TradeAmount],expression:"['iDay30TradeAmount', validatorRules.iDay30TradeAmount]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入最近30天交易量",min:0}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"申诉率要求(≤,单位:%)",hasFeedback:""}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iArbitrationRate",e.validatorRules.iArbitrationRate],expression:"['iArbitrationRate', validatorRules.iArbitrationRate]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入申诉率",min:0}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"成交率要求(≥,单位:%)",hasFeedback:""}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iTradeRate",e.validatorRules.iTradeRate],expression:"['iTradeRate', validatorRules.iTradeRate]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入成交率",min:0}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"平均放币时间(≤,单位:分钟)",hasFeedback:""}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iAvgReleaseTime",e.validatorRules.iAvgReleaseTime],expression:"['iAvgReleaseTime', validatorRules.iAvgReleaseTime]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入平均放币时间",min:0}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"总成交单数(≥,单位:单)",hasFeedback:""}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iTradeCount",e.validatorRules.iTradeCount],expression:"['iTradeCount', validatorRules.iTradeCount]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入总成交单数",min:0}})],1)],1)],1)],1)},a=[],o=i("0fea"),l=i("88bc"),n=i.n(l),s=(i("c1df"),{name:"TokenManageModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:12}},wrapperCol:{xs:{span:24},sm:{span:12}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{iLevel:{rules:[{required:!0,message:"",type:"number"}]},iLowerDeposit:{rules:[{required:!0,message:"",type:"number"}]},iDay30TradeAmount:{rules:[{required:!0,message:"",type:"number"}]},iArbitrationRate:{rules:[{required:!0,message:"",type:"number"}]},iTradeRate:{rules:[{required:!0,message:"",type:"number"}]},iAvgReleaseTime:{rules:[{required:!0,message:"",type:"number"}]},iTradeCount:{rules:[{required:!0,message:"",type:"number"}]},iAdsReward:{rules:[{required:!0,message:"",type:"number"}]},iOrderLimit:{rules:[{required:!0,message:"",type:"number"}]},iDayLimit:{rules:[{required:!0,message:"",type:"number"}]}},url:{add:"/v1/otc/AddAdsConfig",edit:"/v1/otc/EditAdsConfig"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.model.iId&&(this.model.iLowerDeposit=Number(this.model.iLowerDeposit),this.model.iOrderLimit=Number(this.model.iOrderLimit),this.model.iDayLimit=Number(this.model.iDayLimit),this.model.iDay30TradeAmount=Number(this.model.iDay30TradeAmount),this.model.iArbitrationRate=Number(this.model.iArbitrationRate)/100,this.model.iTradeRate=Number(this.model.iTradeRate)/100,this.model.iAvgReleaseTime=this.model.iAvgReleaseTime?this.model.iAvgReleaseTime/6e4:0,this.model.iAdsReward=this.model.iAdsReward?100*Number(this.model.iAdsReward):0,this.$nextTick((function(){t.form.setFieldsValue(n()(t.model,"iLevel","iLowerDeposit","iDay30TradeAmount","iArbitrationRate","iTradeRate","iAvgReleaseTime","iTradeCount","iOrderLimit","iDayLimit","iAdsReward"))})))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(i,r){if(!i){t.confirmLoading=!0;var a="";e.model.iId?a+=e.url.edit:a+=e.url.add,r.iLowerDeposit=r.iLowerDeposit?r.iLowerDeposit.toString():"0",r.iOrderLimit=r.iOrderLimit?r.iOrderLimit.toString():"0",r.iDayLimit=r.iDayLimit?r.iDayLimit.toString():"0",r.iDay30TradeAmount=r.iDay30TradeAmount?r.iDay30TradeAmount.toString():"0",r.iArbitrationRate=r.iArbitrationRate?100*r.iArbitrationRate:0,r.iTradeRate=r.iTradeRate?100*r.iTradeRate:0,r.iAvgReleaseTime=r.iAvgReleaseTime?6e4*r.iAvgReleaseTime:0,r.iAdsReward=r.iAdsReward?(r.iAdsReward/100).toFixed(6):"0",r.iTradeCount=r.iTradeCount?r.iAdsReward:0;var l=Object.assign(e.model,r);Object(o["j"])(a,l).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}}),d=s,u=i("2877"),m=Object(u["a"])(d,r,a,!1,null,"3bf39a84",null);t["default"]=m.exports},"88bc":function(e,t,i){(function(t){var i=1/0,r=9007199254740991,a="[object Arguments]",o="[object Function]",l="[object GeneratorFunction]",n="[object Symbol]",s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,u=s||d||Function("return this")();function m(e,t,i){switch(i.length){case 0:return e.call(t);case 1:return e.call(t,i[0]);case 2:return e.call(t,i[0],i[1]);case 3:return e.call(t,i[0],i[1],i[2])}return e.apply(t,i)}function c(e,t){var i=-1,r=e?e.length:0,a=Array(r);while(++i<r)a[i]=t(e[i],i,e);return a}function b(e,t){var i=-1,r=t.length,a=e.length;while(++i<r)e[a+i]=t[i];return e}var p=Object.prototype,h=p.hasOwnProperty,v=p.toString,f=u.Symbol,w=p.propertyIsEnumerable,g=f?f.isConcatSpreadable:void 0,R=Math.max;function y(e,t,i,r,a){var o=-1,l=e.length;i||(i=L),a||(a=[]);while(++o<l){var n=e[o];t>0&&i(n)?t>1?y(n,t-1,i,r,a):b(a,n):r||(a[a.length]=n)}return a}function A(e,t){return e=Object(e),T(e,t,(function(t,i){return i in e}))}function T(e,t,i){var r=-1,a=t.length,o={};while(++r<a){var l=t[r],n=e[l];i(n,l)&&(o[l]=n)}return o}function C(e,t){return t=R(void 0===t?e.length-1:t,0),function(){var i=arguments,r=-1,a=R(i.length-t,0),o=Array(a);while(++r<a)o[r]=i[t+r];r=-1;var l=Array(t+1);while(++r<t)l[r]=i[r];return l[t]=o,m(e,this,l)}}function L(e){return j(e)||O(e)||!!(g&&e&&e[g])}function D(e){if("string"==typeof e||$(e))return e;var t=e+"";return"0"==t&&1/e==-i?"-0":t}function O(e){return x(e)&&h.call(e,"callee")&&(!w.call(e,"callee")||v.call(e)==a)}var j=Array.isArray;function k(e){return null!=e&&N(e.length)&&!F(e)}function x(e){return q(e)&&k(e)}function F(e){var t=S(e)?v.call(e):"";return t==o||t==l}function N(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function q(e){return!!e&&"object"==typeof e}function $(e){return"symbol"==typeof e||q(e)&&v.call(e)==n}var E=C((function(e,t){return null==e?{}:A(e,c(y(t,1),D))}));e.exports=E}).call(this,i("c8ba"))}}]);