(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47c83d9f","chunk-07c4174c","chunk-2da34175","chunk-2d0b5d97","chunk-2d0b5d97"],{1168:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-card",{attrs:{bordered:!1}},[e.showUserDetail||e.showRate?e._e():i("div",{staticClass:"table-page-search-wrapper"},[i("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[i("a-row",{attrs:{gutter:24}},[i("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[i("a-form-item",{attrs:{label:"昵称"}},[i("j-input",{attrs:{placeholder:"请输入昵称",type:"normal"},model:{value:e.queryParam.sNickName,callback:function(t){e.$set(e.queryParam,"sNickName",t)},expression:"queryParam.sNickName"}})],1)],1),i("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[i("a-form-item",{attrs:{label:"手机号"}},[i("j-input",{attrs:{placeholder:"请输入手机号",type:"normal"},model:{value:e.queryParam.sCellphone,callback:function(t){e.$set(e.queryParam,"sCellphone",t)},expression:"queryParam.sCellphone"}})],1)],1),i("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[i("a-form-item",{attrs:{label:"邮箱"}},[i("j-input",{attrs:{placeholder:"请输入邮箱",type:"normal"},model:{value:e.queryParam.sEmail,callback:function(t){e.$set(e.queryParam,"sEmail",t)},expression:"queryParam.sEmail"}})],1)],1),i("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[i("a-form-item",{attrs:{label:"证件号"}},[i("a-input",{attrs:{placeholder:"请输入证件号"},model:{value:e.queryParam.sCertificateNo,callback:function(t){e.$set(e.queryParam,"sCertificateNo",t)},expression:"queryParam.sCertificateNo"}})],1)],1),i("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[i("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[i("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),i("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),e.showUserDetail||e.showRate?e._e():i("div",[i("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"iUserId",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:null},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"iCreditLevel",fn:function(t,r){return i("span",{},[r.idEdit?i("span",{staticStyle:{display:"inline-block","margin-right":"8px"}},[i("a-select",{staticStyle:{width:"60px"},attrs:{defaultValue:Number(t)},on:{change:function(t){return e.changeLv=t}}},e._l(e.levels,(function(t,r){return 0!==t.iLevel?i("a-select-option",{key:r,attrs:{value:t.iLevel}},[e._v(e._s(t.iLevel))]):e._e()})),1)],1):i("span",{staticStyle:{display:"inline-block","margin-right":"8px"}},[e._v(e._s(t))]),r.idEdit?[i("a",{on:{click:function(t){r.idEdit=!1,e.dataSource=[].concat(e.dataSource)}}},[e._v("取消")]),i("a-divider",{attrs:{type:"vertical"}}),i("a",{on:{click:function(t){return e.changeLevel(r)}}},[e._v("保存")])]:i("a",{on:{click:function(t){r.idEdit=!0,e.changeLv=r.iCreditLevel,e.dataSource=[].concat(e.dataSource)}}},[e._v("修改")])],2)}},{key:"UID",fn:function(t,r){return i("span",{},[i("a",{on:{click:function(t){return e.showDetail(r)}}},[e._v(e._s(t))])])}},{key:"action",fn:function(t,r){return i("span",{},[i("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("设置合作规则")])])}},{key:"iPrivilegeDeposit",fn:function(t,r){return i("span",{},[i("a-switch",{attrs:{loading:r.iPrivilegeDepositLoading},on:{click:function(t){var i=arguments.length,a=Array(i);while(i--)a[i]=arguments[i];return e.iPrivilegeDepositSwitch(a.concat([r]))}},model:{value:r.iPrivilegeDeposit,callback:function(t){e.$set(r,"iPrivilegeDeposit",t)},expression:"record.iPrivilegeDeposit"}})],1)}},{key:"iPrivilegeWithdraw",fn:function(t,r){return i("span",{},[i("a-switch",{attrs:{loading:r.iPrivilegeWithdrawLoading},on:{click:function(t){var i=arguments.length,a=Array(i);while(i--)a[i]=arguments[i];return e.iPrivilegeWithdrawSwitch(a.concat([r]))}},model:{value:r.iPrivilegeWithdraw,callback:function(t){e.$set(r,"iPrivilegeWithdraw",t)},expression:"record.iPrivilegeWithdraw"}})],1)}},{key:"iTakingOrder",fn:function(t,r){return i("span",{},[1===t?i("div",{staticStyle:{color:"#1890FF"}},[i("a-badge",{attrs:{status:"processing"}}),e._v("\n            接单中\n          ")],1):e._e(),0===t?i("div",{staticStyle:{color:"#f5222d"}},[i("a-badge",{attrs:{status:"error"}}),e._v("\n            未接单\n          ")],1):e._e()])}}],null,!1,812427993)})],1),e.showUserDetail?i("user-info-detail",{attrs:{userType:2,userId:e.userData.iUserId},on:{back:function(t){e.showUserDetail=!1}}}):e._e(),e.showRate?i("acceptor-rating-records",{attrs:{userId:e.userData.iUserId},on:{back:function(t){e.showRate=!1}}}):e._e(),i("role-edit-modal",{ref:"modalForm",on:{ok:e.loadData}})],1)},a=[],n=i("1b3c"),s=i("ca00"),o=(i("89f2"),i("5a0c")),l=i.n(o),c=i("4349"),u=i("dd97"),d=i("7cbc"),m=i("0fea"),f=i("b920"),g={name:"AcceptorList",mixins:[n["a"]],components:{JInput:c["default"],UserInfoDetail:u["default"],AcceptorRatingRecords:d["default"],RoleEditModal:f["default"]},data:function(){var e=this;return{description:"承兑商列表",sexDictOptions:[],resultName:"vUserInfo",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(t,i,r){return parseInt(r)+1+(e.ipagination.current-1)*e.ipagination.pageSize}},{title:"UID",align:"center",dataIndex:"iUserId",scopedSlots:{customRender:"UID"}},{title:"昵称",align:"center",dataIndex:"sNickName",customRender:function(e,t,i){return e&&""!==e?e:"用户未设置"}},{title:"充值接单状态",align:"center",dataIndex:"iTakingOrder",scopedSlots:{customRender:"iTakingOrder"}},{title:"手机号",align:"center",dataIndex:"sCellphone"},{title:"邮箱",align:"center",dataIndex:"sEmail"},{title:"证件号",align:"center",dataIndex:"sCertificateNo"},{title:"奖励费率",align:"center",dataIndex:"iAwardRate",customRender:function(e,t,i){return e&&""!==e?100*Number(e)+" % ":""}},{title:"已冻结保证金",align:"center",dataIndex:"iDepositAmount",customRender:function(e,t,i){return e&&""!==e?Number(e)+" USDT ":""}},{title:"保证金要求",align:"center",dataIndex:"iDepositAmountConfig",customRender:function(e,t,i){return e&&""!==e?Number(e)+" USDT ":""}},{title:"单笔成交限额",align:"center",dataIndex:"iOrderLimitAmt",customRender:function(e,t,i){return e&&""!==e?Number(e)+" CNY ":""}},{title:"充值接单权限",align:"center",dataIndex:"iPrivilegeDeposit",scopedSlots:{customRender:"iPrivilegeDeposit"}},{title:"提现抢单权限",align:"center",dataIndex:"iPrivilegeWithdraw",scopedSlots:{customRender:"iPrivilegeWithdraw"}},{title:"创建时间",align:"center",dataIndex:"iCreateTime"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],settingColumns:[],defColumns:[],url:{list:"/v1/udc/GetUserExtList",SetUserPrivilege:"/v1/udc/SetUserPrivilege"},modalType:"",userData:{},showUserDetail:!1,showRate:!1,levels:[],changeLv:void 0}},methods:{getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.iPageNo=this.ipagination.current-1,t.iPageSize=this.ipagination.pageSize,t.sOrder=t.order,t.sColumn=t.column,t.iUserType=2,delete t.order,delete t.column,Object(s["d"])(t)},onCreateTimeChange:function(e,t){this.queryParam.iCreateTime_Begin=l()(t[0]).startOf("day").valueOf(),this.queryParam.iCreateTime_End=l()(t[1]).endOf("day").valueOf()},showDetail:function(e){this.userData=e,this.showUserDetail=!0},showRateDetail:function(e){this.userData=e,this.showRate=!0},initResDatas:function(e){return e.forEach((function(e){e.idEdit=!1,e.iPrivilegeDepositLoading=!1,e.iPrivilegeWithdrawLoading=!1,0==e.iPrivilege&&(e.iPrivilegeDeposit=!1,e.iPrivilegeWithdraw=!1),1==e.iPrivilege&&(e.iPrivilegeDeposit=!0,e.iPrivilegeWithdraw=!0),2==e.iPrivilege&&(e.iPrivilegeDeposit=!0,e.iPrivilegeWithdraw=!1),3==e.iPrivilege&&(e.iPrivilegeDeposit=!1,e.iPrivilegeWithdraw=!0)})),e},changeLevel:function(e){var t=this,i=e.iUserId;this.loading=!0;var r={iUserId:i,iCreditLevel:this.changeLv};Object(m["j"])("/v1/udc/SetCreditLevel",r).then((function(e){e.success?(t.$message.success("修改成功！"),t.loadData()):t.$message.error(e.message())})).finally((function(){t.loading=!1}))},iPrivilegeDepositSwitch:function(){var e,t=this,i=arguments[0][0],r=(arguments[0][1],arguments[0][2]);r.iPrivilegeDepositLoading=!0,e=i?0==r.iPrivilege?2:1:1==r.iPrivilege?3:0;var a={iUserId:r.iUserId,iPrivilege:e};Object(m["j"])(this.url.SetUserPrivilege,a).then((function(e){if(e.success){var a=i?"已启用该账户充值接单权限":"已冻结该账户充值接单权限";t.$message.success(a),t.loadData()}else t.$message.warning(e.message),r.iPrivilegeDepositLoading=!1,r.iPrivilegeDeposit=!i}))},iPrivilegeWithdrawSwitch:function(){var e,t=this,i=arguments[0][0],r=(arguments[0][1],arguments[0][2]);r.iPrivilegeWithdrawLoading=!0,e=i?0==r.iPrivilege?3:1:1==r.iPrivilege?2:0;var a={iUserId:r.iUserId,iPrivilege:e};Object(m["j"])(this.url.SetUserPrivilege,a).then((function(e){if(e.success){var a=i?"已启用该账户提现抢单权限":"已冻结该账户提现抢单权限";t.$message.success(a),t.loadData()}else t.$message.warning(e.message),r.iPrivilegeWithdrawLoading=!1,r.iPrivilegeWithdraw=!i}))}},created:function(){var e=this,t={iPageNo:0,iPageSize:1e3,sColumn:"iLevel",sOrder:"asc"};Object(m["j"])("/v1/otc/GetAdsConfigList",t).then((function(t){e.levels=t.result.data.vList}))}},h=g,p=i("2877"),v=Object(p["a"])(h,r,a,!1,null,"9e5b8e28",null);t["default"]=v.exports},"1b3c":function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var r=i("b65a"),a=i("0fea"),n=i("ca00"),s=i("2f62");function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var u=function(e,t,i){e.length;for(var r="",a=0;a<10;a++)r+="*";return e.substring(0,t)+r+e.substring(e.length-i)},d={},m={},f={mixins:[r["a"]],data:function(){return{resultName:"",isorter:{column:"iCreateTime",order:"desc"},result:null,spUrl:this.getSProtocols()}},methods:l({},Object(s["c"])(["getSProtocols","getCountry"]),{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var i=this.getQueryParams();this.loading=!0,Object(a["j"])(this.url.list,i).then((function(e){e.success?(t.result=e.result,e.result.data[t.resultName].length>0?(t.dataSource=t.initResDatas(e.result.data[t.resultName]),t.ipagination.total=e.result.data.iTotalCount||e.result.data.total):t.dataSource=[]):t.$message.error(e.message)})).finally((function(){t.loading=!1}))}else this.$message.error("请设置url.list属性!")},searchQuery:function(){this.verifiedParams()&&this.loadData(1)},verifiedParams:function(){return!0},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.iPageNo=this.ipagination.current-1,t.iPageSize=this.ipagination.pageSize,t.sOrder=t.order,t.sColumn=t.column,delete t.order,delete t.column,Object(n["d"])(t)},handleDelete:function(e,t){var i=this;if(this.url.delete){this.loading=!0;var r=t||"iId";Object(a["j"])(this.url.delete,c({},r,e)).then((function(e){e.success?(i.$message.success(e.message),i.loadData()):(i.$message.warning(e.message),i.loading=!1)}))}else this.$message.error("请设置url.delete属性!")},initResDatas:function(e){return e},sPrAddres:function(e,t){var i=d||[],r="",a=!0,n=!1,s=void 0;try{for(var o,l=i[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var c=o.value;c.sChain==e&&(r="sAddressQueryUrl"==t?c.sAddressQueryUrl:c.sTxQueryUrl)}}catch(u){n=!0,s=u}finally{try{a||null==l.return||l.return()}finally{if(n)throw s}}return r}}),filters:{btcNum:function(e){if(!e)return"-";var t=u(e,5,5);return t},sProtocolUrl:function(e){var t=d||[],i={},r=!0,a=!1,n=void 0;try{for(var s,o=t[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var l=s.value;l.sProtocol==e&&(i=l.data)}}catch(c){a=!0,n=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw n}}return i[0]},countryVal:function(e){if(!e)return"暂无数据";var t="iId无对应国家",i=!0,r=!1,a=void 0;try{for(var n,s=m[Symbol.iterator]();!(i=(n=s.next()).done);i=!0){var o=n.value;o.iId==e&&(t=o.sCountryName)}}catch(l){r=!0,a=l}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return t}},created:function(){m=this.getCountry(),d=this.spUrl}}},"556f":function(e,t,i){},"7cbc":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-card",{attrs:{bordered:!1}},[i("div",{staticClass:"table-operator"},[i("a-button",{staticStyle:{"margin-bottom":"24px"},on:{click:function(t){return e.$emit("back")}}},[e._v("返回")])],1),i("div",[i("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"iId",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:null},on:{change:e.handleTableChange}})],1)])},a=[],n=i("8c6e"),s=i("4349"),o=i("89f2"),l=i("1b3c"),c=i("2b0e"),u=i("ca00"),d=(i("0fea"),i("5a0c")),m=i.n(d),f={name:"AcceptorRatingRecords",mixins:[l["a"]],props:{userId:Number},components:{JSuperQuery:n["default"],JInput:s["default"]},data:function(){var e=this;return{description:"广告商评级记录",sexDictOptions:[],resultName:"vList",columns:[],settingColumns:[],defColumns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(t,i,r){return parseInt(r)+1+(e.ipagination.current-1)*e.ipagination.pageSize}},{title:"当前等级",align:"center",dataIndex:"iLevelNew",customRender:function(e,t,i){return"Lv"+e}},{title:"评级前等级",align:"center",dataIndex:"iLevelHis",customRender:function(e,t,i){return"Lv"+e}},{title:"评级类型",align:"center",dataIndex:"type",customRender:function(e,t,i){return t.iLevelNew>t.iLevelHis?"升级":"降级"}},{title:"评级时间",align:"center",dataIndex:"iCreateTime",customRender:function(e,t,i){return m()(e).format("YYYY-MM-DD")}},{title:"保证金",align:"center",dataIndex:"iLowerDepositNew",customRender:function(e,t,i){return Number(e)}},{title:"近30天交易量(CNY)",align:"center",dataIndex:"iDay30TradeAmountNew",customRender:function(e,t,i){return Number(e)}},{title:"平均放币时间",align:"center",dataIndex:"iAvgReleaseTimeNew",customRender:function(e,t,i){var r=parseInt(e/1e3);return parseInt(r/60)+"分钟"+r%60+"秒"}},{title:"总成交单数(单)",align:"center",dataIndex:"iTradeCountNew",customRender:function(e,t,i){return e}},{title:"成交率",align:"center",dataIndex:"iTradeRateNew",customRender:function(e,t,i){return Number(e)/100+"%"}}],url:{list:"/v1/otc/GetAdsLevelRecordList"}}},methods:{getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.iPageNo=this.ipagination.current-1,t.iPageSize=this.ipagination.pageSize,t.sOrder=t.order,t.sColumn=t.column,t.iUserId=this.userId,delete t.order,delete t.column,Object(u["d"])(t)},initDictConfig:function(){var e=this;Object(o["d"])("sex").then((function(t){t.success&&(e.sexDictOptions=t.result)}))},onColSettingsChange:function(e){var t=this,i=this.$route.name+":colsettings";c["default"].ls.set(i,e,6048e5),this.settingColumns=e;var r=this.defColumns.filter((function(e){return"rowIndex"==e.key||"action"==e.dataIndex||!!t.settingColumns.includes(e.dataIndex)}));this.columns=r},initColumns:function(){var e=this.$route.name+":colsettings",t=c["default"].ls.get(e);if(null==t||void 0==t){var i=[];this.defColumns.forEach((function(e,t,r){i.push(e.dataIndex)})),this.settingColumns=i,this.columns=this.defColumns}else{this.settingColumns=t;var r=this.defColumns.filter((function(e){return"rowIndex"==e.key||"action"==e.dataIndex||!!t.includes(e.dataIndex)}));this.columns=r}}},created:function(){this.initColumns()}},g=f,h=(i("c2d4"),i("2877")),p=Object(h["a"])(g,r,a,!1,null,"6b4799d3",null);t["default"]=p.exports},"88bc":function(e,t,i){(function(t){var i=1/0,r=9007199254740991,a="[object Arguments]",n="[object Function]",s="[object GeneratorFunction]",o="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function d(e,t,i){switch(i.length){case 0:return e.call(t);case 1:return e.call(t,i[0]);case 2:return e.call(t,i[0],i[1]);case 3:return e.call(t,i[0],i[1],i[2])}return e.apply(t,i)}function m(e,t){var i=-1,r=e?e.length:0,a=Array(r);while(++i<r)a[i]=t(e[i],i,e);return a}function f(e,t){var i=-1,r=t.length,a=e.length;while(++i<r)e[a+i]=t[i];return e}var g=Object.prototype,h=g.hasOwnProperty,p=g.toString,v=u.Symbol,y=g.propertyIsEnumerable,b=v?v.isConcatSpreadable:void 0,w=Math.max;function P(e,t,i,r,a){var n=-1,s=e.length;i||(i=O),a||(a=[]);while(++n<s){var o=e[n];t>0&&i(o)?t>1?P(o,t-1,i,r,a):f(a,o):r||(a[a.length]=o)}return a}function x(e,t){return e=Object(e),C(e,t,(function(t,i){return i in e}))}function C(e,t,i){var r=-1,a=t.length,n={};while(++r<a){var s=t[r],o=e[s];i(o,s)&&(n[s]=o)}return n}function D(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var i=arguments,r=-1,a=w(i.length-t,0),n=Array(a);while(++r<a)n[r]=i[t+r];r=-1;var s=Array(t+1);while(++r<t)s[r]=i[r];return s[t]=n,d(e,this,s)}}function O(e){return k(e)||S(e)||!!(b&&e&&e[b])}function I(e){if("string"==typeof e||T(e))return e;var t=e+"";return"0"==t&&1/e==-i?"-0":t}function S(e){return A(e)&&h.call(e,"callee")&&(!y.call(e,"callee")||p.call(e)==a)}var k=Array.isArray;function R(e){return null!=e&&L(e.length)&&!j(e)}function A(e){return U(e)&&R(e)}function j(e){var t=N(e)?p.call(e):"";return t==n||t==s}function L(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function N(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function U(e){return!!e&&"object"==typeof e}function T(e){return"symbol"==typeof e||U(e)&&p.call(e)==o}var _=D((function(e,t){return null==e?{}:x(e,m(P(t,1),I))}));e.exports=_}).call(this,i("c8ba"))},b920:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:500,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[i("a-spin",{attrs:{spinning:e.confirmLoading}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"保证金要求(USDT)",hasFeedback:""}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iDepositAmount",e.validatorRules.iDepositAmount],expression:"['iDepositAmount', validatorRules.iDepositAmount]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入保证金要求",min:0}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"奖励费率(%)",hasFeedback:""}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iAwardRate",e.validatorRules.iAwardRate],expression:"['iAwardRate', validatorRules.iAwardRate]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入奖励费率",min:0}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"每单限额(单位:USDT)",hasFeedback:""}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iOrderLimitAmt",e.validatorRules.iOrderLimitAmt],expression:"['iOrderLimitAmt', validatorRules.iOrderLimitAmt]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入每单限额",min:0}})],1)],1)],1)],1)},a=[],n=i("0fea"),s=i("88bc"),o=i.n(s),l=(i("c1df"),{name:"TokenManageModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:12}},wrapperCol:{xs:{span:24},sm:{span:12}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{iAwardRate:{rules:[{required:!0,message:"",type:"number"}]},iDepositAmount:{rules:[{required:!0,message:"",type:"number"}]},iOrderLimitAmt:{rules:[{required:!0,message:"",type:"number"}]}},url:{add:"/v1/udc/SetAdsExtInfor",edit:"/v1/udc/SetAdsExtInfor"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.model.iDepositAmount=Number(this.model.iDepositAmountConfig),this.model.iOrderLimitAmt=Number(this.model.iOrderLimitAmt),this.model.iAwardRate=this.model.iAwardRate?100*Number(this.model.iAwardRate):0,this.$nextTick((function(){t.form.setFieldsValue(o()(t.model,"iDepositAmountConfig","iOrderLimitAmt","iAwardRate","iDepositAmount"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(i,r){if(!i){t.confirmLoading=!0;var a="";a+=e.url.edit,r.iDepositAmount=r.iDepositAmount?r.iDepositAmount.toString():"0",r.iOrderLimitAmt=r.iOrderLimitAmt?r.iOrderLimitAmt.toString():"0",r.iAwardRate=r.iAwardRate?(r.iAwardRate/100).toFixed(6):"0";var s=Object.assign({iUserId:e.model.iUserId},r);Object(n["j"])(a,s).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}}),c=l,u=i("2877"),d=Object(u["a"])(c,r,a,!1,null,"1f2d58e4",null);t["default"]=d.exports},c2d4:function(e,t,i){"use strict";var r=i("556f"),a=i.n(r);a.a}}]);