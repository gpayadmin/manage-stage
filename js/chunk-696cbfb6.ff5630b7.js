(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-696cbfb6","chunk-23e2d377"],{"0f3a":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"table-operator"},[r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增评级")]),r("a-button",{on:{click:function(t){return e.loadData()}}},[e._v("刷新")])],1),r("div",[r("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"iId",columns:e.columns,dataSource:e.dataSource,pagination:!1,loading:e.loading,rowSelection:null},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"iDepositSwitch",fn:function(t,i,a){return r("span",{},[r("a-switch",{attrs:{loading:i.depositSwitchLoading},on:{click:function(t){var r=arguments.length,a=Array(r);while(r--)a[r]=arguments[r];return e.depositSwitch(a.concat([i]))}},model:{value:i.iDepositSwitch,callback:function(t){e.$set(i,"iDepositSwitch",t)},expression:"record.iDepositSwitch"}})],1)}},{key:"iWithdrawSwitch",fn:function(t,i,a){return r("span",{},[r("a-switch",{attrs:{loading:i.withdrawSwitchLoading},on:{click:function(t){var r=arguments.length,a=Array(r);while(r--)a[r]=arguments[r];return e.withdrawSwitch(a.concat([i]))}},model:{value:i.iWithdrawSwitch,callback:function(t){e.$set(i,"iWithdrawSwitch",t)},expression:"record.iWithdrawSwitch"}})],1)}},{key:"action",fn:function(t,i,a){return r("span",{},[r("a",{on:{click:function(t){return e.handleEdit(i)}}},[e._v("修改")])])}}])})],1),r("rating-edit-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},a=[],n=r("16e3"),o=r("8c6e"),s=r("4349"),l=r("89f2"),u=r("1b3c"),c=r("2b0e"),d=r("ca00"),m=(r("0fea"),r("5a0c"),{name:"TokenManage",mixins:[u["a"]],components:{RatingEditModal:n["default"],JSuperQuery:o["default"],JInput:s["default"]},data:function(){return{description:"钱包币种管理",sexDictOptions:[],isorter:{column:"iLevel",order:"asc"},resultName:"vList",columns:[],settingColumns:[],defColumns:[{title:"等级",align:"center",dataIndex:"iLevel",customRender:function(e,t,r){return"Lv"+e}},{title:"最低保证金要求(USDT)",align:"center",dataIndex:"iLowerDeposit",customRender:function(e,t,r){return"≥ "+Number(e)}},{title:"每单限额(USDT)",align:"center",dataIndex:"iOrderLimit",customRender:function(e,t,r){return"≤ "+Number(e)}},{title:"奖励费率",align:"center",dataIndex:"iAdsReward",customRender:function(e,t,r){return Number((100*Number(e)).toFixed(4))+" % "}},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"action"}}],url:{list:"/v1/otc/GetAdsConfigList",delete:"/v1/otc/DelAdsConfig"}}},methods:{getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.iPageNo=0,t.iPageSize=1e3,t.sOrder=t.order,t.sColumn=t.column,delete t.order,delete t.column,Object(d["d"])(t)},initDictConfig:function(){var e=this;Object(l["d"])("sex").then((function(t){t.success&&(e.sexDictOptions=t.result)}))},onColSettingsChange:function(e){var t=this,r=this.$route.name+":colsettings";c["default"].ls.set(r,e,6048e5),this.settingColumns=e;var i=this.defColumns.filter((function(e){return"rowIndex"==e.key||"action"==e.dataIndex||!!t.settingColumns.includes(e.dataIndex)}));this.columns=i},initColumns:function(){var e=this.$route.name+":colsettings",t=c["default"].ls.get(e);if(null==t||void 0==t){var r=[];this.defColumns.forEach((function(e,t,i){r.push(e.dataIndex)})),this.settingColumns=r,this.columns=this.defColumns}else{this.settingColumns=t;var i=this.defColumns.filter((function(e){return"rowIndex"==e.key||"action"==e.dataIndex||!!t.includes(e.dataIndex)}));this.columns=i}}},created:function(){this.initColumns()}}),f=m,h=(r("f5d5"),r("2877")),p=Object(h["a"])(f,i,a,!1,null,"2a9cc2c0",null);t["default"]=p.exports},"16e3":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:500,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"等级",hasFeedback:""}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iLevel",e.validatorRules.iLevel],expression:"['iLevel', validatorRules.iLevel]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入等级",min:1,max:100,step:1}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"最低保证金(USDT)",hasFeedback:""}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iLowerDeposit",e.validatorRules.iLowerDeposit],expression:"['iLowerDeposit', validatorRules.iLowerDeposit]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入最低保证金",min:0}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"奖励费率(%)",hasFeedback:""}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iAdsReward",e.validatorRules.iAdsReward],expression:"['iAdsReward', validatorRules.iAdsReward]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入奖励费率",min:0}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"每单限额(单位:USDT)",hasFeedback:""}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iOrderLimit",e.validatorRules.iAvgReleaseTime],expression:"['iOrderLimit', validatorRules.iAvgReleaseTime]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入每单限额",min:0}})],1)],1)],1)],1)},a=[],n=r("0fea"),o=r("88bc"),s=r.n(o),l=(r("c1df"),{name:"TokenManageModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:12}},wrapperCol:{xs:{span:24},sm:{span:12}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{iLevel:{rules:[{required:!0,message:"",type:"number"}]},iLowerDeposit:{rules:[{required:!0,message:"",type:"number"}]},iDay30TradeAmount:{rules:[{required:!0,message:"",type:"number"}]},iArbitrationRate:{rules:[{required:!0,message:"",type:"number"}]},iTradeRate:{rules:[{required:!0,message:"",type:"number"}]},iAvgReleaseTime:{rules:[{required:!0,message:"",type:"number"}]},iTradeCount:{rules:[{required:!0,message:"",type:"number"}]},iAdsReward:{rules:[{required:!0,message:"",type:"number"}]},iOrderLimit:{rules:[{required:!0,message:"",type:"number"}]},iDayLimit:{rules:[{required:!0,message:"",type:"number"}]}},url:{add:"/v1/otc/AddAdsConfig",edit:"/v1/otc/EditAdsConfig"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.model.iId&&(this.model.iLowerDeposit=Number(this.model.iLowerDeposit),this.model.iOrderLimit=Number(this.model.iOrderLimit),this.model.iDayLimit=Number(this.model.iDayLimit),this.model.iDay30TradeAmount=Number(this.model.iDay30TradeAmount),this.model.iArbitrationRate=Number(this.model.iArbitrationRate)/100,this.model.iTradeRate=Number(this.model.iTradeRate)/100,this.model.iAvgReleaseTime=this.model.iAvgReleaseTime?this.model.iAvgReleaseTime/6e4:0,this.model.iAdsReward=this.model.iAdsReward?100*Number(this.model.iAdsReward):0,this.$nextTick((function(){t.form.setFieldsValue(s()(t.model,"iLevel","iLowerDeposit","iDay30TradeAmount","iArbitrationRate","iTradeRate","iAvgReleaseTime","iTradeCount","iOrderLimit","iDayLimit","iAdsReward"))})))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,i){if(!r){t.confirmLoading=!0;var a="";e.model.iId?a+=e.url.edit:a+=e.url.add,i.iLowerDeposit=i.iLowerDeposit?i.iLowerDeposit.toString():"0",i.iOrderLimit=i.iOrderLimit?i.iOrderLimit.toString():"0",i.iDayLimit=i.iDayLimit?i.iDayLimit.toString():"0",i.iDay30TradeAmount=i.iDay30TradeAmount?i.iDay30TradeAmount.toString():"0",i.iArbitrationRate=i.iArbitrationRate?100*i.iArbitrationRate:0,i.iTradeRate=i.iTradeRate?100*i.iTradeRate:0,i.iAvgReleaseTime=i.iAvgReleaseTime?6e4*i.iAvgReleaseTime:0,i.iAdsReward=i.iAdsReward?(i.iAdsReward/100).toFixed(6):"0",i.iTradeCount=i.iTradeCount?i.iAdsReward:0;var o=Object.assign(e.model,i);Object(n["j"])(a,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}}),u=l,c=r("2877"),d=Object(c["a"])(u,i,a,!1,null,"2884209c",null);t["default"]=d.exports},"1b3c":function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var i=r("b65a"),a=r("0fea"),n=r("ca00"),o=r("2f62");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(e,t,r){e.length;for(var i="",a=0;a<10;a++)i+="*";return e.substring(0,t)+i+e.substring(e.length-r)},d={},m={},f={mixins:[i["a"]],data:function(){return{resultName:"",isorter:{column:"iCreateTime",order:"desc"},result:null,spUrl:this.getSProtocols()}},methods:l({},Object(o["c"])(["getSProtocols","getCountry"]),{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var r=this.getQueryParams();this.loading=!0,Object(a["j"])(this.url.list,r).then((function(e){e.success?(t.result=e.result,e.result.data[t.resultName].length>0?(t.dataSource=t.initResDatas(e.result.data[t.resultName]),t.ipagination.total=e.result.data.iTotalCount||e.result.data.total):t.dataSource=[]):t.$message.error(e.message)})).finally((function(){t.loading=!1}))}else this.$message.error("请设置url.list属性!")},searchQuery:function(){this.verifiedParams()&&this.loadData(1)},verifiedParams:function(){return!0},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.iPageNo=this.ipagination.current-1,t.iPageSize=this.ipagination.pageSize,t.sOrder=t.order,t.sColumn=t.column,delete t.order,delete t.column,Object(n["d"])(t)},handleDelete:function(e,t){var r=this;if(this.url.delete){this.loading=!0;var i=t||"iId";Object(a["j"])(this.url.delete,u({},i,e)).then((function(e){e.success?(r.$message.success(e.message),r.loadData()):(r.$message.warning(e.message),r.loading=!1)}))}else this.$message.error("请设置url.delete属性!")},initResDatas:function(e){return e},sPrAddres:function(e,t){var r=d||[],i="",a=!0,n=!1,o=void 0;try{for(var s,l=r[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var u=s.value;u.sChain==e&&(i="sAddressQueryUrl"==t?u.sAddressQueryUrl:u.sTxQueryUrl)}}catch(c){n=!0,o=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return i}}),filters:{btcNum:function(e){if(!e)return"-";var t=c(e,5,5);return t},sProtocolUrl:function(e){var t=d||[],r={},i=!0,a=!1,n=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var l=o.value;l.sProtocol==e&&(r=l.data)}}catch(u){a=!0,n=u}finally{try{i||null==s.return||s.return()}finally{if(a)throw n}}return r[0]},countryVal:function(e){if(!e)return"暂无数据";var t="iId无对应国家",r=!0,i=!1,a=void 0;try{for(var n,o=m[Symbol.iterator]();!(r=(n=o.next()).done);r=!0){var s=n.value;s.iId==e&&(t=s.sCountryName)}}catch(l){i=!0,a=l}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return t}},created:function(){m=this.getCountry(),d=this.spUrl}}},"88bc":function(e,t,r){(function(t){var r=1/0,i=9007199254740991,a="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function m(e,t){var r=-1,i=e?e.length:0,a=Array(i);while(++r<i)a[r]=t(e[r],r,e);return a}function f(e,t){var r=-1,i=t.length,a=e.length;while(++r<i)e[a+r]=t[r];return e}var h=Object.prototype,p=h.hasOwnProperty,b=h.toString,g=c.Symbol,v=h.propertyIsEnumerable,y=g?g.isConcatSpreadable:void 0,w=Math.max;function R(e,t,r,i,a){var n=-1,o=e.length;r||(r=D),a||(a=[]);while(++n<o){var s=e[n];t>0&&r(s)?t>1?R(s,t-1,r,i,a):f(a,s):i||(a[a.length]=s)}return a}function A(e,t){return e=Object(e),C(e,t,(function(t,r){return r in e}))}function C(e,t,r){var i=-1,a=t.length,n={};while(++i<a){var o=t[i],s=e[o];r(s,o)&&(n[o]=s)}return n}function O(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var r=arguments,i=-1,a=w(r.length-t,0),n=Array(a);while(++i<a)n[i]=r[t+i];i=-1;var o=Array(t+1);while(++i<t)o[i]=r[i];return o[t]=n,d(e,this,o)}}function D(e){return T(e)||S(e)||!!(y&&e&&e[y])}function L(e){if("string"==typeof e||Q(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function S(e){return x(e)&&p.call(e,"callee")&&(!v.call(e,"callee")||b.call(e)==a)}var T=Array.isArray;function j(e){return null!=e&&k(e.length)&&!P(e)}function x(e){return N(e)&&j(e)}function P(e){var t=I(e)?b.call(e):"";return t==n||t==o}function k(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=i}function I(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function N(e){return!!e&&"object"==typeof e}function Q(e){return"symbol"==typeof e||N(e)&&b.call(e)==s}var $=O((function(e,t){return null==e?{}:A(e,m(R(t,1),L))}));e.exports=$}).call(this,r("c8ba"))},c9b0:function(e,t,r){},f5d5:function(e,t,r){"use strict";var i=r("c9b0"),a=r.n(i);a.a}}]);