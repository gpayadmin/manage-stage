(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4de05d68"],{"024d":function(e,t,s){},"47bb":function(e,t,s){"use strict";var a=s("024d"),r=s.n(a);r.a},"4e23":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:1!==e.model.iStatus}},maskClosable:!1,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[s("a-spin",{attrs:{spinning:e.confirmLoading}},[1!==e.model.iStatus?s("div",{staticStyle:{"margin-bottom":"32px"}},[s("a-descriptions",{attrs:{title:"审核信息",bordered:""}},[s("a-descriptions-item",{attrs:{label:"审核人",span:3}},[e._v("\n          "+e._s(e.model.sApprovalId)+"\n        ")]),s("a-descriptions-item",{attrs:{label:"理由",span:3}},[4===e.model.iStatus?[e._v(e._s(e.model.sRefuseReasonCode))]:[e._v(e._s(e.model.sRemark))]],2)],1)],1):e._e(),1===e.model.iStatus?s("a-form",{attrs:{form:e.form}},[s("a-form-item",[s("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["bIsSuccess",e.validatorRules.bIsSuccess],expression:"['bIsSuccess', validatorRules.bIsSuccess]"}],attrs:{"button-style":"solid"},on:{change:e.onChange}},[s("a-radio-button",{attrs:{value:!0}},[e._v("\n            通过\n          ")]),s("a-radio-button",{attrs:{value:!1}},[e._v("\n            拒绝\n          ")])],1)],1),e.bIsSuccess?s("a-form-item",{attrs:{label:"备注"}},[s("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["sRemark"],expression:"['sRemark']"}],attrs:{placeholder:"请输入备注(最多40个字)",maxLength:40,"auto-size":{minRows:4,maxRows:6},size:"large"}})],1):s("a-form-item",{attrs:{label:"拒绝理由"}},[s("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["sRefuseReasonCode",e.validatorRules.sRefuseReasonCode],expression:"['sRefuseReasonCode', validatorRules.sRefuseReasonCode]"}],attrs:{placeholder:"请输入拒绝理由(最多40个字)",maxLength:40,"auto-size":{minRows:4,maxRows:6},size:"large"}})],1)],1):e._e()],1)],1)},r=[],i=s("0fea"),n=s("2f62"),o=(s("88bc"),s("c1df"),s("6eb6")),c=s("46a6");function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function u(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){d(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function d(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var m={name:"ReviewModal",components:{Template1:c["default"],AdsAuthModal:o["default"]},props:{},data:function(){return{title:"审核",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{bIsSuccess:{rules:[{required:!0,type:"boolean"}],initialValue:!0},sRefuseReasonCode:{rules:[{required:!0,message:"请输入拒绝理由"}]}},url:{UserSheetApproval:"/v1/udc/UserSheetApproval"},bIsSuccess:!0}},computed:{},created:function(){},methods:u({},Object(n["c"])(["userInfo"]),{add:function(){this.edit({})},edit:function(e){this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(s,a){if(!s){t.confirmLoading=!0;var r="",n="post";r+=e.url.UserSheetApproval;var o={iId:e.model.iId,iUserId:e.model.iUserId,bIsSuccess:a.bIsSuccess,sRefuseReasonCode:a.sRefuseReasonCode||"",sRemark:a.sRemark||"",sApprovalId:e.userInfo().username};Object(i["i"])(r,o,n).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},onChange:function(e){this.bIsSuccess=e.target.value}})},f=m,p=s("2877"),b=Object(p["a"])(f,a,r,!1,null,"1633f9fd",null);t["default"]=b.exports},"6eb6":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1,destroyOnClose:!0,okButtonProps:{props:{disabled:"detail"===e.type}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[s("a-tabs",{attrs:{type:"card",defaultActiveKey:"3"}},[s("a-tab-pane",{key:"1",attrs:{tab:"初级认证"}},[s("div",{staticStyle:{"margin-bottom":"24px"}},[s("a-alert",{attrs:{message:"审核通过",description:e.certificateInfo.sRemark,type:"success","show-icon":""}})],1),s("a-descriptions",{attrs:{title:"初级认证信息"}},[s("a-descriptions-item",{attrs:{label:"国籍"}},[e._v("\n         "+e._s(e._f("countryVal")(e.certificateInfo.iCountryId))+"\n        ")]),s("a-descriptions-item",{attrs:{label:"姓名"}},[e._v("\n          "+e._s(e.certificateInfo.sSurname)+"， "+e._s(e.certificateInfo.sName)+"\n        ")]),s("a-descriptions-item",{attrs:{label:"证件号"}},[e._v("\n          "+e._s(e.certificateInfo.sCertificateNo)+"\n        ")]),s("a-descriptions-item",{attrs:{label:"手机号"}},[e._v("\n          "+e._s(e.certificateInfo.sCellphone)+"\n        ")]),s("a-descriptions-item",{attrs:{label:"邮箱"}},[e._v("\n          "+e._s(e.certificateInfo.sEmail)+"\n        ")]),s("a-descriptions-item",{attrs:{label:"申请时间"}},[e._v("\n          "+e._s(e.moment(e.certificateInfo.iCreateTime).format("YYYY-MM-DD HH:mm:ss"))+"\n        ")]),s("a-descriptions-item",{attrs:{label:"证件正面照"}},[s("div",{staticClass:"img-warp"},[s("img",{attrs:{src:e.sFrontImg,large:e.sFrontImg,preview:"1","preview-text":"证件正面照"}})])]),s("a-descriptions-item",{attrs:{label:"证件反面照"}},[s("div",{staticClass:"img-warp"},[s("img",{attrs:{src:e.sBackImg,large:e.sBackImg,preview:"1","preview-text":"证件反面照"}})])]),s("a-descriptions-item",{attrs:{label:"手持证件照"}},[s("div",{staticClass:"img-warp"},[s("img",{attrs:{src:e.sHandImg,large:e.sHandImg,preview:"1","preview-text":"手持证件照"}})])])],1)],1),s("a-tab-pane",{key:"2",attrs:{tab:"高级认证"}},[s("a-alert",{attrs:{message:"审核通过",description:e.liveCertificateInfo.sRemark,type:"success","show-icon":""}}),s("a-descriptions",{staticStyle:{"margin-top":"24px"},attrs:{title:"高级认证信息"}},[s("a-descriptions-item",{attrs:{label:"认证视频"}},[s("div",{staticClass:"video-warp"},[s("video",{attrs:{src:e.sOssVideo,alt:"avatar",controls:"controls"}})])])],1)],1),s("a-tab-pane",{key:"3",attrs:{tab:"广告认证"}},[2===e.authData.iStatus?s("div",[s("a-alert",{attrs:{message:"审核通过",description:e.authData.sRemark,type:"success","show-icon":""}})],1):e._e(),3===e.authData.iStatus?s("div",[s("a-alert",{attrs:{message:"审核驳回",description:e.authData.sRefuseReasonCode,type:"error","show-icon":""}})],1):e._e(),s("a-descriptions",{staticStyle:{"margin-top":"24px"},attrs:{title:"广告商认证信息"}},[s("a-descriptions-item",{attrs:{label:"联系电话"}},[e._v("\n          "+e._s(e.authData.sContactPhone)+"\n        ")]),s("a-descriptions-item",{attrs:{label:"微信"}},[e._v("\n          "+e._s(e.authData.sContactWechat)+"\n        ")]),s("a-descriptions-item",{attrs:{label:"联系邮箱"}},[e._v("\n          "+e._s(e.authData.sContactEmail)+"\n        ")]),s("a-descriptions-item",{attrs:{label:"紧急联系人"}},[e._v("\n          "+e._s(e.authData.sEmergentPerson)+"\n        ")]),s("a-descriptions-item",{attrs:{label:"紧急联系人电话"}},[e._v("\n          "+e._s(e.authData.sEmergentPhone)+"\n        ")]),s("a-descriptions-item",{attrs:{label:"与本人关系"}},[e._v("\n          "+e._s(e.authData.sEmergentRelation)+"\n        ")]),s("a-descriptions-item",{attrs:{label:"常驻地址"}},[e._v("\n          "+e._s(e.authData.sHomeAddress)+"\n        ")]),s("a-descriptions-item",{attrs:{label:"户口本"}},[s("div",{staticClass:"img-warp"},[s("img",{attrs:{src:e.sFamilyRegister,large:e.sFamilyRegister,preview:"1","preview-text":"户口本"}})])]),s("a-descriptions-item",{attrs:{label:"地址证明"}},[s("div",{staticClass:"img-warp"},[s("img",{attrs:{src:e.sHomeAddressProof,large:e.sHomeAddressProof,preview:"1","preview-text":"地址证明"}})])])],1),1===e.authData.iStatus?s("a-form",{staticStyle:{"margin-top":"24px"},attrs:{form:e.form}},[s("a-form-item",{staticStyle:{"margin-bottom":"0px"}},[s("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["bIsSuccess",e.validatorRules.bIsSuccess],expression:"['bIsSuccess', validatorRules.bIsSuccess]"}],attrs:{"button-style":"solid"},on:{change:function(t){return e.bIsSuccess=t.target.value}}},[s("a-radio-button",{attrs:{value:!0}},[e._v("\n              审核通过\n            ")]),s("a-radio-button",{attrs:{value:!1}},[e._v("\n              审核驳回\n            ")])],1)],1),e.bIsSuccess?s("a-form-item",{attrs:{label:"备注",hasFeedback:""}},[s("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["sRemark",e.validatorRules.sRemark],expression:"['sRemark', validatorRules.sRemark]"}],attrs:{placeholder:"请输入备注(最多40个字)",maxLength:40,"auto-size":{minRows:4,maxRows:6},size:"large"}})],1):e._e(),e.bIsSuccess?e._e():s("a-form-item",{attrs:{label:"驳回原因",hasFeedback:""}},[s("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["sRefuseReasonCode",e.validatorRules.sRefuseReasonCode],expression:"['sRefuseReasonCode', validatorRules.sRefuseReasonCode]"}],attrs:{placeholder:"请输入驳回原因(最多40个字)",maxLength:40,"auto-size":{minRows:4,maxRows:6},size:"large"}})],1)],1):e._e()],1)],1)],1)},r=[],i=s("5a0c"),n=s.n(i),o=s("0fea"),c=s("2f62"),l=s("303b"),u=s("d6ec");function d(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function m(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?d(Object(s),!0).forEach((function(t){f(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function f(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var p={name:"AdsAuthModal",mixins:[l["a"]],props:{type:String,authData:Object},data:function(){return{visible:!1,confirmLoading:!1,form:this.$form.createForm(this),bIsSuccess:!0,url:{ApplyAdsApproval:"/v1/udc/ApplyAdsApproval",GetCertificate:"/v1/udc/GetCertificate",GetLiveCertificate:"/v1/udc/GetLiveCertificate"},validatorRules:{bIsSuccess:{rules:[{required:!0,message:"请选择审核结果",type:"boolean"}],initialValue:!0},sRemark:{rules:[{required:!0,message:"请输入备注"}]},sRefuseReasonCode:{rules:[{required:!0,message:"请输入驳回原因",whitespace:!0}]}},liveCertificateInfo:{},certificateInfo:{},sFrontImg:"",sBackImg:"",sHandImg:"",sOssVideo:"",sFamilyRegister:"",sHomeAddressProof:""}},computed:{title:function(){return"auth"===this.type?"广告商认证审核":"认证详情"}},created:function(){},methods:m({moment:n.a},Object(c["c"])(["userInfo"]),{handleOk:function(){var e=this;this.form.validateFields((function(t,s){if(!t){e.confirmLoading=!0;var a={iApplyId:e.authData.iId,bIsSuccess:e.bIsSuccess,iUserId:e.authData.iUserId,sApprovalId:e.userInfo().username};e.bIsSuccess?(a.sRemark=s.sRemark,a.sRefuseReasonCode=" "):(a.sRemark=" ",a.sRefuseReasonCode=s.sRefuseReasonCode),Object(o["j"])(e.url.ApplyAdsApproval,a).then((function(t){t.success?(e.$emit("ok"),e.$message.success("审核完成！"),e.handleCancel()):(e.$message.error(t.message),e.confirmLoading=!1)})).catch((function(){return e.confirmLoading=!1}))}}))},handleCancel:function(){this.confirmLoading=!1,this.sFrontImg="",this.sBackImg="",this.sHandImg="",this.sOssVideo="",this.sFamilyRegister="",this.sHomeAddressProof="",this.visible=!1},getData:function(e){var t=this;Object(o["j"])(this.url.GetLiveCertificate,{iUserId:e.iUserId}).then((function(e){t.liveCertificateInfo=e.result.data.stInfor,Object(u["a"])(t.liveCertificateInfo.sOssVideo).then((function(e){t.sOssVideo=e}))})),Object(o["j"])(this.url.GetCertificate,{iUserId:e.iUserId}).then((function(e){t.certificateInfo=e.result.data.stInfor,Object(u["a"])(t.certificateInfo.sFrontImg).then((function(e){t.sFrontImg=e})),Object(u["a"])(t.certificateInfo.sBackImg).then((function(e){t.sBackImg=e})),Object(u["a"])(t.certificateInfo.sHandImg).then((function(e){t.sHandImg=e}))})),Object(u["a"])(e.sFamilyRegister).then((function(e){t.sFamilyRegister=e})),Object(u["a"])(e.sHomeAddressProof).then((function(e){t.sHomeAddressProof=e}))}})},b=p,v=(s("47bb"),s("2877")),h=Object(v["a"])(b,a,r,!1,null,"1ebc1677",null);t["default"]=h.exports},"88bc":function(e,t,s){(function(t){var s=1/0,a=9007199254740991,r="[object Arguments]",i="[object Function]",n="[object GeneratorFunction]",o="[object Symbol]",c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,u=c||l||Function("return this")();function d(e,t,s){switch(s.length){case 0:return e.call(t);case 1:return e.call(t,s[0]);case 2:return e.call(t,s[0],s[1]);case 3:return e.call(t,s[0],s[1],s[2])}return e.apply(t,s)}function m(e,t){var s=-1,a=e?e.length:0,r=Array(a);while(++s<a)r[s]=t(e[s],s,e);return r}function f(e,t){var s=-1,a=t.length,r=e.length;while(++s<a)e[r+s]=t[s];return e}var p=Object.prototype,b=p.hasOwnProperty,v=p.toString,h=u.Symbol,g=p.propertyIsEnumerable,I=h?h.isConcatSpreadable:void 0,y=Math.max;function R(e,t,s,a,r){var i=-1,n=e.length;s||(s=C),r||(r=[]);while(++i<n){var o=e[i];t>0&&s(o)?t>1?R(o,t-1,s,a,r):f(r,o):a||(r[r.length]=o)}return r}function O(e,t){return e=Object(e),w(e,t,(function(t,s){return s in e}))}function w(e,t,s){var a=-1,r=t.length,i={};while(++a<r){var n=t[a],o=e[n];s(o,n)&&(i[n]=o)}return i}function j(e,t){return t=y(void 0===t?e.length-1:t,0),function(){var s=arguments,a=-1,r=y(s.length-t,0),i=Array(r);while(++a<r)i[a]=s[t+a];a=-1;var n=Array(t+1);while(++a<t)n[a]=s[a];return n[t]=i,d(e,this,n)}}function C(e){return k(e)||S(e)||!!(I&&e&&e[I])}function _(e){if("string"==typeof e||H(e))return e;var t=e+"";return"0"==t&&1/e==-s?"-0":t}function S(e){return A(e)&&b.call(e,"callee")&&(!g.call(e,"callee")||v.call(e)==r)}var k=Array.isArray;function x(e){return null!=e&&D(e.length)&&!P(e)}function A(e){return L(e)&&x(e)}function P(e){var t=F(e)?v.call(e):"";return t==i||t==n}function D(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function F(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){return!!e&&"object"==typeof e}function H(e){return"symbol"==typeof e||L(e)&&v.call(e)==o}var E=j((function(e,t){return null==e?{}:O(e,m(R(t,1),_))}));e.exports=E}).call(this,s("c8ba"))}}]);