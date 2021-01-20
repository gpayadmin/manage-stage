(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-326d4188","chunk-5c84697c"],{"169b":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:500,visible:t.visible,confirmLoading:t.confirmLoading,cancelText:"关闭"},on:{ok:t.handleOk,cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"提币费率(%)",hasFeedback:""}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iWithdrawFee",t.validatorRules.iWithdrawFee],expression:"['iWithdrawFee', validatorRules.iWithdrawFee]"}],staticStyle:{width:"100%"},attrs:{placeholder:"提币费率",min:0,max:100,step:1}})],1),i("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"最小提币数量",hasFeedback:""}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["dMinWithdrawAmount",t.validatorRules.dMinWithdrawAmount],expression:"['dMinWithdrawAmount', validatorRules.dMinWithdrawAmount]"}],staticStyle:{width:"100%"},attrs:{placeholder:"最小提币数量",min:0},on:{change:function(e){return t.dMinWithdrawAmount=e}}})],1),i("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"基础提币限额(24小时内)",hasFeedback:""}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["i24HMaxWithdraw1",t.validatorRules.i24HMaxWithdraw1],expression:"['i24HMaxWithdraw1', validatorRules.i24HMaxWithdraw1]"}],staticStyle:{width:"100%"},attrs:{placeholder:"基础提币限额(24小时内)",min:0},on:{change:function(e){return t.i24HMaxWithdraw1=e}}})],1),i("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"初级认证提币限额(24小时内)",hasFeedback:""}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["i24HMaxWithdraw2",t.validatorRules.i24HMaxWithdraw2],expression:"['i24HMaxWithdraw2', validatorRules.i24HMaxWithdraw2]"}],staticStyle:{width:"100%"},attrs:{placeholder:"初级认证提币限额(24小时内)",min:0},on:{change:function(e){return t.i24HMaxWithdraw2=e}}})],1),i("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"高级认证提币限额(24小时内)",hasFeedback:""}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["i24HMaxWithdraw3",t.validatorRules.i24HMaxWithdraw3],expression:"['i24HMaxWithdraw3', validatorRules.i24HMaxWithdraw3]"}],staticStyle:{width:"100%"},attrs:{placeholder:"高级认证提币限额(24小时内)",min:0},on:{change:function(e){return t.i24HMaxWithdraw3=e}}})],1)],1)],1)],1)},a=[],n=i("0fea"),o=i("88bc"),s=i.n(o),l=i("c1df"),u=i.n(l),d={name:"TokenManageModal",data:function(){return{title:"操作",visible:!1,model:{},dMinWithdrawAmount:null,i24HMaxWithdraw1:null,i24HMaxWithdraw2:null,i24HMaxWithdraw3:null,labelCol:{xs:{span:24},sm:{span:12}},wrapperCol:{xs:{span:24},sm:{span:12}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{iWithdrawConfirmations:{rules:[{required:!0,message:"",type:"number"}]},iDepositConfirmations:{rules:[{required:!0,message:"",type:"number"}]},iWithdrawFee:{rules:[{required:!0,message:"",type:"number"}]},dMinWithdrawAmount:{rules:[{required:!0,message:"",type:"number"},{validator:this.handleVerifyMinWithdrawAmount}]},i24HMaxWithdraw1:{rules:[{required:!0,message:"",type:"number"},{validator:this.handleVerifyMaxWithdrawAmount}]},i24HMaxWithdraw2:{rules:[{required:!0,message:"",type:"number"},{validator:this.handleVerifyMaxWithdrawAmount2}],validateFirst:!0},i24HMaxWithdraw3:{rules:[{required:!0,message:"",type:"number"},{validator:this.handleVerifyMaxWithdrawAmount3}]}},url:{edit:"/v1/core/UpdateToken",UpdateWithdrawLimit:"/v1/core/UpdateWithdrawLimit"},lockVerify:!1}},created:function(){},methods:{add:function(){this.edit({})},edit:function(t){var e=this;this.form.resetFields(),this.model=Object.assign({},t),this.model.iWithdrawFee=100*Number(this.model.iWithdrawFee),this.dMinWithdrawAmount=this.model.dMinWithdrawAmount=Number(this.model.dMinWithdrawAmount),this.i24HMaxWithdraw1=this.model.i24HMaxWithdraw1=Number(this.model.i24HMaxWithdraw1),this.i24HMaxWithdraw2=this.model.i24HMaxWithdraw2=Number(this.model.i24HMaxWithdraw2),this.i24HMaxWithdraw3=this.model.i24HMaxWithdraw3=Number(this.model.i24HMaxWithdraw3),this.visible=!0,this.$nextTick((function(){e.form.setFieldsValue(s()(e.model,"iWithdrawFee","dMinWithdrawAmount","i24HMaxWithdraw1","i24HMaxWithdraw2","i24HMaxWithdraw3")),e.form.setFieldsValue({punchTime:e.model.punchTime?u()(e.model.punchTime,"YYYY-MM-DD HH:mm:ss"):null}),e.form.setFieldsValue({birthday:e.model.birthday?u()(e.model.birthday):null})}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var t=this,e=this;this.form.validateFields((function(i,r){if(!i){e.confirmLoading=!0;var a="post",o={sChain:t.model.sChain,sToken:t.model.sToken,i24HMaxWithdraw1:r.i24HMaxWithdraw1.toString(),i24HMaxWithdraw2:r.i24HMaxWithdraw2.toString(),i24HMaxWithdraw3:r.i24HMaxWithdraw3.toString(),i24HMaxWithdraw4:"100000",iWithdrawFee:(r.iWithdrawFee/100).toString(),dMinWithdrawAmount:r.dMinWithdrawAmount.toString()};Object(n["i"])(t.url.UpdateWithdrawLimit,o,a).then((function(t){t.success?(e.$message.success(t.message),e.$emit("ok")):e.$message.warning(t.message)})).finally((function(){e.confirmLoading=!1,e.close()}))}}))},handleCancel:function(){this.close()},handleVerifyMinWithdrawAmount:function(t,e,i){this.i24HMaxWithdraw1>0&&e>this.i24HMaxWithdraw1&&i(new Error("最小提币数量不能大于基础提币限额！")),this.toVerify(),i()},handleVerifyMaxWithdrawAmount:function(t,e,i){this.i24HMaxWithdraw2>0&&e>this.i24HMaxWithdraw2&&i(new Error("基础提币限额不能大于初级认证提币限额！")),this.toVerify(),i()},handleVerifyMaxWithdrawAmount2:function(t,e,i){this.i24HMaxWithdraw3>0&&e>this.i24HMaxWithdraw3&&i(new Error("初级认证提币限额不能大于高级认证提币限额！")),this.toVerify(),i()},handleVerifyMaxWithdrawAmount3:function(t,e,i){this.i24HMaxWithdraw2>0&&e<this.i24HMaxWithdraw2&&i(new Error("高级认证提币限额不能小于初级认证提币限额！")),this.toVerify(),i()},toVerify:function(){var t=this;this.lockVerify?setTimeout((function(){t.lockVerify=!1}),100):(this.lockVerify=!0,this.form.validateFields())}}},c=d,h=i("2877"),m=Object(h["a"])(c,r,a,!1,null,"7ab6a2a3",null);e["default"]=m.exports},"174f":function(t,e,i){},"1b3c":function(t,e,i){"use strict";i.d(e,"a",(function(){return m}));var r=i("b65a"),a=i("0fea"),n=i("ca00"),o=i("2f62");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d=function(t,e,i){t.length;for(var r="",a=0;a<10;a++)r+="*";return t.substring(0,e)+r+t.substring(t.length-i)},c={},h={},m={mixins:[r["a"]],data:function(){return{resultName:"",isorter:{column:"iCreateTime",order:"desc"},result:null,spUrl:this.getSProtocols()}},methods:l({},Object(o["c"])(["getSProtocols","getCountry"]),{loadData:function(t){var e=this;if(this.url.list){1===t&&(this.ipagination.current=1);var i=this.getQueryParams();this.loading=!0,Object(a["j"])(this.url.list,i).then((function(t){t.success?(e.result=t.result,e.dataSource=e.initResDatas(t.result.data[e.resultName]),e.ipagination.total=t.result.data.iTotalCount||t.result.data.total):e.$message.error(t.message)})).finally((function(){e.loading=!1}))}else this.$message.error("请设置url.list属性!")},searchQuery:function(){this.verifiedParams()&&this.loadData(1)},verifiedParams:function(){return!0},getQueryParams:function(){var t={};this.superQueryParams&&(t["superQueryParams"]=encodeURI(this.superQueryParams),t["superQueryMatchType"]=this.superQueryMatchType);var e=Object.assign(t,this.queryParam,this.isorter,this.filters);return e.iPageNo=this.ipagination.current-1,e.iPageSize=this.ipagination.pageSize,e.sOrder=e.order,e.sColumn=e.column,delete e.order,delete e.column,Object(n["d"])(e)},handleDelete:function(t,e){var i=this;if(this.url.delete){this.loading=!0;var r=e||"iId";Object(a["j"])(this.url.delete,u({},r,t)).then((function(t){t.success?(i.$message.success(t.message),i.loadData()):(i.$message.warning(t.message),i.loading=!1)}))}else this.$message.error("请设置url.delete属性!")},initResDatas:function(t){return t},sPrAddres:function(t,e){var i=c||[],r="",a=!0,n=!1,o=void 0;try{for(var s,l=i[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var u=s.value;u.sChain==t&&(r="sAddressQueryUrl"==e?u.sAddressQueryUrl:u.sTxQueryUrl)}}catch(d){n=!0,o=d}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}}),filters:{btcNum:function(t){if(!t)return"-";var e=d(t,5,5);return e},sProtocolUrl:function(t){var e=c||[],i={},r=!0,a=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var l=o.value;l.sProtocol==t&&(i=l.data)}}catch(u){a=!0,n=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw n}}return i[0]},countryVal:function(t){if(!t)return"暂无数据";var e="iId无对应国家",i=!0,r=!1,a=void 0;try{for(var n,o=h[Symbol.iterator]();!(i=(n=o.next()).done);i=!0){var s=n.value;s.iId==t&&(e=s.sCountryName)}}catch(l){r=!0,a=l}finally{try{i||null==o.return||o.return()}finally{if(r)throw a}}return e}},created:function(){h=this.getCountry(),c=this.spUrl}}},"70e5":function(t,e,i){"use strict";var r=i("174f"),a=i.n(r);a.a},"88bc":function(t,e,i){(function(e){var i=1/0,r=9007199254740991,a="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,d=l||u||Function("return this")();function c(t,e,i){switch(i.length){case 0:return t.call(e);case 1:return t.call(e,i[0]);case 2:return t.call(e,i[0],i[1]);case 3:return t.call(e,i[0],i[1],i[2])}return t.apply(e,i)}function h(t,e){var i=-1,r=t?t.length:0,a=Array(r);while(++i<r)a[i]=e(t[i],i,t);return a}function m(t,e){var i=-1,r=e.length,a=t.length;while(++i<r)t[a+i]=e[i];return t}var f=Object.prototype,w=f.hasOwnProperty,p=f.toString,g=d.Symbol,b=f.propertyIsEnumerable,v=g?g.isConcatSpreadable:void 0,y=Math.max;function x(t,e,i,r,a){var n=-1,o=t.length;i||(i=C),a||(a=[]);while(++n<o){var s=t[n];e>0&&i(s)?e>1?x(s,e-1,i,r,a):m(a,s):r||(a[a.length]=s)}return a}function W(t,e){return t=Object(t),M(t,e,(function(e,i){return i in t}))}function M(t,e,i){var r=-1,a=e.length,n={};while(++r<a){var o=e[r],s=t[o];i(s,o)&&(n[o]=s)}return n}function S(t,e){return e=y(void 0===e?t.length-1:e,0),function(){var i=arguments,r=-1,a=y(i.length-e,0),n=Array(a);while(++r<a)n[r]=i[e+r];r=-1;var o=Array(e+1);while(++r<e)o[r]=i[r];return o[e]=n,c(t,this,o)}}function C(t){return O(t)||k(t)||!!(v&&t&&t[v])}function H(t){if("string"==typeof t||T(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}function k(t){return I(t)&&w.call(t,"callee")&&(!b.call(t,"callee")||p.call(t)==a)}var O=Array.isArray;function j(t){return null!=t&&A(t.length)&&!P(t)}function I(t){return F(t)&&j(t)}function P(t){var e=D(t)?p.call(t):"";return e==n||e==o}function A(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}function D(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function F(t){return!!t&&"object"==typeof t}function T(t){return"symbol"==typeof t||F(t)&&p.call(t)==s}var R=S((function(t,e){return null==t?{}:W(t,h(x(e,1),H))}));t.exports=R}).call(this,i("c8ba"))},e4bc:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-card",{attrs:{bordered:!1}},[i("div",{staticClass:"table-operator"},[i("a-button",{on:{click:function(e){return t.loadData()}}},[t._v("刷新")])],1),i("div",[i("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"iId",columns:t.columns,dataSource:t.dataSource,pagination:t.ipagination,loading:t.loading,rowSelection:null},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"iDepositSwitch",fn:function(e,r,a){return i("span",{},[i("a-switch",{attrs:{loading:r.depositSwitchLoading},on:{click:function(e){var i=arguments.length,a=Array(i);while(i--)a[i]=arguments[i];return t.depositSwitch(a.concat([r]))}},model:{value:r.iDepositSwitch,callback:function(e){t.$set(r,"iDepositSwitch",e)},expression:"record.iDepositSwitch"}})],1)}},{key:"iWithdrawSwitch",fn:function(e,r,a){return i("span",{},[i("a-switch",{attrs:{loading:r.withdrawSwitchLoading},on:{click:function(e){var i=arguments.length,a=Array(i);while(i--)a[i]=arguments[i];return t.withdrawSwitch(a.concat([r]))}},model:{value:r.iWithdrawSwitch,callback:function(e){t.$set(r,"iWithdrawSwitch",e)},expression:"record.iWithdrawSwitch"}})],1)}},{key:"action",fn:function(e,r){return i("span",{},[i("a",{on:{click:function(e){return t.handleEdit(r)}}},[t._v("充提配置")])])}}])})],1),i("token-manage-modal",{ref:"modalForm",on:{ok:t.modalFormOk}})],1)},a=[],n=i("169b"),o=i("8c6e"),s=i("4349"),l=i("89f2"),u=i("1b3c"),d=i("2b0e"),c=i("ca00"),h=i("0fea"),m=i("5a0c"),f=i.n(m),w={name:"TokenManage",mixins:[u["a"]],components:{TokenManageModal:n["default"],JSuperQuery:o["default"],JInput:s["default"]},data:function(){var t=this;return{description:"钱包币种管理",sexDictOptions:[],resultName:"vTokens",columns:[],settingColumns:[],defColumns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,i,r){return parseInt(r)+1+(t.ipagination.current-1)*t.ipagination.pageSize}},{title:"主链",align:"center",dataIndex:"sChain"},{title:"币种符号",align:"center",dataIndex:"sToken"},{title:"币种协议",align:"center",dataIndex:"sProtocol"},{title:"全称",align:"center",dataIndex:"sFullName"},{title:"充值开关",align:"center",dataIndex:"iDepositSwitch",scopedSlots:{customRender:"iDepositSwitch"}},{title:"提币开关",align:"center",dataIndex:"iWithdrawSwitch",scopedSlots:{customRender:"iWithdrawSwitch"}},{title:"充值确认数",align:"center",dataIndex:"iWithdrawConfirmations"},{title:"提币确认数",align:"center",dataIndex:"iDepositConfirmations"},{title:"最小提币数",align:"center",dataIndex:"dMinWithdrawAmount",customRender:function(t){return Number(t)}},{title:"提币费率(%)",align:"center",dataIndex:"iWithdrawFee",customRender:function(t){return 100*Number(t)+"%"}},{title:"基础提币限额\n(24小时内)",align:"center",dataIndex:"i24HMaxWithdraw1",customRender:function(t){return Number(t)}},{title:"初级认证提币限额\n(24小时内)",align:"center",dataIndex:"i24HMaxWithdraw2",customRender:function(t){return Number(t)}},{title:"高级认证提币限额\n(24小时内)",align:"center",dataIndex:"i24HMaxWithdraw3",customRender:function(t){return Number(t)}},{title:"更新时间",align:"center",dataIndex:"iUpdateTime",customRender:function(t){return f()(t).format("YYYY-MM-DD HH:mm")}},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"action"}}],url:{list:"/v1/core/GetTokenList",add:"",edit:"",depositSwitch:"/v1/core/SetDepositSwitch",withdrawSwitch:"/v1/core/SetWithdrawSwitch"}}},methods:{getQueryParams:function(){var t={};this.superQueryParams&&(t["superQueryParams"]=encodeURI(this.superQueryParams),t["superQueryMatchType"]=this.superQueryMatchType);var e=Object.assign(t,this.queryParam,this.isorter,this.filters);return e.field=this.getQueryField(),e.iPageNo=this.ipagination.current-1,e.iPageSize=this.ipagination.pageSize,e.sOrder=e.order,e.sColumn=e.column,delete e.order,delete e.column,Object(c["d"])(e)},initDictConfig:function(){var t=this;Object(l["d"])("sex").then((function(e){e.success&&(t.sexDictOptions=e.result)}))},onBirthdayChange:function(t,e){this.queryParam.birthday_begin=e[0],this.queryParam.birthday_end=e[1]},onColSettingsChange:function(t){var e=this,i=this.$route.name+":colsettings";d["default"].ls.set(i,t,6048e5),this.settingColumns=t;var r=this.defColumns.filter((function(t){return"rowIndex"==t.key||"action"==t.dataIndex||!!e.settingColumns.includes(t.dataIndex)}));this.columns=r},initColumns:function(){var t=this.$route.name+":colsettings",e=d["default"].ls.get(t);if(null==e||void 0==e){var i=[];this.defColumns.forEach((function(t,e,r){i.push(t.dataIndex)})),this.settingColumns=i,this.columns=this.defColumns}else{this.settingColumns=e;var r=this.defColumns.filter((function(t){return"rowIndex"==t.key||"action"==t.dataIndex||!!e.includes(t.dataIndex)}));this.columns=r}},depositSwitch:function(){var t=this,e=arguments[0][0],i=(arguments[0][1],arguments[0][2]);i.depositSwitchLoading=!0;var r={sChain:i.sChain,sToken:i.sToken,iStatus:e?1:0};Object(h["j"])(this.url.depositSwitch,r).then((function(r){r.success?(t.$message.success(r.message),i.depositSwitchLoading=!1):(t.$message.warning(r.message),i.iDepositSwitch=!e,i.depositSwitchLoading=!1)}))},withdrawSwitch:function(){var t=this,e=arguments[0][0],i=(arguments[0][1],arguments[0][2]);i.withdrawSwitchLoading=!0;var r={sChain:i.sChain,sToken:i.sToken,iStatus:e?1:0};Object(h["j"])(this.url.withdrawSwitch,r).then((function(r){r.success?(t.$message.success(r.message),i.withdrawSwitchLoading=!1):(t.$message.warning(r.message),i.iWithdrawSwitch=!e,i.withdrawSwitchLoading=!1)}))},initResDatas:function(t){return t.forEach((function(t){t.depositSwitchLoading=!1,t.withdrawSwitchLoading=!1,t.iDepositSwitch=1==t.iDepositSwitch,t.iWithdrawSwitch=1==t.iWithdrawSwitch})),t}},created:function(){this.initColumns()}},p=w,g=(i("70e5"),i("2877")),b=Object(g["a"])(p,r,a,!1,null,"1238f369",null);e["default"]=b.exports}}]);